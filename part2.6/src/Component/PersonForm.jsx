import React from "react";

export const PersonForm = ({
  newName,
  addNewName,
  newNumber,
  addNewNumber,
  addNewPerson,
}) => {
  return (
    <div>
      <form onSubmit={addNewPerson}>
        <h2>Add a new</h2>
        <div>
          name: <input value={newName} onChange={addNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={addNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};
