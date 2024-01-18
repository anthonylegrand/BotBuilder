import BaseClient from "./BaseClient";
import { BaseConfig } from "./BaseConfig";

abstract class BaseEvents {
  protected client: BaseClient;

  constructor(client: BaseClient) {
    this.client = client;
  }
}

export default BaseEvents;
