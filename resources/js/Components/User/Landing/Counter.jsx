import React, { useRef } from "react";
import CountUp from "react-countup";
import { FaShieldAlt, FaUserTie, FaHandshake } from "react-icons/fa";

const Counter = () => {
  const counterData = [
    {
      id: 1,
      icon: <FaShieldAlt size={32} />,
      title: 99,
      suffix: "%",
      text: "Keamanan & Privasi Terjamin",
    },
    {
      id: 2,
      icon: <FaUserTie size={32} />,
      title: 30000,
      suffix: "+",
      text: "Profesional Terhubung",
    },
    {
      id: 3,
      icon: <FaHandshake size={32} />,
      title: 1200,
      suffix: "+",
      text: "Perusahaan Rekanan",
    },
  ];

  return (
    <section
      className="d-flex flex-column justify-content-center py-5"
      style={{
        background: "linear-gradient(to right, #1c488c, #082f49)",
      }}
    >
      <div className="container text-center text-white">
        <h6 className="text-light mb-2">Kenapa Memilih Renshuu?</h6>
        <h2 className="fw-bold mb-4">
          Platform terpercaya untuk membangun <br /> masa depan karier Anda
        </h2>
        <div className="row g-4 justify-content-center">
          {counterData.map((data) => (
            <Card key={data.id} data={data} />
          ))}
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
    const shadowX = x * 30;
    const shadowY = y * 30;

    requestAnimationFrame(() => {
      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      card.style.boxShadow = `${shadowX}px ${shadowY}px 40px rgba(0, 0, 0, 0.15)`;
    });
  };

  const handleMouseLeave = () => {
    requestAnimationFrame(() => {
      if (cardRef.current) {
        cardRef.current.style.transform =
          "perspective(1200px) rotateX(0deg) rotateY(0deg)";
        cardRef.current.style.boxShadow =
          "0px 0px 30px rgba(0, 0, 0, 0.05)";
      }
    });
  };

  return (
    <div className="col-12 col-md-4">
      <div
        ref={cardRef}
        className="p-4 shadow-lg text-white text-center"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: '2%',
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          willChange: "transform, box-shadow",
          minHeight: "250px",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="d-inline-flex align-items-center justify-content-center mb-3"
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #217def 0%, #379cfa 100%)",
            boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
          }}
        >
          <span className="text-white">{data.icon}</span>
        </div>
        <div className="h1 fw-bold mb-2">
          <CountUp end={data.title} enableScrollSpy duration={2} />
          <span className="fs-3 ms-1">{data.suffix}</span>
        </div>
        <p className="fs-5 text-light">{data.text}</p>
      </div>
    </div>
  );
};

export default Counter;