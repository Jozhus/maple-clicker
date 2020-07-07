import React, { Component } from "react";
import Draggable from "react-draggable";
import { IStatWindowProps } from "../models/IStatWindowProps";
import { Row, Col } from "reactstrap";
import { v4 as uuid } from "uuid";
import "../css/StatWindow.css";

class StatWindow extends Component<IStatWindowProps, {}> {
    public render(): JSX.Element {
        return (
            <Draggable>
                <div
                    className="StatWindow"
                    style={{ position: "absolute" }}
                >
                    <div className="infoBox">
                        {Object.values(this.props.charInfo).map((ob: { [key: string]: [string | number] }) => {
                            return Object.entries(ob).map(([field, value]: [string, any]) => {
                                return (
                                    <Row className="infoRow" key={uuid()}>
                                        <Col key={uuid()}>
                                            <div className="fieldCol" key={uuid()}>
                                                {field}
                                            </div>
                                        </Col>
                                        <Col key={uuid()}>
                                            <div className="valueCol" key={uuid()}>
                                                {value}
                                            </div>
                                        </Col>
                                    </Row>
                                );
                            });
                        })}
                    </div>
                </div>
            </Draggable>
        );
    }
}

export { StatWindow };