import React from "react";

export const Filter = ({ filterQuery, applyFilter }) => {
  return (
    <div>
      filter shown with <input value={filterQuery} onChange={applyFilter} />
    </div>
  );
};
