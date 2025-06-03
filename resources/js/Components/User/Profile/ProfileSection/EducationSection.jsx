import AddEducationModal from "@/Components/UI/Modal/AddEducationModal";
import EducationEditModal from "@/Components/UI/Modal/EducationEditModal";
import { formatDate } from "@/Utils/FormatDate";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";

export default function EducationSection({ educations }) {
    const [showEditModal, setShowEditModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [educationList, setEducationList] = useState(educations);
    const { delete: destroy } = useForm();

    const handleDeleteEducation = (id) => {
        destroy(route("profile.education.destroy", id), {
            preserveScroll: true,
            onSuccess: () => {
                setEducationList((prevList) => prevList.filter((edu) => edu.id !== id));
            },
        });
    };

    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Pendidikan</h5>
                <div>
                    <button 
                        className="btn btn-light p-2" 
                        onClick={() => setShowAddModal(true)}
                        type="button"
                        title="Tambah Pendidikan"
                    >
                        <FaPlus />
                    </button>
                    <button
                        className="btn btn-light"
                        onClick={() => setShowEditModal(true)}
                        type="button"
                        title="Edit Pendidikan"
                    >
                        <FiEdit />
                    </button>
                </div>
            </div>
            <div className="card-body">
                {educationList.length > 0 ? (
                    educationList.map((edu, idx) => (
                        <div key={idx} className="mb-4">
                            <div className="d-flex justify-content-between">
                                <h6 className="mb-1">{edu.field_of_study}</h6>
                                <span className="badge bg-light text-muted">
                                    {formatDate(edu.start_date)} - {edu.end_date ? formatDate(edu.end_date) : 'Sekarang'}
                                </span>
                            </div>
                            <div className="text-muted mb-1">
                                {edu.title} di <strong>{edu.institution}</strong>
                            </div>
                            {edu.description && (
                                <p className="mb-0">{edu.description}</p>
                            )}
                            <hr />
                        </div>
                    ))
                ) : (
                    <p className="text-muted fst-italic">Belum ada data pendidikan.</p>
                )}
            </div>

            {showEditModal && (
                <EducationEditModal 
                    onClose={() => setShowEditModal(false)} 
                    educations={educationList} 
                    onDelete={handleDeleteEducation}
                />
            )}

            {showAddModal && (
                <AddEducationModal onClose={() => setShowAddModal(false)} />
            )}
        </div>
    );
}