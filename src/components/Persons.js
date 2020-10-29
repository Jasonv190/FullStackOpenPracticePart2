import React from "react";
import { Person } from "./Person";

export const Persons = ({ persons, deletePerson }) => (
  <ul>
    {persons &&
      persons.map((person) => (
        <Person key={person.id} person={person} deletePerson={deletePerson} />
      ))}
  </ul>
);
