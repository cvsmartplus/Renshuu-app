import { FaExclamationTriangle } from "react-icons/fa";

export default function DocumentCard({ title, file, onUpload, onReplace, onDelete }) {
    const getStatusBadge = (status) => {
        switch (status) {
            case 'verified':
                return <span className="badge bg-success">Terverifikasi</span>;
            case 'pending':
                return <span className="badge bg-warning text-dark">Menunggu Verifikasi</span>;
            case 'rejected':
                return <span className="badge bg-danger">Ditolak</span>;
            default:
                return null;
        }
    };

    return (
        <div className="col-md-6">
            <div className="card">
                <div className="card-header bg-darkblue text-white d-flex justify-content-between align-items-center">
                    <strong>{title}</strong>
                    {file && getStatusBadge(file.status)}
                </div>

                <div className="card-body text-center">
                    <div
                        className="border p-2 rounded bg-light mb-3 d-flex align-items-center justify-content-center"
                        style={{ height: "300px" }}
                    >
                    {file?.document_path ? (
                        file.mime_type === "application/pdf" ? (
                            <embed
                                src={`/storage/${file.document_path}`}
                                type="application/pdf"
                                width="100%"
                                height="100%"
                                className="w-100 h-100 rounded border"
                            />
                        ) : (
                            <img
                                src={`/storage/${file.document_path}`}
                                alt={`Preview ${title}`}
                                className="img-fluid h-100"
                                style={{ objectFit: "contain" }}
                            />
                        )
                    ) : (
                        <span className="text-muted">Preview {title} belum tersedia</span>
                    )}
                    </div>

                    {file?.status === 'rejected' && file.rejected_reason && (
                        <div className="alert alert-danger p-2">
                            <strong>
                                <FaExclamationTriangle className="me-2" />
                            </strong> {file.rejected_reason}
                        </div>
                    )}

                    <div className="d-flex justify-content-center gap-2">
                        {!file && (
                            <button className="btn-darkblue" onClick={onUpload}>
                                Upload
                            </button>
                        )}
                        {file && (
                            <>
                                <button className="btn btn-warning" onClick={onReplace}>
                                    Ganti
                                </button>
                                <button className="btn btn-danger" onClick={onDelete}>
                                    Hapus
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}