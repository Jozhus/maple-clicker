import { IItemProps } from "./IItemProps";

interface IBattlefieldState {
    groundLoot: IItemProps[];
    renderedLoot: JSX.Element[];
};

export type { IBattlefieldState };