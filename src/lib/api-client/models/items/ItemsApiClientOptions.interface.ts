/**
 * @Name ItemsApiClientEndpoints
 * @description
 * Interface for the Items urls used to avoid hard-coded strings
 */
export interface ItemsApiClientEndpoints{
    fetchItems: string
}

/**
 * @Name ItemsApiClientOptions
 * @description
 * Interface for the Items api client options (including endpoints used for hard-coded strings)
 */
export interface ItemsApiClientOptions {
    mockDelay?: number
    endpoints: ItemsApiClientEndpoints
}