import { ICharInfo } from "./ICharInfo";
import { IEquipProps } from "./IEquipProps";

interface IDataControllerState extends ICharInfo {
    inventory: {
        mesos: number;
        equips: IEquipProps[];
    }
    statWindowOpen: boolean;
    inventoryOpen: boolean;
};

export type { IDataControllerState };