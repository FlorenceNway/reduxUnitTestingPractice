import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import RootReducer from "./reducers";

export const middlewares = [ReduxThunk]; // array of middlewares list
export const createStoreWithMiddleware = applyMiddleware(...middlewares)(
  createStore
);

// export const store = createStore(RootReducer);
export const store = createStoreWithMiddleware(RootReducer);
