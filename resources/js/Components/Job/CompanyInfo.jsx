import React from "react";

export default function CompanyInfo({ company, address }) {
    return (
        <div className="card p-4 shadow-sm">
            <div className="row align-items-center">
                <div className="col-md-2 text-center">
                    <img
                        src={company.profile || "/default-logo.png"}
                        alt={company.name}
                        className="img-fluid"
                        style={{ maxHeight: "60px" }}
                    />
                </div>
                <div className="col-md-10">
                    <h5 className="mb-1">{company.user.name}</h5>
                    <span className="badge bg-secondary mb-2">
                        {company.employee_count || "0"} karyawan
                    </span>
                    <p className="mb-2">{company.description}</p>
                    <p className="text-muted mb-0">
                        {address.street}, {address.city}, {address.province}, {address.postal_code}
                    </p>
                    <p className="mb-0">
                        <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-darkblue">
                            {company.website}
                        </a>
                    </p>
                    <p className="mb-0">Telepon: {company.phone}</p>
                </div>
            </div>
        </div>
    );
}
