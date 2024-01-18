interface BaseRender {
  title: string;
}

interface ClientRender extends BaseRender {}

interface EventRender extends BaseRender {}

interface FunctionRender extends BaseRender {}

export { ClientRender };
