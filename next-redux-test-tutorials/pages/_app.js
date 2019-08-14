import Header from "../components/header";
import Headline from "../components/headline";

import reducer from "../reducers";
import rootSaga from "../sagas";

import { Provider } from "react-redux";

import { applyMiddleware, compose, createStore } from "redux";
import withRedux from "next-redux-wrapper";

import createSagaMiddleware from "redux-saga";
import withReduxSaga from "next-redux-saga";

const App = ({ Component, store }) => {
  const dummy = [
    { fName: "김", lName: "첨지", age: 24, onlineStatus: true },
    { fName: "지", lName: "점토", age: 28, onlineStatus: false }
  ];

  return (
    <Provider store={store}>
      <div>
        <div>
          <Header />
          <section className="main">
            <Headline
              user={dummy}
              header="Header"
              description="Click the button to render posts"
            />
          </section>
        </div>
        <div>
          <Component />
        </div>
      </div>
    </Provider>
  );
};

export const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  if (options) {
    const enhancer =
      process.env.NODE_ENV === "production"
        ? compose(applyMiddleware(...middlewares))
        : compose(
            applyMiddleware(...middlewares),
            !options.isServer &&
              typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
              ? window.__REDUX_DEVTOOLS_EXTENSION__()
              : f => f
          );
    const store = createStore(reducer, initialState, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
  }
  const enhancer = compose(applyMiddleware(...middlewares));
  const store = createStore(reducer, initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export default withRedux(configureStore)(withReduxSaga(App));
