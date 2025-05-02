import BioEditForm from "../Forms/BioEditForm";

export default function BioEditModal({ onClose, bio }) {
    return (
        <div className="modal d-block" style={{ backgroundColor: "rgba(0,0,0,0.6)" }} onClick={onClose}>
            <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Bio</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <BioEditForm onClose={onClose} bioValue={bio} />
                    </div>
                </div>
            </div>
        </div>
    );
}
