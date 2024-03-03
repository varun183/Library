import React from "react";
import { Part } from "./Part";

export const Content = ({ courses }) => {
  return (
    <div>
      <Part part={courses[0].name} exercises={courses[0].exercises} />
      <Part part={courses[1].name} exercises={courses[1].exercises} />
      <Part part={courses[2].name} exercises={courses[2].exercises} />
    </div>
  );
};
