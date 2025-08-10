import React, { useEffect } from "react";

const ResumeModal = ({ isOpen, onClose, src }) => {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    if (isOpen) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70"
      role="dialog"
      aria-modal="true"
      aria-label="Resume preview"
    >
      <div className="glass-card w-full max-w-5xl h-[85vh] sm:h-[80vh] relative">
        <button
          className="absolute top-2 right-2 sm:top-3 sm:right-3 px-3 py-1 text-sm rounded-full bg-white/10 hover:bg-white/20"
          aria-label="Close resume preview"
          onClick={onClose}
        >
          ✕
        </button>
        <iframe
          title="Resume"
          src={src}
          className="w-full h-full rounded-glass"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ResumeModal;
