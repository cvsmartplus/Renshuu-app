import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import BioEditModal from "@/Components/UI/Modal/BioEditModal";

export default function AboutSection({ bio }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="border rounded mb-3 p-3">
                <div className="row">
                    <div className="col-md-4">
                        <h3>Tentang</h3>
                    </div>
                    <div className="col-md-8 text-end">
                        <button
                            className="btn btn-light p-2"
                            onClick={() => setShowModal(true)}
                            type="button"
                        >
                            <FiEdit size={20} />
                        </button>
                    </div>
                </div>
                <hr />
                <p style={{ whiteSpace: "pre-line" }}>{bio}</p>
            </div>

            {showModal && <BioEditModal onClose={() => setShowModal(false)} bio={bio} />}
        </>
    );
}