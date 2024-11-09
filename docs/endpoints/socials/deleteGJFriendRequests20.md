# DeleteFriendRequests

> This endpoint is used to delete friend requests that the player may have recieved from other players

## Parameters

| Parameter         | Explanation                                                                         | Optional |
| :---------------- | :---------------------------------------------------------------------------------- | -------- |
| `gameVersion`     | The Game Version the player is playing on. 22 for 2.2                               | `True`   |
| `binaryVersion`   | The current build the player playing on. 44 for 2.207                               | `True`   |
| `gdw`             | If the player is using Geometry Dash World                                          | `True`   |
| `accountID`       | The player's account ID                                                             | `False`  |
| `gjp2`            | The player's [GJP2](/topics/encryption/gjp.md)                                      | `False`  |
| `targetAccountID` | The accountID of the player you are declining the friend request                    | `False`  |
| `accounts`        | Account IDs seperated by `,` for users the player is declining friend requests from | `True`   |
| `isSender`        | If the player is the sender of this friend request                                  | `True`   |

**Note:** `isSender` must be set to `1` if you are deleting a request you have sent

## Response

**Successful Request**

```py
1
```

**Failed Request**

```py
-1
```
