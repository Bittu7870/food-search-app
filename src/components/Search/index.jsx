import React from "react";

const Search = ({ search, setSearch, fetchFood }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="input-group mt-5">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-control p-3"
            placeholder="Search Food"
            aria-label="Search Food"
          />
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={fetchFood}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
