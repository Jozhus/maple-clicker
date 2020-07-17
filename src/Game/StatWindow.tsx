import React, { Component } from "react";
import Draggable from "react-draggable";
import { IStatWindowProps } from "./models/IStatWindowProps";
import { Row } from "reactstrap";
import { v4 as uuid } from "uuid";
import "../css/StatWindow.css";

class StatWindow extends Component<IStatWindowProps, {}> {

    private formatBasicInfo(): { [field: string]: string | number } {
        return ({
            name: this.props.basicInfo.name,
            class: this.props.basicInfo.class,
            hp: `${this.props.currHp} / ${this.props.basicInfo.maxHp}`,
            mp: `${this.props.currMp} / ${this.props.basicInfo.maxMp}`
        });
    }

    private formatStats(): { [stat: string]: string } {
        const stats: { [stat: string]: string } = {};
        Object.entries(this.props.stats).forEach(([stat, totalStat]: [string, number]) => {
            stats[stat] = `${totalStat} (${totalStat}+0)`;
        });

        return stats;
    }

    private createInfoRows(): JSX.Element[][] {
        return (
            Object.values({ basicInfo: this.formatBasicInfo(), stats: this.formatStats() }).map((ob: { [key: string]: string | number }) => {
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
                    className="window"
                    style={{ position: "absolute" }}
                >
                    <div className="handle noselect">
                        CHARACTER STAT
                    </div>
                    <div className="infoBox">
                        {this.createInfoRows()}
                    </div>
                </div>
            </Draggable>
        );
    }
};

export { StatWindow };