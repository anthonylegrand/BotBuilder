import { ElementRender, EventRender } from "../utils/Render";

abstract class BaseEvent implements ElementRender {
  abstract _renderElement: EventRender;
}

export { BaseEvent };
