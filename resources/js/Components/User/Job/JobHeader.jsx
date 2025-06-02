import React from "react";

export default function JobHeader({ job, address }) {
    return (
        <div className="row align-items-center mb-4">
            <div className="col-md-2 text-center">
                <img
                    src={job.company.logo_url || "/default-logo.png"}
                    alt={job.company.name}
                    className="img-fluid"
                    style={{ maxHeight: "80px" }}
                />
            </div>
            <div className="col-md-10">
                <h3 className="mb-2">{job.title}</h3>
                <p className="mb-1">
                    <strong>{job.company.name}</strong> [{job.category}]
                </p>
                <p className="text-muted mb-0">
                    {address.street}, {address.city}, {address.province}
                </p>
            </div>
        </div>
    );
}
