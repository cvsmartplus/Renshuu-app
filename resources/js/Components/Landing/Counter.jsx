import React, { useRef } from "react";
import CountUp from "react-countup";

const Counter = () => {
  const counterData = [
    { id: 1, icon: "fas fa-user-graduate", title: 200, suffix: "k", text: "Pelajar" },
    { id: 2, icon: "fas fa-chalkboard-teacher", title: 120, suffix: "+", text: "Kursus Online" },
    { id: 3, icon: "fas fa-smile", title: 100, suffix: "%", text: "Kepuasan" },
  ];

  return (
    <section className="d-flex flex-column justify-content-center" style={{ minHeight: "50vh" }}>
      <div className="container">
        <div className="row justify-content-center text-center text-xl-start">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <h2 className="fs-1 fw-bold">Kenapa harus bergabung dengan kami?</h2>
          </div>
          <div className="col-lg-7">
            <div className="row g-3 g-md-4">
              {counterData.map((data) => (
                <Card key={data.id} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ data }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    const rotateX = y * 10;
    const rotateY = -x * 10;
    const shadowX = x * 20; 
    const shadowY = y * 20;

    requestAnimationFrame(() => {
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      card.style.boxShadow = `${shadowX}px ${shadowY}px 30px rgba(0, 0, 0, 0.15)`;
    });
  };

  const handleMouseLeave = () => {
    requestAnimationFrame(() => {
      if (cardRef.current) {
        cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        cardRef.current.style.boxShadow = "0px 0px 20px rgba(0, 0, 0, 0.1)";
      }
    });
  };

  return (
    <div className="col-12 col-md-4">
      <div
        ref={cardRef}
        className="p-4 text-dark bg-white rounded d-flex flex-column align-items-center justify-content-center"
        style={{
          minHeight: "220px",
          transition: "transform 0.15s ease-out, box-shadow 0.15s ease-out",
          willChange: "transform, box-shadow",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <i className={`${data.icon} fa-3x mb-3 text-dark`}></i>
        <div className="h2">
          <CountUp end={data.title} enableScrollSpy />
          <span> {data.suffix}</span>
        </div>
        <p className="mb-0">{data.text}</p>
      </div>
    </div>
  );
};

export default Counter;
