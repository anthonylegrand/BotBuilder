Client save data

```JSON
{
  "uid": "xxxxxxxxxxxxxx",
  "client_uuid": "xxxx-xxxx-xxx-xxx",
  "provider": "Twitch",
  "workspace": { "nodes": [], "edges": [], "viewport": {} }
}
```

Provider:

```JSON
{
    "_Provider": "Twitch",
    "config": {
        "required": {
            "username":{
                "type": "string",
                "name": "identity.username",
                "info": "Add bot account username",
                "placeholder": "myBotName"
            },
            "oauth":{
                "type": "string",
                "name": "identity.oAuth",
                "info": "Add bot account oauth",
                "placeholder": "oauth:***",
                "regex": /^oauth:[a-zA-Z0-9]{30}$/
            }
        },
        "config": {
            "debug_list":{
                "type": "string[]",
                "name": "Beta Testeurs",
                "info": "Add twitch usernames to testeur",
                "placeholder": "Ninja01"
            }
        }
    },
    "render": {
        "type": "provider",
        "input": {},
        "output": {}
    },
    "events": {
        "onMessage": {},
        "onBits": {},
        "onSubscribe": {},
        "onGiftSubscribe": {}
    }
}
```

```JSON
{
    "_Provider": "Twitch",
    "_Event": "onMessage",
    "config": {
        "required": {},
        "config": {}
    },
    "render": {
        "type": "event",
        "input": {},
        "output": {
            "channel": {
                "type": "string",
            },
            "tags": {
                "type": "object",
            },
            "message": {
                "type": "string",
            },
            "self": {
                "boolean": "string",
            }
        }
    },
    "events": {
        "onMessage": {},
        "onBits": {},
        "onSubscribe": {},
        "onGiftSubscribe": {}
    }
}
```

? Ajouter une fonction "filtre", je connect à une fonction, et j'ai une liste d'option que je peux tchecker

- Laisser passer si:
  - Il est modo: Oui/Non/Peux importe
  - Il est sub: Oui/Non/Peux importe
  - Il est VIP: Oui/Non/Peux importe
