import { useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { formatTimeAgo } from "@/Utils/FormatTimeStamp";
import { Link } from "@inertiajs/react";

export default function JobCard({ job }) {
    const [isBookmarked, setIsBookmarked] = useState(false);

    if (!job) return <p>Data pekerjaan tidak tersedia</p>;

    const companyName = job.company?.user?.name ?? "Perusahaan tidak ditemukan";
    const companyLogo = job.company?.profile ?? "https://via.placeholder.com/50";

    let address = {};
    try {
        address = JSON.parse(job.company.address);
    } catch (error) {
        console.error("Error parsing address:", error);
    }

    return (
        <div className="card border-1" style={{ borderRadius: "5px" }}>
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                    <div className="d-flex align-items-center">
                        <img
                            src={companyLogo}
                            style={{ width: 50, height: 50, borderRadius: "5px", objectFit: "cover" }}
                        />
                        <div className="ms-3">
                            <Link href={route("job.show", job.slug)} className="fs-5 mb-0 text-black text-decoration-none">{job.title}</Link>
                            <p className="text-muted small mb-0">{companyName}</p>
                        </div>
                    </div>
                    <button
                        className="btn p-0 border-0 bg-transparent"
                        onClick={() => setIsBookmarked(!isBookmarked)}
                        title={isBookmarked ? "Hapus dari bookmark" : "Tambah ke bookmark"}
                    >
                        {isBookmarked ? (
                            <FaBookmark size={20} className="text-blue" />
                        ) : (
                            <FaRegBookmark size={20} className="text-blue" />
                        )}
                    </button>
                </div>

                <p className="text-muted small mb-1 mt-2">{job.location}</p>

                {job.skills?.length > 0 && (
                    <div className="mb-2">
                        <strong className="d-block small text-muted mb-1">Skill:</strong>
                        <div className="d-flex flex-wrap gap-1">
                            {job.skills.map((skill) => (
                                <span key={skill.id} className="badge bg-light text-dark">
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
                <hr />
                <p className="text-muted small">{formatTimeAgo(job.created_at)}</p>
            </div>
        </div>
    );
}
