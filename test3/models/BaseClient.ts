import Provider from "../utils/Providers";
import { ClientRender } from "../utils/Render";
import { BaseConfig } from "./BaseConfig";
import { BaseEvent } from "./BaseEvent";

interface BaseClient {
  _provider: Provider;
  _renderElement: ClientRender;
  config: BaseConfig;
  events: BaseEvent[];
}

export default BaseClient;
