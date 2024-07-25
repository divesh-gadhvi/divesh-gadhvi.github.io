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
  salesview360,
  cargorent,
  redditdataengineering,
  java,
  jdbc,
  spring,
  springboot,
  django,
  flask,
  angular,
  xml,
  graphql, 
  json, 
  ajax, 
  materialui, 
  redux,
  mysql, 
  postgresql, 
  mongodb, 
  oraclesql,
  linux, 
  eclipse, 
  androidstudio, 
  aws, 
  jenkins, 
  kubernetes,
  docker
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
    name: "Java",
    icon: java,
    category: "Languages & Frameworks"
  },
  {
    name: "JDBC",
    icon: jdbc,
    category: "Languages & Frameworks"
  },
  {
    name: "Spring",
    icon: spring,
    category: "Languages & Frameworks"
  },
  {
    name: "Springboot",
    icon: springboot,
    category: "Languages & Frameworks"
  },
  {
    name: "Python",
    icon: python,
    category: "Languages & Frameworks"
  },
  {
    name: "Django",
    icon: django,
    category: "Languages & Frameworks"
  },
  {
    name: "Flask",
    icon: flask,
    category: "Languages & Frameworks"
  },
  {
    name: "Node JS",
    icon: nodejs,
    category: "Languages & Frameworks"
  },
  {
    name: "HTML",
    icon: html,
    category: "Web Technologies"
  },
  {
    name: "CSS",
    icon: css,
    category: "Web Technologies"
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    category: "Web Technologies"
  },
  {
    name: "JavaScript",
    icon: javascript,
    category: "Languages & Frameworks"
  },
  {
    name: "TypeScript",
    icon: typescript,
    category: "Languages & Frameworks"
  },
  {
    name: "React JS",
    icon: reactjs,
    category: "Web Technologies"
  },
  {
    name: "Angular",
    icon: angular,
    category: "Web Technologies"
  },
  {
    name: "XML/XSLT",
    icon: xml,
    category: "Web Technologies"
  },
  {
    name: "GraphQL",
    icon: graphql,
    category: "Web Technologies"
  },
  {
    name: "JSON",
    icon: json,
    category: "Web Technologies"
  },
  {
    name: "AJAX",
    icon: ajax,
    category: "Web Technologies"
  },
  {
    name: "Material UI",
    icon: materialui,
    category: "Web Technologies"
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    category: "Web Technologies"
  },
  {
    name: "MySQL",
    icon: mysql,
    category: "Databases"
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
    category: "Databases"
  },
  {
    name: "MongoDB",
    icon: mongodb,
    category: "Databases"
  },
  {
    name: "Oracle SQL",
    icon: oraclesql,
    category: "Databases"
  },
  {
    name: "Linux",
    icon: linux,
    category: "Tools & Platforms"
  },
  {
    name: "Eclipse",
    icon: eclipse,
    category: "Tools & Platforms"
  },
  {
    name: "Android Studio",
    icon: androidstudio,
    category: "Tools & Platforms"
  },
  {
    name: "Figma",
    icon: figma,
    category: "Tools & Platforms"
  },
  {
    name: "AWS",
    icon: aws,
    category: "Tools & Platforms"
  },
  {
    name: "Jenkins",
    icon: jenkins,
    category: "Tools & Platforms"
  },
  {
    name: "Docker",
    icon: docker,
    category: "Tools & Platforms"
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
    category: "Tools & Platforms"
  },
  {
    name: "Postman",
    icon: postman,
    category: "Tools & Platforms"
  },
  {
    name: "GIT",
    icon: git,
    category: "Tools & Platforms"
  },
];

