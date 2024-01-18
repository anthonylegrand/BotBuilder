import { BaseConfig, Requirement, Option } from "./BaseConfig";
import BaseEvent from "./BaseEvents";

abstract class BaseClient extends BaseConfig {
  readonly _requirement: Requirement;
  readonly options: Option[];
  readonly events: BaseEvent[];

  constructor(requirement: Requirement, options: Option[]) {
    super();
    this._requirement = requirement;
    this.options = options;
  }

  setOption(name: string, value: string | string[] | number | boolean | null) {
    super.setOption(name, value);
    this._requirement.setOption(name, value);
  }

  hasRequirement() {
    return this._requirement.isFilled();
  }

  toJson(): object {
    return {
      requirement: this._requirement._toJson(),
      options: super._toJson(),
    };
  }
}

export default BaseClient;
