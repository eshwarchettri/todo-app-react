import React, { Comment, Component } from "react";

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
      this.setState({
        hasLoginFailed: false,
        showSuccessful: true,
      });
    } else {
      this.setState({
        hasLoginFailed: true,
        showSuccessful: false,
      });
    }
  };
  render() {
    return (
      <div>
       {/* <ShowInvalidCreedentials hasLoginFailed={this.state.hasLoginFailed} />
        <ShowLoginSuccessfull loginSuccessful={this.state.showSuccessful} />*/}
        {this.state.hasLoginFailed && <div>Invalid Credentials;</div>}
        {this.state.showSuccessful && <div>Login Successful</div>} 
        User Name :
        <input type="text" name="username" onChange={this.handleChange} />
        Password :
        <input type="password" name="password" onChange={this.handleChange} />
        <button onClick={this.loginClicked}>Login</button>
      </div>
    );
  }
}
function ShowInvalidCreedentials(props) {
  if (props.hasLoginFailed) {
    return <div>Invalid Credentials</div>;
  } else {
    return null;
  }
}

function ShowLoginSuccessfull(props) {
  if (props.loginSuccessful) {
    return <div>Login Successful</div>;
  } else {
    return null;
  }
}
export default LoginComponent;
