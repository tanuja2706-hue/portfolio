import { Project, SkillItem, ServiceItem, WhyWorkPoint } from '../types';

export const PERSONAL_INFO = {
  name: "Tanuja Bag",
  role: "Web Developer",
  tagline: "Building clean, responsive, and conversion-focused web solutions",
  education: "B.Tech in Computer Science Engineering",
  status: "Recent Graduate & Freelance Web Developer",
  email: "tanujabag265@gmail.com",
  github: "https://github.com/tanuja2706-hue",
  heroDescription: "I build responsive, user-friendly websites and e-commerce experiences with a focus on clean design, smooth functionality, and great user experience.",
  aboutParagraphs: [
    "I’m a B.Tech Computer Science Engineering graduate with a strong interest in building modern websites and e-commerce applications. I enjoy turning ideas and requirements into clean, responsive, and easy-to-use digital experiences.",
    "As a new freelance web developer, I’m focused on building practical projects, improving my development skills, and creating websites that balance visual design with functionality. I value clean implementation, attention to detail, and clear communication throughout a project."
  ]
};

export const SKILLS: SkillItem[] = [
  {
    name: "HTML",
    category: "core",
    description: "Semantic HTML5 structure, accessible markup (ARIA), SEO best practices, and clean document hierarchy."
  },
  {
    name: "CSS",
    category: "core",
    description: "Modern styling, Flexbox, Grid, custom styling architectures, transitions, and component-level layouts."
  },
  {
    name: "JavaScript",
    category: "core",
    description: "Modern ES6+ logic, DOM manipulation, asynchronous programming, event handling, and interactive UI states."
  },
  {
    name: "Python",
    category: "backend",
    description: "Object-oriented scripting, algorithmic problem solving, automated data routines, and backend logic fundamentals."
  },
  {
    name: "Java",
    category: "backend",
    description: "Object-oriented software development, strong typing discipline, modular architectures, and engineering principles."
  },
  {
    name: "Responsive Design",
    category: "frontend",
    description: "Mobile-first layouts, adaptive viewport breakpoints, fluid typography, and consistent touch-friendly UX."
  },
  {
    name: "API Integration",
    category: "backend",
    description: "Connecting RESTful APIs, parsing JSON payloads, handling asynchronous request lifecycles, and error states."
  },
  {
    name: "Front-End Development",
    category: "frontend",
    description: "Interactive client-side interfaces, modular component architecture, performance optimization, and cross-browser consistency."
  },
  {
    name: "Back-End Development",
    category: "backend",
    description: "Server architecture fundamentals, route handling, authentication flows, and data persistence management."
  },
  {
    name: "E-commerce Development",
    category: "specialized",
    description: "Online catalog structuring, cart state management, checkout flows, search filters, and conversion-oriented layouts."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "luxecart",
    name: "LuxeCart",
    type: "Personal E-commerce Project",
    description: "A modern responsive luxury e-commerce website featuring product browsing, categories, search, filters, wishlist, shopping cart, product details, and checkout flow.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    liveDemoUrl: "https://luxecart-minimalist-luxury-e-commerce.ai.studio",
    githubUrl: "https://github.com/tanuja2706-hue/luxecart-ecommerce",
    isLiveAvailable: true,
    isGithubAvailable: true,
    overview: "LuxeCart was created to explore high-end minimalist e-commerce design and complete user-journey architecture. It emphasizes typography, uncluttered product presentation, and fluid interaction states from browsing to final checkout.",
    features: [
      "Dynamic product catalog with multi-criteria category filtering",
      "Real-time interactive shopping bag with price and quantity calculations",
      "Persistent user wishlist feature for saving preferred items",
      "Dedicated product detail view with image gallery, specs, and stock feedback",
      "Responsive checkout flow with form validation and order summary"
    ],
    highlights: [
      "Mobile-first responsive layout tested across multiple screen resolutions",
      "Clean vanilla JavaScript architecture without heavy bloated dependencies",
      "High visual hierarchy tailored for premium lifestyle merchandise"
    ]
  },
  {
    id: "shopsense",
    name: "ShopSense",
    type: "Personal E-commerce Project",
    description: "An e-commerce product browsing interface designed with search, product listings, category navigation, filtering, and responsive layouts.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    liveDemoUrl: "https://shopsense.ai.studio",
    githubUrl: "https://github.com/tanuja2706-hue/shopsense-ecommerce",
    isLiveAvailable: true,
    isGithubAvailable: true,
    overview: "ShopSense focuses on fast, accessible product discovery. The application emphasizes quick search indexing, visual category navigation, and responsive grid layouts that adapt seamlessly from mobile screens to ultrawide desktop monitors.",
    features: [
      "Instant client-side search across product titles and tags",
      "Category-driven navigation with real-time active state indicators",
      "Multi-facet filtering by price range, availability, and rating",
      "Modular product card components with quick-view interactions",
      "Fluid grid system ensuring optimal card spacing on any screen size"
    ],
    highlights: [
      "Strict zero-lag filtering and instant UI feedback",
      "Clean CSS Grid and Flexbox implementation",
      "Accessible color contrast and keyboard navigable controls"
    ]
  },
  {
    id: "bistroorder",
    name: "BistroOrder",
    type: "Personal Food Ordering Project",
    description: "A responsive online food ordering interface with menu browsing, item selection, cart functionality, and a streamlined ordering experience.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    liveDemoUrl: "https://bistroorder-food-delivery.vercel.app",
    githubUrl: "https://github.com/tanuja2706-hue/bistroorder-food-delivery",
    isLiveAvailable: true,
    isGithubAvailable: true,
    overview: "BistroOrder is a dedicated online ordering prototype designed for artisanal restaurants. It streamlines the ordering pipeline so patrons can quickly browse curated menus, customize dish options, and review their cart in seconds.",
    features: [
      "Categorized food menu (Appetizers, Mains, Desserts, Beverages)",
      "Interactive dish customization modal (portion sizing, dietary tags)",
      "Floating order drawer with live subtotal, tax, and total summary",
      "Single-page checkout form with pickup or delivery options",
      "Responsive mobile-optimized interface with quick sticky bottom order action"
    ],
    highlights: [
      "Fast, thumb-friendly mobile ordering interface",
      "State-driven cart logic preventing duplicate entries",
      "Warm, modern culinary aesthetic with clean typography"
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "ecommerce-dev",
    title: "E-commerce Website Development",
    description: "Building complete, functional online storefronts with product browsing, shopping carts, intuitive category filters, and frictionless checkout flows.",
    deliverables: [
      "Full digital storefront setup",
      "Cart & checkout user journeys",
      "Product showcase & catalog design",
      "Cross-device mobile shopping experience"
    ],
    icon: "ShoppingBag"
  },
  {
    id: "responsive-dev",
    title: "Responsive Website Development",
    description: "Crafting mobile-friendly web pages that adjust gracefully across smartphones, tablets, laptops, and wide desktop displays without breaking layout.",
    deliverables: [
      "Fluid breakpoint implementation",
      "Touch-friendly navigation & buttons",
      "Fast loading on mobile connections",
      "Cross-browser testing (Chrome, Safari, Firefox, Edge)"
    ],
    icon: "Smartphone"
  },
  {
    id: "frontend-dev",
    title: "Front-End Development",
    description: "Developing modern, clean, and maintainable user interfaces using semantic HTML5, modern CSS, and JavaScript with smooth interactions.",
    deliverables: [
      "Clean and polished UI implementation",
      "Component-based clean code",
      "Interactive widgets & dynamic state",
      "Web accessibility (a11y) standards"
    ],
    icon: "Code2"
  },
  {
    id: "api-integration",
    title: "API Integration",
    description: "Connecting frontend interfaces to third-party services, RESTful endpoints, and backend databases for real-time dynamic data display.",
    deliverables: [
      "RESTful API data consumption",
      "Async loading & error handling states",
      "JSON parsing & structured data display",
      "Dynamic form submission handling"
    ],
    icon: "Layers"
  }
];

export const WHY_WORK_WITH_ME: WhyWorkPoint[] = [
  {
    title: "Clean and responsive development",
    description: "Code written with care, semantic markup, and thorough responsive testing across all device viewports.",
    detail: "I write clean, understandable code that is easy to maintain and scale. Your website will render reliably on phones, tablets, and desktops."
  },
  {
    title: "Attention to detail",
    description: "Consistent spacing, crisp typography, intuitive micro-interactions, and thorough error prevention.",
    detail: "From button hover feedback to form validation messages, I ensure every small element feels purposeful and finished."
  },
  {
    title: "User-focused design",
    description: "Prioritizing the visitor's journey with effortless navigation, fast page loads, and clear call-to-actions.",
    detail: "A website must be practical for users to navigate and convert. I design layouts that minimize friction and keep visitors engaged."
  },
  {
    title: "Clear communication",
    description: "Prompt progress updates, transparent timelines, and proactive questions to keep your project on track.",
    detail: "You will always know the exact status of your project. I value honesty, responsiveness, and straightforward technical collaboration."
  },
  {
    title: "Reliable project delivery",
    description: "Dedicated focus on agreed milestones, thorough testing before delivery, and prompt post-delivery support.",
    detail: "As an independent freelancer building my reputation, your satisfaction and successful delivery are my absolute top priorities."
  },
  {
    title: "Willingness to learn and adapt",
    description: "Quick grasp of new libraries, client tooling requirements, and custom technical constraints.",
    detail: "With a B.Tech Computer Science foundation, I pick up new frameworks, APIs, and workflows efficiently to meet your exact specifications."
  }
];
