import { useEffect, useState } from "react";
import { FaCamera, FaUpload } from "react-icons/fa";
import FilePreview from "../PreviewImage";

export default function UploadKtpModal({ show, onClose, onCameraClick, onFileClick }) {
    const [error, setError] = useState(null);
    const [preview, setPreview] = useState(null);
    const [file, setFile] = useState(null);

    useEffect(() => {
        if (show) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
            setPreview(null);
            setFile(null);
            setError(null);
        }

        return () => {
            document.body.classList.remove("modal-open");
        };
    }, [show]);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) return;
    
        const allowedExtensions = ['image/png', 'image/jpg', 'image/jpeg', 'application/pdf'];
        if (!allowedExtensions.includes(selectedFile.type)) {
            setError("Hanya file PNG, JPG, JPEG, atau PDF yang diizinkan.");
            return;
        }
    
        const maxSize = 5 * 1024 * 1024;
        if (selectedFile.size > maxSize) {
            setError("Ukuran file terlalu besar. Maksimal 5 MB.");
            return;
        }
    
        setError(null);
        setFile(selectedFile);
    
        if (
            selectedFile.type.startsWith("image/") ||
            selectedFile.type === "application/pdf"
        ) {
            setPreview(URL.createObjectURL(selectedFile));
        } else {
            setPreview(null);
        }
    };
    

    const handleUpload = () => {
        if (!file) {
            setError("Silakan pilih file terlebih dahulu.");
            return;
        }

        onFileClick(file);
        setPreview(null);
        setFile(null);
    };

    if (!show) return null;

    return (
        <div
            className="modal fade show d-block"
            role="dialog"
            aria-modal="true"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            onClick={onClose}
        >
            <div
                className="modal-dialog modal-dialog-centered"
                role="document"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Upload KTP</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body text-center">
                        <p>Pilih metode upload KTP:</p>
                        <div className="d-flex flex-column gap-3">
                            <button
                                className="btn-darkblue d-flex align-items-center justify-content-center gap-2"
                                onClick={onCameraClick}
                            >
                                <FaCamera /> Gunakan Kamera
                            </button>
                            <button
                                className="btn btn-secondary d-flex align-items-center justify-content-center gap-2"
                                onClick={() => document.getElementById('fileInput').click()}
                            >
                                <FaUpload /> Unggah File
                            </button>
                            <input
                                id="fileInput"
                                type="file"
                                style={{ display: 'none' }}
                                accept="image/png, image/jpeg, application/pdf"
                                onChange={handleFileChange}
                            />

                            <FilePreview fileUrl={preview} fileType={file?.type || ""} />

                            {error && <div className="alert alert-danger mt-3">{error}</div>}

                            {file && (
                                <button className="btn-darkblue mt-3" onClick={handleUpload}>
                                    Simpan dan Unggah
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
