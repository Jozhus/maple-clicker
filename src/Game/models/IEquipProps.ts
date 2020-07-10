import { IItemProps } from "./IItemProps";

interface IEquipProps extends IItemProps {
    levelReq: number;
    slots: number;
    stars: number;
    potentialTier: string;
    baseStats: {
        str?: number;
        dex?: number;
        int?: number;
        luk?: number;
        attk?: number;
        mattk?: number;
        maxHp?: number;
        maxMp?: number;
        defence?: number;
        bossDamage?: number;
        ied?: number;
    }
    scrollBonuses?: {
        str?: number;
        dex?: number;
        int?: number;
        luk?: number;
        attk?: number;
        mattk?: number;
        maxHp?: number;
        maxMp?: number;
        defence?: number;
    }
    starBonuses?: {
        str?: number;
        dex?: number;
        int?: number;
        luk?: number;
        attk?: number;
        mattk?: number;
        maxHp?: number;
        maxMp?: number;
        defence?: number;
    }
    potential?: {
        line1: string;
        line2: string;
        line3?: string;
    };
};

export type { IEquipProps };