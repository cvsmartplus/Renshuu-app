import { Link, usePage } from "@inertiajs/react";
import React from "react";
import ArticleGrids from "../UI/GridCard/ArticleGrid";

const ArticleGrid = () => {
    const { articles } = usePage().props;

    return (
        <div className="container text-center my-5">
            <h2 className="fw-bold mb-5">Baca juga informasi beragam informasinya</h2>
            <ArticleGrids articles={articles} />
            <Link href={route("article.index")} className="btn-darkblue text-decoration-none mt-5">
                Lihat Selengkapnya
            </Link>
        </div>
    );
};

export default ArticleGrid;
