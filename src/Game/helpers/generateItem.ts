import { IItemProps } from "../models/IItemProps";
import { itemList } from "../constants/Tables";

function generateItem(itemName: string, amount: number): IItemProps {
    if (!(itemName in itemList)) {
        throw new Error(`${itemName} does not exist.`);
    } else if (amount < 1) {
        throw new Error(`Invalid amount.`);
    } else if (amount > 1 && !itemList[itemName].stackable) {
        amount = 1;
    }

    return ({
        ...itemList[itemName],
        amount
    });
}

export { generateItem };