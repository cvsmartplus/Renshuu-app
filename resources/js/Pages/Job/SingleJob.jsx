import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import JobHeader from "@/Components/Job/JobHeader";
import JobInfo from "@/Components/Job/JobInfo";
import JobActions from "@/Components/Job/JobAction";
import JobDescription from "@/Components/Job/JobDescription";
import JobSkills from "@/Components/Job/JobSkill";
import CompanyInfo from "@/Components/Job/CompanyInfo";

export default function SingleJob({ job }) {
    if (!job) return <p>Data pekerjaan tidak tersedia</p>;

    let address = {};
    try {
        address = JSON.parse(job.company.address);
    } catch (error) {
        console.error("Error parsing address:", error);
    }

    const formattedPostedAt = new Date(job.posted_at).toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const formattedDeadlineAt = new Date(job.deadline_at).toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <Layout>
            <Head title={job.title} />
            <section className="py-5" style={{ backgroundColor: "#f3f6fc" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="card p-4 shadow-sm mb-4">
                                <JobHeader job={job} address={address} />
                                <JobInfo job={job} formattedPostedAt={formattedPostedAt} formattedDeadlineAt={formattedDeadlineAt} />
                                <JobActions applyUrl={job.apply_url} />
                                <JobDescription description={job.description} />
                                <JobSkills skills={job.skills} />
                            </div>
                            <CompanyInfo company={job.company} address={address} />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
