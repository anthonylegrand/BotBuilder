import BaseClient from "./BaseClient";

abstract class InOut {}

abstract class BaseEvent {
  abstract client: BaseClient;
}

export { BaseEvent, InOut };
