import javaImg from '../constants/java.png'
import cImg from '../constants/c.png'
import bootstrapImg from '../constants/bootstrap.jpg'
import pythonImg from '../constants/python.png'
import javaScriptImg from '../constants/js.png'
import cppImg from '../constants/cpp.png'
import djangoImg from '../constants/django.svg'
import reactImg from '../constants/react.png'
import mongoImg from '../constants/mongodb.jpg'

import video1 from '../constants/spaceInvaders.mp4'
import video2 from '../constants/PingPong.mp4'
import video3 from '../constants/DoodleJump.mp4'
import video4 from '../constants/flappyBird.mp4'
import video9 from '../constants/snake.mp4'
import video10 from '../constants/Whac.mp4'

import c1 from '../constants/JsCertificate.jpg'
import c2 from '../constants/IntroToFrontEnd.jpg'
import c3 from '../constants/PythonCertificate.jpg'
import c4 from '../constants/JavaCertificate.png'

import b1 from '../constants/Pizza.mp4'
import b2 from '../constants/FoodWebsite.mp4'
import b3 from '../constants/Jewellery.mp4'
import b4 from '../constants/shopping.mp4'

import m1 from '../constants/IRS.mp4'
import m2 from '../constants/IS.mp4'
import m3 from '../constants/kkw-conference.mp4'
import m4 from '../constants/prescripto.mp4'
import m5 from '../constants/dsa.mp4'

import d1 from '../constants/dt.png'
import d2 from '../constants/pq_generator.png'

export const techSkills = [
  {
    technology: "Java Programming",
    img: javaImg,
    desc: "A versatile and powerful object-oriented programming language widely used for backend development, mobile applications, and enterprise solutions."
  },
  {
    technology: "Python Programming",
    img: pythonImg,
    desc: "A high-level, interpreted programming language known for its simplicity and extensive libraries, commonly used in web development, AI, and automation."
  },
  {
    technology: "Django Framework",
    img: djangoImg,
    desc: "A high-level Python web framework that enables rapid development and clean, pragmatic design, ideal for building scalable web applications."
  },
  {
    technology: "React.js",
    img: reactImg,
    desc: "A JavaScript library for building interactive and efficient user interfaces, widely used for frontend development in modern web applications."
  },
  {
    technology: "C Programming",
    img: cImg,
    desc: "A powerful low-level programming language known for its efficiency and control, often used in system programming and embedded systems."
  },
  {
    technology: "C++ Programming",
    img: cppImg,
    desc: "An extension of C with object-oriented features, widely used for game development, high-performance applications, and system software."
  },
  {
    technology: "JavaScript",
    img: javaScriptImg,
    desc: "A dynamic programming language that enables interactive web development, often used with frameworks like React and Node.js."
  },
  {
    technology: "MongoDB",
    img: mongoImg,
    desc: "A NoSQL database known for its flexibility and scalability, used to store data in JSON-like documents for modern applications."
  },
  {
    technology: "Bootstrap",
    img: bootstrapImg,
    desc: "A popular frontend framework that simplifies web development with pre-built CSS components and responsive design utilities."
  }
];

