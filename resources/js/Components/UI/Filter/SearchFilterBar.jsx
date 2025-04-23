import { useState } from 'react';

export default function SearchFilterBar({
  searchTerm,
  setSearchTerm,
  filters = [],
  setFilter,
  placeholder
}) {
  const [selectedFilter, setSelectedFilter] = useState(filters[0] || '');

  const handleFilterChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedFilter(selectedValue);
    setFilter(selectedValue);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10">
          <div className="d-flex align-items-center gap-2 bg-white p-3 rounded shadow-sm">

            <div className="input-group flex-grow-2">
              <label htmlFor='search' className="input-group-text bg-white">
                <i className="fas fa-search text-muted"></i>
              </label>
              <input
                  type="search"
                  id="search"
                  name="search"
                  className="form-control border-start-0"
                  placeholder={placeholder}
                  value={searchTerm}
                  onChange={(e) => {
                      const value = e.target.value;
                      setSearchTerm(value);
                      console.log("Search Term:", value);
                  }}
              />

            </div>

            {filters.length > 0 && (
              <div className="input-group w-50">
                <label htmlFor='filter' className="input-group-text bg-white">
                  <i className="fas fa-filter text-muted"></i>
                </label>
                <select
                  id="filter"
                  name="filter"
                  aria-describedby="filter"
                  className="form-select flex-grow-1"
                  value={selectedFilter}
                  onChange={handleFilterChange}
                >
                  {filters.map((f, index) => (
                    <option key={index} value={f}>{f}</option>
                  ))}
                </select>
              </div>
            )}

            <button className="btn btn-light">
              <i className="fas fa-th-large text-muted"></i>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
