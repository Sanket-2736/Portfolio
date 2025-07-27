import javaImg from '../constants/java.png'
import cImg from '../constants/c.png'
import bootstrapImg from '../constants/bootstrap.jpg'
import pythonImg from '../constants/python.png'
import javaScriptImg from '../constants/js.png'
import cppImg from '../constants/cpp.png'
import djangoImg from '../constants/django.svg'
import reactImg from '../constants/react.png'
import mongoImg from '../constants/mongodb.jpg'
import springbootImg from '../constants/springboot.png'
import mysqlImg from '../constants/mysql_.png'
import tailwindImg from '../constants/tailwind.png'

import video1 from '../constants/spaceInvaders.mp4'
import video2 from '../constants/PingPong.mp4'
import video3 from '../constants/DoodleJump.mp4'
import video4 from '../constants/flappyBird.mp4'
import video9 from '../constants/snake.mp4'
import video10 from '../constants/Whac.mp4'
import video11 from '../constants/candy-crush.mp4'

import c1 from '../constants/JsCertificate.jpg'
import c2 from '../constants/IntroToFrontEnd.jpg'
import c3 from '../constants/PythonCertificate.jpg'
import c4 from '../constants/JavaCertificate.png'

import b1 from '../constants/Pizza.mp4'
import b2 from '../constants/FoodWebsite.mp4'
import b3 from '../constants/Jewellery.mp4'
import b4 from '../constants/shopping.mp4'

import m1 from '../constants/conference.png'
import m2 from '../constants/news_aggregator.png'
import m3 from '../constants/dsa_visualizer.png'
import m4 from '../constants/appointment.png'
import m5 from '../constants/incident.png'

import d1 from '../constants/dt.png'
import d2 from '../constants/pq_generator.png'

import internship_certificate from "../constants/xmega-certificate.jpg"; // Update path

export const techSkills = [
  { technology: "Java Programming", img: javaImg, level: "Advanced", category: "Languages" },
  { technology: "Python Programming", img: pythonImg, level: "Intermediate", category: "Languages" },
  { technology: "C Programming", img: cImg, level: "Beginner", category: "Languages" },
  { technology: "C++ Programming", img: cppImg, level: "Intermediate", category: "Languages" },
  { technology: "JavaScript", img: javaScriptImg, level: "Advanced", category: "Languages" },

  { technology: "SpringBoot", img: springbootImg, level: "Intermediate", category: "Frameworks" },
  { technology: "Django Framework", img: djangoImg, level: "Advanced", category: "Frameworks" },

  { technology: "React.js", img: reactImg, level: "Advanced", category: "Libraries" },
  { technology: "Bootstrap CSS", img: bootstrapImg, level: "Intermediate", category: "Libraries" },
  { technology: "Tailwind CSS", img: tailwindImg, level: "Beginner", category: "Libraries" },

  { technology: "MongoDB", img: mongoImg, level: "Intermediate", category: "Databases" },
  { technology: "MySQL", img: mysqlImg, level: "Advanced", category: "Databases" },
];

export const gamesProject = [
  {
    title: "Space Invaders",
    desc: "In this classic arcade-style game, the player controls a spaceship and aims to shoot down waves of invading aliens. The primary objective is to eliminate all invaders while avoiding their attacks.",
    videoSrc: video1,
    github: "https://github.com/Sanket-2736/Front-End-Game-Projects/tree/main/Space%20Invaders"
  },
  {
    title: "Candy Crush",
    desc: "A colorful match-3 puzzle game where players swap adjacent candies to form rows or columns of three or more matching candies. Clearing matches earns points and triggers cascades. Features increasing difficulty and score tracking.",
    videoSrc: video11,
    github: "https://github.com/Sanket-2736/Front-End-Game-Projects/tree/main/Candy%20Crush"
  },
  {
    title: "Ping Pong",
    desc: "In this classic arcade-style game, two players control paddles to hit a ball back and forth. The objective is to score points by getting the ball past the opponent's paddle.",
    videoSrc: video2,
    github: "https://github.com/Sanket-2736/Front-End-Game-Projects/tree/main/Ping%20Pong"
  },
  {
    title: "Doodle Jump",
    desc: "In Doodle Jump, players control a character (often represented as a doodle or a small creature) that jumps from platform to platform, aiming to ascend as high as possible while avoiding obstacles and enemies.",
    videoSrc: video3,
    github: "https://github.com/Sanket-2736/Front-End-Game-Projects/tree/main/Doodle%20Jump"
  },
  {
    title: "Flappy Bird",
    desc: "In Flappy Bird, players control a bird that must navigate through a series of pipes by tapping the screen or pressing a key to flap its wings. The goal is to fly as far as possible without hitting the pipes or the ground.",
    videoSrc: video4,
    github: "https://github.com/Sanket-2736/Front-End-Game-Projects/tree/main/Flappy%20Bird"
  },
  {
    title: "Snake Xenia",
    desc: "The primary goal is to eat as many food items as possible to grow the snake while avoiding collisions with walls or the snake's own body.",
    videoSrc: video9,
    github: "https://github.com/Sanket-2736/Front-End-Game-Projects/tree/main/Snake%20Xenia"
  },
  {
    title: "Whac A Mole",
    desc:"The main goal is to hit as many moles as possible within a set time limit. Players score points for each mole they successfully hit and the game ends when the timer runs out.",
    videoSrc: video10,
    github: "https://github.com/Sanket-2736/Front-End-Game-Projects/tree/main/Whac%20a%20mole"
  },
]

