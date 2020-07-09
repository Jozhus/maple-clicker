import React, { Component } from "react";
import { monsterTable } from "./constants/ExportedConstants";
import { Monster } from "./Monster";
import { IBattlefieldProps } from "./models/IBattlefieldProps";
import { IBattlefieldState } from "./models/IBattlefieldState";
import { IItemProps } from "./models/IItemProps";
import "../css/Battlefield.css";
import { generateItem } from "./helpers/generateItem";

class Battlefield extends Component<IBattlefieldProps, IBattlefieldState> {
    constructor(props: IBattlefieldProps) {
        super(props);

        this.state = {
            groundLoot: []
        };

        this.dropLoot = this.dropLoot.bind(this);
    }

    private dropLoot(itemName: string, amount: number): void {
        let item: IItemProps;
        try {
            item = generateItem(itemName, amount);
        } catch (err) {
            console.error(err);
            return;
        }
        let prevGroundLoot: IItemProps[] = this.state.groundLoot;

        if (prevGroundLoot.every((groundItem: IItemProps) => {
            if (item.stackable && groundItem.itemName === item.itemName) {
                groundItem.amount += item.amount;
                return false;
            }

            return true;
        })) {
            prevGroundLoot.push(item);
        }

        this.setState({ groundLoot: prevGroundLoot });
    }

    public render(): JSX.Element {
        return (
            <React.Fragment>
                <Monster
                    monsterList={monsterTable[this.props.location]}
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