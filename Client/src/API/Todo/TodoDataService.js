import axios from "axios";
import { API_URL, JPA_API_URL } from "../../Constant";

class TodoDataService {
  retrieveAllTodos(username) {
    return axios.get(`${JPA_API_URL}/users/${username}/todos`);
  }

  retrieveTodo(username, id) {
    return axios.get(`${JPA_API_URL}/users/${username}/todos/${id}`);
  }

  createTodo (username, todo) {
    return axios.post(`${JPA_API_URL}/users/${username}/todos`, todo);
  }

  updateTodo (username, id, todo) {
    return axios.put(`${JPA_API_URL}/users/${username}/todos/${id}`, todo);
  }

  deleteTodo(username, id) {
    return axios.delete(`${JPA_API_URL}/users/${username}/todos/${id}`);
  }
}

export default new TodoDataService();
