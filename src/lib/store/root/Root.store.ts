import type { RootStoreInterface } from "./models/RootStore.interface"

// import our items slice and store
import { useItemsStore } from "$lib/store/items/Items.Store"

// hook that returns our root store instance and will allow us to consume our app store from our components
export function useAppStore(): RootStoreInterface {
    return {
        itemsStore: useItemsStore()
        // add more stores here...
    }
}