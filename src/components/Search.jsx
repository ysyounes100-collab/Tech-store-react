import React from "react";


export default function Search({ search, setSearch }) {
  return (
    <div>
      <input
        type="text"
        value={search}
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
    </div>
  );
}
