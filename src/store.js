// store.js
import { configureStore } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  count: 0,
};

// Reducer function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Create store
const store = configureStore(counterReducer);

export default store;
