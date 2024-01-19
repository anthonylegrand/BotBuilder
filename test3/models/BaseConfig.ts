import { ConfigData, RequiredData } from "../utils/ConfigData";

interface BaseConfig {
  required: RequiredData[];
  config: ConfigData[];
}

export { BaseConfig };
