import { IItemProps } from "./IItemProps";
import { IEquipProps } from "./IEquipProps";

interface IItemList {
    [id: string]: IItemProps | IEquipProps;
};

export type { IItemList };