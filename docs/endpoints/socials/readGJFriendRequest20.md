# ReadFriendRequests

> This endpoint is used to read friend requests recieved from other players

## Parameters

| Parameter       | Explanation                                                | Optional |
| :-------------- | :--------------------------------------------------------- | -------- |
| `gameVersion`   | The Game Version the player is playing on. 22 for 2.2      | `True`   |
| `binaryVersion` | The current build the player is playing on. 44 for 2.207   | `True`   |
| `gdw`           | If the player is using Geometry Dash World                 | `True`   |
| `accountID`     | The player's account ID                                    | `False`  |
| `gjp2`          | The player's [GJP2](/topics/encryption/gjp.md)             | `False`  |
| `requestID`     | The ID for the friend request recieved                     | `False`  |
| `secret`        | The common secret: `Wmfd2893gb7`                           | `False`  |

## Response

**Successful Request**

```py
1
```

**Failed Request**

```py
-1
```
