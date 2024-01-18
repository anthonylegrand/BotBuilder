import BaseClient from "../../models/BaseClient";
import TwitchEvent from "./TwitchEvent";
import { ClientRender } from "../../models/BaseRender";

class TwitchClient implements BaseClient {
  renderElement: ClientRender = { title: "soon" };
  events: TwitchEvent[];
}

export default TwitchClient;
