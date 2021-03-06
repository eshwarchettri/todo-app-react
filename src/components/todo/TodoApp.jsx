import React, { Component } from "react";
import LoginComponent from "../login/login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WelcomeComponent from "./Welcome";
import ErrorComponent from "./ErrorComponent";
import TodosComponent from "./ListTodosComponent";
import HeaderComponent from "../HeaderComponent";
import FooterComponent from "../FooterComponent";
import LogoutComponent from "../logout/logout";
import AuthenticatedRoute from "./AuthenticatedRoute";
import TodoComponent from "../todo-components/TodoComponent";

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <HeaderComponent />
          <div className="container pt-3">
          <Switch>
            <Route path="/" exact component={LoginComponent} />
            <Route path="/login" component={LoginComponent} />
            <AuthenticatedRoute path="/welcome/:name" exact component={WelcomeComponent} />
            <AuthenticatedRoute path="/todos" exact component={TodosComponent} />
            <AuthenticatedRoute path="/logout" exact component={LogoutComponent} />
            <AuthenticatedRoute path="/todo/:name/:id" exact component={TodoComponent}/>

            <Route component={ErrorComponent} />
          </Switch>
          </div>
          <FooterComponent />
        </Router>
      </div>
    );
  }
}

export default TodoApp;
