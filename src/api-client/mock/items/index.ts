import { config } from '@/config'
import {
  ItemsApiClientInterface,
  ItemsApiClientModel
} from "../../models/items/index";
// instantiate the ItemsApiClient pointing at the url that returns static json mock data
const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(config.items.apiClientOptions)
// export our instance
export { itemsApiClient };
