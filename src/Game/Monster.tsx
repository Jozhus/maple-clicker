import React, { Component } from "react";
import { IMonsterProps } from "./models/IMonsterProps";
import { IMonsterState } from "./models/IMonsterState";
import { IDropProps } from "./models/IDropProps";
import { dropTable } from "./constants/ExportedConstants";
import "../css/Monster.css";

class Monster extends Component<IMonsterProps, IMonsterState> {
    constructor(props: IMonsterProps) {
        super(props);

        this.state = {
            name: "",
            level: 0,
            health: 0,
            exp: 0,
            physicalDefence: 0,
            magicalDefence: 0,
            pdr: 0,
            attack: 0,
            loot: [],
            image: ""
        };
    }

    componentDidMount(): void {
        this.summonRandomMonster();
    }

    private summonRandomMonster(): void {
        this.setState({ ...this.props.monsterList[Math.floor(Math.random() * this.props.monsterList.length)] });
    }

    private takeDamage(): void {
        let newHealth: number = this.state.health - this.props.getPlayerDamage();
        if (newHealth <= 0) {
            this.setState({ health: 0 });
            this.die();
        } else {
            this.setState({ health: newHealth });
        }

        this.props.damagePlayer(this.state.attack);
    }

    private die(): void {
        this.state.loot.forEach((type: string) => {
            dropTable[type].forEach((item: IDropProps) => {
                this.props.dropLoot(item.name, item.maxAmount); // Account for drop chance later.
            });
        });
        this.summonRandomMonster();
    }

    public render(): JSX.Element {
        return (
            <div
                className="Monster noselect"
                onClick={() => this.takeDamage()}
            >
                <div className="info">
                    {this.state.health}
                </div>
                <br />
                <img
                    className="image"
                    src={this.state.image}
                />
                <div className="info">
                    {this.state.name}
                </div>
            </div>
        );
    }
}

export { Monster };