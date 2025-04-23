import BackButton from "@/Components/UI/BackButton";
import CourseCard from "@/Components/UI/Card/CourseCard";
import SideCardCourse from "@/Components/UI/Card/SideCardCourse";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGlobe } from "react-icons/fa";

export default function SingleCourse({ course, relatedCourses, trainer }) {
    const [activeTab, setActiveTab] = useState("deskripsi");

    // Fungsi untuk memilih ikon berdasarkan platform
    const getSocialIcon = (platform) => {
        switch (platform.toLowerCase()) {
            case "facebook":
                return <FaFacebook className="text-primary" />;
            case "twitter":
                return <FaTwitter className="text-info" />;
            case "linkedin":
                return <FaLinkedin className="text-primary" />;
            case "instagram":
                return <FaInstagram className="text-danger" />;
            default:
                return <FaGlobe className="text-secondary" />;
        }
    };

    return (
        <Layout>
            <Head title={course.title} />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-8 col-md-7 col-12 mb-4">
                        <BackButton />
                        <h2 className="fw-bold">{course.title}</h2>

                        <ul className="nav nav-tabs mt-3">
                            {['deskripsi', 'pemateri'].map(tab => (
                                <li className="nav-item" key={tab}>
                                    <button
                                        className={`nav-link ${activeTab === tab ? "active" : "text-secondary"}`}
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-3">
                            {activeTab === "deskripsi" ? (
                                <p>{course.description}</p>
                            ) : trainer ? (
                                <div>
                                    <h3>Pemateri</h3>
                                    <div className="d-flex align-items-center mt-3">
                                        <img
                                            src={trainer.image || "https://via.placeholder.com/80"}
                                            alt={trainer.name}
                                            className="rounded-circle me-3"
                                            width="80"
                                            height="80"
                                        />
                                        <div>
                                            <h4>{trainer.name}</h4>
                                            <p>{trainer.description}</p>
                                            <p>Email: {trainer.email}</p>
                                            <p>Phone: {trainer.phone}</p>

                                            {trainer.social_links && (
                                                <div className="mt-2 d-flex">
                                                    {Object.entries(trainer.social_links).map(([platform, link]) => (
                                                        <a
                                                            key={platform}
                                                            href={link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="me-3"
                                                        >
                                                            {getSocialIcon(platform)}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <p>Tidak ada informasi pemateri</p>
                            )}
                        </div>
                    </div>
                    <SideCardCourse course={course} />
                </div>

                {relatedCourses.length > 0 && (
                    <div className="container my-5">
                        <h2 className="fw-bold mb-4">Kursus Terkait</h2>
                        <div className="row g-3">
                            {relatedCourses.map((relatedCourse) => (
                                <div key={relatedCourse.id} className="col-lg-3 col-md-3 col-sm-4 col-10">
                                    <CourseCard course={relatedCourse} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
}
