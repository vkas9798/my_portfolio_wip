// skills



import mySqlImg from "../assets/skillImages/mysql.webp";
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

// Additional i.e Python, PowerBI, Tableau, statistics, jupyter
import pythonImg from "../assets/skillImages/pythonImg.webp";
import powerBIImg from "../assets/skillImages/powerBIImg.webp";
import tableauImg from "../assets/skillImages/tableauImg.webp";
import statsImg from "../assets/skillImages/statsImg.webp";
import jupyterImg from "../assets/skillImages/JupyterImg.webp";

// projects
import signImg from "../assets/projects/signImg.webp";
import pdfqImg from "../assets/projects/pdfqImg.webp";
import fakeImg from "../assets/projects/fakeImg.webp";

//experience
import ipsator from "../assets/experience/ipsator_logo.webp";
import clickhere from "../assets/experience/clickhere.webp";

//education
import iitkgpImg from "../assets/education/iitkgpImg.webp";
import nitaImg from "../assets/education/nitaImg.webp";

export const Bio = {
  name: "Vikas Kumar Sharma",
  roles: ["Data Analyst", "Data Scientist", "ML Engineer", "AI Engineer"],
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
        image: pythonImg,
      },
      {
        name: "SQL",
        image: mySqlImg,
      },
      {
        name: "PowerBI",
        image: powerBIImg,
      },
      {
        name: "Tableau",
        image: tableauImg,
      },
      {
        name: "Statistics",
        image: statsImg,
      },
    ],
  },
  /*
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
      /*
      {
        name: "Netlify",
        image: netlifyImg,
      },*/
      {
        name: "Jupyter Notebook",
        image: jupyterImg,
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
    img: ipsator,
    role: "Data Analyst",
    company: "Ipsator Analytics Pvt Ltd",
    date: "3 June 2024 - present",
    desc: "In my current role, I am leveraging Python to automate data queries and perform advanced time series analysis on real-time datasets from IRCTC's e-catering business, uncovering insights into customer behavior, buying patterns, and item recommendations. I am also developing predictive models to forecast order quantities and sales, enhancing decision-making processes. Additionally, I engineer and maintain automated dashboards and reports using MySQL, PostgreSQL, and Metabase, providing actionable insights into daily operations and collaborating with cross-functional teams to implement data-driven strategies. I oversee financial reconciliation, integrating large-scale transaction data with business analytics to ensure accuracy, transparency, and ongoing financial stability.",
    skills: [
      "Python",
      "SQL",
      "PowerBI",
      "ML",
    ],
    doc: "https://ipsator.com/",
    clickhere: clickhere,
  },
];

export const education = [
  {
    id: 0,
    img: iitkgpImg,
    school: "IIT Kharagpur",
    date: "July 2022 - May 2024",
    grade: "9.6 CGPA",
    desc: "",
    degree: "Master of Technology - MTech, Technology Innovation and Entrepreneurship",
  },
  {
    id: 1,
    img: nitaImg,
    school: "NIT Agartala",
    date: "July 20215 - May 2019",
    grade: "8.83 CGPA",
    desc: "",
    degree: "Bachelor of Technology - BTech, Mechanical Engineering",
  },
];

export const projects = [
  {
    id: 0,
    title: "PDF Query Processor",
    date: "oct 2023 - dec 2023",
    description:
      "Empowered by LLM, I crafted a sophisticated PDF Query Processor in Python, integrating cutting-edge techniques from Langchain and optimizing document vectors with FAISS for seamless query resolution",
    image: pdfqImg,
    tags: [
      "Python",
      "Google Palm",
      "Langchain",
      "FAISS",
      "Streamlit",
    ],
    category: "web app",
    github: "https://github.com/vkas9798",
    webapp: "https://vikas-iitkgp.streamlit.app/",
  },
  {
    id: 1,
    title: "Fake News Classifier",
    date: "aug 2023 - sept 2023",
    description:
      "I applied text pre-processing techniques using NLTK and utilized TF-IDF and Bag of Words for vectorization on the US Elections Dataset. I trained models including Multinomial Naive Bayes and Passive Aggressive Classifier, achieving an accuracy of 92.01% with the latter. Additionally, I built a Bidirectional LSTM model, which attained an accuracy of 89.64% using One-Hot Encoding (OHE) for text pre-processing.",
    image: fakeImg,
    tags: [
      "Python",
      "NLP",
      "NLTK",
      "TFIDF",
      "LSTM",
    ],
    //category: "Quiz-App",
    //github: "https://github.com/DivyaGaurav21/React-Quiz",
    //webapp: "https://dg-quiz.netlify.app/",
  },
  {
    id: 2,
    title: "Hand-sign Detection",
    date: "jul 2023 - aug 2023",
    description:
      "Implemented a real-time gesture recognition model utilizing YOLOv5, featuring a custom dataset with manual annotations, resulting in an impressive 0.995 mAP50 and 0.922 mAP50-95 scores, demonstrating exceptional accuracy in gesture detection",
    image: signImg,
    tags: [
      "Image Processing",
      "Pytorch",
      "Yolo V5",
      "Deep Learning",
      "Object Detection",
    ],
    //category: "Quiz-App",
    //github: "https://github.com/DivyaGaurav21/React-Quiz",
    //webapp: "https://dg-quiz.netlify.app/",
  },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
