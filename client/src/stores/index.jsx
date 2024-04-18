// add the reducers to store
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    // add reducer here
    counter: counterReducer,
  },
});