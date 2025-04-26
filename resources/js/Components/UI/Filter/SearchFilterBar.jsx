import { useState } from 'react';
import { FaThLarge, FaSearch, FaFilter } from 'react-icons/fa';

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
                <FaSearch className="text-muted" />
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
                  }}
              />
            </div>

            {filters.length > 0 && (
              <div className="input-group w-50">
                <label htmlFor='filter' className="input-group-text bg-white">
                  <FaFilter className="text-muted" />
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
              <FaThLarge className="text-muted" />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