export const certifications = [
  {
    name: "Programming With JavaScript",
    image: c1,
    platform: 'Coursera'
  },
  {
    name: "The Joy Of Computing Using Python",
    platform: 'NPTEL',
    image: c3
  },
  {
    name: "Programming in Java",
    platform: 'NPTEL',
    image: c4
  },
  {
    name: 'Introduction To FrontEnd Development',
    platform: 'Coursera',
    image: c2
  }  
]

export const internshipDetails = [
  {
    company: "XMEGA",
    role: "Web Development Intern",
    duration: "March 15, 2025 – April 26, 2025",
    project: "Alumni Connect Platform",
    description:
      "Worked on developing an Alumni Connect Platform using the MERN stack (MongoDB, Express.js, React, Node.js). Implemented features like user authentication, real-time interaction, and responsive UI to enable seamless alumni-student engagement.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js"],
    certificateImage: internship_certificate
  }
];

export const bootstrapProject = [
  {
    title: 'Pizza Store App',
    desc: 'This project showcases a responsive pizza store website designed to provide users with an intuitive and enjoyable online ordering experience.',
    video: b1,
    github: 'https://github.com/Sanket-2736/Bootstrap-Projects/tree/main/Food%20Website'
  },
  {
    title: 'Jewellery Store Website',
    desc: 'This project features a sophisticated jewelry store website designed to offer an elegant online shopping experience for customers looking for exquisite pieces.',
    video: b3,
    github: 'https://github.com/Sanket-2736/Bootstrap-Projects/tree/main/E-Shopping'
  },
  {
    title: 'Hotel Website',
    desc: 'This project showcases a dynamic hotel website designed to provide potential guests with an immersive experience while exploring accommodation options.',
    video: b2,
    github: 'https://github.com/Sanket-2736/Bootstrap-Projects/tree/main/Hotel%20Website'
  },
  {
    title: 'E-Commerce Website',
    desc: 'This eCommerce website serves as a dynamic platform for users to explore a wide range of products, from electronics to fashion and home goods.',
    video: b4,
    github: 'https://github.com/Sanket-2736/Bootstrap-Projects/tree/main/E-Commerce'
  },
];

export const MERNProjects = [
  {
    name: "K.K.W.I.E.E.R International Conference Website",
    techStack: ["React.js", "Bootstrap", "Netlify"],
    image: m1,
    description:
      "The official website for the International Conference on Engineering Innovations for Sustainable Future (ICEISF 2025), hosted by KKWIEER, Nashik. It provides details about the event, speakers, registration, and schedule.",
    features: [
      "Responsive multi-page UI",
      "Conference schedule and speaker listing",
      "Live countdown and smooth scroll",
      "Built with React.js and Bootstrap",
    ],
    github: "https://github.com/Sanket-2736/KKW-Conference-Website",
    live: "https://clinquant-sprinkles-e2d6e4.netlify.app/",
    status: "Completed",
    duration: "2 weeks",
    role: "Frontend Developer"
  },

  {
    name: "CodeVista - DSA Visualizer",
    techStack: ["React.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    image: m3,
    description:
      "Interactive visualizer for Data Structures and Algorithms. Visualizes how Stacks, Queues, Linked Lists, and algorithms like Binary Search, Merge Sort, N-Queens, and Tower of Hanoi work.",
    features: [
      "Dynamic animations using Framer Motion",
      "Step-by-step algorithm walkthrough",
      "Responsive design",
      "Recursive and iterative logic for algorithms",
    ],
    github: "https://github.com/Sanket-2736/dsa-visualiser",
    live: "https://dsa-visualiser-five.vercel.app/",
    status: "Completed",
    duration: "3 weeks",
    role: "Full Stack Developer"
  },

  {
    name: "Prescripto - Doctor Appointment Booking App",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    image: m4,
    description:
      "A full-stack healthcare web application for booking doctor appointments online. Features include secure authentication, online payments, and a doctor-patient dashboard.",
    features: [
      "Role-based login (Admin, Doctor, Patient)",
      "Digital prescriptions and medical record storage",
      "Real-time notifications",
      "Stripe payment integration",
    ],
    github: "https://github.com/Sanket-2736/Appointment-booking-app",
    live: "Underdevelopment",
    status: "Under Development",
    duration: "Ongoing (Since June 2025)",
    role: "Full Stack Developer"
  },

  {
    name: "Incident Reporting System",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image: m5,
    description:
      "A reporting platform that enables employees or community members to log, track, and manage incident reports. Admins can update statuses and assign resolutions.",
    features: [
      "User and admin dashboards",
      "Incident categories and filters",
      "Real-time status updates",
      "Notification system via email",
    ],
    github: "https://github.com/Sanket-2736/Incident-Reporting-System",
    live: "Underdevelopment",
    status: "Under Development",
    duration: "Ongoing (Since May 2025)",
    role: "Backend + UI Developer"
  },

  {
    name: "InsightSphere - News Aggregator App",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "News API"],
    image: m2,
    description:
      "A smart news aggregator that fetches headlines from multiple sources and summarizes them using AI. Users can filter by category, save articles, and share summaries.",
    features: [
      "News API integration",
      "Search and category filters",
      "AI-based article summaries",
      "User authentication & bookmarking",
    ],
    github: "https://github.com/Sanket-2736/InsightSphere_New",
    live: "Underdevelopment",
    status: "Under Development",
    duration: "Started July 2025",
    role: "Full Stack Developer"
  }
];

