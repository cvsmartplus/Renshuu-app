import React from "react";

const GridBackground = ({ children }) => {
  return (
    <section
      className="min-vh-100 d-flex align-items-center justify-content-center position-relative"
      style={{ background: "linear-gradient(to right, #1c488c, #082f49)" }}
    >
      <div className="position-relative z-1 w-100 d-flex justify-content-center px-3">
        {children}
      </div>
    </section>
  );
};

export default GridBackground;
