import { useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { FiTrash2 } from "react-icons/fi";

export default function SkillEditModal({ onClose, skills = [] }) {
    const { delete: destroy, processing } = useForm();

    const handleDelete = (id) => {
        destroy(route("profile.skills.destroy", id), {
            preserveScroll: true,
        });
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    return (
        <div
            className="modal d-block"
            style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
            onClick={onClose}
        >
            <div
                className="modal-dialog modal-dialog-centered"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Keahlian</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        {skills.length > 0 ? (
                            <ul className="list-group">
                                {skills.map((skill) => (
                                    <li
                                        key={skill.id}
                                        className="list-group-item d-flex justify-content-between align-items-center"
                                    >
                                        {skill.name}
                                        <button
                                            className="btn btn-sm btn-outline-danger"
                                            onClick={() => handleDelete(skill.id)}
                                            disabled={processing}
                                        >
                                            <FiTrash2 />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-muted">Belum ada keahlian.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}