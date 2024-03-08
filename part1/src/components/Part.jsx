import React from "react";

export const Part = ({ content }) => {
  return (
    <div>
      <p>
        {content.name} {content.exercises}
      </p>
    </div>
  );
};
