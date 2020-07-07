import React, { Component } from "react";
import Draggable from "react-draggable";
import { IStatWindowProps } from "../models/IStatWindowProps";
import { Row } from "reactstrap";
import { v4 as uuid } from "uuid";
import "../css/StatWindow.css";

class StatWindow extends Component<IStatWindowProps, {}> {

    private createInfoRows(): JSX.Element[][] {
        return (
            Object.values(this.props.charInfo).map((ob: { [key: string]: [string | number] }) => {
                return Object.entries(ob).map(([field, value]: [string, any]) => {
                    return (
                        <Row className="infoRow" key={uuid()}>
                            <div className="fieldCol" key={uuid()}>
                                {field.toUpperCase()}
                            </div>

                            <div className="valueCol" key={uuid()}>
                                {value}
                            </div>
                        </Row>
                    );
                });
            })
        );
    }

    public render(): JSX.Element {
        return (
            <Draggable
                //bounds="parent"
                handle=".handle"
            >
                <div
                    className="StatWindow"
                    style={{ position: "absolute" }}
                >
                    <div className="handle">
                        CHARACTER STAT
                    </div>
                    <div className="infoBox">
                        {this.createInfoRows()}
                    </div>
                </div>
            </Draggable>
        );
    }
}

export { StatWindow };