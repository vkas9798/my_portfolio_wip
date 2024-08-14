// skills
import reactImg from "../assets/skillImages/react.webp";
import nexttImg from "../assets/skillImages/next.webp";
import rtkImg from "../assets/skillImages/rtk.webp";
import reduxImg from "../assets/skillImages/redux.webp";
import htmlImg from "../assets/skillImages/html.webp";
import cssImg from "../assets/skillImages/css.webp";
import jsImg from "../assets/skillImages/js.webp";
import tailwindImg from "../assets/skillImages/tailwind.webp";
import materialUiImg from "../assets/skillImages/material.webp";

import nodeJsImg from "../assets/skillImages/nodejs.webp";
import expressImg from "../assets/skillImages/express.webp";
import graphQlImg from "../assets/skillImages/graphql.webp";
import mySqlImg from "../assets/skillImages/mysql.webp";
import mongoDbImg from "../assets/skillImages/mongodb.webp";
import firebaseImg from "../assets/skillImages/firebase.webp";
import sanityImg from "../assets/skillImages/sanity.webp";
import wordpressImg from "../assets/skillImages/wordpress.webp";

import javaImg from "../assets/skillImages/java.webp";
import typescriptImg from "../assets/skillImages/ts.webp";
import dsaImg from "../assets/skillImages/dsa.webp";
import oopsImg from "../assets/skillImages/oops.webp";
import reasoningImg from "../assets/skillImages/reasoning.webp";
import mathImg from "../assets/skillImages/maths.webp";

import gitImg from "../assets/skillImages/git.webp";
import githubImg from "../assets/skillImages/github.webp";
import vercelImg from "../assets/skillImages/versal.webp";
import netlifyImg from "../assets/skillImages/netlify.webp";
import vscodeImg from "../assets/skillImages/vscode.webp";
import postmanImg from "../assets/skillImages/postman.webp";
import figmaImg from "../assets/skillImages/figma.webp";

// projects
import MealHub from "../assets/projects/react-meal.webp";
import QuizWeb from "../assets/projects/quiz-application.webp";
import Vtube from "../assets/projects/v-tube.webp";
import HabbitTracker from "../assets/projects/habit-tracker.webp";
import ERS from "../assets/projects/employ-review-system.webp";
import IpsatorBlog from "../assets/projects/ipsator-blog.webp";
import NextEcom from "../assets/projects/next-ecom.webp";
import IpsatorOfficial from "../assets/projects/ipsator-official.webp";
import IrctcEcat from "../assets/projects/irctc-ecat.webp";

//experience
import trialShopy from "../assets/experience/trialshoppy_logo.webp";
import ipsator from "../assets/experience/ipsator_logo.webp";
import clickhere from "../assets/experience/clickhere.webp";

//education
import cn from "../assets/education/cn.webp";
import nitp from "../assets/education/nitp.webp";
import brb from "../assets/education/brb.webp";

export const Bio = {
  name: "Vikas Kumar Sharma",
  roles: ["Data Analyst", "Data Scientist", "AI/ML Engineer"],
  description:
    "Leveraging advanced data analytics techniques, machine learning algorithms and robust statistical methods to extract meaningful insights from data, guiding strategic decisions, refining processes, and forecasting trends.",
  github: "https://github.com/vkas9798",
  resume:
    "https://drive.google.com/drive/folders/1MkkRLbj5y0BR4ojWAdYURri8Ul0ZJ9J8?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/vikas-kumar-sharma-5b0092128/",
  //twitter: "https://www.linkedin.com/in/divya-gaurav-917889215/",
  //insta: "https://www.instagram.com/divya.gaurav.dg/",
  //facebook: "https://www.facebook.com/gaurav.divya.7528/",
};

