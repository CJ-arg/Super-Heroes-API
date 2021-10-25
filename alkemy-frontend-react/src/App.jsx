import Routes from "./Routes/Routes";
import "./App.css";
import React from "react";
import generateStore from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
  const store = generateStore();
  return (
    <Provider store={store}>
      <div className="container mt-10">
        <Routes />
      </div>

    </Provider>
  );
};
export default App;