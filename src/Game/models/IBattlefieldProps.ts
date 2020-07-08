interface IBattlefieldProps {
    location: string;
    damagePlayer: (damage: number) => void;
    getPlayerDamage: () => number;
};

export type { IBattlefieldProps };