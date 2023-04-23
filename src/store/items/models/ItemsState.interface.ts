// file: src/store/items/models/ItemsState.interface.ts
import type { ItemInterface } from "@/models/items/Item.interface";
/**
* @name ItemsStateInterface
* @description Interface represents the Items state
*/
export interface ItemsStateInterface {
    loading: boolean
    items: ItemInterface[]
    }