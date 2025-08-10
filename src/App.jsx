import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Hero,
  Navbar,
  Tech,
  Works,
  ResumeSection,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-hero bg-cover bg-no-repeat bg-center min-h-screen grain-fallback">
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Works />
        <ResumeSection />
        <Contact />
        <div className="grain-overlay" aria-hidden="true"></div>
      </div>
    </BrowserRouter>
  );
};

export default App;
