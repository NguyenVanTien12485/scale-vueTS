import {
  ItemsApiClientInterface,
  ItemsApiClientModel,
} from "../../models/items";
import { config } from '@/config'

// instantiate the ItemsApiClient pointing at the url that returns static json live data
const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(config.items.apiClientOptions)
// export our instance
export { itemsApiClient };
