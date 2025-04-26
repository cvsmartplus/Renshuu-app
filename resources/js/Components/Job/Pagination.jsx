import React from 'react';

export default function Pagination({ totalPages, currentPage, paginate }) {
    return (
        <div className="btn-toolbar mt-3 justify-content-center" role="toolbar" aria-label="Pagination">
            <div className="btn-group" role="group" aria-label="Page navigation">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        className={`btn btn-outline-secondary ${currentPage === index + 1 ? 'active' : ''}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}