export const skills = [
  {
    title: "Data Analyst",
    skills: [
      {
        name: "Python",
        image: reactImg,
      },
      {
        name: "SQL",
        image: nexttImg,
      },
      {
        name: "PowerBI",
        image: rtkImg,
      },
      {
        name: "Tableau",
        image: reduxImg,
      },
    ],
  },
  /*{
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: nodeJsImg,
      },
      {
        name: "Express Js",
        image: expressImg,
      },
      {
        name: "Graph Ql",
        image: graphQlImg,
      },
      {
        name: "MySQL",
        image: mySqlImg,
      },
      {
        name: "MongoDB",
        image: mongoDbImg,
      },
      {
        name: "Firebase",
        image: firebaseImg,
      },
      {
        name: "Sanity CMS",
        image: sanityImg,
      },
      {
        name: "Wordpress CMS",
        image: wordpressImg,
      },
    ],
  },
  {
    title: "Other Skills & Language Expertise",
    skills: [
      {
        name: "Java",
        image: javaImg,
      },
      {
        name: "typeScript",
        image: typescriptImg,
      },
      {
        name: "JavaScript",
        image: jsImg,
      },
      {
        name: "DSA",
        image: dsaImg,
      },
      {
        name: "OOPs",
        image: oopsImg,
      },
      {
        name: "Reasonining",
        image: reasoningImg,
      },
      {
        name: "Maths",
        image: mathImg,
      },
    ],
  },*/
  {
    title: "Tools and Technology",
    skills: [
      {
        name: "Git",
        image: gitImg,
      },
      {
        name: "GitHub",
        image: githubImg,
      },
      /*{
        name: "Versal",
        image: vercelImg,
      },
      {
        name: "Netlify",
        image: netlifyImg,
      },*/
      {
        name: "Jupyter Notebook",
        image: vscodeImg,
      },
      {
        name: "VS Code",
        image: vscodeImg,
      },
      {
        name: "Postman",
        image: postmanImg,
      },
      /*{
        name: "Figma",
        image: figmaImg,
      },*/
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: trialShopy,
    role: "Freelencing Project in Startup Culture",
    company: "Trialshoppy Marketpalace Pvt. Ltd",
    date: "March 2023 - August 2023",
    desc: "Following the completion of the MERN Stack Development course at Coding Ninja Career Camp, I seized an opportunity for freelancing work on an E-commerce website, referred to as a marketplace. In this role, I was tasked with creating essential components such as shopping cards, payment cards, and modals based on the provided UI design specifications. Subsequently, I focused on building pages that included features like image display, video integration, ratings, reviews, pagination, and a comment box. On the backend, I implemented MongoDB to establish the necessary connections and ensure data binding across these components. Additionally, I made significant efforts to enhance the website's responsiveness for an optimal user experience.",
    skills: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "REACT",
      "TAILWIND CSS",
      "MONGO DB",
      "NODE JS",
      "EXPRESS JS",
    ],
    doc: "https://drive.google.com/file/d/1tPV8ZrsTlZWiK0NoSRbJUIRnH4Wnlxns/view?usp=drive_link",
    clickhere: clickhere,
  },
  {
    id: 1,
    img: ipsator,
    role: "Front-end Trainee Developer",
    company: "Ipsator Analytics Pvt Ltd",
    date: "4 September 2023 -30 November 2023 (3 months)",
    desc: "As a Frontend Trainee Developer at Ipsator Company, I actively contributed to a variety of projects that showcase my skills and expertise. One notable project involved the implementation of Stytch for password-less user authentication, ensuring a secure and user-friendly login experience. Additionally, I played a pivotal role in the development of a blog project where Sanity CMS was utilized for efficient storage and retrieval of blog posts, streamlining content management workflows. Leveraging GA4 for advanced analytics, I provided valuable insights into user engagement, contributing to data-driven decision-making. Another significant achievement was the creation of an engaging animated homepage for Ipsator using the Astro framework, showcasing my creativity and proficiency in modern web development. Furthermore, I applied my expertise to a dynamic e-commerce website, employing Next.js for efficient front-end rendering and Tailwind CSS for visually appealing and responsive designs. In the backend, I integrated MongoDB, enhancing scalability and data management. Throughout these experiences, I collaborated effectively with cross-functional teams, demonstrating a commitment to achieving project goals and deadlines, and contributing to the overall enhancement of Ipsator's online presence through innovative web solutions.",
    skills: [
      "Next JS",
      "ReactJS",
      "Tailwind Css",
      "Astro",
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "next-auth",
      "firebase-authentication",
    ],
    doc: "https://drive.google.com/file/d/1rxNY9iNagmqmwYnNzsAwUrXH0XHVjEqN/view?usp=drive_link",
    clickhere: clickhere,
  },
  {
    id: 2,
    img: ipsator,
    role: "Front-end Developer",
    company: "Ipsator Analytics Pvt Ltd",
    date: "30 November 2023 - Present",
    desc: "In my role for the A2SEdge project, I contributed significantly to the development of a sensor integration system for football, soccer, and hockey teams. Responsible for assigning sensors to players, I facilitated the capture and processing of crucial performance metrics such as heart rate, intensity, and energy levels during training sessions. Using tanstack-query@v5 for streamlined API operations, I ensured the efficient importation of this data to a cloud-based storage system. Employing react-chart for UI development, I created intuitive visualizations, presenting comprehensive statistics to coaches and team members. Concurrently, I undertook a learning journey with Ipsator Analytics, delving into the IRCTC Ecatering App's codebase, positioning myself for future contributions to this flagship project. This dual experience enabled me to navigate complex technical challenges and deliver impactful solutions.in IRCTC project i have been created custom hooks , fetching information from API, and created menu items list , and custamisation , or giving a diffrent theme of web application based on the url query parameter , etc. and now continued worked on it",
    skills: [
      "ReactJS",
      "Next Js",
      "React-Query",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    doc: "https://drive.google.com/file/d/1nlAD7mL3E99VftKASIRZSIyEAzcXAvsu/view?usp=sharing",
    clickhere: clickhere,
  },
];

export const education = [
  {
    id: 0,
    img: nitp,
    school: "NATIONAL INSTITUTE OF TECHNOLOGY PATNA",
    date: "SEPTEMBER 2021",
    grade: "6.54 CGPA",
    desc: "I hold a Bachelor of Technology degree from NIT Patna with a specialization in Electrical Engineering. Despite my academic focus on Electrical Engineering, my passion for coding led me to delve into various aspects of computer science. Over the course of eight semesters, I maintained a commendable CGPA of 6.54. My academic journey included in-depth studies in computer languages such as Java and Python, emphasizing Object-Oriented Programming principles. Additionally, I acquired proficiency in Database Management Systems and Operating Systems. Complementing my theoretical knowledge, I actively engaged in practical applications through the development of both minor and major projects. In tandem with my academic pursuits, I participated in co-curricular activities that provided me with a holistic understanding of software development. This multifaceted experience has equipped me with a robust foundation in coding, problem-solving skills, and the ability to contribute effectively to software development endeavors.",
    degree: "Bachelor of Technology - BTech, Electrical Engineering",
  },
  {
    id: 1,
    img: brb,
    school: "B.R.B +2 High Schcool Andaur, samastipur",
    date: "may 2017",
    grade: "71.2%",
    desc: "I successfully completed my secondary education at B.R.B +2 High School Andaur, Samastipur. During this period, I pursued a rigorous academic curriculum with a focus on the Science stream, majoring in Physics, Chemistry, and Mathematics. This comprehensive course not only provided me with a strong foundation in these core subjects but also honed my analytical and problem-solving skills. I am proud to have graduated from an institution that prioritizes academic excellence and prepares students for future challenges in the field of science and technology.",
    degree: "Intermediate, Science with physics chemistry and mathmatics",
  },
  {
    id: 2,
    img: cn,
    school: " CODING NINJA CAREER CAMP",
    date: "Jan 2021 - Feb 2022",
    grade: "A+",
    desc: "I have successfully completed the Full Stack (MERN) program at Coding Ninja Career Camp, where I gained comprehensive knowledge in Java and JavaScript, coupled with a strong understanding of data structures and algorithms. My proficiency extends to developing intricate user interfaces using React, building robust backend APIs with Node Express, and effectively utilizing databases such as MongoDB and MySQL.Throughout the program, I successfully undertook a range of projects, demonstrating my skills across various domains. Notable projects include a food ordering web application developed in React, an employee review system with an integrated admin panel, a habit tracker, and applications resembling YouTube and a music player. These experiences have equipped me with a profound aptitude for software development, enabling me to navigate complexities and deliver innovative solutions.I am confident in my ability to contribute effectively to dynamic projects, leveraging my expertise in the MERN stack, strong problem-solving skills, and a keen understanding of development principles.",
    degree: "MERN STACK DEVELOPER",
  },
];

export const projects = [
  {
    id: 0,
    title: "E-Commerce Meal-Hub",
    date: "Jan 2023 - feb 2023",
    description:
      "It is a React & Redux Based Real World Project, Ecommerce Website (MEAL HUB). where user can buy food receipy and a Restaurent owner able to sell their Restaurent's Food Items.Any User can add, remove , update ,delete (crud operation) receipy in cart. in Other hand ,Restaurent owner who want to sell their food item , they will able to add , update , and delete their receipy. if user click on theire desire receipy , they were able to see receipy details such as restorent name , receipy name, rating , price , overview etc... with recommended similar items at bottom",
    image: MealHub,
    tags: [
      "html5",
      "css3",
      "vanilla-js",
      "rest-api",
      "reactjs",
      "jsx",
      "hooks",
      " react-router-dom",
      " material-ui",
      " react-bootstrap",
      "redux-toolkit",
    ],
    category: "web app",
    github: "https://github.com/DivyaGaurav21/Ecoomerce-React-App",
    webapp: "https://ecommerce-meal.netlify.app/",
  },
  {
    id: 1,
    title: "Quiz Web Application",
    date: "feb 2023 - march 2023",
    description:
      "The React Quiz App is a web application designed to facilitate taking various quiz tests. It provides users with an interactive platform to answer questions, receive immediate feedback, and view their scores upon completion. The application is built using React.js, providing a dynamic and responsive user interface.",
    image: QuizWeb,
    tags: [
      "react",
      "react-router",
      "jsx",
      "html-css-javascript",
      "hooks: usestate useref usereducer useeffect",
      "fake-api-json-server",
    ],
    category: "Quiz-App",
    github: "https://github.com/DivyaGaurav21/React-Quiz",
    webapp: "https://dg-quiz.netlify.app/",
  },
  {
    id: 2,
    title: "V-Tube",
    date: "april 2023 - june 2023",
    description:
      "Created a YouTube-like platform, which can display and play videos, search and browse video content, and manage user accounts. The project uses the React library as its frontend framework, which allows for building a responsive, dynamic user interface with reusable components. Material UI is used as the design system to provide a consistent look and feel throughout the application. This helps to create a modern and intuitive user experience. In addition, the YouTube API is integrated into the project, allowing users to search for videos and view their details such as title, description, and duration. Users can also play videos directly from the app and browse related content.",
    image: Vtube,
    tags: [
      "html-css-js",
      "React",
      "hooks: usestate useref usereducer useeffect",
      "javaScript",
      "Material UI",
      "Rapid API",
    ],
    category: "web app",
    github: "https://github.com/DivyaGaurav21/vidTube",
    webapp: "https://divyagaurav-vtube.netlify.app/",
  },
  {
    id: 3,
    title: "Habbit-Tracker",
    date: "June 2023 - july 2023",
    description:
      "The Habit Tracker is a web application designed to help authenticated users track their daily and weekly habits. It provides users with a simple and intuitive platform to set, monitor, and visualize their progress towards achieving their desired habits. The application is built using Node.js, Express.js, MongoDB, and EJS templating engine, offering a seamless user experience",
    image: HabbitTracker,
    tags: [
      "html5-css3-Js",
      "node js",
      "express js",
      "nodemon",
      "mongo db",
      "ejs - template engine",
    ],
    category: "web-app",
    github: "https://github.com/DivyaGaurav21/habbit_tracker_nodejs",
    webapp: "http://habit-tracker-dg.onrender.com/",
  },
  {
    id: 4,
    title: "Employ Review System",
    date: "July 2023 - August 2023",
    description:
      "In This project a employee can give review to each other based upon their behaviour and work. Only the Admin can see the reviews and give authority to employee who they review . The Purpose of this project is to create a good work environment by improve feedback",
    image: ERS,
    tags: [
      " Node js",
      " Express",
      " MongoDB",
      "EJS - template-engine",
      " Passport-locals",
      "Authentication/Authorization",
    ],
    category: "mobile app",
    github: "https://github.com/rishavchanda/Buckoid-Android-App",
    webapp: "https://play.google.com/store/apps/details?id=com.rishav.buckoid",
  },
  {
    id: 5,
    title: "Ipsator Blog Page",
    date: "sep 2023 - oct 2023",
    description:
      "The IPSator Blog Web Application is a modern blogging platform that leverages various technologies to provide a seamless user experience. The project combines Stytch for passwordless user authentication, Sanity CMS for storing and fetching blog posts, and Google Analytics 4 (GA4) for analytics. The primary objectives of the project are to implement passwordless authentication, manage blog content efficiently, and track user activity for insights",
    image: IpsatorBlog,
    tags: [
      " Stytch for passwordless user authentication",
      " Use Sanity CMS for storing and fetching blog posts",
      "Google analytics (GA4)",
      "Next Js",
      "Tailwind CSS",
    ],
    category: "web app",
    github: "https://github.com/DivyaGaurav21/ipsator-blog",
    webapp: "https://github.com/DivyaGaurav21/ipsator-blog",
  },
  {
    id: 6,
    title: "Next-Ecommerce",
    date: "nov 2023 - dec 2023",
    description:
      "The E-Commerce Website Development project aims to create a comprehensive and user-friendly online platform for buying and selling products. Leveraging a full-stack approach, the project utilizes Firebase Authentication for secure user authentication, MongoDB for efficient data storage, and Next.js with Tailwind CSS for frontend development. The key objectives include implementing robust authentication, seamless data management, and essential features such as filtering, pagination, and cart management.",
    image: NextEcom,
    tags: [
      "React Js",
      "Next Js",
      "firebase authentication",
      "Rest API",
      "Mongo DB",
      "Tailwind CSS",
    ],
    category: "web app",
    github: "https://github.com/DivyaGaurav21/next-ecommerce",
    webapp: "https://github.com/DivyaGaurav21/next-ecommerce",
  },
  {
    id: 7,
    title: "Ipsator Official Page",
    date: "feb 2024 - mar 2024",
    description:
      "The Company Official Website Development project focuses on creating a modern and informative website that showcases the details and offerings of the company. Leveraging a combination of technologies including HTML, CSS, JavaScript, TypeScript, Astro JS, React JS, Tailwind CSS, Swiper JS, and Figma, the project aims to deliver a visually appealing, interactive, and user-friendly web platform",
    image: IpsatorOfficial,
    tags: [
      "html-css-js",
      "TypeScript",
      "Astro JS",
      "React JS",
      "Tailwind CSS",
      "Swiper JS",
      "Figma",
    ],
    category: "web app",
    github: "https://github.com/DivyaGaurav21",
    webapp: "https://ipsator-www.vercel.app/",
  },
  {
    id: 8,
    title: "IRCTC E-Catering Web Application",
    date: "March 2024 - Continue",
    description:
      "IRCTC-Ecat is a flagship project of our organization aimed at revolutionizing the onboard dining experience for train passengers across various regions of India. The platform facilitates seamless meal ordering and delivery services through both web and mobile applications, providing passengers with convenient access to quality meals during their train journeys. Under the guidance of senior team members, our team members are working on different aspects of the application to ensure its successful implementation and operation",
    image: IrctcEcat,
    tags: [
      "React Js",
      "Next JS",
      "REST API",
      "Context API",
      "TanStack/React-Query",
      "more diffrent tech used",
    ],
    category: "web app",
    github: "https://github.com/DivyaGaurav21",
    webapp: "https://www.ecatering.irctc.co.in/",
  },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
