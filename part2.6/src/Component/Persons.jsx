import React from "react";
import { Person } from "./Person";

export const Persons = ({ personsToShow }) => {
  return (
    <div>
      {personsToShow.length > 0
        ? personsToShow.map((person) => (
            <Person
              key={person.name}
              name={person.name}
              number={person.number}
            />
          ))
        : "No matching persons found"}
    </div>
  );
};
