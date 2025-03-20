import React from "react";

interface SearchFilterProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="flex items-center gap-4 mb-6">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border px-4 py-2 w-full rounded-md"
      />

      {/* Category Dropdown */}
      <select
        value={selectedCategory || ""}
        onChange={(e) => setSelectedCategory(e.target.value || null)}
        className="border px-4 py-2 rounded-md"
      >
        <option value="">All Categories</option>
        <option value="Clothing">Clothing</option>
        <option value="Accessories">Accessories</option>
        <option value="Electronics">Electronics</option>
        <option value="Footwear">Footwear</option>
      </select>
    </div>
  );
};

export default SearchFilter;
