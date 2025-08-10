import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-full">
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.7)}
      className="panel-surface rounded-card p-8 hover:shadow-soft transition-shadow duration-300 hover-glow"
      onMouseMove={(e) => {
        const t = e.currentTarget;
        const r = t.getBoundingClientRect();
        t.style.setProperty("--x", `${e.clientX - r.left}px`);
        t.style.setProperty("--y", `${e.clientY - r.top}px`);
      }}
    >
      <img src={icon} alt={title} className="w-16 h-16 object-contain mb-4" />
      <h3 className="text-white text-[18px] font-semibold text-center">
        {title}
      </h3>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-center text-secondary uppercase tracking-[0.2em]">
          Learn How Our Platform Works
        </p>
        <h2 className="text-center font-display text-white text-[40px] sm:text-[52px] font-extrabold mt-2">
          See How We Help You!
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto text-center"
      >
        I’m a frontend-focused software development student skilled in
        TypeScript, JavaScript, React, and Next.js. I love building interactive,
        responsive interfaces using tools like Framer Motion, GSAP, and
        Locomotive Scroll. I'm a quick learner who enjoys creating smooth,
        user-friendly web experiences. Let’s bring your ideas to life!
      </motion.p>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
