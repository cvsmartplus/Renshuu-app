import React from "react";

export default function JobActions({ applyUrl }) {
    return (
        <div className="mb-4">
            <a href={applyUrl} className="btn-darkblue me-2">Lamar Sekarang</a>
            <button className="btn btn-outline-secondary">Simpan</button>
        </div>
    );
}
