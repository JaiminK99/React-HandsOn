import React from "react";

class Counter extends React.Component {
  //Class components can't use states.
  //To use state in class components we need to call Constructor method.Which receives props
  //THis method gets called everytime a new object instanstiated from class
  constructor(props) {
    // Constructor uses Super method to call parent constructor to craete state
    super(props);

    //To inisialise the state
    //For every state we need , we have to create new property in state object
    this.state = { count: 5 };

    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  //handler functions are defined as calss methods
  handleDecrement() {
    this.setState((curState) => {
      return { count: curState.count - 1 };
    });
  }

  handleIncrement() {
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
  }

  render() {
    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + this.state.count);

    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>{" "}
        {/*All event handlers called in JSX loses their binding to this keywork. Bcs JS will create a copy of callback function which is not bound to any object*/}
        <span>
          {date.toDateString()} [{this.state.count}]
        </span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
