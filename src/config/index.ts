// returns appropriate config based on env VITE_APP_CONFIG
// import a reference to our Config interface:
import { ConfigInterface } from "./models/Config.interface";
// import reference to configFilesMap
import { configFilesMap } from "./config-files-map";
// import reference to our getAppConfigKey helper function
import { getAppConfigKey } from "./utils";

if (!configFilesMap.has(getAppConfigKey())) {
  throw Error(`Could not find config for VITE_APP_CONFIG key "${getAppConfigKey()}\
    "`);
}

export const config = configFilesMap.get(getAppConfigKey()) as ConfigInterface;
