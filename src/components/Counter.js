import { Component } from "react";

export class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  incrementCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  decrementCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };

  render() {
    return (
      <div id="box_counter">
        <h3>Счетчик: {this.state.counter}</h3>
        <button className="plus" onClick={this.incrementCounter}>
          +
        </button>
        <button className="minus" onClick={this.decrementCounter}>
          -
        </button>
      </div>
    );
  }
}
