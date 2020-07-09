import { IMonsterInfo } from "./IMonsterInfo";
import { IDropProps } from "./IDropProps";

interface IMonsterProps {
    monsterList: IMonsterInfo[];
    dropLoot: (loot: IDropProps) => void;
    getPlayerDamage: () => number;
    damagePlayer: (damage: number) => void;
};

export type { IMonsterProps };