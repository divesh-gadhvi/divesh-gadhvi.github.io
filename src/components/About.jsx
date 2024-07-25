import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

import { photo, resume } from "../assets";
import SocialLinks from "./SocialLinks";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <div className="flex flex-wrap gap-10">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary justify-around text-[18px] max-w-2xl leading-[30px]"
        >
          I'm Divesh, an enthusiastic and innovative Full Stack Developer driven
          by a passion for crafting imaginative digital solutions. Equipped with
          a comprehensive grasp of both front-end and back-end development, I
          approach my work with a holistic mindset, dedicated to designing
          seamless user experiences that captivate and immerse.
          <br></br>
          <br></br>
          From React-based web applications to robust backend systems, I have made
          significant contributions to enhancing user interfaces and delivering 
          exceptional user experiences. My tenure at Oracle was marked by
          pivotal contributions to scalable internet banking solutions for
          global banks, harnessing a blend of technologies like Java/J2EE, Python, 
          Node.js, SQL, and frontend tools such as HTML5, CSS3, JavaScript, and Angular. 
          I thrive as a relentless problem solver, constantly seeking out novel
          challenges that encourage me to push boundaries. Combining technical
          excellence with collaborative teamwork, I bring proactive
          problem-solving skills to every project, making me a Full Stack
          Developer positioned to deliver meaningful solutions.
        </motion.p>
        <Tilt className="image flex flex-col justify-center items-center w-[30%]">
          {" "}
          {/* Adjust width */}
          <img
            style={{ borderRadius: "50%", height: "18rem", width: "18rem" }}
            src={photo}
            alt=""
          />
          <br></br>
          <p style={{ width: "100%", textAlign: "center" }}>
            <a target="_blank" style={{ fontSize: "1.2em" }} href={resume}>
              <b>View Resume</b>
            </a>
          </p>
        </Tilt>
      </div>
      <div className="mt-20 flex flex-warp gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
