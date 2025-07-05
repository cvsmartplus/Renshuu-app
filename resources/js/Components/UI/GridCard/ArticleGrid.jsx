import ArticleCard from "../Card/ArticleCard";

export default function ArticleGrids({ articles }) {
    return (
        <div className="position-relative">
            <div className="row g-4 position-relative" style={{ zIndex: 1 }}>
                {articles.length > 0 ? (
                    articles.map((article) => (
                        <div className="col-md-3 mb-4" key={article.id}>
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