import React from "react";

export const SearchBar = ({ requestSearch }) => {
  const [query, setQuery] = React.useState("");

  const searchClick = () => {
    // Checks if query is not empty
    if (query) {
      requestSearch(query);
    }
  };
  const updateQuery = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="Search"
        value={query}
        onChange={updateQuery}
      ></input>
      <button data-testid="search-button" onClick={searchClick} />
    </div>
  );
};
