import React from "react";
import { Head, usePage } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import ArticleCard from "@/Components/UI/Card/ArticleCard";
import BackButton from "@/Components/UI/BackButton";

// Import React Icons (Feather Icons)
import { FiUser, FiFolder, FiCalendar, FiClock, FiEye } from "react-icons/fi";

const SingleArticle = () => {
  const { article, relatedArticles } = usePage().props;

  if (!article) {
    return <div className="text-center py-5">Loading...</div>;
  }

  return (
    <Layout>
      <Head>
        <title>{article.seo_title || article.title}</title>
        <meta name="description" content={article.meta_description} />
      </Head>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <BackButton />

            <div className="position-relative mb-4" style={{ zIndex: 1 }}>
              <div
                className="position-absolute"
                style={{
                  top: "20px",
                  left: "-20px",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "12px",
                  zIndex: 0,
                }}
              ></div>

              <img
                src={article.media_path}
                alt={article.title}
                className="img-fluid rounded shadow-sm position-relative"
                style={{
                  maxHeight: "350px",
                  objectFit: "cover",
                  width: "100%",
                  zIndex: 1,
                }}
              />
            </div>

            <h1 className="fw-bold">{article.title}</h1>

            <div className="d-flex flex-wrap text-muted mb-2 gap-3 small align-items-center">
              <span className="d-flex align-items-center">
                <FiUser className="me-1" />
                {article.author?.name || "Admin"}
              </span>
              <span className="d-flex align-items-center">
                <FiFolder className="me-1" />
                {article.category?.name || "Tanpa Kategori"}
              </span>
              <span className="d-flex align-items-center">
                <FiCalendar className="me-1" />
                {new Date(article.published_at).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="d-flex align-items-center">
                <FiClock className="me-1" />
                {article.reading_time || "—"} baca
              </span>
            </div>

            <p className="lead mt-3">{article.excerpt}</p>

            <div
              className="content markdown-body mt-4"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </div>

      {relatedArticles && relatedArticles.length > 0 && (
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