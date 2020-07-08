import React, { Component } from "react";
import { Main } from "./Game/Main";
import "bootstrap/dist/css/bootstrap.css";
import "./css/General.css";

class App extends Component {
  public render(): JSX.Element {
    return (
      <Main />
    );
  }
}

export { App };