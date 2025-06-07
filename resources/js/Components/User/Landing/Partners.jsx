import React from "react";

const partners = [
  { src: "../images/pplg-logo.png", alt: "Pengembangan Perangkat Lunak dan Gim" },
  { src: "../images/cvsmartplus-logo.png", alt: "CV SmartPlus" },
  { src: "../images/smkn1karawang-logo.png", alt: "SMKN 1 Karawang" },
];

const Partner = () => {
  return (
    <section
      className="py-5"
      style={{ backgroundColor: "#f8fafc" }}
    >
      <div className="container">
        <h2 className="text-center fw-semibold mb-4" style={{ color: "#1e293b" }}>
          Partner Kami
        </h2>
        <div className="row justify-content-center align-items-center g-4">
          {partners.map((logo, index) => (
            <div
              key={index}
              className="col-6 col-sm-4 col-md-3 d-flex justify-content-center align-items-center"
            >
              <div
                className="bg-white rounded border shadow-sm d-flex justify-content-center align-items-center p-3 w-100"
                style={{
                  minHeight: "100px",
                  maxHeight: "120px",
                  transition: "transform 0.3s ease",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                  style={{
                    maxHeight: "80px",
                    maxWidth: "100%",
                    objectFit: "contain",
                    transition: "filter 0.3s ease",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;