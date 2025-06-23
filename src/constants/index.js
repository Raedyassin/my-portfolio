const navLinks = [  
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "My CV",
    link: "#cv",
  },
];

const toolSkills = [
  {
    name: "Git",
    imgPath: "/images/logos/git.svg",
  },
]
const databaseSkills = [
  {
    name: "MySQL",
    imgPath: "/images/logos/mysql.svg",
  },
  {
    name: "MongoDB",
    imgPath: "/images/logos/mongodb.svg",
  },
]
const backendSkills = [
  {
    name: "Node.Js",
    imgPath: "/images/logos/nodejs.png",
  },
  {
    name: "Express.Js",
    imgPath: "/images/logos/express.png",
  },
]
const frontendSkills = [
  {
    name: "Javascript",
    imgPath: "/images/logos/javascript.png",
  },
  {
    name: "React",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Redux",
    imgPath: "/images/logos/reduxp.png",
  },
  {
    name: "TailwindCSS",
    imgPath: "/images/logos/tailwindcss.png",
  },
  {
    name: "Framer Motion",
    imgPath: "/images/logos/framer-motion.webp",
  },
];

const socialImgs = [
  {
    name: "Github",
    imgPath: "/images/github.png",
    link: "https://github.com/Raedyassin",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/raed-yassin-26468621b/",
  },
];

const cvs = [
  {
    stack: ["Frontend","Developer"],
    link: "https://drive.google.com/file/d/11rQOKIohcgPe6_1DiReKws53w1V0hrNk/view?usp=sharing",
  },
  {
    stack: ["Full Stack","Developer"],
    link: "https://drive.google.com/file/d/1oXIy_NzEkq2A7N4-HoNLrF7rvG7ZRuzR/view?usp=sharing",
  },
]

const projectStacks = ["Frontend", "Backend"];

const frontendProjects = [
  {
    name: "BuySwift Ecommerce",
    gitHubLink: "https://github.com/Raedyassin/BuySwift-ecommerce-platform-MERN-",
    Technologies: ["React", "Redux/Toolkit", "TailwindCSS", "Framer Motion","paypal","react-slick","react-carousel","react-toastify"],
    pages: [
      "/images/projects/buySwift/BuySwift 1.png",
      "/images/projects/buySwift/BuySwift 2.png",
      "/images/projects/buySwift/BuySwift 3.png",
      "/images/projects/buySwift/BuySwift 4.png",
      "/images/projects/buySwift/BuySwift 5.png",
      "/images/projects/buySwift/BuySwift 6.png",
      "/images/projects/buySwift/BuySwift 7.png",
      "/images/projects/buySwift/BuySwift 8.png",
      "/images/projects/buySwift/BuySwift 9.png",
    ],
    description: "BuySwift is a responsive and user-friendly eCommerce platform designed to offer a seamless online shopping experience. The application allows users to browse products, manage their cart, place orders, and handle account settings, while administrators can manage inventory and orders through a dedicated dashboard",
    workedOn: [
      "Developed a fully responsive layout for desktop, tablet, and mobile devices",
      "Built dynamic product listing, filtering, and detail pages",
      "Implemented a shopping cart with real-time quantity and price updates",
      "Designed and connected user authentication and profile update flows",
      "Integrated the checkout process with payment gateway support (e.g., PayPal)",
      "Created interactive UI components for feedback and smooth transitions",
      "Ensured performance optimization and accessibility compliance",
      "Applied clean component-based architecture and state management"
    ]
  },
  {
    name: "Recipe App",
    gitHubLink: "https://github.com/Raedyassin/Food-SpoonacularAPI-React", // Replace with your actual repo link
    Technologies: [
      "React",
      "React Query",
      "Styled Components",
      "Framer Motion",
      "React Slider",
    ],
    pages: [
      "/images/projects/recipe/Recipe app 1.png",
      "/images/projects/recipe/Recipe app 2.png",
      "/images/projects/recipe/Recipe app 3.png",
      "/images/projects/recipe/Recipe app 4.png",
      "/images/projects/recipe/Recipe app 5.png",
    ],
    description:
      "Recipe App is a visually engaging and responsive food recipe application that allows users to explore a wide variety of dishes. Users can browse recipes across four different cuisines, view detailed cooking instructions, and watch related YouTube videos for step-by-step guidance.",
    workedOn: [
      "Built a responsive and animated UI using Styled Components and Framer Motion",
      "Fetched and cached recipe data using React Query and the Spoonacular API",
      "Created a category-based layout for four popular cuisines",
      "Developed detailed recipe pages with ingredients, instructions, and YouTube video integration",
      "Implemented a smooth image slider for recipes using React Slider",
      "Optimized loading and transitions for a better user experience",
      "Handled API loading states and errors for consistent user feedback"
    ]
  },
  {
    name: "Admin Dashboard (English/Arabic)",
    gitHubLink: "https://github.com/Raedyassin/ReactDashboard-arabic-english", // replace with your actual GitHub repo
    Technologies: [
      "React",
      "Sass",
      "React-i18next",
      "MUI",
      "Recharts"
    ],
    pages: [
      "/images/projects/admin dashboard/admin dashboard 1.png",
      "/images/projects/admin dashboard/admin dashboard 2.png",
      "/images/projects/admin dashboard/admin dashboard 3.png",
      "/images/projects/admin dashboard/admin dashboard 4.png",
      "/images/projects/admin dashboard/admin dashboard 5.png",
    ],
    description:
      "Admin Dashboard is a modern, responsive, and bilingual (Arabic/English) admin interface designed for managing product data and viewing key business metrics. The application includes dark mode support, language switching, and interactive visualizations for a smooth and insightful management experience.",
    workedOn: [
      "Built a clean, responsive admin interface using Material UI and Sass",
      "Integrated dark/light theme switching across the entire app",
      "Implemented Arabic and English language support using React-i18next with full RTL layout handling",
      "Designed a dashboard displaying key metrics such as revenue, active users, and recent transactions using Recharts",
      "Handled user-friendly navigation and layout for different screen sizes",
    ]
  }
];

const backendProjects = [
  {
    name: "BuySwift Ecommerce",
    gitHubLink: "https://github.com/Raedyassin/BuySwift-ecommerce-platform-MERN-",
    Technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcryptjs",
      "multer",
      "PayPal REST SDK",
    ],
    description:
      "BuySwift Backend is a robust and secure RESTful API built for powering the BuySwift eCommerce platform. It supports full product lifecycle management, secure user authentication, online payments via PayPal, and detailed order tracking with delivery status flow. Admins have dedicated routes to manage users, products, orders, and analytics, while users benefit from a seamless shopping experience including a favorites system.",
    workedOn: [
      "Structured RESTful API with modular routes, controllers, and models",
      "Handled authentication and authorization using JWT and bcrypt",
      "Integrated PayPal API and handled temporary payment states",
      "Implemented multi-stage order status system (Pending, Packed, Transit, Delivered)",
      "Built logic for favorites, cart, and reviews system",
      "Created dashboards for revenue, top products, and order status breakdown",
      "Secured file uploads with Multer "
      ]
    }
];



export {
  frontendSkills,
  backendSkills,
  databaseSkills,
  toolSkills,
  socialImgs,
  navLinks,
  cvs,
  projectStacks,
  frontendProjects,
  backendProjects,
};
