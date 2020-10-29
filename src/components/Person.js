import React from "react";

export const Person = ({ person: { id, name, number }, deletePerson }) => {
  const handleDeleteClick = () => {
    if (window.confirm(`Delete ${name}`)) {
      deletePerson(id);
    }
  };

  return (
    <li>
      <span>
        {name} {number}
      </span>
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
};
