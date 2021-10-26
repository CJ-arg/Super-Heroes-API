import Routes from "./Routes/Routes";

import React from "react";
import generateStore from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
  const store = generateStore();
  return (
    <Provider store={store}>

      <Routes />


    </Provider>
  );
};
export default App;