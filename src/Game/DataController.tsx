import React, { Component } from "react";
import { Button } from "reactstrap";
import { StatWindow } from "./StatWindow";
import { Battlefield } from "./Battlefield";
import { IDataControllerState } from "./models/IDataControllerState";
import { Inventory } from "./Inventory";
import "../css/Window.css";

import { generateItem } from "./helpers/generateItem";
import { IEquipProps } from "./models/IEquipProps";

class DataController extends Component<{}, IDataControllerState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            // Character information
            currHp: 1000,
            currMp: 1000,
            basicInfo: {
                name: "(You)",
                class: "Swordsman",
                level: 1,
                maxHp: 1000,
                maxMp: 1000
            },
            stats: {
                str: 4,
                dex: 4,
                int: 4,
                luk: 4
            },
            detailed: {
                damage: "54 ~ 54"
            },
            inventory: {
                mesos: 0,
                equips: [
                    generateItem("genesis_psy-limiter", 1) as IEquipProps
                ]
            },

            statWindowOpen: false,
            inventoryOpen: false
        };

        this.calculateDamage = this.calculateDamage.bind(this);
        this.takeDamage = this.takeDamage.bind(this);
    }

    private calculateDamage(/* Monster IED, def, etc.. */): number {
        // Player damage calculations
        return 107;
    }

    private takeDamage(damage: number): void {
        // Damage calculations
        let newHp: number = this.state.currHp - damage;

        if (newHp <= 0) {
            newHp = 0;
            this.die();
        }

        this.setState({ currHp: newHp });
    }

    private die(): void {
        console.log("You died");
    }

    public render(): JSX.Element {
        return (
            <React.Fragment>
                <Button
                    onClick={() => { this.setState({ statWindowOpen: !this.state.statWindowOpen }) }}
                >
                    Stats
                </Button>
                <Button
                    onClick={() => { this.setState({ inventoryOpen: !this.state.inventoryOpen }) }}
                >
                    Inventory
                </Button>
                {this.state.statWindowOpen ?
                    <StatWindow
                        currHp={this.state.currHp}
                        currMp={this.state.currMp}
                        basicInfo={this.state.basicInfo}
                        stats={this.state.stats}
                        detailed={this.state.detailed}
                    /> : null
                }
                {this.state.inventoryOpen ?
                    <Inventory
                        inventory={this.state.inventory}
                    /> : null
                }
                <Battlefield
                    location="Henesys"
                    damagePlayer={this.takeDamage}
                    getPlayerDamage={this.calculateDamage}
                />
            </React.Fragment>
        );
    }
}

export { DataController };