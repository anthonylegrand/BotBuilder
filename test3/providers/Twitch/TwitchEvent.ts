import BaseEvent from "./../../models/BaseEvent";
import TwitchClient from "./TwitchClient";

abstract class TwitchEvent implements BaseEvent {
  client: TwitchClient;
}

export default TwitchEvent;
