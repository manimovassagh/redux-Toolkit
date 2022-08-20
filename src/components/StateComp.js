import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount
} from "../features/counter/counterSlice";

export default function StateComp() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState("666");
  function setSome() {
    setIncrementAmount("6");
  }
  return (
    <div>
      <h1>Hi Comp{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(increment())}>Increase Amount</button>
      <button
        onClick={() =>
          dispatch(incrementByAmount(Number(incrementAmount) || 0))
        }
      >
        Payload
      </button>
      <button onClick={() => setSome()}>set Some</button>
    </div>
  );
}
