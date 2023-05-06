import { ItemsApiClientInterface } from "../models/items/ItemsApiClient.interface";
import { itemsApiClient } from "./items";
// create an instance of our main ApiClient that wraps the mock child clients
const apiMockClient: ItemsApiClientInterface = {
  items: itemsApiClient,
};
export { apiMockClient };
