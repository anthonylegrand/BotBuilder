import { EventRender } from "../../utils/Render";
import { BaseEvent } from "./../../models/BaseEvent";
import TwitchClient from "./TwitchClient";

abstract class TwitchEvent implements BaseEvent {
  _renderElement: EventRender = {
    type: "Event",
    title: "Twitch Bot",
    outputs: [],
  };
  _client: TwitchClient;

  constructor(TwitchClient) {
    this._client = TwitchClient;
  }
}

abstract class ExtendTwitchEvent extends TwitchEvent {
  constructor(TwitchClient) {
    super(TwitchClient);
    // _client set extend info = true
  }
}

abstract class onMessageEvent extends TwitchEvent {
  _renderElement: EventRender = {
    type: "Event",
    title: "onMessage",
    outputs: [],
  };
}

abstract class onBitsEvent extends ExtendTwitchEvent {
  _renderElement: EventRender = { type: "Event", title: "onBits", outputs: [] };
}

abstract class onFollowEvent extends ExtendTwitchEvent {
  _renderElement: EventRender = {
    type: "Event",
    title: "onFollow",
    outputs: [],
  };
}

abstract class onSubscribeEvent extends ExtendTwitchEvent {
  _renderElement: EventRender = {
    type: "Event",
    title: "onSubscribe",
    outputs: [],
  };
}

abstract class onGiftSubscribeEvent extends ExtendTwitchEvent {
  _renderElement: EventRender = {
    type: "Event",
    title: "onGiftSubscribe",
    outputs: [],
  };
}

export {
  TwitchEvent,
  onMessageEvent,
  onBitsEvent,
  onFollowEvent,
  onSubscribeEvent,
  onGiftSubscribeEvent,
};
