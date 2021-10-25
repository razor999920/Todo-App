import React, { useState } from "react";

const ListTodos = (props) => {
  const dummy_todos = [
    { id: 1, discription: "Learn React", done: false, targetDate: new Date() },
    {
      id: 2,
      discription: "Finish the course",
      done: false,
      targetDate: new Date(),
    },
    { id: 3, discription: "Part 2", done: false, targetDate: new Date() },
  ];

  return (
    <>
      <h1>List Todos</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>description</th>
            <th>Target Date</th>
            <th>Is Completed?</th>
          </tr>
        </thead>
        <tbody>
          {dummy_todos.map((todo) => {
            return (
              <tr>
                <td>{todo.id}</td>
                <td>{todo.discription}</td>

                <td>{todo.targetDate.toString()}</td>
                <td>{todo.done.toString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ListTodos;
