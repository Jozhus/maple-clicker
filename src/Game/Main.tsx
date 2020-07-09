import React, { Component } from "react";
import { Button } from "reactstrap";
import { StatWindow } from "./StatWindow";
import { Battlefield } from "./Battlefield";
import { IMainState } from "./models/IMainState";
import { ICharInfo } from "./models/ICharInfo";

class Main extends Component<{}, IMainState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            statWindowOpen: false,
            charInfo: {
                basicInfo: {
                    name: "(You)",
                    class: "Swordsman",
                    level: 1,
                    hpMax: 1000,
                    mpMax: 1000,
                    hpCurr: 1000,
                    mpCurr: 1000
                },
                stats: {
                    str: 4,
                    dex: 4,
                    int: 4,
                    luk: 4
                },
                detailed: {
                    damage: "54 ~ 54"
                }
            }
        };

        this.calculateDamage = this.calculateDamage.bind(this);
        this.takeDamage = this.takeDamage.bind(this);
    }

    private calculateDamage(/* Monster IED, def, etc.. */): number {
        // Player damage calculations
        return 50;
    }

    private takeDamage(damage: number): void {
        // Damage calculations
        const prevCharInfo: ICharInfo = { ...this.state.charInfo };
        let newHp: number = prevCharInfo.basicInfo.hpCurr - damage;

        if (newHp <= 0) {
            newHp = 0;
            this.die();
        }

        prevCharInfo.basicInfo.hpCurr = newHp;

        this.setState({ charInfo: prevCharInfo });
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
                {this.state.statWindowOpen ?
                    <StatWindow
                        charInfo={this.state.charInfo}
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

export { Main };