export const gamesProject = [
  {
    title: "Space Invaders",
    desc: "In this classic arcade-style game, the player controls a spaceship and aims to shoot down waves of invading aliens. The primary objective is to eliminate all invaders while avoiding their attacks.",
    videoSrc: video1,
    github: "https://github.com/Sanket-2736/Front-End-Game-Projects/tree/main/Space%20Invaders"
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

export const bootstrapProject = [
  {
    title: 'Pizza Store App',
    desc : 'This project showcases a responsive pizza store website designed to provide users with an intuitive and enjoyable online ordering experience. ',
    video : b1
  },
  {
    title: 'Jewellery Store Website',
    desc : 'This project features a sophisticated jewelry store website designed to offer an elegant online shopping experience for customers looking for exquisite pieces.',
    video : b2
  },
  {
    title: 'Hotel Website',
    desc : 'This project showcases a dynamic hotel website designed to provide potential guests with an immersive experience while exploring accommodation options.',
    video : b3
  },
  {
    title: 'E-Commerce Website',
    desc : 'This eCommerce website serves as a dynamic platform for users to explore a wide range of products, from electronics to fashion and home goods.',
    video : b4
  },
]

export const MERNProjects = [
  {
    name: "K.K.W.I.E.E.R International Conference Website",
    TechStack: "React.js, Bootstrap, etc",
    image : m3,
    desc: "The K.K.W.I.E.E.R International Conference Website is dedicated to the International Conference on Engineering Innovations for Sustainable Future (ICEISF 2025), scheduled for January 6th & 7th, 2025. Hosted by the K. K. Wagh Institute of Engineering Education & Research in Nashik, India, this event brings together experts, scholars, and innovators to explore cutting-edge engineering solutions that drive sustainability and future-ready technologies.",
    href: "https://clinquant-sprinkles-e2d6e4.netlify.app/"
  },
  {
    name: "CodeVista - DSA Visualizer",
    TechStack: "React.js, Tailwind, etc",
    image : m5,
    desc: "Created an interactive web app to visualize data structures (Stacks, Queues, Linked Lists) and algorithms (Binary Search, Merge Sort). Implemented recursive problems like N-Queens and Tower of Hanoi. Built with React and Node.js, providing real-time updates and responsive design.",
    href: "https://dsa-visualiser-five.vercel.app/tower-of-hanoi"
  },
  {
    name: "Prescripto - Doctor Appointment Booking App",
    TechStack: "MongoDB (DataBase), Node.js & Express.js (Server), React.js(FrontEnd), Tailwind CSS",
    image : m4,
    desc: "Prescripto is a MERN stack-based doctor appointment booking app that enables patients to easily find doctors, book consultations, and manage medical records. It features secure authentication, real-time notifications, online payments, digital prescriptions, and an admin dashboard for managing users and appointments.",
    href: "Underdevelopment"
  },
  {
    name: "Incident Reporting System",
    TechStack: "MongoDB (DataBase), Node.js & Express.js (Server), React.js(FrontEnd)",
    image : m1,
    desc: "The Incident Reporting System is a full-stack web application designed to streamline the process of reporting, tracking, and managing incidents within an organization or community. It provides users with an intuitive interface to submit incident reports, categorize them, and track their resolution status in real time.",
    href: "Underdevelopment"
  },
  {
    name: "InsightSphere - The News Aggregator App",
    TechStack: "MongoDB (DataBase), Node.js & Express.js (Server), React.js(FrontEnd)",
    image : m2,
    desc: "InsightSphere is a modern and intelligent news aggregator that curates the latest news from various sources and presents it in a user-friendly interface. The app provides real-time updates, personalized recommendations, and AI-driven summaries to help users stay informed efficiently.",
    href: "Underdevelopment"
  }
]

export const djangoProjects = [
  {
    name: "AI Based Answersheet Analyser",
    TechStack: "Python, Django, Bootstrap, Gemini-API",
    image : d1,
    desc: "The AI-Based Answer Sheet Analyser is a powerful tool designed to automate the grading process for printed text answer sheets. Using advanced machine learning algorithms and OCR (Optical Character Recognition), it scans and analyzes printed responses, compares them against a model answer sheet, and evaluates answers based on keyword presence, length, and content accuracy. This system enhances efficiency, reduces manual errors, and provides detailed feedback, making it ideal for educational institutions aiming to streamline exam evaluation.",
    href: "Underdevelopment"
  },  
  {
    name: "SmartPaper - The AI Based Question Paper Generator",
    TechStack: "Python, Django, Bootstrap, Gemini-API",
    image : d2,
    desc: "SmartPaper is an intelligent question paper generation system that leverages AI to create customized and structured question papers based on user-defined parameters. It streamlines the process of generating question sets for exams, quizzes, and assessments by utilizing Python, Django, Bootstrap, and the Gemini API for AI-powered content creation.",
    href: "Underdevelopment"
  }, 
]

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