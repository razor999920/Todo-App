import React, { useState, useEffect } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import moment from "moment";
import TodoDataService from "../../API/Todo/TodoDataService";
import AuthenticationServices from "../Auth/AuthenticationServices";

const Todo = (props) => {
  const [id, setId] = useState(props.match.params.id);
  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState(
    moment(new Date()).format("YYYY-MM-DD")
  );

  useEffect(() => {
    if (id === '-1') {
      return;
    }

    let username = AuthenticationServices.getLoggedInUsername();
    TodoDataService.retrieveTodo(username, id).then((response) => {
      setId(response.data.id);
      setDescription(response.data.description);
      setTargetDate(moment(response.data.targetDate).format("YYYY-MM-DD"));
    });
  }, [id]);

  const onSubmit = (values) => {
    let username = AuthenticationServices.getLoggedInUsername();

    let todo = {
      id: id,
      description: values.description,
      targetDate: values.targetDate,
    };

    if (id === '-1') {
      TodoDataService.createTodo(username, todo).then(() => {
        props.history.push("/todos");
      });
    } else {
      TodoDataService.updateTodo(username, id, todo).then(() => {
        props.history.push("/todos");
      });
    }
  };

  const validate = (values) => {
    let errors = {};
    if (!values.description) {
      errors.description = "Enter Description.";
    } else if (values.description.length < 5) {
      errors.description = "Description should alteat have 5 characters.";
    }
    if (!moment(values.targetDate).isValid()) {
      errors.targetDate = "Enter a valid Target Date";
    }
    return errors;
  };

  return (
    <>
      <h1>Todo</h1>
      <div className="container">
        <Formik
          initialValues={{ description, targetDate }}
          onSubmit={onSubmit}
          validateOnBlur={false}
          validateOnChange={false}
          validate={validate}
          enableReinitialize={true}
        >
          {() => (
            <Form>
              <ErrorMessage
                name="description"
                component="div"
                className="alert alert-warning"
              />
              <ErrorMessage
                name="targetDate"
                component="div"
                className="alert alert-warning"
              />
              <fieldset className="form-group">
                <label>Description</label>
                <Field
                  className="form-control"
                  type="text"
                  name="description"
                />
              </fieldset>
              <fieldset className="form-group">
                <label>Target Date</label>
                <Field className="form-control" type="date" name="targetDate" />
              </fieldset>
              <button className="btn btn-success" type="submit">
                Save
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Todo;
