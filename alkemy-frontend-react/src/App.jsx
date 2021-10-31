import Routes from "./Routes/Routes";
import {
  BrowserRouter as Router,

} from "react-router-dom";
import React from "react";
import generateStore from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Router>

        <Routes />
      </Router>


    </Provider>
  );
};
export default App;