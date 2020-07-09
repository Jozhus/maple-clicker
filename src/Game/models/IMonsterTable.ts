import { IMonsterInfo } from "./IMonsterInfo";

interface IMonsterTable {
    [location: string]: IMonsterInfo[]
};

export type { IMonsterTable };