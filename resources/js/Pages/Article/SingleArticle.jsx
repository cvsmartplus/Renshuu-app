import React from "react";
import { Head, usePage } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import ArticleCard from "@/Components/UI/Card/ArticleCard";
import BackButton from "@/Components/UI/BackButton";

const SingleArticle = () => {
    const { article, relatedArticles } = usePage().props;

    if (!article) {
        return <div className="text-center py-5">Loading...</div>;
    }

    return (
        <Layout>
            <Head title={article.title} />
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <BackButton />
                        <div className="text-center">
                            <img
                                src={article.media_path}
                                alt={article.title}
                                className="img-fluid rounded shadow-sm"
                                style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
                            />
                        </div>

                        <h1 className="fw-bold mt-4 text-center">{article.title}</h1>
                        <p className="text-muted fs-5 text-center">{article.excerpt}</p>

                        <div
                            className="content markdown-body mt-4 p-3"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />
                    </div>
                </div>
            </div>

            {relatedArticles.length > 0 && (
                <div className="container my-5">
                    <h2 className="fw-bold mb-4">Artikel Terkait</h2>
                    <div className="row g-3">
                        {relatedArticles.map((relatedArticle) => (
                            <div key={relatedArticle.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <ArticleCard article={relatedArticle} />
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </Layout>
    );
};

export default SingleArticle;
