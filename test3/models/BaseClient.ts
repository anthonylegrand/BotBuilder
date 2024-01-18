import BaseEvent from "./BaseEvent";
import { ClientRender } from "./BaseRender";

interface BaseClient {
  renderElement: ClientRender;
  events: BaseEvent[];
}

export default BaseClient;
