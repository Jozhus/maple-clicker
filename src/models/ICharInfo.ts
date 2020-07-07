interface ICharInfo {
    basicInfo: {
        name: string;
        class: string;
        level: number;
    }
    stats: {
        str: number;
        dex: number;
        int: number;
        luk: number;
    }
    detailed: {
        damage: string;
        // To be implemented later:
        // damageBonus: number;
        // bossDamage: number;
        // finalDamage: number;
        // ied: number;
        // critRate: number;
        // critDamage: number;
    }
};

export type { ICharInfo };