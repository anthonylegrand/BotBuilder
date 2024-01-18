import BaseClient from "../../models/BaseClient";
import { _TwitchEvent } from "./TwitchEvent";
import { ClientRender } from "../../models/BaseRender";

class TwitchClient implements BaseClient {
  _renderElement: ClientRender = { title: "Twitch Bot", outputs: [] };
  events: _TwitchEvent[];

  constructor() {}
}

export default TwitchClient;
