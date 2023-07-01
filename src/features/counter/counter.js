import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

export function Counter() {
  //fetch counter from state
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          aria-label="Increment Value"
          onClick={() => dispatch(increment())}
        >
          INCREMET
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement Value"
          onClick={() => dispatch(decrement())}
        >
          DECREMENT
        </button>
      </div>
    </div>
  );
}
