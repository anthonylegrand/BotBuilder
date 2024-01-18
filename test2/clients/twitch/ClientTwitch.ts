import BaseClient from "../../models/BaseClient";
import { Requirement, Option } from "../../models/BaseConfig";

import { DebugMode, DebugUsers } from "../../models/DefaultOptions";
import { OAuthToken, Username, Channels } from "./TwitchOptions";

class TwitchClient extends BaseClient {
  constructor() {
    const requirement = new Requirement([
      OAuthToken,
      DebugUsers,
      Username,
      Channels,
    ]);
    const options: Option[] = [DebugMode];

    super(requirement, options);
  }
}

export default TwitchClient;
