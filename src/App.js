import "./App.css";
import { Component } from "react";
import Counter from "./components/counters/Counter";
import TodoApp from "./components/todo/TodoApp";
class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <Counter></Counter> */}
       <TodoApp></TodoApp>
      </div>
    );
  }
}
export default App;
