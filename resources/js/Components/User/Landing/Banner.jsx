import React from "react";
import { Link } from "@inertiajs/react";

const Banner = () => {
  return (
    <section
      className="d-flex justify-content-center align-items-center text-center py-3 py-md-5 py-xl-8"
      style={{
        minHeight: "95vh",
        overflow: "hidden",
        background: "linear-gradient(to right, #1c488c, #082f49)",
      }}
    >
      <div className="container">
        <div className="row gy-5 flex-column-reverse flex-lg-row align-items-center justify-content-between mt-5">
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center text-center text-lg-start">
            <BannerContent />
          </div>

          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <BannerImage />
          </div>
        </div>
      </div>
    </section>
  );
};

const BannerContent = () => (
  <div className="banner-content px-3 pb-5">
    <FloatingHeader />
    <FadingParagraph />
  </div>
);

const FloatingHeader = () => (
  <h1
    className="fw-bold mb-4 text-brand-50"
  >
    Raih Peluang Karir Sesuai Minat Anda
  </h1>
);

const FadingParagraph = () => (
  <p
    className="mb-5 text-brand-100"
  >
    Ribuan lowongan kerja terpercaya dari perusahaan ternama menunggumu. Daftar sekarang, mulai karirmu hari ini!
  </p>
);

const BannerImage = () => (
  <div className="position-relative mt-4 mt-lg-0 px-3 px-md-4" style={{ width: "100%", height: "500px" }}>
    <div className="position-absolute top-0 start-0 translate-middle d-none d-md-block bg-brand-400"
         style={{
           width: "80px",
           height: "80px",
           borderRadius: "10%",
           zIndex: 0,
         }}></div>

    <div className="position-absolute bottom-0 end-0 translate-middle d-none d-md-block bg-brand-500"
         style={{
           width: "100px",
           height: "100px",
           borderRadius: "10%",
           zIndex: 0,
         }}></div>

    <div className="position-absolute top-50 start-100 translate-middle d-none d-md-block bg-brand-600"
         style={{
           width: "70px",
           height: "70px",
           borderRadius: "10%",
           zIndex: 0,
         }}></div>

    <div
      className="banner-img-round position-relative"
      style={{
        backgroundImage: 'url("/assets/images/ilustration/jumbotron-banner.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "80%",
        height: "80%",
        borderRadius: "1rem",
        zIndex: 1,
      }}
    ></div>
  </div>
);


export default Banner;