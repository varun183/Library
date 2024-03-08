import React from "react";
import { Header } from "./Header";

export const Course = ({ course }) => {
  return (
    <div>
      <Header title={course.name} />
    </div>
  );
};
