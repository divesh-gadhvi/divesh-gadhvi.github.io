import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-hero-pattern bg-cover bg-center">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Divesh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Fullstack developer who develops <br className="sm:block hidden" />
            various web applications <br className="sm:block hidden" />
            and user interfaces
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-end pr-10 items-center">
        <a href="#about">
          <div className="w-[30px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div 
            animate={{
              y:[0,28,0]
            }}
            transition={{
              duration:1.5,
              repeat: Infinity,
              repeatTyper: 'loop'
            }}
            className="w-1.5 h-1.5 rounded-full bg-secondary mb-1"/>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
