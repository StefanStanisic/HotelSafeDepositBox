import React from "react";
import { Provider } from 'react-redux';
import store from "./redux/root-reducer";

import './App.scss'

import Safe from "./components/safe/safe.component";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Safe></Safe>
      </div>
    </Provider>
  );
}

export default App;
