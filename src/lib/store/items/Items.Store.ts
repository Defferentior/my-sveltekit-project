/* eslint-disable no-self-assign */
//import a reference to Svelte's writeable from 'svelte/store'
import * as SvelteStore from 'svelte/store';
import { apiClient } from '$lib/api-client';

// import a reference to our item store and action interface
import type {
    ItemsStoreInterface,
    ItemsStoreActionsInterface,
    ItemsStoreGettersInterface
} from '$lib/store/items/models/ItemsStore.interface'
import type { ItemsStateInterface } from '$lib/store/items/models/ItemsState.interface'

// import a reference to our ItemInterface
import type { ItemInterface } from '$lib/models/items/Item.interface';

const writableItemsStore = SvelteStore.writable<ItemsStateInterface>({
    loading: false,
    items: []
})

// hook to allow us to consume the ItemsStore instance in our components
export function useItemsStore(): ItemsStoreInterface {

    // action that we invoke to load the items from an api:
    const actions: ItemsStoreActionsInterface = {
        loadItems: async () => {
            // set loading to true and clear current data:
            writableItemsStore.update((state) => {
                state.loading = true,
                state.items = []
                return state
            })

           // invoke our API client fetchItems to load the data from an api end-point
           const data = await apiClient.items.fetchItems()

           // set items data and loading to false
              writableItemsStore.update((state) => {
                state.loading = false,
                state.items = data
                return state
              })
            

           
        },

        // action that we invoke to toggle an item.selected property
        toggleItemSelected: async (item: ItemInterface) => {
            // update our state
            writableItemsStore.update((state) => {
                // find the item in our array
                const itemIndex = (state.items || []).findIndex((i) => i.id === item.id)
                // toggle the selected property
                if(itemIndex < 0) {
                    console.warn('ItemsStore: action toggleItemSelected: Could not find item in our state')
                    return state
                }

                console.log('ItemsStore: action toggleItemSelected: itemIndex', itemIndex)
                // toggle selected
                state.items[itemIndex].selected = !state.items[itemIndex].selected
                // keep current loading value
                state.loading = state.loading
                return state
            })
        }
    }

    const loading = SvelteStore.derived(writableItemsStore, ($state) => $state.loading) 
    const items = SvelteStore.derived(writableItemsStore, ($state) => $state.items)
    const getters: ItemsStoreGettersInterface = {
        loading,
        items
    }

    // return our store intance implementation
    return { 
        getters, 
        actions
    }

}