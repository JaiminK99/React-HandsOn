import { useReducer, useState } from "react";

function reducer(state, action) {
  console.log(state, action);
  // return state + action;
  if (action.type === "dec") return state - 1;
  // If we are using direct value of action then no need of payload property in dispatch
  if (action.type === "inc") return state + 1;
  if (action.type === "setCount") return action.payload;
}

function DateCounter() {
  // useReducer hook is more advanced and more complex way of managing state instead of useState hook.
  // useReducer works with reducer function.
  // It is a pure function that always takes in previous state and so called action as an argument and will return next state.
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, 0);

  const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" }); // If we use payload -1 then need to change substraction with addition in reducer function
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({ type: "inc" }); // This is called actions
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    setStep(Number(e.target.value));
  };

  const reset = function () {
    // setCount(0);
    setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
