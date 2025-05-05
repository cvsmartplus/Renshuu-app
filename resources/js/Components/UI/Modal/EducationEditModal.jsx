import { useState } from "react";
import EducationEditForm from "../Forms/EducationEditForm";
import { FiEdit3, FiTrash2 } from "react-icons/fi";

export default function EducationEditModal({ onClose, educations, onDelete }) {
    const [selectedEducation, setSelectedEducation] = useState(null);

    const handleDelete = (id) => {
        if (window.confirm("Apakah kamu yakin ingin menghapus pendidikan ini?")) {
            onDelete(id); 
        }
    };

    return (
        <div className="modal d-block" style={{ backgroundColor: "rgba(0,0,0,0.6)" }} onClick={onClose}>
            <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Pendidikan</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        {!selectedEducation ? (
                            <>
                                {educations.map((edu) => (
                                    <div
                                        key={edu.id}
                                        className="d-flex justify-content-between align-items-center border-bottom py-2"
                                    >
                                        <div>
                                            <strong>{edu.field_of_study}</strong><br />
                                            <small>{edu.title} di {edu.institution}</small>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <button
                                                className="btn-outline-darkblue"
                                                onClick={() => setSelectedEducation(edu)}
                                            >
                                                <FiEdit3 />
                                            </button>
                                            <button
                                                className="btn btn-outline-danger"
                                                onClick={() => handleDelete(edu.id)}
                                            >
                                                <FiTrash2 />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <EducationEditForm
                                education={selectedEducation}
                                onCancel={() => setSelectedEducation(null)}
                                onClose={onClose}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}