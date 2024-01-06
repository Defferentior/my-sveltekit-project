import type { ItemsApiClientInterface } from "./items";

/**
 * @Name APIClientInterface
 * @description
 * Interface wraps all api client modules into one place for keeping code organized
 */
export interface ApiClientInterface {
    items: ItemsApiClientInterface
}