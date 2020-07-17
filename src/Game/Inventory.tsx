import React, { Component } from "react";
import Draggable from "react-draggable";
import { Nav, NavItem, NavLink, TabPane, TabContent } from "reactstrap";
import { IInventoryState } from "./models/IInventoryState";
import "../css/Inventory.css";
import { IInventoryProps } from "./models/IInventoryProps";
import { IEquipProps } from "./models/IEquipProps";
import { ItemSlot } from "./ItemSlot";

class Inventory extends Component<IInventoryProps, IInventoryState> {
    constructor(props: IInventoryProps) {
        super(props);

        this.state = {
            selectedTab: '1'
        };
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
                        ITEM INVENTORY
                    </div>
                    <Nav tabs>
                        <NavItem>
                            <NavLink onClick={() => { this.setState({ selectedTab: '1' }) }}>
                                EQUIP
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => { this.setState({ selectedTab: '2' }) }}>
                                USE
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => { this.setState({ selectedTab: '3' }) }}>
                                ETC
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.selectedTab}>
                        <TabPane tabId='1'>
                            {this.props.inventory.equips.map((item: IEquipProps) => {
                                return (
                                    <ItemSlot
                                        item={item}
                                    />
                                );
                            })}
                        </TabPane>
                    </TabContent>
                </div>
            </Draggable>
        );
    }
}

export { Inventory };