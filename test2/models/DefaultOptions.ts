import { Option } from "./BaseConfig";

class DebugMode implements Option {
  name = "Debug Mode";
  value: boolean = false;
}

class DebugUsers implements Option {
  name = "Debug Users";
  value: string[] = [];
}

const _DebugMode = new DebugMode();
const _DebugUsers = new DebugUsers();

export { _DebugMode as DebugMode, _DebugUsers as DebugUsers };
