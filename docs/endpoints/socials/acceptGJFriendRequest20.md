# acceptGJFriendRequest20

> This endpoint is used to accept friend requests recieved from other users

## Parameters

| Parameter         | Explanation                                                        | Optional |
| :---------------- | :----------------------------------------------------------------- | -------- |
| `gameVersion`     | The Game Version the player is playing on. 22 for 2.2              | `True`   |
| `binaryVersion`   | The current build the player playing on. 42 for 2.206              | `True`   |
| `gdw`             | If the player is using Geometry Dash World                         | `True`   |
| `requestID`       | The ID of the friend request being accepted                        | `True`   |
| `accountID`       | The player's account ID                                            | `False`  |
| `targetAccountID` | The account which the player is trying to send a friend request to | `False`  |
| `gjp2`            | The player's [GJP2](/topics/encryption/gjp.md)                     | `False`  |
| `secret`          | The common secret: `Wmfd2893gb7`                                   | `False`  |

## Response

**Successful Request**

```py
1
```

**Failed Request**

```py
-1
```
