import React, { useState } from "react";
import ResumeModal from "./ui/ResumeModal";
import resumePdf from "../assets/Sourabh_Singh_Rathore_Resume.pdf";

const ResumeSection = () => {
  const [open, setOpen] = useState(false);
  const resumePath = resumePdf;
  return (
    <section id="resume" className="max-w-5xl mx-auto px-6 py-16">
      <div className="panel-surface p-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white">Resume</h3>
          <p className="text-secondary">
            View or download my up-to-date resume.
          </p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button
            onClick={() => setOpen(true)}
            className="pill px-5 py-3 flex-1 sm:flex-none"
          >
            View
          </button>
          <a
            href={resumePath}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-full btn-primary flex-1 text-center sm:flex-none"
          >
            Download
          </a>
        </div>
      </div>
      <ResumeModal
        isOpen={open}
        onClose={() => setOpen(false)}
        src={resumePath}
      />
    </section>
  );
};

export default ResumeSection;
