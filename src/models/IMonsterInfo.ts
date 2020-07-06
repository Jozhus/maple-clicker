interface IMonsterInfo {
    name: string;
    level: number;
    health: number;
    physicalDefence: number;
    magicalDefence: number;
    pdr: number;
    attack: number;
    loot: string[];
};

export type { IMonsterInfo };