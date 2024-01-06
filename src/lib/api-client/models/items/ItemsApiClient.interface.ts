import type { ItemInterface } from '$lib/models'

/**
 * @Name ItemsApiClientInterface
 * @description
 * Interface for the Items api client module
 */
export interface ItemsApiClientInterface {
    fetchItems: () => Promise<ItemInterface[]>
}