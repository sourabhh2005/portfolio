import React from "react";

const GlassCard = ({ as: Tag = "div", className = "", children, ...props }) => {
  return (
    <Tag
      className={`glass-card focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C084FC] focus-visible:ring-offset-black ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default GlassCard;


