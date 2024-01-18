import { TwitchClient } from "./index";

const client = new TwitchClient();

client.setOption("identity.oAuth", "oauth:ba5ky9rq0aesuod9c07al9g0nildfn");
client.setOption("identity.Username", "darkword_");
client.setOption("Debug Users", ["darkword_"]);
client.setOption("Channels", ["darkword_"]);

console.log(JSON.stringify(client.toJson(), null, 2));
console.log("Has Requirement", client.hasRequirement());
