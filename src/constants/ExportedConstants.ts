import { IMonsterList } from "../models/IMonsterList";
import { IDropTable } from "../models/IDropTable";

const monsterList: IMonsterList = {
    Henesys: [
        {
            name: "Orange Mushroom",
            level: 10,
            health: 187,
            physicalDefence: 0,
            magicalDefence: 10,
            pdr: 0.1,
            attack: 10,
            loot: [
                "common"
            ]
        }
    ]
};

const dropTable: IDropTable = {
    "common": [
        {
            name: "meso",
            chance: 0.5,
            amount: 100
        }
    ]
};

export { monsterList, dropTable };