import React, { Component } from "react";
import { monsterTable } from "./constants/Tables";
import { Monster } from "./Monster";
import { IBattlefieldProps } from "./models/IBattlefieldProps";
import { IBattlefieldState } from "./models/IBattlefieldState";
import { IItemProps } from "./models/IItemProps";
import { generateItem } from "./helpers/generateItem";
import { ItemSlot } from "./ItemSlot";
import { v4 as uuid } from "uuid";
import "../css/Battlefield.css";

class Battlefield extends Component<IBattlefieldProps, IBattlefieldState> {
    constructor(props: IBattlefieldProps) {
        super(props);

        this.state = {
            groundLoot: [],
            renderedLoot: []
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
        let prevRenderedLoot: JSX.Element[] = this.state.renderedLoot;

        if (prevGroundLoot.every((groundItem: IItemProps, index: number) => {
            if (item.stackable && groundItem.itemName === item.itemName) {
                groundItem.amount += item.amount;
                prevRenderedLoot[index] = <ItemSlot key={uuid()} item={groundItem} />;
                return false;
            }

            return true;
        })) {
            prevGroundLoot.push(item);
            prevRenderedLoot.push(<ItemSlot key={uuid()} item={item} />)
        }

        this.setState({ groundLoot: prevGroundLoot, renderedLoot: prevRenderedLoot });
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
                <div className="ground noselect">
                    <div className="title">
                        {this.props.location}
                    </div>
                    {this.state.renderedLoot.map((itemSlot: JSX.Element) => itemSlot)}
                </div>
            </React.Fragment>
        );
    }
}

export { Battlefield };