import { BaseEvent } from "./BaseEvent";
import { ClientRender } from "./BaseRender";

interface BaseClient {
  _renderElement: ClientRender;
  events: BaseEvent[];
}

export default BaseClient;
