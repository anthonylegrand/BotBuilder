interface BaseRender {
  type: "Client" | "Event" | "Function";
  title: string;
}

interface Output extends BaseRender {
  outputs: string[];
}

interface Input extends BaseRender {
  inputs: string[];
}

abstract class ElementRender {
  _renderElement: ClientRender | EventRender | FunctionRender;
}

interface ClientRender extends Output {}

interface EventRender extends Output {}

interface FunctionRender extends Input, Output {}

export { ElementRender, ClientRender, EventRender, FunctionRender };
