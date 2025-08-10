import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
// 3D Earth removed for performance
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

//template_6jplglk
//service_gt6ijg9
//CvlJmmHyQ7EoO9D68

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_gt6ijg9",
        "template_6jplglk",
        {
          from_name: form.name,
          to_name: "Sourabh Singh",
          from_email: form.email,
          to_email: "sourabhsingh8005@gmail.com",
          message: form.message,
        },
        "CvlJmmHyQ7EoO9D68"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] panel-surface p-8 rounded-panel"
      >
        <p className="text-secondary uppercase tracking-[0.2em]">
          Sign Up For Waitlist
        </p>
        <h3 className="text-white font-display text-[40px] sm:text-[52px] font-extrabold">
          We Check Every User
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="pill py-4 px-6 placeholder:text-secondary text-white rounded-full outline-none border-none font-medium bg-white/5"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="pill py-4 px-6 placeholder:text-secondary text-white rounded-full outline-none border-none font-medium bg-white/5"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="panel-surface py-4 px-6 placeholder:text-secondary text-white rounded-panel outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="px-8 py-3 rounded-full outline-none w-fit text-white font-bold btn-primary shadow-glow"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <div className="w-full h-full panel-surface rounded-panel grid-overlay relative overflow-hidden">
          <div className="absolute inset-0 bg-purple-radial opacity-60"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
