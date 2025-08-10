import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center fixed top-6 z-30`}
      aria-label="Primary navigation"
    >
      <div className="w-full flex justify-center">
        <div
          className={`flex items-center justify-between gap-6 rounded-full px-5 ${
            scrolled ? "py-2" : "py-3"
          } shadow-panel max-w-3xl w-full backdrop-blur-[16px] bg-black/30 border border-white/10`}
          style={{
            transform: "translateZ(0)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={logo}
              alt="logo"
              className="w-9 h-9 object-contain rounded-full"
            />
            <p className="text-white text-[18px] font-bold cursor-pointer flex ">
              Coder &nbsp;
              {/* <span className="sm:block hidden">Web Developer </span> */}
            </p>
          </Link>

          <ul className="list-none hidden sm:flex flex-row gap-1">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`px-5 py-2 rounded-full transition-colors ${
                  active === nav.title
                    ? "text-white bg-white/10"
                    : "text-secondary hover:text-white"
                } text-[16px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 panel-surface absolute top-24 right-0 mx-4 my-2 min-w-[220px] z-10 rounded-2xl shadow-panel backdrop-blur-[16px] bg-black/30 border border-white/10`}
              style={{ WebkitBackdropFilter: "blur(16px)" }}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title
                        ? "text-white"
                        : "text-secondary hover:text-white"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
