import React from "react";

const Partner = () => {
  return (
    <section className="d-flex flex-column align-items-center py-5 bg-brand-950">
      <h2 className="fw-bold mb-4 text-center text-brand-100">Partner Kami</h2>

      <div className="d-flex flex-wrap justify-content-center gap-4">
        {[
          { src: "../images/pplg-logo.png", alt: "Pengembangan Perangkat Lunak dan Gim" },
          { src: "../images/cvsmartplus-logo.png", alt: "CV SmartPlus" },
          { src: "../images/smkn1karawang-logo.png", alt: "SMKN 1 Karawang" },
        ].map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
            style={{
              maxWidth: "150px",
              height: "auto",
              filter: "grayscale(100%)",
              transition: "transform 0.3s ease-in-out, filter 0.3s ease-in-out",
              userSelect: "none",
              WebkitUserDrag: "none",
            }}
            onMouseEnter={(e) => {
              e.target.style.filter = "grayscale(0%)";
            }}
            onMouseLeave={(e) => {
              e.target.style.filter = "grayscale(100%)";
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Partner;
