import { ApiClientInterface } from "../models";
import { itemsApiClient } from "./items";
// create an instance of our main ApiClient that wraps the mock child clients
const apiMockClient: ApiClientInterface = {
  items: itemsApiClient,
};
export { apiMockClient };
