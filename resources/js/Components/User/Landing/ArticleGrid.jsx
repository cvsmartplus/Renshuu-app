import { Link } from "@inertiajs/react";
import React from "react";
import ArticleGrids from "@/Components/UI/GridCard/ArticleGrid";

const dummyArticles = [
    {
        id: 1,
        slug: "judul-artikel-1",
        title: "Judul Artikel Pertama",
        excerpt: "Ini adalah cuplikan singkat dari artikel pertama.",
        media_path: "https://placehold.co/600x400?text=Artikel+1",
        author: { name: "Penulis A" },
    },
    {
        id: 2,
        slug: "judul-artikel-2",
        title: "Judul Artikel Kedua",
        excerpt: "Cuplikan kedua ini memberikan wawasan menarik.",
        media_path: "https://placehold.co/600x400?text=Artikel+2",
        author: { name: "Penulis B" },
    },
    {
        id: 3,
        slug: "judul-artikel-3",
        title: "Judul Artikel Ketiga",
        excerpt: "Cuplikan ini membahas topik ketiga dengan singkat.",
        media_path: "https://placehold.co/600x400?text=Artikel+3",
        author: null,
    },
    {
        id: 4,
        slug: "judul-artikel-4",
        title: "Judul Artikel Keempat",
        excerpt: "Artikel keempat sangat informatif untuk dibaca.",
        media_path: "https://placehold.co/600x400?text=Artikel+4",
        author: { name: "Penulis D" },
    },
];

const ArticleGrid = () => {
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
                <ArticleGrids articles={dummyArticles} />
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