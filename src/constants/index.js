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
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    OASIS,
    methodist,
    webel,
    heritage,
    python,
    linux,
    TF,
    karlot,
    asl,
    portflio
  } from "../assets";
  
  export const navLinks = [
    {
      id:"hero",
      title:"Home"
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "tech",
      title:"Skills"
    },
   
    {
      id: "work",
      title: "Projects",
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
      title: "Content Creator",
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
      name: "TensorFlow",
      icon: TF,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python",
      icon: python,
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
      name: "Linux",
      icon: linux,
    },
   
  ];
  
  const experiences = [
    {
      title: "High School",
      company_name: "Methodist School",
      icon: methodist,
      iconBg: "#E6DEDD",
      date: "2017-2019",
      points: [
        "Passed 10th and 12th standard from ISCE board.",
        "Secured a total of 90% and 85% respectively."
      ],
    },
    {
      title: "College",
      company_name: "Heritage Institute of Technology",
      icon: heritage,
      iconBg: "#E6DEDD",
      date: "June 2020-June 2024",
      points: [
        "Pursuing Bachelors of Technology in Electronics and Communications Engineering",
        "Secured a ygpa of 8.48",
        
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "Oasis Infobyte",
      icon: OASIS,
      iconBg: "#383E56",
      date: "June 2023 - July 2023",
      points: [
        "Created a simple calculator application using HTML, CSS, JavaScript.",
        "Created a To-Do web application that helps in tracking daily tasks.",
       
        "Created a Tribute page using HTML and CSS.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "AI Intern",
      company_name: "Webel",
      icon: webel,
      iconBg: "#E6DEDD",
      date: "June 2023 - July 2023",
      points: [
        "Recieving training on developing AI apps using Python",
        "Performing various assigned tasks and projects related to AI and Machine Learning"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Smart Parking System ",
      description:
        "a smart parking system model using IR sensors, an Arduino board (involving Arduino coding), and servo motors. The system can detect and indicate empty parking space availability along with its specified number.",
      tags: [
        {
          name: "arduino",
          color: "blue-text-gradient",
        },
        {
          name: "c",
          color: "green-text-gradient",
        },
        {
          name: "iot",
          color: "pink-text-gradient",
        },
      ],
      image: karlot,
      source_code_link: "https://drive.google.com/file/d/1xJQ2OM4lLAJS0sKH8qvcGEoyiWQ0pq4v/view?usp=sharing",
    },
    {
      name: "ASL Hand Tracker",
      description:
        "It is Python app that tracks hand signs using computer vision to detect ASL. This Python application compares the user's hand sign with pre-trained(Machine Learning) models using TensorFlow. Then the output is displayed on a web application via Flask.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "tensorflow",
          color: "green-text-gradient",
        },
        {
          name: "ML",
          color: "pink-text-gradient",
        },
      ],
      image: asl,
      source_code_link: "https://github.com/titaskundu/Hand_Tracker",
    },
    {
      name: "Personal Portfolio",
      description:
        "Created a fully responsive, beautiful 3-D personal portfolio website using React, Tailwind CSS and Three.js. This includes various 3d models and basic animations.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portflio,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };