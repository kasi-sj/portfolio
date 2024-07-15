import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { SiNextui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpo } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiSpringboot } from "react-icons/si";
import { SiTauri } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { TbBrandOauth } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Skills",
      href: "/skills",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Skills",
      href: "/skills",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  links: {
    leetcode: "https://leetcode.com/kasinathansj/",
    linkedin: "http://www.linkedin.com/in/kasinathansj",
    codechef: "https://www.codechef.com/users/psna_39",
    geeksforgeeks: "https://auth.geeksforgeeks.org/user/kasinathansj",
    github: "https://github.com/kasi-sj",
  },
  socials: [
    {
      name: "LeetCode",
      icon: SiLeetcode,
      link: "https://leetcode.com/kasinathansj/",
    },
    {
      name: "CodeChef",
      icon: SiCodechef,
      link: "https://www.codechef.com/users/psna_39",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      link: "https://github.com/kasi-sj",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      link: "http://www.linkedin.com/in/kasinathansj",
    },
    {
      name: "Gmail",
      icon: BiLogoGmail,
      link: "kasinathansj@gmail.com",
    },
  ],
  areaOfIntrest: [
    {
      name: "Web Development",
    },
    {
      name: "Mobile Development",
    },
    {
      name: "Competitive Programming",
    },
    {
      name: "System Design",
    },
  ],
  skills: [
    {
      title: "Front-end",
      list: [
        {
          name: "HTML",
          icon: FaHtml5,
        },
        {
          name: "CSS",
          icon: IoLogoCss3,
        },
        {
          name: "React",
          icon: RiReactjsFill,
        },
        {
          name: "Next.js",
          icon: RiNextjsFill,
        },
        {
          name: "Tailwind CSS",
          icon: RiTailwindCssFill,
        },
        {
          name: "NextUI",
          icon: SiNextui,
        },
        {
          name: "Shadcn UI",
          icon: SiShadcnui,
        },
        {
          name: "Redux",
          icon: SiRedux,
        },
        {
          name: "Tauri",
          icon: SiTauri,
        },
      ],
    },
    {
      title: "Back-end",
      list: [
        {
          name: "javascript",
          icon: IoLogoJavascript,
        },
        {
          name: "TypeScript",
          icon: SiTypescript,
        },
        {
          name: "Node.js",
          icon: DiNodejs,
        },
        {
          name: "Express",
          icon: SiExpress,
        },
        {
          name: "Spring Boot",
          icon: SiSpringboot,
        },
        {
          name: "Socket.io",
          icon: SiSocketdotio,
        },
        {
          name: "Auth.js",
          icon: TbBrandOauth,
        },
      ],
    },
    {
      title: "Database",
      list: [
        {
          name: "MongoDB",
          icon: SiMongodb,
        },
        {
          name: "PostgreSQL",
          icon: DiPostgresql,
        },
      ],
    },
    {
      title: "App Development",
      list: [
        {
          name: "React Native",
          icon: TbBrandReactNative,
        },
        {
          name: "Expo",
          icon: SiExpo,
        },
        {
          name: "Firebase",
          icon: IoLogoFirebase,
        },
      ],
    },
    {
      title: "Programming Languages",
      list: [
        {
          name: "Java",
          icon: FaJava,
        },
        {
          name: "Python",
          icon: FaPython,
        },
        {
          name: "C++",
          icon: TbBrandCpp,
        },
      ],
    },
    {
      title: "Tools",
      list: [
        {
          name: "Postman",
          icon: SiPostman,
        },
        {
          name: "Git",
          icon: FaGitAlt,
        },
        {
          name: "Docker",
          icon: FaDocker,
        },
        {
          name: "VS Code",
          icon: VscVscode,
        },
      ],
    },
  ],
  achievements: [
    {
      image: "/codechef.png",
      genere: "Competitive Coding",
      points: [
        "Starters 118 Division 2 Global Rank 14",
        "620+ problems",
        "4⭐ Max rating 📈 1958",
      ],
      link: "https://www.codechef.com/users/psna_39",
    },
    {
      image: "/leetcode.png",
      genere: "Competitive Coding",
      points: [
        "Global Rank 62 in Biweekly Contest 124",
        "1300+ problems",
        "Guardian Max rating 📈 2463",
      ],
      link: "https://leetcode.com/kasinathansj/",
    },
    {
      image: "/GFG.jpg",
      genere: "Competitive Coding",
      points: [
        "Rank 3 in GFG-weekly-coding-contest-147",
        "688+ problems",
        "5⭐ Max rating 📈 2023",
      ],
      link: "https://auth.geeksforgeeks.org/user/kasinathansj",
    },
  ],
};
