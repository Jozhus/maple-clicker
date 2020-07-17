import React, { Component } from "react";
import { DataController } from "./Game/DataController";
import "bootstrap/dist/css/bootstrap.css";
import "./css/General.css";

class App extends Component {
  public render(): JSX.Element {
    return (
      <DataController />
    );
  }
}

export { App };