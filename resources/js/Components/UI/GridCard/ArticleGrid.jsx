import ArticleCard from "../Card/ArticleCard";

export default function ArticleGrids({ articles }) {
    return (
        <div className="position-relative">
            <div className="row g-4 position-relative" style={{ zIndex: 1 }}>
                {articles.length > 0 ? (
                    articles.map((article) => (
                        <div key={article.id} className="col-12 col-md-6 col-lg-3">
                            <ArticleCard article={article} />
                        </div>
                    ))
                ) : (
                    <p className="text-center w-100">Tidak ada artikel yang ditemukan.</p>
                )}
            </div>
        </div>
    );
}