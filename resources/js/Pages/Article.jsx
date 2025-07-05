import { Head, Link } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import SearchFilterBar from "@/Components/UI/Filter/SearchFilterBar";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";
import ArticleCard from "@/Components/UI/Card/ArticleCard";
import ArticleCardPlaceholder from "@/Components/UI/Card/ArticleCardPlaceholder";

export default function Article() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchArticles = async () => {
        try {
                await api.get("/csrf-cookie");
                const response = await api.get("/articles");
                setArticles(response.data.data.articles);
            } catch (error) {
                console.error("Gagal fetch articles:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    return (
        <Layout>
            <Head title="Artikel" />

            <section className="text-light position-relative">
                <div
                    className="position-relative"
                    style={{
                        background: "linear-gradient(to right, #1c488c, #082f49)",
                        padding: "15vh 0",
                        overflow: "hidden",
                    }}
                >
                    <div
                        className="d-none d-md-block"
                        style={{
                            position: "absolute",
                            bottom: -100,
                            right: -100,
                            width: "450px",
                            height: "450px",
                            rotate: "-35deg",
                            backgroundImage: "url('/assets/images/ilustration/articles-visual.svg')",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            opacity: 0.3,
                            pointerEvents: "none",
                        }}
                    ></div>

                    <div className="container">
                        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-4">
                            <div className="flex-fill">
                                <h1 className="text-start mb-4 fs-1">
                                    Temukan Berbagai Artikel Menarik
                                </h1>

                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link
                                                href={route("welcome")}
                                                className="text-light text-decoration-none"
                                            >
                                                Beranda
                                            </Link>
                                        </li>
                                        <li
                                            className="breadcrumb-item active text-light"
                                            aria-current="page"
                                        >
                                            Artikel
                                        </li>
                                    </ol>
                                </nav>

                                <SearchFilterBar/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-3">
                    <div className="row">
                    {loading
                        ? Array.from({ length: 4 }).map((_, i) => <ArticleCardPlaceholder key={i} />)
                        :   articles 
                                ? articles.map((article) => (
                                    <ArticleCard key={article.id} article={article} />
                                ))
                                : <p className="text-center text-black w-100">Artikel tidak ditemukan</p>
                    }
                    </div>
                </div>
            </section>
        </Layout>
    );
}
