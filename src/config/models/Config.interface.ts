import {
  ItemsApiClientOptions, // NOTE: we'll create this a bit later
} from "@/api-client/models";
export interface HttpClientConfigInterface {
  tokenKey: string;
  clientType: string;
}
/**
 * @Name ConfigInterface
 * @description
 * Describes the structure of a configuration file
 */
export interface ConfigInterface {
  global: {
    // ... things that are not specific to a single app domain
    version: number;
  };
  httpClient: HttpClientConfigInterface;
  apiClient: {
    type: string;
  };
  items: {
    apiClientOptions: ItemsApiClientOptions;
  };
}
