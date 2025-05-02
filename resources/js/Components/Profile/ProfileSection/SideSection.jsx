import { getSocialIcon } from "@/Utils/socialIcons";
import { FiEdit } from "react-icons/fi";

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
        <div className="d-flex gap-2 flex-wrap">
            {validLinks.map(([platform, url]) => {
                const Icon = getSocialIcon(platform);
                return (
                    <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark fs-4"
                        title={platform.charAt(0).toUpperCase() + platform.slice(1)}
                    >
                        <Icon />
                    </a>
                );
            })}
        </div>
    );
};

export default function SideSection({ profile, auth, skills }) {
    return (
        <>
            <div className="border rounded p-3">
                <div className="row">
                    <div className="col-md-4">
                        <h3>Data Diri</h3>
                    </div>
                    <div className="col-md-8 text-end">
                        <button
                            className="btn btn-light p-2"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            type="button"
                        >
                            <FiEdit size={20} />
                        </button>
                    </div>
                </div>
                <hr />
                <div className="mb-2">
                    <strong>Email:</strong>
                    <p className="text-break">{auth?.user?.email || "-"}</p>
                </div>
                <div className="mb-2">
                    <strong>Alamat:</strong>
                    <p className="text-break">
                        {profile?.city && profile?.province
                            ? `${profile.city}, ${profile.province}`
                            : "-"}
                    </p>
                </div>
                <div className="mb-2">
                    <strong>No. Telepon:</strong>
                    <p className="text-break">{profile?.phone || "-"}</p>
                </div>
                <div className="mb-2">
                    <strong>Tanggal Lahir:</strong>
                    <p className="text-break">{formatDate(profile?.birth_date)}</p>
                </div>
                <div className="mb-2">
                    <strong>Jenis Kelamin:</strong>
                    <p className="text-break">{formatGender(profile?.gender)}</p>
                </div>
                <div className="mb-2">
                    <strong>Website:</strong>
                    <p className="text-break">
                        <a
                            href={profile?.website || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none text-darkblue"
                        >
                            {profile?.website || "-"}
                        </a>
                    </p>
                </div>
                <div className="mb-2">
                    <strong>Sosial Media:</strong>
                    {renderSocialIcons(profile?.social_links)}
                </div>
            </div>

            <div className="border rounded p-3 mt-3">
                <h3>Keahlian</h3>
                <hr />
                {Array.isArray(skills) && skills.length > 0 ? (
                    <ul>
                        {skills.map((skill, idx) => (
                            <li key={idx}>{skill.name}</li>
                        ))}
                    </ul>
                ) : (
                    <p>-</p>
                )}
            </div>
        </>
    );
}

