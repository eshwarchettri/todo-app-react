import React, { Component } from "react";
import TodoService from "../../api/todo/TodoService";
import AuthenticationService from "./AuthenticationService";
import './TodosComponent.css';
class TodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }
  componentDidMount() {
    this.getFreshTodos();
  }
  getFreshTodos = () => {
    const user = AuthenticationService.getLoggedInUser();
    TodoService.retriveAllTodos(user).then((respose) => {
      this.setState({ todos: respose.data });
    });
  };
  render() {
    return (
      <div className="container">
        <h1>Todos List</h1>
        <div className="table-responsive">
          <table className="table todo-list-table table-striped table-bordered">
            <thead>
              <tr>
                <th>DESCRIPTION</th>
                <th>IS COMPLETED</th>
                <th>TARGET DATE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo, index) => (
                <tr key={todo.id}>
                  <td>{todo.description}</td>
                  <td>{todo.isCompleted.toString()}</td>
                  <td>{todo.targetDate}</td>
                  <td>
                      <i className="fas fa-trash-alt mr-2 text-warning"  onClick={() => this.deleteTodo(todo.id)}></i>
                      <i className="fas fa-pencil-alt text-success" onClick={() => this.updateTodo(todo.id)}></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-primary" onClick={this.addTodo}>Add</button>
        </div>
      </div>
    );
  }
  addTodo = () => {
    const user = AuthenticationService.getLoggedInUser();
    this.props.history.push(`/todo/${user}/-1`)
  }
  deleteTodo = (id) => {
    const user = AuthenticationService.getLoggedInUser();
    TodoService.deleteTodo(user, id).then((respose) => {
      this.getFreshTodos();
    })
  };
  updateTodo = (id) => {
    const user = AuthenticationService.getLoggedInUser();

    this.props.history.push(`/todo/${user}/${id}`)
  };
}
export default TodosComponent;
