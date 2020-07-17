import { IMonsterTable } from "../models/IMonsterTable";
import { IDropTable } from "../models/IDropTable";
import { IItemList } from "../models/IItemList";
import monster from "./Monster.json";
import drops from "./Drops.json";
import items from "./Items.json";

const monsterTable: IMonsterTable = monster;
const dropTable: IDropTable = drops;
const itemList: IItemList = items;

export { monsterTable, dropTable, itemList };