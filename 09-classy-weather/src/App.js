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
  }

  render() {
    return (
      <div>
        <button>-</button>
        <span>{this.state.count}</span>
        <button>+</button>
      </div>
    );
  }
}

export default Counter;
