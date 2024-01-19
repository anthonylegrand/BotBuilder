import BaseClient from "../../models/BaseClient";
import { TwitchEvent } from "./TwitchEvent";
import Provider from "../../utils/Providers";
import { ClientRender } from "../../utils/Render";
import { OAuthToken, TwitchConfig, Username } from "./TwitchConfig";

class TwitchClient implements BaseClient {
  _provider: Provider = Provider.Twitch;
  _renderElement: ClientRender = {
    type: "Client",
    title: "Twitch Bot",
    outputs: [],
  };
  config: TwitchConfig = { required: [], config: [] };
  events: TwitchEvent[] = [];

  constructor(oauth: string, username: string) {
    this.config.required.push(new OAuthToken(oauth));
    this.config.required.push(new Username(username));
  }
}

export default TwitchClient;
