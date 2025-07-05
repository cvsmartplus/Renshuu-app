import { Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import ArticleCardPlaceholder from "@/Components/UI/Card/ArticleCardPlaceholder";
import ArticleCard from "@/Components/UI/Card/ArticleCard";
import { api } from "@/lib/axios";

const ArticleGrid = () => {
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                await api.get("/csrf-cookie");
                const response = await api.get("/articles", {
                    params: {
                        latest: 3,
                    },
                });
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
        <section className="py-5 position-relative overflow-hidden">
            <div className="position-absolute d-none d-md-grid" style={{
                bottom: "-50px",
                right: "-100px",
                display: "grid",
                gridTemplateColumns: "repeat(2, 200px)",
                gridTemplateRows: "repeat(2, 200px)",
                gap: "10px",
                zIndex: 0,
                rotate: "45deg"
            }}>
                <div style={{ backgroundColor: "#bee4ff", borderRadius: "10px" }}></div>
                <div style={{ backgroundColor: "#91d4ff", borderRadius: "10px" }}></div>
                <div style={{ backgroundColor: "#5dbbfd", borderRadius: "10px" }}></div> 
                <div style={{ backgroundColor: "#1b53b2", borderRadius: "10px" }}></div> 
            </div>

            <div className="container position-relative" style={{ zIndex: 1 }}>
                <h2 className="fw-bold text-center mb-4">
                    Baca Juga Artikel Menarik Lainnya
                </h2>
                <hr className="my-5"/>
                <div className="row">
                    {loading
                        ? Array.from({ length: 4 }).map((_, i) => <ArticleCardPlaceholder key={i} />)
                        :   articles? articles.map((article) => (
                                <ArticleCard key={article.id} article={article} />
                            ))
                            : 
                                <p className="text-center w-100">Artikel tidak ditemukan</p>
                    }
                </div>
                <div className="text-center mt-4">
                    <Link
                        href="#"
                        className="btn btn-outline-brand-950 rounded px-4 py-2"
                    >
                        Lihat Selengkapnya
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ArticleGrid;