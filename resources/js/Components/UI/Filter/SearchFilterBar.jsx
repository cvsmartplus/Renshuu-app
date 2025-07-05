import { useState, useEffect } from "react";
import { router } from "@inertiajs/react"; 
import '../../../../sass/articlePage.scss';

export default function SearchFilterBar() {
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("latest");
  const [search, setSearch] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = {};

      if (search) params.search = search;
      if (category !== "all") params.category = category;
      if (sort !== "latest") params.sort = sort;

      router.visit(route("article.index"), {
        only: ['articles'], 
        preserveState: true,
        preserveScroll: true,
        replace: true,
        data: params,
      });
    }, 500);

    return () => clearTimeout(timeout);
  }, [search, category, sort]);
  
  return (
    <div className="filter-wrapper">
    <div className="filter-group search">
      <label htmlFor="searchInput" className="filter-label">Cari Artikel</label>
      <input
        id="searchInput"
        type="text"
        placeholder="Tulis judul atau kata kunci..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="filter-input"
      />
    </div>

      <div className="filter-group">
        <label htmlFor="categorySelect" className="filter-label">Kategori</label>
        <select
          id="categorySelect"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="filter-input"
        >
          <option value="all">Semua</option>
          <option value="tech">Teknologi</option>
          <option value="education">Edukasi</option>
          <option value="culture">Budaya</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="sortSelect" className="filter-label">Urutkan</label>
        <select
          id="sortSelect"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="filter-input"
        >
          <option value="latest">Terbaru</option>
          <option value="popular">Terpopuler</option>
        </select>
      </div>
    </div>
  );
}
