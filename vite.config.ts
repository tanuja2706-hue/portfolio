import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function assetSyncPlugin(): Plugin {
  return {
    name: 'asset-sync-plugin',
    configureServer(server) {
      server.middlewares.use('/api/sync-asset', (req, res) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const { filename, data } = JSON.parse(body);
              if (filename && data) {
                const base64Data = data.replace(/^data:image\/\w+;base64,/, '');
                const buffer = Buffer.from(base64Data, 'base64');
                const targetDir = path.resolve(__dirname, 'public/assets');
                if (!fs.existsSync(targetDir)) {
                  fs.mkdirSync(targetDir, { recursive: true });
                }
                const targetPath = path.join(targetDir, filename);
                fs.writeFileSync(targetPath, buffer);

                // Also copy to root of public/ for backward compatibility
                const rootPath = path.resolve(__dirname, 'public', filename);
                fs.writeFileSync(rootPath, buffer);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, path: `/assets/${filename}` }));
                return;
              }
            } catch (err) {
              console.error('Error saving asset:', err);
            }
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Invalid data' }));
          });
        } else {
          res.writeHead(405, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Method not allowed' }));
        }
      });
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), assetSyncPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
