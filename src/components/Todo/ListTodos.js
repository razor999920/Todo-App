import React, { useState } from "react";

const ListTodos = (props) => {
  const dummy_todos = [
    { id: 1, discription: "Learn React" },
    { id: 2, discription: "Finish the course" },
    { id: 3, discription: "Part 2" },
  ];

  return (
    <>
      <h1>List Todos</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {dummy_todos.map((todo) => {
            return (
              <tr>
                <td>{todo.id}</td>
                <td>{todo.discription}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ListTodos;
