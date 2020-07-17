import { IItemProps } from "./IItemProps";
import { IStats } from "./IStats";

interface IEquipProps extends IItemProps {
    levelReq: number;
    slots: number;
    stars: number;
    maxStars: number;
    potentialTier: string;
    baseStats: IStats;
    scrollBonuses?: IStats;
    starBonuses?: IStats;
    potential?: {
        line1: string;
        line2: string;
        line3?: string;
    };
};

export type { IEquipProps };