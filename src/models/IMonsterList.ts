import { IMonsterInfo } from "./IMonsterInfo";

interface IMonsterList {
    [location: string]: IMonsterInfo[]
};

export type { IMonsterList };