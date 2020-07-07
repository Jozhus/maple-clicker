import React, { Component } from "react";
import { Button } from "reactstrap";
import { StatWindow } from "./StatWindow";
import { Monster } from "./Monster";
import { IMainState } from "../models/IMainState";

class Main extends Component<{}, IMainState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            statWindowOpen: false,
            charInfo: {
                basicInfo: {
                    name: "MagicBully",
                    class: "Kinesis",
                    level: 253
                },
                stats: {
                    str: 4,
                    dex: 4,
                    int: 1283,
                    luk: 4
                },
                detailed: {
                    damage: "10000 ~ 10000"
                }
            }
        };

        this.calculateDamage = this.calculateDamage.bind(this);
    }

    private calculateDamage(): number {
        return 54;
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
                <Monster
                    location={"Henesys"}
                    dropLoot={() => { }}
                    getPlayerDamage={this.calculateDamage}
                    damagePlayer={() => { }}
                />
            </React.Fragment>
        );
    }
}

export { Main };