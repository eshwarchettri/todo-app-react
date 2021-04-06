import axios from "../../axios/axios-config";

class TodoService {
  retriveAllTodos(username) {
    return axios.get(`/todo/get-todos/${username}`);
  }

  deleteTodo(username, id) {
      return axios.delete(`/todo/delete-todo/${username}/${id}`)
  }

  getTodo(username, id) {
      return axios.get(`/todo/get-todo/${username}/${id}`)
  }
  updateTodo(todo) {
      return axios.put("/todo/update-todo", todo);
  }
  createTodo(todo) {
    return axios.post("/todo/create-todo", todo);
}
}

export default new TodoService();
