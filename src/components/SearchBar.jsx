import { useState } from "react";
import { debounce } from "../utils/debounce";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  const debouncedSearch = debounce((searchTerm) => {
    onSearch(searchTerm);
  }, 300);

  return (
    <div className="p-4 text-center">
      <input
        type="text"
        placeholder="Search users..."
        value={query}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default SearchBar;
