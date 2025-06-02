import { useEffect, useState } from "react";
import { FaUpload } from "react-icons/fa";
import FilePreview from "../PreviewImage";

export default function UploadCvModal({ show, onClose, onFileClick }) {
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
    return () => document.body.classList.remove("modal-open");
  }, [show]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    const allowedTypes = [
      "application/pdf",                                             
      "application/msword",                                        
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document", 
      "application/rtf",                                            
      "text/plain",                                                  
      "application/vnd.oasis.opendocument.text"                     
    ];

    if (!allowedTypes.includes(selectedFile.type)) {
      setError("Hanya file PDF, DOC, DOCX, RTF, TXT, atau ODT yang diizinkan.");
      return;
    }

    const maxSize = 15 * 1024 * 1024;
    if (selectedFile.size > maxSize) {
      setError("Ukuran file terlalu besar. Maksimal 15 MB.");
      return;
    }

    setError(null);
    setFile(selectedFile);

    if (selectedFile.type === "application/pdf" ||
        selectedFile.type.startsWith("image/")) {
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
            <h5 className="modal-title">Upload CV</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            />
          </div>
          <div className="modal-body text-center">
            <p>Pilih file CV yang akan diunggah (PDF, DOC, DOCX, RTF, TXT, ODT):</p>
            <div className="d-flex flex-column gap-3">
              <button
                className="btn-brand-950 d-flex align-items-center justify-content-center gap-2"
                onClick={() => document.getElementById('fileInput').click()}
              >
                <FaUpload /> Unggah File
              </button>
              <input
                id="fileInput"
                type="file"
                style={{ display: 'none' }}
                accept=".pdf,.doc,.docx,.rtf,.txt,.odt"
                onChange={handleFileChange}
              />

              <FilePreview fileUrl={preview} fileType={file?.type || ""} />

              {error && <div className="alert alert-danger mt-3">{error}</div>}

              {file && (
                <button className="btn-brand-950 mt-3" onClick={handleUpload}>
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
