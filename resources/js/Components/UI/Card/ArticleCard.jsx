import { Link } from "@inertiajs/react";

const ArticleCard = ({ article }) => {
    return (
      <div
        className="card h-100 shadow-sm p-2"
      >
        <img
          src={article.media_path}
          className="card-img-top"
          alt={article.title}
          style={{ height: "180px", objectFit: "cover", borderRadius: "8px" }}
        />
        <div className="card-body d-flex flex-column text-start">
          <h5 className="card-title fs-5 text-start">{article.title}</h5>
          <p className="card-text flex-grow-1 text-start">{article.excerpt}</p>
          <Link href={route("article.show", article.slug)} className="text-darkblue text-start text-decoration-none mt-auto">
            Selengkapnya &gt;
          </Link>
        </div>
      </div>
    );
  };


export default ArticleCard;
