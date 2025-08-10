import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="panel-surface p-8 sm:p-10 rounded-panel grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 place-items-center">
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className="panel-surface hover:shadow-soft transition-shadow duration-300 hover-glow w-22 h-22 sm:w-24 sm:h-24 flex items-center justify-center"
          onMouseMove={(e) => {
            const t = e.currentTarget;
            const r = t.getBoundingClientRect();
            t.style.setProperty("--x", `${e.clientX - r.left}px`);
            t.style.setProperty("--y", `${e.clientY - r.top}px`);
          }}
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
