import BaseClient from "./BaseClient";

abstract class BaseEvent {
  abstract client: BaseClient;
}

export default BaseEvent;
