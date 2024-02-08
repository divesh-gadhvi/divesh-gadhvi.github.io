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
    tailwind,
    nodejs,
    python,
    git,
    figma,
    postman,
    chera,
    uniofmum,
    oracle,
    rutgers,
    stocksavvyai,
    ser,
    portfolio,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Developer",
      icon: web,
    },
    {
      title: "Software Engineer",
      icon: mobile,
    },
    {
      title: "Full Stack Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "Postman",
      icon: postman,
    },
  ];
  
  const experiences = [
    {
      title: "University of Mumbai",
      company_name: "Bachelor of Engineering: Electronics and Telecommunication",
      icon: uniofmum,
      iconBg: "#383E56",
      date: "August 2016 - May 2020",
      points: [
        "GPA: 3.34/4.00"
      ],
    },
    {
      title: "Associate Software Developer",
      company_name: "Oracle Financial Services Software",
      icon: oracle,
      iconBg: "#E6DEDD",
      date: "October 2020 - June 2022",
      points: [
        "Played a key role in the collaborative development and implementation of highly scalable internet banking solutions for various multinational banks in Africa, leveraging technologies like JAVA, Node.js, SQL, and web technologies like HTML5, CSS3, and JavaScript to enhance user experiences for millions of users",
        "Achieved a remarkable 95% defect-free software release through meticulous impact analysis, high-quality code writing, and unit-level to system integration testing of various system features",
        "Partnered with cross-functional teams as a full-stack developer to develop 50+ customizations based on client specifications, significantly enhancing the application's versatility",
        "Successfully resolved 80% of reported issues and played a vital role in meeting project deadlines. Achieved over 25% performance enhancement by resolving defects and bottlenecks, optimizing application efficiency and user experience",
        "Effectively managed complex SQL databases customized for generating diverse bank reports, implementing optimized queries to reduce report generation time by 25%, ensuring efficient extraction of relevant data for comprehensive and timely reports"
      ],
    },
    {
      title: "Rutgers University-New Brunswick",
      company_name: "Master of Information Technology and Analytics",
      icon: rutgers,
      iconBg: "#383E56",
      date: "September 2022 - December 2023",
      points: [
        "GPA: 3.8/4.00"
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "Chera Health",
      icon: chera,
      iconBg: "#E6DEDD",
      date: "June 2023 - August 2023",
      points: [
        "Developed and maintained React-based web applications and React Native-based mobile applications within a dynamic startup environment, leveraging industry best practices to enhance user interfaces and deliver exceptional user experiences",
        "Collaborated actively with a team of experienced software engineers, participating in code reviews, debugging, and testing, leading to a 15% reduction in software defects and ensuring the timely delivery of high-quality software products",
        "Integrated and secured 500+ API endpoints using Auth0 authentication and authorization services, ensuring the application’s security measures and safeguarding sensitive user data",
        "Executed comprehensive API testing using Postman, resulting in a 25% decrease in backend service-related issues and bugs, ensuring the reliability and functionality of the APIs and maintaining high-quality standards for the software product",
        "Contributed significantly to the full software development lifecycle (SDLC), overseeing research, design, testing, and implementation. Led iterative development, reducing delivery time by 20% and seamlessly integrating new functionality",
      ],
    },
  ];
  
  const projects = [
    {
      name: "StockSavvyAI Web Application",
      description:
        "Developed a robust Django web application with a StockPredictHQ service powered by an LSTM machine learning model, predicting stock prices based on financial data from Yahoo Finance, enhancing investment decision-making. Designed an intuitive user interface enabling easy input of desired companies and real-time visualization of predictions through interactive charts and graphs using Plotly and Matplotlib. Implemented a comprehensive dashboard feature that offers users a wealth of financial data at a glance, including key performance metrics and visualizations that make it easy to understand trends and patterns in the stock market",
      tags: [
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: stocksavvyai,
      source_code_link: "https://github.com/divesh-gadhvi/StockSavvyAI-Django-Web-Application",
    },
    {
      name: "Emotion-Based Music Recommendations",
      description:
        "Developed an intelligent system using a convolutional neural network (MLP Classifier) to recognize emotions in speech and recommended Spotify playlists based on identified emotions. Utilized the ‘librosa’ library to extract features from the sound file from the RAVDESS dataset, which is the audio-visual database of emotional speech and, performed EDA on the dataset to extract meaningful information to train the model. Explored the effect of different parameters such as model dimension, number of epochs, and partition ratio between training and test datasets on classification accuracy through experimentation and came up with an optimal accuracy up to 72%",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "machinelearning",
          color: "green-text-gradient",
        },
        {
          name: "apis",
          color: "pink-text-gradient",
        },
      ],
      image: ser,
      source_code_link: "https://github.com/divesh-gadhvi/MachineLearningProject",
    },
    {
      name: "Portfolio Website using Reactjs",
      description:
        "Developed a portfolio website using React, Three.js, React Three Fiber, TailwindCSS, and Framer Motion. The fusion of these technologies allowed me to create a harmonious blend of aesthetics, interactivity, and functionality, resulting in a standout digital portfolio. To ensure an appealing and responsive design, I utilized TailwindCSS, a versatile CSS framework known for its utility-first approach. This choice not only streamlined styling but also contributed to the overall aesthetics of the website. This portfolio website not only showcases my technical proficiency but also provides an immersive experience for visitors.",
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
          name: "framermotion",
          color: "pink-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "orange-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };