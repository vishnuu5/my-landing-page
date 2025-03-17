import { useState, useEffect } from "react";
import { debounce } from "../utils/debounce";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = debounce((text) => {
    onSearch(text);
  }, 300);

  useEffect(() => {
    handleSearch(query);
  }, [query]);

  return (
    <input
      type="text"
      placeholder="Search users..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="p-2 border rounded"
    />
  );
};

export default SearchBar;
