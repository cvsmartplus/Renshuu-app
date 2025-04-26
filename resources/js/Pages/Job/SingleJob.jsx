import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { FaUser, FaClock, FaMoneyBillWave, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

export default function SingleJob({ job }) {
    if (!job) return <p>Data pekerjaan tidak tersedia</p>;

    let address = {};
    try {
        address = JSON.parse(job.company.address);
    } catch (error) {
        console.error("Error parsing address:", error);
    }

    const formattedPostedAt = new Date(job.posted_at).toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const formattedDeadlineAt = new Date(job.deadline_at).toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <>
            <Layout>
                <Head title={job.title} />
                <section className="py-5" style={{ backgroundColor: "#f3f6fc" }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="card p-4 shadow-sm mb-4">
                                    <div className="row align-items-center mb-4">
                                        <div className="col-md-2 text-center">
                                            <img
                                                src={job.company.logo_url || "/default-logo.png"}
                                                alt={job.company.name}
                                                className="img-fluid"
                                                style={{ maxHeight: "80px" }}
                                            />
                                        </div>
                                        <div className="col-md-10">
                                            <h3 className="mb-2">{job.title}</h3>
                                            <p className="mb-1">
                                                <strong>{job.company.name}</strong> [{job.category}]
                                            </p>
                                            <p className="text-muted mb-0">
                                                {address.street}, {address.city}, {address.province}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col-md-4 mb-2">
                                            <FaClock className="me-2" /> {job.employment_type}
                                        </div>
                                        <div className="col-md-4 mb-2">
                                            <FaMoneyBillWave className="me-2" />
                                            {`Rp ${new Intl.NumberFormat('id-ID').format(job.salary_min)} - Rp ${new Intl.NumberFormat('id-ID').format(job.salary_max)}`}
                                        </div>
                                        <br/>
                                        <div className="col-md-4 mb-2">
                                            <FaMapMarkerAlt className="me-2" /> {job.location}
                                        </div>
                                        <div className="col-md-4 mb-2">
                                            <FaCalendarAlt className="me-2" />
                                            Diposting: {formattedPostedAt} | Deadline: {formattedDeadlineAt}
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <a href={job.apply_url} className="btn btn-primary me-2">Lamar Sekarang</a>
                                        <button className="btn btn-outline-secondary">Simpan</button>
                                    </div>

                                    <div>
                                        <h5>Deskripsi</h5>
                                        <p>{job.description}</p>
                                    </div>

                                    <div>
                                        <h5>Keahlian yang Dibutuhkan</h5>
                                        <ul>
                                            {job.skills.map((skill) => (
                                                <li key={skill.id}>{skill.name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="card p-4 shadow-sm">
                                    <div className="row align-items-center">
                                        <div className="col-md-2 text-center">
                                            <img
                                                src={job.company.logo_url || "/default-logo.png"}
                                                alt={job.company.name}
                                                className="img-fluid"
                                                style={{ maxHeight: "60px" }}
                                            />
                                        </div>
                                        <div className="col-md-10">
                                            <h5 className="mb-1">{job.company.name}</h5>
                                            <span className="badge bg-secondary mb-2">
                                                {job.company.employee_count || "0"} karyawan
                                            </span>
                                            <p className="mb-2">{job.company.description}</p>
                                            <p className="text-muted mb-0">
                                                {address.street}, {address.city}, {address.province}, {address.postal_code}
                                            </p>
                                            <p className="mb-0">
                                                <a href={job.company.website} target="_blank" rel="noopener noreferrer">
                                                    {job.company.website}
                                                </a>
                                            </p>
                                            <p className="mb-0">Telepon: {job.company.phone}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
