import { useRef } from 'react';
import AddExperienceForm from '../Forms/AddExperienceForm';
// import AddExperienceForm from '../Forms/AddExperienceForm';

export default function AddExperienceModal({ onClose }) {
    const formRef = useRef();

    return (
        <div
            className="modal d-block"
            style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
            onClick={onClose}
        >
           <div className="modal-dialog modal-xxl modal-dialog-centered modal-dialog-scrollable" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Tambah Pendidikan</h5>
                        <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={onClose}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <AddExperienceForm ref={formRef} onClose={onClose} />
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={onClose}
                        >
                            Tutup
                        </button>
                        <button
                            type="button"
                            className="btn-brand-950"
                            onClick={() => formRef.current?.submit()}
                            disabled={formRef.current?.processing}
                        >
                            {formRef.current?.processing ? "Menyimpan..." : "Simpan"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
