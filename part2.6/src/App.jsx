import { useState } from "react";
import { Person } from "./Component/Person";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addNewName = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const addNewPerson = (event) => {
    event.preventDefault();
    console.log(event.target);
    const personObject = {
      name: newName,
    };
    setPersons(persons.concat(personObject));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange={addNewName} />
        </div>
        <div>debug: {newName}</div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.length > 0
        ? persons.map((person) => (
            <Person key={person.name} name={person.name} />
          ))
        : "..."}
    </div>
  );
};

export default App;
