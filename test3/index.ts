import * as Providers from "./providers/";

const client = new Providers.TwitchClient(
  "oauth:ba5ky9rq0aesuod9c07al9g0nildfn",
  "darkword_"
);

console.log(JSON.stringify(client, null, "\t"));
