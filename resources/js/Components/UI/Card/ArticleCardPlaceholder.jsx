export default function ArticleCardPlaceholder() {
    return (
        <>
            <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm p-2 placeholder-glow">
            <div
                className="mb-2 rounded"
                style={{
                height: "180px",
                backgroundColor: "#dee2e6",
                }}
            ></div>

            <p className="text-muted small mb-1 placeholder col-6">Loading author...</p>

            <div className="card-body d-flex flex-column text-start p-0">
                <h5 className="card-title placeholder col-7">Loading title...</h5>
                <p className="card-text placeholder col-12">Loading description...</p>
                <div className="mt-auto placeholder col-4">Loading link...</div>
            </div>
            </div>
        </div>
        </>
    );
}