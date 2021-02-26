# Server User Resource

## Users

Each player of Geometry Dash have their own profile which includes various different elements such as in-game stats, icons and even socials.

A typical User Server response is structured with a `key:value:key:value` pairing and is then split with a `|`

<!-- tabs:start -->

#### **User Example Response**
```md
1:TheWylieMaster:2:84696119:13:67:17:176:10:4:11:16:3:1725:46:2991:4:33:8:0:18:0:19:0:50:0:20:../watch?v=dQw4w9WgXcQ:21:31:22:10:23:30:24:1:25:35:26:23:28:1:43:11:48:1:30:0:16:9276649:31:0:44:TheWylieMaster:45::49:0:38:0:39:0:40:0:41:1:29:1
```
<!-- tabs:end -->

Each `key` is tied to a component within the client and the `value` sets data for the specific component.  
A list of all known keys can be found in the table below

| Key | Name/Value | Type | Description |
| --- | ---------- | ---- | ----------- |
| 1 | userName | **string** | The name of player |
| 2 | userID | **number** | The ID of player |
| 3 | stars | **number** | The count of stars player have |
| 4 | demons | **number** | The count of demons player have |
| 6 | ranking | **number** | the global leaderboard position of the player |
| 7 | accountID | **number** | maybe accountID or else? [link](https://github.com/gd-programming/gddocs/pull/16/files#r417947540) |
| 8 | creatorpoints | **number** | The count of creatorpoints player have |
| 9 | iconID | **number** | maybe... [link](https://github.com/gd-programming/gddocs/pull/16/files#r417926661) |
| 10 | playerColor | **number** | First color of the player use |
| 11 | playerColor2 | **number** | Second color of the player use |
| 13 | secretCoins | **number** | The count of coins player have |
| 14 | iconType | **number** | The iconType of the player use |
| 15 | special | **number** | The special number of the player use |
| 16 | accountID | **number** | The accountid of this player |
| 17 | usercoins | **number** | The count of usercoins player have |
| 18 | messageState | **number** | 0: All, 1: Only friends, 2: None |
| 19 | friendsState | **number** | 0: All, 1: None |
| 20 | youTube | **string** | The youtubeurl of player |
| 21 | accIcon | **number** | The icon number of the player use |
| 22 | accShip | **number** | The ship number of the player use |
| 23 | accBall | **number** | The ball number of the player use |
| 24 | accBird | **number** | The bird number of the player use |
| 25 | accDart(wave) | **number** | The dart(wave) number of the player use |
| 26 | accRobot | **number** | The robot number of the player use |
| 27 | accStreak | **number** | The Streak of the user |
| 28 | accGlow | **number** | The glow number of the player use |
| 29 | isRegistered | **number** | if an account is registered or not |
| 30 | globalRank | **number** | The global rank of this player |
| 31 | friendstate | **number** | 0: None, 1: already is friend, 3: send request to target, but target haven't accept, 4: target send request, but haven't accept 
| 38 | messages | **number** | How many new messages the user has (shown in-game as a notificaiton) |
| 39 | friendRequests | **number** | How many new friend requests the user has (shown in-game as a notificaiton) |
| 40 | newFriends | **number** | How many new Friends the user has (shown in-game as a notificaiton) |
| 41 | hasBlocked | **Bool** | appears on userlist endpoint to show if the user is blocked |
| 42 | age | **String** | the time since you submitted a levelScore |
| 43 | accSpider | **number** | The spider number of the player use |
| 44 | twitter| **string** | The twitter of player |
| 45 | twitch | **string** | The twitch of player |
| 46 | diamonds | **number** | The count of diamonds player have |
| 48 | accExplosion | **number** | The explosion number of the player use |
| 49 | modlevel | **number** | 0: None, 1: Normal Mod(yellow), 2: Elder Mod(orange) |
| 50 | commentHistoryState | **number** | 0: All, 1: Only friends, 2: None |

### Trivia

- Setting Key `29` to `0` stops most aspects of your profile from loading

