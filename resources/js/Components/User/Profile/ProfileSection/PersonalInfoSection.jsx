import { getSocialIcon } from "@/Utils/socialIcons";
import { FiEdit } from "react-icons/fi";
import { Link } from "@inertiajs/react";

const formatGender = (gender) => {
    if (gender === "male") return "Laki-laki";
    if (gender === "female") return "Perempuan";
    if (gender === "other") return "Lainnya";
    return "-";
};

const formatDate = (isoDate) => {
    if (!isoDate) return "-";
    const date = new Date(isoDate);
    return new Intl.DateTimeFormat("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(date);
};

const renderSocialIcons = (socialLinks) => {
    if (typeof socialLinks === "string") {
        try {
            socialLinks = JSON.parse(socialLinks);
        } catch (e) {
            console.error("Invalid JSON in socialLinks:", e);
            return <p>-</p>;
        }
    }

    if (!socialLinks || typeof socialLinks !== "object") {
        return <p>-</p>;
    }

    const validLinks = Object.entries(socialLinks).filter(
        ([, url]) => typeof url === "string" && url.trim() !== ""
    );

    if (validLinks.length === 0) {
        return <p>-</p>;
    }

    return (
        <div className="d-flex flex-wrap gap-3 mt-2">
            {validLinks.map(([platform, url]) => {
                const Icon = getSocialIcon(platform);
                return (
                    <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark fs-5"
                        title={platform.charAt(0).toUpperCase() + platform.slice(1)}
                    >
                        <Icon />
                    </a>
                );
            })}
        </div>
    );
};

export default function PersonalInfoSection({ profile, auth }) {
    return (
        <div className="card shadow-sm mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h3 className="mb-0">Data Diri</h3>
                <Link
                    href={route("profile.settings")}
                    className="btn btn-light p-2"
                    title="Edit Profil"
                >
                    <FiEdit />
                </Link>
            </div>
            <div className="card-body">
                <div className="mb-3"><strong>Email:</strong><p className="mb-0 text-break">{auth?.user?.email || "-"}</p></div>
                <div className="mb-3"><strong>Alamat:</strong><p className="mb-0 text-break">{profile?.city && profile?.province ? `${profile.city}, ${profile.province}` : "-"}</p></div>
                <div className="mb-3"><strong>No. Telepon:</strong><p className="mb-0 text-break">{profile?.phone || "-"}</p></div>
                <div className="mb-3"><strong>Tanggal Lahir:</strong><p className="mb-0">{formatDate(profile?.birth_date)}</p></div>
                <div className="mb-3"><strong>Jenis Kelamin:</strong><p className="mb-0">{formatGender(profile?.gender)}</p></div>
                <div className="mb-3"><strong>Website:</strong>
                    <p className="mb-0">
                        <a href={profile?.website || "#"} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-brand-950">
                            {profile?.website || "-"}
                        </a>
                    </p>
                </div>
                <div className="mb-2"><strong>Sosial Media:</strong>{renderSocialIcons(profile?.social_links)}</div>
            </div>
        </div>
    );
}