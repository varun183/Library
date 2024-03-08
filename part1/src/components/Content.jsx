import React from "react";
import { Part } from "./Part";

export const Content = ({ content }) => {
  return (
    <div>
      <Part part={content[0].name} exercises={content[0].exercises} />
      <Part part={content[1].name} exercises={content[1].exercises} />
      <Part part={content[2].name} exercises={content[2].exercises} />
    </div>
  );
};
