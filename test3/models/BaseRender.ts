interface BaseRender {
  title: string;
}

interface Output {
  outputs: string[];
}

interface Input {
  inputs: string[];
}

interface ClientRender extends BaseRender, Output {}

interface EventRender extends BaseRender, Output {}

interface FunctionRender extends BaseRender, Input, Output {}

export { ClientRender, EventRender, FunctionRender };
