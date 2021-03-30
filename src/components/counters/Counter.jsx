import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./counter.css";
import PropType from "prop-types";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
    this.dicrement = this.dicrement.bind(this);
  }
  render() {
    return (
      <div className="Counter">
        <CounterButton
          incrementMethod={this.increment}
          dicrementMethod={this.dicrement}
        ></CounterButton>
        <CounterButton
          by={5}
          incrementMethod={this.increment}
          dicrementMethod={this.dicrement}
        ></CounterButton>
        <CounterButton
          by={10}
          incrementMethod={this.increment}
          dicrementMethod={this.dicrement}
        ></CounterButton>
        <CounterButton
          by={100}
          incrementMethod={this.increment}
          dicrementMethod={this.dicrement}
        ></CounterButton>

        <span className="counterSpan">{this.state.counter}</span>
        <div><button className="reset" onClick={this.reset}>Reset</button></div>
      </div>
    );
  }
  reset = ()  => {
    this.setState({
        counter: 0,
      });
  }
  increment(by) {
    this.setState({
      counter: this.state.counter + by,
    });
  }
  dicrement(by) {
    this.setState({
      counter: this.state.counter - by,
    });
  }
}
class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div className="counter">
        <button onClick={() => {this.props.incrementMethod(this.props.by)}}>+{this.props.by}</button>
        <button onClick={() => {this.props.dicrementMethod(this.props.by)}}>-{this.props.by}</button>
      </div>
    );
  }
}

CounterButton.defaultProps = {
  by: 1,
};

CounterButton.propTypes = {
  by: PropType.number,
};

export default Counter;
