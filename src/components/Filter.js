import React from "react";

export const Filter = ({ search, updateSearch }) => {
  const onSearchChange = (event) => {
    updateSearch(event.target.value);
  };

  return (
    <div>
      Filter users shown with <input value={search} onChange={onSearchChange} />
    </div>
  );
};
