import { 
    type ItemsApiClientOptions,
    type ItemsApiClientInterface,
    ItemsApiClientModel
} from '../../models'

const options: ItemsApiClientOptions = {
    endpoints: {
        fetchItems: './static/mock-data/items/items.json'
    },
    mockDelay: 1000
}

// instantiate the ItemsApiClient pointing at the url that returns live data
const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(options)

export { 
    itemsApiClient
}