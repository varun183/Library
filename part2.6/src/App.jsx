import { useState } from "react";
import { Person } from "./Component/Person";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addNewName = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const addNewNumber = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const addNewPerson = (event) => {
    event.preventDefault();
    console.log(event.target);

    const nameExists = persons.some((person) => person.name === newName);
    const numberExists = persons.some((person) => person.number === newName);

    if (nameExists || numberExists) {
      alert(`${newName} or ${newNumber} is already added to phonebook`);
      setNewName("");
      setNewNumber("");
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
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
      <h2>Numbers</h2>
      {persons.length > 0
        ? persons.map((person) => (
            <Person
              key={person.name}
              name={person.name}
              number={person.number}
            />
          ))
        : "..."}
    </div>
  );
};

export default App;
