import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import BioEditModal from "@/Components/UI/Modal/BioEditModal";

export default function AboutSection({ bio }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <div className="card mb-4 shadow-sm">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h3 className="mb-0">Tentang</h3>
                        <button
                            className="btn btn-light p-2"
                            onClick={() => setShowModal(true)}
                            type="button"
                        >
                            <FiEdit size={20} />
                    </button>
            </div>
            <div className="card-body">
                <p style={{ whiteSpace: "pre-line" }}>{bio}</p>
            </div>
        </div>
            {showModal && <BioEditModal onClose={() => setShowModal(false)} bio={bio} />}
        </>
    );
}