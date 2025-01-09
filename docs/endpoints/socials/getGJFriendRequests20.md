# GetFriendRequests

> This endpoint is to fetch friend requests recieved by other users

## Parameters

| Parameter       | Explanation                                                | Optional |
| :-------------- | :--------------------------------------------------------- | -------- |
| `gameVersion`   | The Game Version the player is playing on. 22 for 2.2      | `True`   |
| `binaryVersion` | The current build the player playing on. 44 for 2.207      | `True`   |
| `gdw`           | If the player is using Geometry Dash World                 | `True`   |
| `page`          | The page currently being viewed                            | `True`   |
| `total`         | The total friend requests recieved                         | `True`   |
| `getSent`       | If the server should fetch requests sent by the player     | `True`   |
| `accountID`     | The player's account ID                                    | `False`  |
| `gjp2`          | The player's [GJP2](/topics/encryption/gjp.md)             | `False`  |
| `secret`        | The common secret: `Wmfd2893gb7`                           | `False`  |

## Response

The response for this endpoint is a `key:value` format with `|` being the seperator for each object. a `#` is used to seperate the metadata

> the metadata is split up into 3 segments: `total requests: page number : total requests per page`

**Below is a raw response for a single friend request**

```
1:TheWylieMaster:2:84696119:9:31:10:4:11:16:14:0:15:2:16:9276649:32:45404710:35:aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUQ==:41::37:2024 years#1:0:1
```

if the request fails then the server will return

```py
-1
```
