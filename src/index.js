import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Firebase, { FirebaseContext } from "./components/Firebase";
import routes from "./routes";
import { curi } from "@curi/router";
import Browser from "@hickory/browser";
import active from "@curi/route-active";
import { curiProvider } from "@curi/react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import userReducer from './components/reducers/users_reducer.js'
import thunk from 'redux-thunk';

const store = createStore(userReducer, applyMiddleware(thunk))
const history = Browser();
const router = curi(history, routes, {
  route: [active()]
});
const Router = curiProvider(router);

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
  <Provider store={store}>
    <Router>
      {({ response }) => {
        const { body: Body, params } = response;
        return <div>{Body ? <Body params={params} /> : null}</div>;
      }}
    </Router>
    </Provider>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
