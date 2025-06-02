import React from 'react';
import JobCard from '@/Components/UI/Card/JobCard';

export default function JobList({ jobs }) {
    return (
        <div className="row">
            {jobs.length > 0 ? (
                jobs.map((job, index) => (
                    <div key={index} className="col-md-6 mb-4">
                        <JobCard job={job} />
                    </div>
                ))
            ) : (
                <p className="text-center">Tidak ada pekerjaan yang ditemukan</p>
            )}
        </div>
    );
}