export const djangoProjects = [
  {
    name: "AI Based Answersheet Analyser",
    techStack: "Python, Django, Bootstrap, Gemini-API",  // <-- changed
    image: d1,
    desc: "The AI-Based Answer Sheet Analyser is a powerful tool designed to automate the grading process for printed text answer sheets. Using advanced machine learning algorithms and OCR (Optical Character Recognition), it scans and analyzes printed responses, compares them against a model answer sheet, and evaluates answers based on keyword presence, length, and content accuracy. This system enhances efficiency, reduces manual errors, and provides detailed feedback, making it ideal for educational institutions aiming to streamline exam evaluation.",
    href: "Underdevelopment",
    github: "https://github.com/Sanket-2736/AI-Based-Answersheet-Analyser",
    duration: "5 months",
    status: "In Progress",
    role: "Full-stack Developer"
  },
  {
    name: "SmartPaper - The AI Based Question Paper Generator",
    techStack: "Python, Django, Bootstrap, Gemini-API",  // <-- changed
    image: d2,
    desc: "SmartPaper is an intelligent question paper generation system that leverages AI to create customized and structured question papers based on user-defined parameters. It streamlines the process of generating question sets for exams, quizzes, and assessments by utilizing Python, Django, Bootstrap, and the Gemini API for AI-powered content creation.",
    href: "Underdevelopment",
    github: "https://github.com/Sanket-2736/Question-Paper-Generator/tree/main/qpaper_project",
    duration: "6 months",
    status: "In Progress",
    role: "Backend Developer"
  }
];

export const questions = [
  {
    question: "What is your expertise?",
    answer: "I specialize in web development, cloud computing, and AI/ML, with a focus on delivering innovative and efficient solutions."
  },
  {
    question: "What technologies do you work with?",
    answer: "I primarily work with JavaScript, React, Python, MySQL, and other tools and platforms as required by the project."
  },
  {
    question: "What kind of projects have you worked on?",
    answer: "I have worked on diverse projects, including an AI-based answer sheet analyzer, a React-based News Aggregator App, a React based College International Conference Website, and more."
  },
  {
    question: "Are you open to freelance opportunities or collaborations?",
    answer: "Yes, I am open to freelance work and collaborations. Feel free to contact me through the form or the provided email/phone number."
  },
  {
    question: "How can I contact you for inquiries or collaborations?",
    answer: "You can reach me via email - sanketbelekar29@gmail.com. Alternatively, use the contact form above to send me a message."
  },
  {
    question: "Where are you located?",
    answer: "I am based in Nashik, MH, India, but I am open to remote opportunities and collaborations globally."
  },
  {
    question: "Do you have any certifications or achievements?",
    answer: "Yes, I have completed certifications in Python, Java and JavaScript and was felicitated for academic achievements like securing the second position in Computer Engineering with an GPA of 9.55."
  },
  {
    question: "What motivates you in your work?",
    answer: "My passion for learning and problem-solving motivates me to innovate and create meaningful solutions."
  },
  {
    question: "Can I view your portfolio projects?",
    answer: "Absolutely! You can explore my portfolio projects on the projects tab."
  },
  {
    question: "Do you offer mentorship or guidance?",
    answer: "Yes, I enjoy helping others. If you are a beginner in web development or cloud computing, feel free to reach out for guidance."
  }
];

export const skillsDesc = [
  {
    technology: "",
    desc: ""
  }
]