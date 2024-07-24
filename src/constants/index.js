import {
  jobit,
  carrent,
  nuclei,
  insta_bot,
  coders_league,
} from "../assets/images";

import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nodejs,
  react,
  redux,
  tailwindcss,
  dart,
  android,
  flutter,
  kotlin,
  dagger,
  java,
  firebase
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: dart,
    name: "Dart",
    type: "Frontend",
  },
  {
    imageUrl: flutter,
    name: "Flutter",
    type: "Frontend",
  },
  {
    imageUrl: android,
    name: "Android",
    type: "Frontend",
  }, {
    imageUrl: kotlin,
    name: "Kotlin",
    type: "Frontend",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Frontend",
  },
  {
    imageUrl: dagger,
    name: "Dagger",
    type: "Frontend",
  },
  {
    imageUrl: firebase,
    name: "Firebase",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];
export const ABOUT_TITLE = "Full-stack developer with 2+ years of experience leading the development of high-performance, scalable marketplace and banking solutions for a fin-tech startup.Expertise in Android, Flutter and ReactJS"
export const WORK_EXP_TITLE = "Developed diverse applications using Android ,Flutter and ReactJS. Enhanced features and user experiences across projects. Managed and optimized systems for improved performance. Delivered effective solutions and collaborated with teams. Implemented best practices to ensure high-quality outcomes.."
export const experiences = [
  {
    title: "Software Developer",
    company_name: "CDNA TECHNOLOGIES (Nuclei)",
    icon: nuclei,
    iconBg: "#accbe1",
    date: "July 2022 - Current",
    points: [
      "Spearheaded the development of a subscription marketplace from the ground up, leading to a remarkable 40-50% upsurge in Gross Merchandise Value (GMV) monthly post-launch.",
      "Integrated the platform with various prominent banks, Live with HDFC, ICICI, HSBC, IDFC, KOTAK, and over 10 other major financial institutions.",
      "Accounted for approximately 26% of desktop and 43% of mobile screens, developing essential features such as Transaction screen, Login/Signup Screen, User Migration, and Order Review Screen.",
      "Implemented search and filter functionality for the listing screens and set up analytics via CleverTap, enabling data-driven insights that enhanced user experience by 12% and increased user retention by 18%.",
      "FedMobile Android and Card Stack: Led the Credit Card SDK Team, creating essential features such as Razorpay Push Provisioning and the NCMC Wallet, which boosted functionality by 9%.",
      "Developed the Rupay Floater Card (UPI-enabled Credit Cards), Secured Credit Card (backed by Fixed Deposit), and revamped UPI Card Controls, resulting in a 4% increase in user transaction volume.",
      "Built QR Scanner in Android from scratch for credit card activation, addressing an issue flagged by over 1000 users.",
      "Tools: Core Java, RxJava, Kotlin, Coroutines, Retrofit, OkHttp, Dagger Hilt, Android Architectures, JUnit, Mockito, MVVM, Jetpack libraries, Firebase, Dart, Flutter."
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Nuclei",
    icon: nuclei,
    iconBg: "#fbc3bc", 
    date: "March 2022 - June 2022",
    points: [
      "Engineered a Contact Application on Android and Flutter platforms, enabling efficient contact management through intuitive creation, updates, and deletions",
      "Contributed to the Federal Bank Android App by rectifying memory leaks and implementing launcher shortcuts to help users quickly start recommended tasks, benefiting over 1 million users.",
      "Tools: Java, Fragment, Conductor, RoomDB, LeakCanary, ProGuard, Flutter, Clean Architecture, SOLID Principles.",
    ],
  },

];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];
export const PROJECT_DESCRIPTION = "Developed a range of software projects focusing on enhancing user experience, automation, and real-time functionality. Demonstrated expertise in creating innovative solutions and robust applications across different platforms."

export const projects = [
  {
    name: "Coders League",
    description:
      "Coding Platform that offers a competitive environment for practicing problems, multiple features, including functionality to create and join public coding lobbies, share real-time updates",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: coders_league,
    source_code_link: "https://codersleague.netlify.app/#/",
  },
  {
    name: "Instagram Bot",
    description:
      "Instagram bot proficient in user account management, interaction (liking, disliking, following, and unfollowing), and data extraction from varied Instagram profiles.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pandas",
        color: "green-text-gradient",
      },
      {
        name: "BeautifulSoup",
        color: "pink-text-gradient",
      },
      {
        name: "Selenium",
        color: "pink-text-gradient",
      },
      {
        name: "Webdriver",
        color: "pink-text-gradient",
      },

    ],
    image: insta_bot,
    source_code_link: "https://github.com/Uniquegaurav/InstaBot1",
  },
];

export const homeStagesInfo = [
  {
    title:
      "Hi, I'm Gaurav, a Software Developer with a quick learning curve and a passion for innovation. Experienced in developing a wide range of applications and managing the entire development lifecycle.",
      titleMobile:
      "Hi, I'm Gaurav, a Software Developer with a quick learning curve and a passion for innovation.",
    ctaText: "",
    link: "",
  },
  {
    title:
      "I specialize in frontend development, with expertise in Android, Flutter, and React JS. My experience includes creating responsive, user-friendly interfaces and building dynamic, high-performance applications. ",
      titleMobile :    "I specialize in frontend development, with expertise in Android, Flutter, and React JS.",
    ctaText: "See Skills",
    link: "/about",
  },
  {
    title:
      "I have over 2 years of experience driving the development of scalable marketplace and banking solutions for a fintech startup.",
      titleMobile:
      "I have over 2 years of experience driving the development of scalable marketplace and banking solutions for a fintech startup.",
    ctaText: "See Experience",
    link: "/about",
  },
  {
    title:
      "Designed and developed the Coders League Platform from scratch, which is now actively used by a growing community of users.",
      titleMobile:
      "Designed and developed the Coders League Platform from scratch, which is now actively used by a growing community of users.",
    ctaText: "See Projects",
    link: "/projects",
  },
  {
    title:
      "Looking to hire me or collaborate on a project? Reach out anytime!",
      titleMobile:
      "Looking to hire me or collaborate on a project? Reach out anytime!",
    ctaText: "Contact Me",
    link: "/contact",
  },
];
