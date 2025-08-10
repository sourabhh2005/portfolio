import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[100vh] mx-auto bg-hero overflow-hidden">
      <div
        className={`relative z-10 max-w-7xl mx-auto ${styles.paddingX} pt-28 sm:pt-36 pb-16 sm:pb-20`}
      >
        <div className="panel-surface grid grid-cols-1 lg:grid-cols-[1fr_520px] items-center gap-8 sm:gap-10 p-6 sm:p-10 rounded-panel bg-hero-gradient/0">
          <div className="flex flex-col gap-5 sm:gap-6">
            <h1 className="font-display font-extrabold text-white text-[32px] xs:text-[36px] sm:text-[48px] md:text-[56px] lg:text-[62px] leading-[1.08]">
              {/* Mobile/XS line-break composition */}
              <span className="sm:hidden block">
                Hi, I’m
                <br />
                Sourabh Singh
                <br />
                <span className="text-white">
                  a Professional Coder & Developer
                </span>
              </span>
              {/* Default/PC composition */}
              <span className="hidden sm:block">
                Hi, I’m <br />
                Sourabh Singh
                <span className="text-white">
                  {" "}
                  a Professional Coder & Developer
                </span>
              </span>
            </h1>
            <p className="text-secondary max-w-xl text-base sm:text-lg">
              I love crafting modern UIs and enterprise apps, blending
              problem‑solving with a passion for innovation.
            </p>

            <div className="hidden" />
          </div>

          <div className="relative w-full grid place-items-center">
            <div className="panel-surface w-full h-full rounded-panel p-4 sm:p-6 relative overflow-hidden shadow-soft flex items-center justify-center">
              <div className="absolute inset-0 pointer-events-none bg-purple-radial opacity-70 rounded-panel"></div>
              <div className="relative w-[72%] sm:w-[78%] max-w-[420px] aspect-square rounded-full overflow-hidden border border-white/10 shadow-[0_30px_100px_rgba(96,55,255,0.30)]">
                <img
                  src="/src/assets/character.png"
                  alt="Sourabh portrait"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
