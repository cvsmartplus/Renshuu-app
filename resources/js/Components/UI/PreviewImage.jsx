export default function FilePreview({ fileUrl, fileType }) {
    if (!fileUrl) return null;

    return (
        <div className="mt-3">
            <p className="mb-2">Preview:</p>

            {fileType.startsWith("image/") ? (
                <img
                    src={fileUrl}
                    alt="Preview"
                    className="img-fluid rounded border"
                    style={{ maxHeight: '300px' }}
                />
            ) : fileType === "application/pdf" ? (
                <embed
                    src={fileUrl}
                    type="application/pdf"
                    width="100%"
                    height="400px"
                    className="rounded border"
                />
            ) : (
                <p className="text-muted">Tidak dapat menampilkan preview untuk tipe file ini.</p>
            )}
        </div>
    );
}