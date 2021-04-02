import React,  {Component} from "react";
import AuthenticationService from "../todo/AuthenticationService.js";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "eshwar",
      password: "",
      hasLoginFailed: false,
      showSuccessful: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  loginClicked = () => {
    if (this.state.username === "eshwar" && this.state.password === "dummy") {
      AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
      this.props.history.push(`/welcome/${this.state.username}`)
    } else {
      this.setState({
        hasLoginFailed: true,
        showSuccessful: false,
      });
    }
  };
  render() {
    return (
      <div className="container">
      <h1>Login</h1>
        {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
        User Name :
        <input type="text" name="username" onChange={this.handleChange} />
        Password :
        <input type="password" name="password" onChange={this.handleChange} />
        <button className="btn btn-primary ml-3" onClick={this.loginClicked}>Login</button>
      </div>
    );
  }
}
export default LoginComponent;
