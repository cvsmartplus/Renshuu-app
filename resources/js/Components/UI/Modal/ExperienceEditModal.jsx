import { useState } from "react";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
import ExperienceEditForm from "../Forms/ExperienceEditForm";
import { Inertia } from "@inertiajs/inertia"; 

export default function ExperienceEditModal({ onClose, experiences }) {
    const [selectedExperience, setSelectedExperience] = useState(null);

    const handleDelete = (id) => {
        if (confirm("Yakin ingin menghapus pengalaman ini?")) {
            Inertia.delete(route("profile.experience.destroy", id), {
                onSuccess: () => {
                    setSelectedExperience(null);
                    onClose();
                },
            });
        }
    };

    return (
        <div className="modal d-block" style={{ backgroundColor: "rgba(0,0,0,0.6)" }} onClick={onClose}>
            <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Pengalaman</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        {!selectedExperience ? (
                            <>
                                {experiences.map((exp) => (
                                    <div
                                        key={exp.id}
                                        className="d-flex justify-content-between align-items-center border-bottom py-2"
                                    >
                                        <div>
                                            <strong>{exp.title}</strong><br />
                                            <small>{exp.company}</small>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <button
                                                className="btn-outline-darkblue"
                                                onClick={() => setSelectedExperience(exp)}
                                            >
                                                <FiEdit3 />
                                            </button>
                                            <button
                                                className="btn btn-outline-danger"
                                                onClick={() => handleDelete(exp.id)}
                                            >
                                                <FiTrash2 />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <ExperienceEditForm experience={selectedExperience} onClose={onClose} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