const experiences = [
  {
    title: "Graduate Research Assistant",
    company_name: "Rutgers University",
    icon: rutgers,
    iconBg: "#383E56",
    date: "November 2023 - Present",
    points: [
      "Developed an automated script for systematically retrieving the 10-K filings (comprehensive annual reports on financial performance) submitted by multiple companies during the fiscal year 2020.",
      "Conducted in-depth text analysis on each extracted 10-K filing, to identify and assess any mentions or discussions related to labor. Additionally, implemented sentiment analysis techniques to gauge the overall tone and attitudes expressed in the labor-related content.",
      "Currently working on the extraction of Human Capital Disclosures from the 10-K filings."
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
  {
    title: "Rutgers University-New Brunswick",
    company_name: "Master of Information Technology and Analytics",
    icon: rutgers,
    iconBg: "#383E56",
    date: "September 2022 - December 2023",
    points: [
      "GPA: 3.8/4.00",
      "Coursework: Data Structures and Algorithms, Software Engineering for Web Development, Analytics for Business Intelligence, Algorithmic Machine Learning, Neural Network and Deep Learning, Information Security"
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
      "Utilized Java's multi-layer architecture to design and develop modular and maintainable applications, partitioning responsibilities into distinct layers such as presentation, business logic, service and data access, ensuring a modular and maintainable codebase",
      "Achieved a remarkable 95% defect-free software release through meticulous impact analysis, high-quality code writing, and unit-level to system integration testing of various system features",
      "Partnered with cross-functional teams as a full-stack developer to develop 50+ customizations based on client specifications, significantly enhancing the application's versatility",
      "Successfully resolved 80% of reported issues and played a vital role in meeting project deadlines. Achieved over 25% performance enhancement by resolving defects and bottlenecks, optimizing application efficiency and user experience",
      "Effectively managed complex SQL databases customized for generating diverse bank reports, implementing optimized queries to reduce report generation time by 25%, ensuring efficient extraction of relevant data for comprehensive and timely reports"
    ],
  },
  {
    title: "University of Mumbai",
    company_name: "Bachelor of Engineering: Electronics and Telecommunication",
    icon: uniofmum,
    iconBg: "#383E56",
    date: "August 2016 - May 2020",
    points: [
      "GPA: 3.34/4.00",
      "Coursework: Circuit Theory and Networks, Electronic Devices and Circuits, Microprocessor and Peripherals Interfacing, Microcontrollers and Applications, Optical Communications, Computer Communication Network "
    ],
  }
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
    name: "SalesView360 - Ecommerce Admin Dashboard",
    description:
      "Spearheaded the development of SalesView360, a comprehensive admin dashboard application for ecommerce, utilizing the MERN stack to demonstrate proficiency in full-stack development, data management, and user interface design. Implemented server-side pagination and MongoDB aggregate calls to boost data retrieval efficiency by 30%. Orchestrated a responsive user interface with React.js and Material UI to ensure seamless usability and user satisfaction. Integrated dynamic data visualizations with technologies like Nivo and Chart.js, offering intuitive insights for informed decision-making.",
    tags: [
      {
        name: "mernstack",
        color: "blue-text-gradient",
      },
      {
        name: "datavisualization",
        color: "green-text-gradient",
      },
      {
        name: "fullstack",
        color: "orange-text-gradient",
      },
    ],
    image: salesview360,
    source_code_link: "https://github.com/divesh-gadhvi/FullStack-Ecommerce-Admin",
  },
  {
    name: "CarGoRent - Car Rental Application",
    description:
      "Independently developed and designed the CarGoRent application, demonstrating proficiency in full-stack development with technologies like Spring Boot, Angular, Ng Zorro, and MySQL. Achieved a codebase size of 10,000+ lines, showcasing extensive coding skills and project management abilities. Implemented advanced security features such as JWT authentication and CORS configuration, reducing potential security vulnerabilities by 30% and ensuring a robust and secure application environment from the ground up",
    tags: [
      {
        name: "springboot",
        color: "blue-text-gradient",
      },
      {
        name: "angular",
        color: "orange-text-gradient",
      },
      {
        name: "authentication",
        color: "pink-text-gradient",
      },
    ],
    image: cargorent,
    source_code_link: "https://github.com/divesh-gadhvi/Car_Rental_FullStack",
  },
  {
    name: "Reddit Data Pipeline Engineering",
    description:
      "Engineered a comprehensive ETL pipeline using Apache Airflow, Celery, and AWS services, achieving a 40% improvement in data processing efficiency by automating data extraction from Reddit and optimizing data transformation workflows. Successfully implemented a scalable data warehouse solution with Amazon Redshift, enabling real-time analytics and reducing query response times by 50% through optimized data storage and retrieval strategies.",
    tags: [
      {
        name: "dataengineering",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
      {
        name: "airflow",
        color: "pink-text-gradient",
      },
      {
        name: "redditapi",
        color: "orange-text-gradient",
      },
    ],
    image: redditdataengineering,
    source_code_link: "https://github.com/divesh-gadhvi/Reddit-Data-Pipeline-Engineering",
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