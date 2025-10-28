// Pure redux code without react intgration

// To use middleware in redux need to follow 3 steps
// 1> Install redux-thunk package
// 2> Apply middleware to the store
// 3> use middleware in our action creator functions

import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

import { thunk } from "redux-thunk";

// We can't pass two reducers in one store like parameters.
// Need to create a root reducer by combining all teh reducers.

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk)); // Applied middleware to the store

export default store;
