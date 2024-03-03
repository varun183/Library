import React from "react";

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.feed}</td>
    </tr>
  );
};

export default StatisticLine;
