import { Option } from "../../models/BaseConfig";

class OAuthToken implements Option {
  name = "identity.oAuth";
  info = "You can get your oAuth token on: https://tmi.com";
  regex = /^oauth:[a-zA-Z0-9]{30}$/;
  allowNull = true;
  value: string | null = null;
}

class Username implements Option {
  name = "identity.Username";
  info = "Rou'r oauth Twitch account username";
  allowNull = true;
  value: string | null = null;
}

class Channels implements Option {
  name = "Channels";
  info = "Default bot join channels";
  value!: string[];
  min = 1;
}

const _OAuthToken = new OAuthToken();
const _Username = new Username();
const _Channels = new Channels();

export {
  _OAuthToken as OAuthToken,
  _Username as Username,
  _Channels as Channels,
};
