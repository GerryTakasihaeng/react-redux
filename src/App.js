import React from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import "./styles.css";
import Grid from "./components/Grid";

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Grid />
      </Provider>
    </div>
  );
}
