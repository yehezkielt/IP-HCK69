// import { useSelector, useDispatch } from "react-redux";
import LoginPage from "./pages/LoginPage.jsx"

// import {
//   increment,
//   decrement,
//   incrementByAmount,
// } from "./features/counter/counterSlice.js";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage/>,
    },
  ]);

export default function App() {
//   const counter = useSelector((store) => store.counter.value);

//   const dispatch = useDispatch();

  return <RouterProvider router={router} />
//   return (
//     <div>
//       <h4>Global Counter : {counter} </h4>
//       <button onClick={() => dispatch(increment())}>Increment</button>
//       <button onClick={() => dispatch(decrement())}>Decrement</button>
//       <button onClick={() => dispatch(incrementByAmount(2))}>
//         Increment by 2
//       </button>
//     </div>
//   );
}