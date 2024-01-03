import type { ItemInterface } from '$lib/models/items/Item.interface'

/** 
 * @interface ItemsStateInterface
 * @description Interface represents our item state
 */

export interface ItemsStateInterface {
    loading: boolean
    items: ItemInterface[]
}