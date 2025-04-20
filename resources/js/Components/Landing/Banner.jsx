import React from "react";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      className="d-flex align-items-center justify-content-center text-center py-3 py-md-5 py-xl-8 sidebar"
      style={{ minHeight: "85vh", overflow: "hidden" }}
    >
      <div className="container">
        <div className="row gy-4 align-items-center justify-content-center text-md-start mb-5">
          <BannerContent />
          <BannerImage />
        </div>
      </div>
    </section>
  );
};

const BannerContent = () => (
  <motion.div
    className="col-12 col-md-10 col-lg-6 text-center text-lg-start"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <div className="banner-content px-3 px-md-4">
      <FloatingHeader />
      <FadingParagraph />
      <CTAButton />
    </div>
  </motion.div>
);

const FloatingHeader = () => (
  <motion.h1
    className="fw-bold mb-4"
    animate={{ y: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
  >
    <span className="d-block text-jost fw-bold" style={{ fontSize: "2.5rem", lineHeight: "1.2" }}>
    Raih Peluang Karir dan 
    </span>
    <span className="d-block text-jost" style={{ fontSize: "1.5rem", color: "#555" }}>
    Tingkatkan Keahlian Anda
    </span>
  </motion.h1>
);

const FadingParagraph = () => (
  <motion.p
    className="mb-5"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
    style={{ fontSize: "1rem", color: "#777" }}
  >
    Temukan pekerjaan yang sesuai dengan keinginan Anda sambil memperkaya keterampilan melalui kursus-kursus kami
  </motion.p>
);

const CTAButton = () => (
  <motion.div
    whileTap={{ scale: 1 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    <Link
      className="link-cta py-3 px-5 rounded"
      href="/"
      style={{
        boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
        backgroundColor: "#062A78",
        color: "#fff",
        textDecoration: "none",
        transition: "all 0.3s ease-in-out",
      }}
    >
      Jelajahi Lebih Lanjut
    </Link>
  </motion.div>
);

const BannerImage = () => (
  <motion.div
    className="col-12 col-md-10 col-lg-6 d-flex justify-content-center"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <div className="banner-img-round mt-4 mt-lg-0 px-3 px-md-4">
      <motion.img
        src="/images/assets/banner.png"
        alt="Banner"
        className="img-fluid w-100 h-auto"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ maxWidth: "500px" }}
      />
    </div>
  </motion.div>
);

export default Banner;
