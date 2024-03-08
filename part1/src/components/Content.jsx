import React from "react";
import { Part } from "./Part";

export const Content = ({ contents }) => {
  return (
    <div>
      {contents.map((content) => (
        <Part key={content.id} content={content} />
      ))}
    </div>
  );
};
