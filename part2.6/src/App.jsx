import { useState } from "react";
import { Persons } from "./Component/Persons";
import { PersonForm } from "./Component/PersonForm";
import { Filter } from "./Component/Filter";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterQuery, setFilterQuery] = useState("");

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

  const applyFilter = (event) => {
    event.preventDefault();
    setFilterQuery(event.target.value);
  };

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        <Filter applyFilter={applyFilter} filterQuery={filterQuery} />
      </div>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        addNewName={addNewName}
        addNewNumber={addNewNumber}
        addNewPerson={addNewPerson}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  );
};

export default App;
