import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import { Main } from "./Game/Main";

class App extends Component {
  public render(): JSX.Element {
    return (
      <Main />
    );
  }
}

export { App };