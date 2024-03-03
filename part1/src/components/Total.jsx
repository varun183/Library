import React from "react";

export const Total = ({ courses }) => {
  return (
    <div>
      <p>
        {courses[0].exercises + courses[1].exercises + courses[2].exercises}
      </p>
    </div>
  );
};
