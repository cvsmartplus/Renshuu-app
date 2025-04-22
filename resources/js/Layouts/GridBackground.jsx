import React from "react";

const GridBackground = ({ children }) => {
  return (
    <div className="grid-container">
      <div className="grid-overlay">
        {Array.from({ length: 2000 }).map((_, index) => (
          <div key={index} className="grid-box"></div>
        ))}
      </div>
      <div className="grid-content">{children}</div>
    </div>
  );
};

export default GridBackground;
