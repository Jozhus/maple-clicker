import React, { Component } from "react";
import { IItemSlotProps } from "./models/IItemSlotProps";
import { IItemSlotsState } from "./models/IItemSlotsState";
import ReactToolTip from "react-tooltip";
import { v4 as uuid } from "uuid";
import { ItemExaminer } from "./ItemExaminer";
import "../css/ItemSlot.css";
import "../css/Tooltip.css";

class ItemSlot extends Component<IItemSlotProps, IItemSlotsState> {
    constructor(props: IItemSlotProps) {
        super(props);

        this.state = {
            id: uuid()
        };
    }

    public render(): JSX.Element {
        return (
            <React.Fragment>
                <div className="itemBox" data-tip data-for={this.state.id}>
                    <div className="placementBox">
                        <img
                            className="itemImage"
                            src={this.props.item.image}
                            alt={this.props.item.itemName}
                        />
                    </div>
                    {this.props.item.stackable ?
                        <div className="placementBox">
                            <div className="itemAmount">
                                {this.props.item.amount}
                            </div>
                        </div> : null
                    }
                </div>
                <ReactToolTip
                    className="tooltip"
                    id={this.state.id}
                >
                    <ItemExaminer
                        item={this.props.item}
                    />
                </ReactToolTip>
            </React.Fragment>
        );
    }
}

export { ItemSlot };