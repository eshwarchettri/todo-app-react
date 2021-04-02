import React, { Component } from "react";

class TodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          description: "React Tutorial",
          done: false,
          targetDate: new Date()
        },
        {
          id: 2,
          description: "Jpa Tutorial",
          done: false,
          targetDate: new Date()
        },
        {
          id: 3,
          description: "Springboot Tutorial",
          done: false,
          targetDate: new Date()
        },
      ],
    };
  }
  render() {
    return (
      <div className="container">
        <h1>Todos List</h1>
        <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>DESCRIPTION</th>
              <th>IS COMPLETED</th>
              <th>TARGET DATE</th>

            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((todo, index) => 
              <tr key={index}>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toString()}</td>

              </tr>
            )}
          </tbody>
        </table>
        </div>
        </div>
    );
  }
}
export default TodosComponent;
