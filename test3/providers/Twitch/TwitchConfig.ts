import {
  ConfigData,
  ConfigDataType,
  GlobalConfigData,
  GlobalRequiredData,
  RequiredData,
} from "../../utils/ConfigData";

abstract class TwitchRequiredData extends RequiredData {}
abstract class TwitchConfigData extends ConfigData {}

abstract class TwitchClientRequiredData extends TwitchRequiredData {}
abstract class TwitchClientConfigData extends TwitchConfigData {}

abstract class TwitchEventRequiredData extends TwitchRequiredData {}
abstract class TwitchEventConfigData extends TwitchConfigData {}

abstract class TwitchFunctionRequiredData extends TwitchRequiredData {}
abstract class TwitchFunctionConfigData extends TwitchConfigData {}

interface TwitchConfig {
  required: TwitchRequiredData[] | GlobalRequiredData[];
  config: TwitchConfigData[] | GlobalConfigData[];
}

class OAuthToken extends TwitchClientRequiredData {
  type: ConfigDataType = ConfigDataType.string;
  label: string = "identity.oAuth";
  info = "You can get your oAuth token on: https://tmi.com";
  regex: RegExp = /^oauth:[a-zA-Z0-9]{30}$/;
  value!: string;

  format(_value: string): string | null {
    return _value.replace("oauth:", "");
  }

  constructor(value?: string | string[] | boolean | number) {
    super();
    this.setValue(value);
  }
}

class Username extends TwitchClientRequiredData {
  type: ConfigDataType = ConfigDataType.string;
  label: string = "identity.Username";
  info = "Rou'r oauth Twitch account username";
  value!: string;

  format(_value: string): string | null {
    return _value;
  }

  constructor(value?: string | string[] | boolean | number) {
    super();
    this.setValue(value);
  }
}

class Channels extends TwitchClientConfigData {
  type: ConfigDataType = ConfigDataType.string_array;
  label: string = "Channels";
  info = "Default join channels";
  value!: string[];

  constructor(value?: string | string[] | boolean | number) {
    super();
    this.setValue(value);
  }
}

export { TwitchConfig, OAuthToken, Username, Channels };
