import React, { useState, useEffect } from "react";
import TodoDataService from "../../API/Todo/TodoDataService";
import AuthenticationServices from "../Auth/AuthenticationServices";

const ListTodos = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let username = AuthenticationServices.getLoggedInUsername();
    TodoDataService.retrieveAllTodos(username).then((response) => {
      setTodos(response.data);
    });
  }, []);

  return (
    <>
      <h1>List Todos</h1>

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>description</th>
              <th>Is Completed?</th>
              <th>Target Date</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => {
              return (
                <tr key={todo.id}>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListTodos;
