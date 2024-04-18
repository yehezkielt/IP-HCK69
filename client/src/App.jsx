import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  incrementByAmount,
} from "./features/counter/counterSlice.js";

export default function App() {
  const counter = useSelector((store) => store.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <h4>Global Counter : {counter} </h4>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>
        Increment by 2
      </button>
    </div>
  );
}