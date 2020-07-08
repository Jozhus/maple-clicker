interface IMonsterInfo {
    name: string;
    level: number;
    health: number;
    exp: number;
    physicalDefence: number;
    magicalDefence: number;
    pdr: number;
    attack: number;
    loot: string[];
    image: string;
};

export type { IMonsterInfo };