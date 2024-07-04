import project3 from "../assets/projects/project-3.jpg";
import egygym from "../assets/projects/egygym.png";
import sugarCane from "../assets/projects/sugarCane.png";
import aplikasiPenjualan from "../assets/projects/project_aplikasi_penjualan.png";
import BengkelSherin from "../assets/projects/project_bengkel_sherin.png";

export const HERO_CONTENT = `I am a passionate full  developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React, as well as back-end technologies like Laravel, Nest.js, MySQL, and PostgreSQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Laravel, Codeigniter 3, Php, Magento, Nest.Js, MySQL, and PostgreSQL. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "February 2024 - June 2024",
    role: "Full Stack Developer",
    company: "Enam Dua Teknologi",
    description: `- Collaborated with design team to create prototypes and iterate designs to achieve optimal user experience. - Used HTML, CSS, and JavaScript to develop frontend applications with a focus on responsiveness and excellent user experience. - Leveraged React Js as the frontend framework to expedite development. - Managed backend of applications using PHP Laravel framework to build reliable servers and API endpoints. -  Designed and maintained MySQL databases to handle rapidly changing data. - Actively collaborated with QA team to ensure bug free and well functioning applications.`,
    technologies: ["Laravel", "React.js", "Nest Js", "TailwindCss", "Jira", "MySQL", "PostgreSQL"],
  },
  {
    year: "June 2023 - December 2023",
    role: "Programmer",
    company: "MiTech",
    description: `- Build inventory application for Ministry of Agriculture, using Microservices architecture. - Build Microservice system, SSO system, Telegram Bot. - Placement as backend developer at Ministry of Agriculture Placement.`,
    technologies: ["Vue.Js", "Lumen", "Docker", "Php", "Redis", "Bootstrap", "MySQL"],
  },
  {
    year: "January 2021 - June 2023",
    role: "Backend Engineer",
    company: "Icube By Sirclo",
    description: `- Guided my juniors to solve coding problems they face. - Successfully integrated multiple databases to improve data management and streamline backend processes. - Contributed to the creation of a scalable backend architecture, allowing for seamless integration of new features and improved user experience. - Collaborated with cross-functional teams to troubleshoot and resolve critical backend issues, ensuring minimal distruption to the production environment.`,
    technologies: ["Magento", "Php", "PHTML", "Docker", "MySQL", "XML", "GraphQl", "Rest API"],
  },
  {
    year: "February 2019 - January 2021",
    role: "Fullstack Web Developer",
    company: "Informent",
    description: `- Design and implement an analytical dashboard that integrates with POS systems, providing real time information on sales, inventory and store performance to business owners. - Optimizing POS application performance through data caching and the use of static content delivery techniques, increases application speed and responsiveness.`,
    technologies: ["Php", "Laravel", "Codeigniter", "Javascript", "MySQL", "HTML", "CSS"],
  },
];

export const PROJECTS = [
  {
    title: "Cashier application for the gym",
    image: egygym,
    description:
      "With the gym cashier application, you can easily track member attendance, manage membership packages, and monitor your gym's finances in one integrated platform.",
    technologies: ["HTML", "CSS", "Jquery", "Codeigniter", "MySQL"],
  },
  {
    title: "Minimarket sales application",
    image: aplikasiPenjualan,
    description:
      "Optimize minimum store operations by using a sophisticated and efficient minimarket cashier application.",
    technologies: ["HTML", "CSS", "Jquery", "Codeigniter", "MySQL"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwindcss", "ReactJs"],
  },
  {
    title: "Sugar cane counter application",
    image: sugarCane,
    description:
      "This application aims to calculate how much income per day the income of sugar cane at a sugarcane weighing supplier shop.",
    technologies: ["HTML", "CSS", "Jquery", "Codeigniter", "MySQL"],
  },
  {
    title: "Tire shop cashier application",
    image: BengkelSherin,
    description:
      "The tire shop cashier application provides a complete solution for managing inventory, transactions and financial reports.",
    technologies: ["HTML", "CSS", "Jquery", "Codeigniter", "MySQL"],
  },
];

export const CONTACT = {
  address: "Jl. La Sucipto Malang, Jawa Timur",
  phoneNo: "+62 896 8064 1487",
  email: "putrantoirfan@gmail.com",
};
