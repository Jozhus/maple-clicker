import { IEquipProps } from "./IEquipProps";

interface IInventoryProps {
    inventory: {
        mesos: number;
        equips: IEquipProps[];
    }
};

export type { IInventoryProps };