import { IMonsterInfo } from "./IMonsterInfo";

interface IMonsterProps {
    monsterList: IMonsterInfo[];
    dropLoot: (itemName: string, amount: number) => void;
    getPlayerDamage: () => number;
    damagePlayer: (damage: number) => void;
};

export type { IMonsterProps };