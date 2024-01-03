

// import a reference to Svelte's writeable from 'svelte/store'
import * as SvelteStore from 'svelte/store';
// import a reference to our Item interface
import type { ItemInterface } from '$lib/models/items/Item.interface';

/**
 * @name ItemsStoreActionsInterface
 * @description Interface represents our item store actions
 */
export interface ItemsStoreActionsInterface {
    loadItems (): Promise<void>
    toggleItemSelected (item: ItemInterface): Promise<void>
}

/** 
 * @name ItemsStoreGettersInterface
 * @description Getters will be used to consume the data from the store
 */
export interface ItemsStoreGettersInterface {
    loading: SvelteStore.Readable<boolean>
    items: SvelteStore.Readable<ItemInterface[]>
}

/** 
 * @name ItemsStoreInterface
 * @description Interface represents our Items store module
 */
export interface ItemsStoreInterface {
    actions: ItemsStoreActionsInterface
    getters: ItemsStoreGettersInterface
}