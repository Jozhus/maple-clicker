import React, { Component } from "react";
import { IItemExaminerProps } from "./models/IItemExaminerProps";
import { IEquipProps } from "./models/IEquipProps";
import { v4 as uuid } from "uuid";
import "../css/ItemExaminer.css";
import { IStats } from "./models/IStats";

class ItemExaminer extends Component<IItemExaminerProps, {}> {
    private drawStars(): JSX.Element | null {
        if (this.props.item.type !== "equipment") {
            return null;
        }

        const item: IEquipProps = this.props.item as IEquipProps;

        let fullStars: string = "";
        let emptyStars: string = "";
        let starCount: number = 0;
        [...'★'.repeat(item.maxStars).replace(/(.{5})/g, "$1 ")].forEach((char: string) => {
            if (starCount < item.stars) {
                fullStars += char;
                starCount += char === '★' ? 1 : 0;
            } else {
                emptyStars += char;
            }
        });

        return (
            <div className="itemStars" key={uuid()}>
                <span className="star full">{fullStars}</span><span className="star empty">{emptyStars}</span>
            </div>
        );
    }

    private drawStats(): JSX.Element[] | null {
        if (this.props.item.type !== "equipment") {
            return null;
        }

        const item: IEquipProps = this.props.item as IEquipProps;

        const statList: IStats = { ...item.baseStats };

        if (item.scrollBonuses) {
            Object.entries(item.scrollBonuses).forEach(([stat, value]: [string, number | undefined]) => {
                const statKey: keyof typeof statList = stat as keyof typeof statList; // #JustTypescriptThings (I need to find a way to not have to do this.)
                if (!statList[statKey]) {
                    statList[statKey] = 0;
                }
            });
        }

        if (item.starBonuses) {
            Object.entries(item.starBonuses).forEach(([stat, value]: [string, number | undefined]) => {
                const statKey: keyof typeof statList = stat as keyof typeof statList;
                if (!statList[statKey]) {
                    statList[statKey] = 0;
                }
            });
        }

        return Object.entries(statList).map(([stat, value]: [string, number | undefined]) => {
            let statString: string = stat;
            let enhanceValue: number = 0;
            let totalValue: number = value!;
            let valueString: string = "";

            switch (stat) {
                case "str":
                case "dex":
                case "int":
                case "luk":
                    statString = stat.toUpperCase();
                    break;
                case "attk":
                    statString = "Attack Power";
                    break;
                case "mattk":
                    statString = "Magic Attack";
                    break;
                case "bossDamage":
                    statString = "Boss Damage";
                    break;
                case "ied":
                    statString = "Ignored Enemy DEF";
                    break;
                default:
                    statString = stat[0].toUpperCase() + stat.slice(1);
            }

            if (item.scrollBonuses && item.scrollBonuses[stat as keyof typeof item.scrollBonuses]) {
                enhanceValue += item.scrollBonuses[stat as keyof typeof item.scrollBonuses];

            }

            if (item.starBonuses && item.starBonuses[stat as keyof typeof item.starBonuses]) {
                enhanceValue += item.starBonuses[stat as keyof typeof item.starBonuses];
            }

            totalValue += enhanceValue;

            valueString = (stat === "bossDamage" || stat === "ied") ?
                `${totalValue * 100}%` :
                `${totalValue}`;

            return (
                <div className="itemExaminerStatInfo" key={uuid()}>
                    {value === totalValue ?
                        <div>{statString}: +{valueString}</div> :
                        <div>
                            <span className="enhanced">{statString}: +{totalValue} </span> ({value} <span className="enhanced">+{enhanceValue}</span>)
                        </div>
                    }
                </div>
            );
        });
    }

    public render(): JSX.Element {
        return (
            <div className="itemExaminer">
                {this.drawStars()}
                <div className="itemExaminerName">
                    • {this.props.item.itemName}
                </div>
                <hr />
                <div
                    className="itemExaminerImageContainer"
                //style={{ border: "solid purple" }}
                >
                    <img
                        className="itemExaminerImage"
                        src={this.props.item.image}
                        alt={this.props.item.itemName}
                    />
                </div>
                <hr />
                {this.drawStats()}
            </div>
        );
    }
}

export { ItemExaminer };