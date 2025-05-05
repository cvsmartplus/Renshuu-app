import AddSkillModal from "@/Components/UI/Modal/AddSkillModal";
import SkillEditModal from "@/Components/UI/Modal/SkillEditModal";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

export default function SkillSection({ skills, availableSkills }) {
        const [showModal, setShowModal] = useState(false);
        const [showModalAdd, setShowModalAdd] = useState(false);
    return (
        <>
            <div className="card shadow-sm">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Keahlian</h5>
                    <div>
                        <button 
                            className="btn btn-light p-2"
                            type="button"
                            title="Tambah Keahlian"
                            onClick={() => setShowModalAdd(true)}
                        >
                            <FaPlus />
                        </button>
                        <button
                            className="btn btn-light"
                            type="button"
                            onClick={() => setShowModal(true)}
                            title="Edit Keahlian"
                        >
                            <FiEdit />
                        </button>
                    </div>
                </div>
                <div className="card-body">
                    {Array.isArray(skills) && skills.length > 0 ? (
                        <div className="d-flex flex-wrap gap-2">
                            {skills.map((skill, idx) => (
                                <span key={idx} className="badge bg-darkblue-subtle text-darkblue fw-medium px-3 py-2 rounded-pill">
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    ) : (
                        <p className="text-muted fst-italic">Belum ada keahlian.</p>
                    )}
                </div>
            </div>
            {showModal && <SkillEditModal onClose={() => setShowModal(false)} skills={skills} />}
            {showModalAdd && <AddSkillModal onClose={() => setShowModalAdd(false)} availableSkills={availableSkills}/>}
        </>
    );
}
