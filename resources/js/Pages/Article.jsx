import { Head, usePage } from "@inertiajs/react";
import { useState } from "react";
import Layout from "@/Layouts/Layout";
import TitlePage from "@/Components/UI/TitlePage"
import SearchFilterBar from "@/Components/UI/Filter/SearchFilterBar";
import ArticleGrids from "@/Components/UI/GridCard/ArticleGrid";

export default function Article(){
    const { articles } = usePage().props;
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("Semua");

    const filters = ["Semua", "Terbaru", "Terlama" ];
    const PageTitle = "Artikel";

    const filteredArticles = articles
        .filter(article =>
            article?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article?.description?.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (filter === "Terbaru") return new Date(b.created_at) - new Date(a.created_at);
            if (filter === "Terlama") return new Date(a.created_at) - new Date(b.created_at);
            return 0;
        });

    return (
        <Layout title="Article">
            <Head title={PageTitle} />
            <TitlePage title={PageTitle}/>
                <SearchFilterBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    filters={filters}
                    setFilter={setFilter}
                    placeholder={"Cari Artikel.."}
                />
            <ArticleGrids articles={filteredArticles} />
        </Layout>
    );
}
