import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = ({ good, bad, neutral }) => {
  const total = good + bad + neutral;
  return (
    <div>
      <table>
        <StatisticLine name={"good"} feed={good} />
        <StatisticLine name={"bad"} feed={bad} />
        <StatisticLine name={"neutral"} feed={neutral} />
        <StatisticLine name={"all"} feed={total} />
        <StatisticLine name={"average"} feed={(good - bad) / total} />
        <StatisticLine
          name={"positive"}
          feed={String((good / total) * 100) + "%"}
        />
      </table>
    </div>
  );
};

export default Statistics;
