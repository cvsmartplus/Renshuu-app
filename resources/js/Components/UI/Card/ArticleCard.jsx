import { Link } from "@inertiajs/react";

const truncateText = (text, maxLength) => {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const ArticleCard = ({ article }) => {
  return (
    <div className="card h-100 shadow-sm p-2">
      <Link
        href={route("article.show", article.slug)}
        className="sm-small-wrapper d-block mb-2"
        style={{
          backgroundImage: `url(${article.media_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "180px",
          borderRadius: "8px",
        }}
      >
      </Link>

      <p className="text-muted small mb-1">
        Beberapa hari yang lalu oleh{" "}
        {article.author?.name || "Admin"}
      </p>

      <div className="card-body d-flex flex-column text-start p-0">
        <h5 className="card-title fs-5">{article.title}</h5>
        <p className="card-text flex-grow-1">
          {truncateText(article.excerpt, 120)}
        </p>
        <Link
          href={route("article.show", article.slug)}
          className="text-brand-950 text-decoration-none mt-auto"
        >
          Selengkapnya &gt;
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;