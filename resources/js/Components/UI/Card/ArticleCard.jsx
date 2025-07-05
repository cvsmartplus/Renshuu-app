import { Link } from "@inertiajs/react";

const truncateText = (text, maxLength) => {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const ArticleCard = ({ article }) => {
  return (
    <div className="col-md-4 mb-4" key={article.id}>
      <div className="card h-100 shadow-sm p-3">
        <Link
          href={route("article.show", article.slug)}
          className="sm-small-wrapper d-block mb-2"
          style={{
            backgroundImage: `url(${article.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "180px",
            borderRadius: "8px",
          }}
        >
        </Link>

        <p className="text-muted small mb-1">
          Beberapa hari yang lalu oleh{" "}
          {article.author || "Admin"}
        </p>

        <div className="card-body d-flex flex-column p-0">
          <p className="card-title fs-5 fw-bold">{article.title}</p>
          <p className="card-text flex-grow-1">
            {truncateText(article.description, 100)}
          </p>
          <Link
            href={route("article.show", article.slug)}
            className="text-brand-950 text-decoration-none mt-auto"
          >
            Selengkapnya &gt;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;