interface IItemProps {
    itemName: string;
    stackable: boolean;
    type: string;
    amount: number;
    image: string;
    sellPrice: number;
    description?: string;
};

export type { IItemProps };