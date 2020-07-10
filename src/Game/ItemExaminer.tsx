import React, { Component } from "react";
import { IItemExaminerProps } from "./models/IItemExaminerProps";
import { IEquipProps } from "./models/IEquipProps";

class ItemExaminer extends Component<IItemExaminerProps, {}> {
    public render(): JSX.Element {

        return (
            <div className="itemExaminer">
                <div className="itemName">
                    {this.props.item.itemName}
                </div>
                <img
                    className="itemImage"
                    src={this.props.item.image}
                    alt={this.props.item.itemName}
                />
                {this.props.item.type === "equipment" ?
                    Object.entries((this.props.item as IEquipProps).baseStats).map(([stat, amount]: [string, number | undefined]) => {
                        return (
                            <div>
                                {stat}: {amount}
                            </div>
                        );
                    }) : null
                }
            </div>
        );
    }
}

export { ItemExaminer };