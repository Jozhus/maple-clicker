import React, { Component } from "react";
import { monsterList } from "./constants/ExportedConstants";
import { Monster } from "./Monster";
import { IBattlefieldProps } from "./models/IBattlefieldProps";
import { IBattlefieldState } from "./models/IBattlefieldState";
import { ILoot } from "./models/ILoot";
import "../css/Battlefield.css";

class Battlefield extends Component<IBattlefieldProps, IBattlefieldState> {
    constructor(props: IBattlefieldProps) {
        super(props);

        this.state = {
            groundLoot: []
        };

        this.dropLoot = this.dropLoot.bind(this);
    }

    private dropLoot(item: ILoot): void {
        let prevGroundLoot: ILoot[] = this.state.groundLoot;

        if (prevGroundLoot.length && item.stackable) {
            prevGroundLoot.some((groundLoot: ILoot, index: number) => {
                if (item.name === groundLoot.name) {
                    groundLoot.amount += item.amount;
                }

                return item.name === groundLoot.name;
            });
        } else {
            prevGroundLoot.push(item);
        }

        this.setState({ groundLoot: prevGroundLoot });
    }

    public render(): JSX.Element {
        return (
            <React.Fragment>
                <Monster
                    monsterList={monsterList[this.props.location]}
                    dropLoot={this.dropLoot}
                    getPlayerDamage={this.props.getPlayerDamage}
                    damagePlayer={this.props.damagePlayer}
                />
                <div className="ground">
                    <div className="title">
                        {this.props.location}
                    </div>
                    <div>
                        {JSON.stringify(this.state.groundLoot, null, 3)}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export { Battlefield };