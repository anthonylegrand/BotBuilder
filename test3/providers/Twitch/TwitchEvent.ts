import { BaseEvent } from "./../../models/BaseEvent";
import TwitchClient from "./TwitchClient";

abstract class _TwitchEvent implements BaseEvent {
  client: TwitchClient;
}

export { _TwitchEvent };
