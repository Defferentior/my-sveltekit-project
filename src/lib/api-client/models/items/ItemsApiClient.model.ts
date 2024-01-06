import axios, { type AxiosRequestConfig, AxiosError, type AxiosResponse } from 'axios';
import type { ItemsApiClientOptions, ItemsApiClientEndpoints } from './ItemsApiClientOptions.interface';
import type { ItemsApiClientInterface } from './ItemsApiClient.interface';
import type { ItemInterface } from '$lib/models';

/**
 * @Name ItemsApiClientModel
 * @description
 * Implements the ItemsApiClientInterface interface
 */
export class ItemsApiClientModel implements ItemsApiClientInterface {
    private readonly endpoints!: ItemsApiClientEndpoints;
    private readonly mockDelay: number = 0;

    constructor(options: ItemsApiClientOptions) {
        this.endpoints = options.endpoints;
        if (options.mockDelay) {
            this.mockDelay = options.mockDelay;
        }
    }


fetchItems(): Promise<ItemInterface[]> {
    return new Promise<ItemInterface[]>((resolve) => {
        const endpoint = this.endpoints.fetchItems

        //axios options
        const options: AxiosRequestConfig = {
            headers: {
            }
        }
        
        axios
            .get(endpoint, options)
            .then((response: AxiosResponse) => {
                if (!this.mockDelay) {
                    resolve(response.data as ItemInterface[])
                } else {
                    setTimeout(() => {
                        resolve(response.data as ItemInterface[])
                    }, this.mockDelay)
                }
            })
            .catch((error: AxiosError) => {
                console.error('ItemsApiClient: Http Client: Get: error', error)
            })
        })
    }
}
