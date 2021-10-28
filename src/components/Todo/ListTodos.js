import React, { useState, useEffect } from "react";
import TodoDataService from "../../API/Todo/TodoDataService";
import AuthenticationServices from "../Auth/AuthenticationServices";

const ListTodos = (props) => {
  const [todos, setTodos] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState(null);

  useEffect(() => {
    let username = AuthenticationServices.getLoggedInUsername();
    TodoDataService.retrieveAllTodos(username).then((response) => {
      setTodos(response.data);
    });
    // WRONG: Beacause it cleans up everytime
    // return () => {  
    //   setTodos(null);
    // };
  }, [deleteMessage]);

  const deleteTodoHandler = (id) => {
    let username = AuthenticationServices.getLoggedInUsername();
    TodoDataService.deleteTodo(username, id).then((response) => {
      setDeleteMessage(`Delete of todo ${id}`);
    });
  };

  const updateTodoHandler = (id) => {
    console.log(id)
    props.history.push(`/todos/${id}`);
  };

  return (
    <>
      <h1>List Todos</h1>
      {deleteMessage && (
        <div className="alert alert-suucess">{deleteMessage}</div>
      )}
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Is Completed?</th>
              <th>Target Date</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => {
              return (
                <tr key={todo.id}>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toString()}</td>
                  <td>
                  <button
                      className="btn btn-success"
                      onClick={() => updateTodoHandler(todo.id)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={() => deleteTodoHandler(todo.id)}
                    >
                      Delete
                    </button>
                  </td>
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
