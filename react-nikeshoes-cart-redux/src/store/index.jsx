import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import logger from "redux-logger";

// reducer
import { appReducer } from "../redux/app.reducer";

const composeEnhancers =
  process.env.NODE_ENV === "development" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const rootReducer = combineReducers({
  app: appReducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger)),
);
