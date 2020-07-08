import { IMonsterInfo } from "./IMonsterInfo";
import { ILoot } from "./ILoot";

interface IMonsterProps {
    monsterList: IMonsterInfo[];
    dropLoot: (loot: ILoot) => void;
    getPlayerDamage: () => number;
    damagePlayer: (damage: number) => void;
};

export type { IMonsterProps };