import React from "react";
import { FaClock, FaMoneyBillWave, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

export default function JobInfo({ job, formattedPostedAt, formattedDeadlineAt }) {
    return (
        <div className="row mb-4">
            <div className="col-md-4 mb-2">
                <FaClock className="me-2" /> {job.employment_type}
            </div>
            <div className="col-md-4 mb-2">
                <FaMoneyBillWave className="me-2" />
                {`Rp ${new Intl.NumberFormat('id-ID').format(job.salary_min)} - Rp ${new Intl.NumberFormat('id-ID').format(job.salary_max)}`}
            </div>
            <br/>
            <div className="col-md-4 mb-2">
                <FaMapMarkerAlt className="me-2" /> {job.location}
            </div>
            <div className="col-md-4 mb-2">
                <FaCalendarAlt className="me-2" />
                Diposting: {formattedPostedAt} | Deadline: {formattedDeadlineAt}
            </div>
        </div>
    );
}
