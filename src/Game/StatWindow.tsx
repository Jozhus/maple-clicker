import React, { Component } from "react";
import Draggable from "react-draggable";
import { IStatWindowProps } from "../models/IStatWindowProps";
import "../css/StatWindow.css";

class StatWindow extends Component<IStatWindowProps, {}> {
    public render(): JSX.Element {
        return (
            <Draggable>
                <div
                    className="StatWindow"
                    style={{ position: "absolute" }}
                >
                    {JSON.stringify(this.props.charInfo, null, 3)}
                </div>
            </Draggable>
        );
    }
}

export { StatWindow };