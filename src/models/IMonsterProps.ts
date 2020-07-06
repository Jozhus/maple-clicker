interface IMonsterProps {
    location: string;
    dropLoot: (loot: string[]) => void;
    getPlayerDamage: () => number;
    damagePlayer: (damage: number) => void;
};

export type { IMonsterProps };