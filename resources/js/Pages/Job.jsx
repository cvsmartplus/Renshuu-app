import { useState, useEffect } from 'react';
import { Head, usePage } from "@inertiajs/react";
import Layout from '@/Layouts/Layout';
import TitlePage from "@/Components/UI/TitlePage";
import SearchFilterBar from '@/Components/UI/Filter/SearchFilterBar';
import JobFilters from '@/Components/User/Job/JobFilters';
import JobList from '@/Components/User/Job/JobList';
import Pagination from '@/Components/User/Job/Pagination';

export default function Job() {
    const { Jobs } = usePage().props;
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFilter, setFilter] = useState("Semua Pekerjaan");
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 10;

    const handleTypeChange = (type) => {
        setSelectedTypes(prev =>
            prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
        );
    };

    const handleLocationChange = (location) => {
        setSelectedLocations(prev =>
            prev.includes(location) ? prev.filter(l => l !== location) : [...prev, location]
        );
    };

    const uniqueLocations = [...new Set(Jobs.map(job => job.location).filter(Boolean))];

    const categories = ["Semua Pekerjaan", ...new Set(Jobs.map(job => job.title).filter(Boolean))];

    const filteredJobs = Jobs.filter(job => {
        if (!job) return false;

        const matchesSearch = job.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            job.company?.user?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            job.location?.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory = selectedFilter === "Semua Pekerjaan" || job.title === selectedFilter;

        const matchesType = selectedTypes.length === 0 || selectedTypes.includes(job.job_model);

        const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(job.location);

        return matchesSearch && matchesCategory && matchesType && matchesLocation;
    });

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Layout>
            <Head title="Pekerjaan" />
            <TitlePage title="Pekerjaan" />

            <div className="container my-4">
                <h2 className="text-center">Cari loker di Indonesia</h2>
                <SearchFilterBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    filters={categories}
                    setFilter={setFilter}
                    placeholder="Cari nama pekerjaan, perusahaan"
                />

                <div className="row mt-4">
                    <div className="col-md-4">
                        <h3>Informasi Pekerjaan</h3>
                        <JobFilters
                            selectedTypes={selectedTypes}
                            handleTypeChange={handleTypeChange}
                            selectedLocations={selectedLocations}
                            handleLocationChange={handleLocationChange}
                            locations={uniqueLocations} 
                        />
                    </div>
                    <div className="col-md-8">
                        <h3>Lowongan Kerja</h3>
                        <JobList jobs={currentJobs} />
                        <Pagination
                            totalPages={totalPages}
                            currentPage={currentPage}
                            paginate={paginate}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
