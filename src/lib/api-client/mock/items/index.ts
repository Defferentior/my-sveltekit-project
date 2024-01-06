import { 
    type ItemsApiClientOptions,
    type ItemsApiClientInterface,
    ItemsApiClientModel
} from '../../models'

const options: ItemsApiClientOptions = {
    endpoints: {
        fetchItems: 'mock-data/items/items.json'
    },
    mockDelay: 2000
}

// instantiate the ItemsApiClient pointing at the url that returns static json mock data
const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(options)

export { 
    itemsApiClient
}