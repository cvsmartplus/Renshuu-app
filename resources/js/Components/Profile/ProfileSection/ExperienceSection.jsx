import AddExperienceModal from "@/Components/UI/Modal/AddExperienceModal";
import ExperienceEditModal from "@/Components/UI/Modal/ExperienceEditModal";
import { formatDate } from "@/Utils/FormatDate";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";

export default function ExperienceSection({ experiences }) {
    const [showEditModal, setShowEditModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h3 className="mb-0">Pengalaman</h3>
                    <div>
                        <button 
                            className="btn btn-light p-2" 
                                onClick={() => setShowAddModal(true)}
                            type="button"
                            title="Tambah Pengalaman"
                        >
                            <FaPlus />
                        </button>
                        <button
                            className="btn btn-light"
                            onClick={() => setShowEditModal(true)}
                            type="button"
                            title="Edit Pengalaman"
                        >
                            <FiEdit />
                        </button>
                    </div>
                </div>
                    <div className="card-body">
                    {experiences.length > 0 ? (
                        experiences.map((exp, idx) => (
                            <div key={idx} className="mb-2">
                                <strong>{exp.title}</strong><br />
                                <span>{exp.company}</span><br />
                                <small>
                                    {formatDate(exp.start_date)} - {exp.end_date ? formatDate(exp.end_date) : 'Sekarang'}
                                </small>
                                <p>{exp.description}</p>
                            </div>
                        ))
                    ) : (
                        <p>-</p>
                    )}
                </div>
                {showEditModal && (
                    <ExperienceEditModal onClose={() => setShowEditModal(false)} experiences={experiences} />
                )}
                {showAddModal && (
                    <AddExperienceModal onClose={() => setShowAddModal(false)}/>
                )}
        </div>
    );
}
