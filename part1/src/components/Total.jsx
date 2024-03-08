import React from "react";

export const Total = ({ total }) => {
  const totalExe = total.reduce((sum, item) => {
    return (sum += item["exercises"]);
  }, 0);

  return (
    <div>
      <b>
        {"total of "}
        {totalExe}
        {" exercises"}
      </b>
    </div>
  );
};
