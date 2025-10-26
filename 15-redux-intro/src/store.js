// Pure redux code without react intgration

import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

// We can't pass two reducers in one store like parameters.
// Need to create a root reducer by combining all teh reducers.

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;
