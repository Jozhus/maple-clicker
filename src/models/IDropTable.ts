import { ILoot } from "./ILoot";

interface IDropTable {
    [type: string]: ILoot[]
};

export type { IDropTable };