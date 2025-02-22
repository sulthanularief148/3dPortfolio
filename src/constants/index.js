import { color } from "framer-motion";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  threejs,
  xerago,
  zealzoft,
  zealscreenshot,
  flipkart,
  effortz_logo,
  stratavision,
  ariefshopping,
  merxsea,
  hextech,
  makemytrip,
  ecommercemern,
  grocery,
  swiggy,
  tindog
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "achievements",
    title: "Achievement",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Databases",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Xerago",
    icon: xerago,
    iconBg: "#383E56",
    date: "Mar 2022 - Sep 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Xerago",
    icon: xerago,
    iconBg: "#383E56",
    date: "Sep 2022 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Zeal Zoft",
    icon: zealzoft,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Zeal Zoft",
    icon: zealzoft,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Effortz Solution",
    icon: effortz_logo,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Present",
    points: [
      "Worked with Centralized Monitoring System (CMS) project from February to May 2024, creating REST APIs using Java.",
      "Working with OTAR project from June 2024 to present, developing UI using Angular.",
      "Developed dynamic web applications using Angular, React, and Java.",
      "Created RESTful APIs with Java and integrated APIs in Angular."

    ],
  },
];

const projects = [
  {
    name: "E-commerce Full Stack",
    description: `Developed a full-stack e-commerce platform with a frontend, backend, and admin panel. Integrated Razorpay, Stripe, and COD for payments, implemented secure authentication with JWT, and built a scalable architecture using React.js, Node.js, Express.js, and MongoDB.`,
    tags: [
      { name: "React js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
    ],
    image: ecommercemern,
    source_code_link: "https://mern-ecommerce-frontend-blush.vercel.app",
  },
  {
    name: "Grocery Landing Page",
    description: `Designed and developed a responsive grocery landing page with a modern UI using React.js and Tailwind CSS. Focused on performance, accessibility, and mobile-friendly layouts for an optimal user experience.`,
    tags: [
      { name: "React js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
    ],
    image: grocery,
    source_code_link: "https://grocery-flame.vercel.app/",
  },
  {
    name: "ZealZoft Corporate Website",
    description: `Developed an innovative corporate website for ZealZoft, integrating Three.js for immersive 3D effects. Built with React.js and Tailwind CSS, the website showcases a modern, interactive, and dynamic user experience.`,
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Three.js", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
    ],
    image: zealscreenshot,
    source_code_link: "https://zealzoft.com",
  },
  {
    name: "Flipkart Clone",
    description: `Built a feature-rich Flipkart clone, implementing an intuitive shopping experience with product listings, cart functionality, and user authentication. Developed with React.js, Material UI, Node.js, and MongoDB for a seamless e-commerce experience.`,
    tags: [
      { name: "React js", color: "blue-text-gradient" },
      { name: "Material UI", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
    ],
    image: flipkart,
    source_code_link: "https://sulthanularief148.github.io/Flipkart-Demo",
  },
  {
    name: "Stratavision",
    description: `Created a corporate website for Stratavision, emphasizing its role as a growth partner. Developed a responsive, user-friendly, and visually appealing platform using modern web technologies to enhance engagement and brand identity.`,
    tags: [
      { name: "React js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
    ],
    image: stratavision,
    source_code_link: "https://www.stratavision.in",
  },
  {
    name: "E-commerce Shopping",
    description: `Developed a front-end e-commerce shopping web app featuring dynamic product listings, cart management, and secure Stripe payments. Built with React.js, Redux Toolkit for state management, and Sanity CMS for backend content handling.`,
    tags: [
      { name: "React js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "Sanity", color: "green-text-gradient" },
    ],
    image: ariefshopping,
    source_code_link: "https://ariefshopping.vercel.app",
  },
  {
    name: "Merxsea - Oil and Gas",
    description: `Designed and developed a modern, interactive website for Merxsea, an oil and gas company. Implemented a project showcase section, enhancing user engagement through animations and smooth navigation with Framer Motion.`,
    tags: [
      { name: "React js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "Framer Motion", color: "green-text-gradient" },
    ],
    image: merxsea,
    source_code_link: "https://merxsea.com",
  },
  {
    name: "Hex Tech Ltd Website",
    description: `Developed a modern and responsive website for Hex Tech Ltd, a mobile store specializing in smartphones and accessories. Focused on intuitive UI, accessibility, and a seamless shopping experience using React.js and Tailwind CSS.`,
    tags: [
      { name: "React js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
    ],
    image: hextech,
    source_code_link: "https://hextechltd.com",
  },
  {
    name: "Make My Trip Clone UI",
    description: `Developed a front-end UI demo for Make My Trip, showcasing a modern travel booking interface. Built with React.js and Tailwind CSS to create a visually appealing, responsive, and interactive design.`,
    tags: [
      { name: "React js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
    ],
    image: makemytrip,
    source_code_link: "https://makemytrip-demoproject.vercel.app",
  },
  {
    name: "Swiggy Clone",
    description: `Developed a Swiggy Clone using Swiggy's live API, featuring a responsive and interactive front-end UI. Built with React.js and Tailwind CSS to provide a seamless food ordering experience with real-time data integration.`,
    tags: [
      { name: "React js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
    ],
    image: swiggy,
    source_code_link: "https://namaste-react-six-kappa.vercel.app",
  },
  {
    name: "Tindog Website",
    description: `Developed a single-page Tindog website using HTML, CSS, and Bootstrap. The website features a clean and responsive design, showcasing seamless navigation and engaging UI for connecting dog lovers.`,
    tags: [
      { name: "HTML", color: "orange-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "Bootstrap", color: "purple-text-gradient" }
    ],
    image: tindog,
    source_code_link: "https://tindog-xi-wine.vercel.app"
  }


];

export { services, technologies, experiences, projects };
