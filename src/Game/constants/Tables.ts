import { IMonsterTable } from "../models/IMonsterTable";
import { IDropTable } from "../models/IDropTable";
import { IItemList } from "../models/IItemList";

const monsterTable: IMonsterTable = {
    "Lith Harbor": [
        {
            name: "Snail",
            level: 1,
            health: 15,
            exp: 3,
            physicalDefence: 0,
            magicalDefence: 0,
            pdr: 0.1,
            attack: 2,
            loot: [
                "common"
            ],
            image: "https://vignette.wikia.nocookie.net/maplestory/images/6/6c/Mob_Snail.png"
        }
    ],
    "Henesys": [
        {
            name: "Orange Mushroom",
            level: 10,
            health: 187,
            exp: 23,
            physicalDefence: 0,
            magicalDefence: 10,
            pdr: 0.1,
            attack: 10,
            loot: [
                "common",
                "low_level_gear"
            ],
            image: "https://vignette.wikia.nocookie.net/maplestory/images/0/02/Mob_Orange_Mushroom.png"
        },
        {
            name: "Green Mushroom",
            level: 10,
            health: 187,
            exp: 23,
            physicalDefence: 12,
            magicalDefence: 40,
            pdr: 0.05,
            attack: 47,
            loot: [
                "common",
                "low_level_gear"
            ],
            image: "https://vignette.wikia.nocookie.net/maplestory/images/9/92/Mob_Green_Mushroom.png"
        },
        {
            name: "Horny Mushroom",
            level: 12,
            health: 262,
            exp: 29,
            physicalDefence: 30,
            magicalDefence: 0,
            pdr: 0.1,
            attack: 51,
            loot: [
                "common",
                "low_level_gear"
            ],
            image: "https://vignette.wikia.nocookie.net/maplestory/images/3/3c/Mob_Horny_Mushroom.png"
        },
        {
            name: "Blue Mushroom",
            level: 14,
            health: 337,
            exp: 33,
            physicalDefence: 10,
            magicalDefence: 60,
            pdr: 0.1,
            attack: 58,
            loot: [
                "common",
                "low_level_gear",
                "lol"
            ],
            image: "https://vignette.wikia.nocookie.net/maplestory/images/a/ad/Mob_Blue_Mushroom.png"
        }
    ]
};

const dropTable: IDropTable = {
    "common": [
        {
            name: "meso",
            chance: 0.5,
            minAmount: 50,
            maxAmount: 100
        },
        {
            name: "red_potion",
            chance: 0.3,
            minAmount: 1,
            maxAmount: 5
        }
    ],
    "low_level_gear": [
        {
            name: "wooden_buckler",
            chance: 0.1,
            minAmount: 1,
            maxAmount: 1
        },
        {
            name: "blue_cloth_pants",
            chance: 0.1,
            minAmount: 1,
            maxAmount: 1
        },
        {
            name: "green_ghetto_beanie",
            chance: 0.1,
            minAmount: 1,
            maxAmount: 1
        },
    ],
    "lol": [
        {
            name: "arcane_claw",
            chance: 0.5,
            minAmount: 1,
            maxAmount: 1
        }
    ]
};

const itemList: IItemList = {
    "meso": {
        itemName: "Meso",
        stackable: true,
        type: "other",
        amount: 0,
        image: "https://vignette.wikia.nocookie.net/cxzcxzcedfeqwfdew/images/0/0e/Meso_Coin.png",
        sellPrice: 1
    },
    "red_potion": {
        itemName: "Red Potion",
        stackable: true,
        type: "consumable",
        amount: 0,
        image: "https://vignette.wikia.nocookie.net/maplestory/images/c/cf/Use_Red_Potion.png",
        sellPrice: 3
    },
    "wooden_buckler": {
        itemName: "Wooden Buckler",
        stackable: false,
        type: "equipment",
        amount: 0,
        image: "https://vignette.wikia.nocookie.net/maplestory/images/5/58/Eqp_Wooden_Buckler.png",
        sellPrice: 400,
        levelReq: 10,
        slots: 7,
        stars: 0,
        potentialTier: "none",
        baseStats: {
            defence: 10
        }
    },
    "blue_cloth_pants": {
        itemName: "Blue Cloth Pants",
        stackable: false,
        type: "equipment",
        amount: 0,
        image: "https://vignette.wikia.nocookie.net/maplestory/images/6/66/Eqp_Blue_Cloth_Pants_%28Male%29.png",
        sellPrice: 300,
        levelReq: 10,
        slots: 7,
        stars: 0,
        baseStats: {
            defence: 9
        }
    },
    "green_ghetto_beanie": {
        itemName: "Green Ghetto Beanie",
        stackable: false,
        type: "equipment",
        amount: 0,
        image: "https://vignette.wikia.nocookie.net/maplestory/images/b/b9/Eqp_Green_Ghetto_Beanie.png",
        sellPrice: 100,
        levelReq: 10,
        slots: 7,
        stars: 0,
        baseStats: {
            defence: 9
        }
    },
    "arcane_claw": {
        itemName: "Arcane Umbra Guards",
        stackable: false,
        type: "equipment",
        amount: 0,
        image: "https://vignette.wikia.nocookie.net/maplestory/images/6/67/Eqp_Arcane_Umbra_Guards.png",
        sellPrice: 1,
        levelReq: 200,
        slots: 8,
        stars: 0,
        baseStats: {
            dex: 100,
            luk: 100,
            attk: 149,
            bossDamage: 0.3,
            ied: 0.2
        }
    }
};

export { monsterTable, dropTable, itemList };