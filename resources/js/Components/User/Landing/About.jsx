import React from 'react';
import { FaBriefcase, FaMagic, FaLaptopCode } from 'react-icons/fa';

export default function AboutUs() {
    return (
        <section id="about" className="py-5 bg-brand-100" style={{ scrollMarginTop: "80px" }}>
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-lg-6">
                        <img
                            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                            alt="Ilustrasi Renshuu"
                            className="img-fluid rounded-4 shadow"
                        />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="fw-bold mb-4 text-brand-950">Kenali Renshuu</h2>
                        <p className="text-brand-900 mb-3">
                            Platform pencarian kerja cerdas dari <strong>CV SmartPlus Indonesia</strong>, dirancang untuk mempermudah Anda menemukan peluang terbaik.
                        </p>
                        <div className="d-flex flex-column gap-3 mb-4">
                            <div className="d-flex align-items-center">
                                <FaBriefcase className="me-3 text-brand-900 fs-5" />
                                <span className="text-brand-800">Lowongan kerja terpercaya & terkini</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <FaMagic className="me-3 text-brand-900 fs-5" />
                                <span className="text-brand-800">Sistem kurasi pintar sesuai profil Anda</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <FaLaptopCode className="me-3 text-brand-900 fs-5" />
                                <span className="text-brand-800">Antarmuka modern & mudah digunakan</span>
                            </div>
                        </div>
                        <a
                            href="#jobs"
                            className="btn btn-brand-950 text-white px-4 py-2 rounded"
                        >
                            Telusuri Lowongan
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}