# Secrets

Secrets are 11 character strings used to validate if requests to the server were from a Geometry Dash client. Rather than generating a new secret for each request sent to the server, RobTop opted with hardcoding these secrets and slightly obfuscating them instead to stop people finding them.

### Table of Secrets

|     Secret    |  Type                |
|:--------------|:---------------------|
| `Wmfd2893gb7` | Common               |
| `Wmfv3899gc9` | Account, Multiplayer |
| `Wmfv2898gc9` | Level                |
| `Wmfp3879gc3` | Mod                  |
| `Wmfx2878gb9` | Admin                |

## Secret Types

There are 4 *publicly* known secrets:
- Common Secret
- Account Secret
- Level Secret
- Mod Secret

### Common Secret

> There are <u>44</u> endpoints on the server which use the `Common Secret`. Below is a table of all known endpoints which use the Common Secret.

<details close>
<summary><u>Endpoints</u></summary>

| <center>Endpoint</center> |
|:--------------------------|
| [https://www.boomlings.com/database/**getAccountURL**.php](/#/endpoints/account/getAccountURL) |
| [https://www.boomlings.com/database/**acceptGJFriendRequest20**.php](/#/endpoints/social/acceptGJFriendRequest20) |
| [https://www.boomlings.com/database/**blockGJUser20**.php](/#/endpoints/social/blockGJUser20) |
| [https://www.boomlings.com/database/**deleteGJAccComment20**.php](/#/endpoints/comment/deleteGJAccComment20) |
| [https://www.boomlings.com/database/**deleteGJComment20**.php](/#/endpoints/comment/deleteGJComment20) |
| [https://www.boomlings.com/database/**deleteGJFriendRequests20**.php](/#/endpoints/social/deleteGJFriendRequests20) |
| [https://www.boomlings.com/database/**deleteGJMessages20**.php](/#/endpoints/social/deleteGJMessages20) |
| [https://www.boomlings.com/database/**downloadGJLevel22**.php](/#/endpoints/level/downloadGJLevel22) |
| [https://www.boomlings.com/database/**downloadGJMessage20**.php](/#/endpoints/social/downloadGJMessage20) |
| [https://www.boomlings.com/database/**getGJAccountComments20**.php](/#/endpoints/comment/getGJAccountComments20) |
| [https://www.boomlings.com/database/**getGJChallenges**.php](/#/endpoints/misc/getGJChallenges) |
| [https://www.boomlings.com/database/**getGJCommentHistory**.php](/#/endpoints/comment/getGJCommentHistory) |
| [https://www.boomlings.com/database/**getGJComments21**.php](/#/endpoints/comment/getGJComments21) |
| [https://www.boomlings.com/database/**getGJDailyLevel**.php](/#/endpoints/level/getGJDailyLevel) |
| [https://www.boomlings.com/database/**getGJFriendRequests20**.php](/#/endpoints/social/getGJFriendRequests20) |
| [https://www.boomlings.com/database/**getGJGauntlets21**.php](/#/endpoints/level/getGJGauntlets21) |
| [https://www.boomlings.com/database/**getGJLevelLists**.php](/#/endpoints/social/getGJLevelLists) |
| [https://www.boomlings.com/database/**getGJLevelScores211**.php](/#/endpoints/level/getGJLevelScores211) |
| [https://www.boomlings.com/database/**getGJLevelScoresPlat**.php](/#/endpoints/level/getGJLevelScoresPlat) |
| [https://www.boomlings.com/database/**getGJLevels21**.php](/#/endpoints/level/getGJLevels21) |
| [https://www.boomlings.com/database/**getGJMapPacks21**.php](/#/endpoints/level/getGJMapPacks21) |
| [https://www.boomlings.com/database/**getGJMessages20**.php](/#/endpoints/social/getGJMessages20) |
| [https://www.boomlings.com/database/**getGJRewards**.php](/#/endpoints/misc/getGJRewards) |
| [https://www.boomlings.com/database/**getGJScores20**.php](/#/endpoints/account/getGJScores20) |
| [https://www.boomlings.com/database/**getGJSongInfo**.php](/#/endpoints/level/getGJSongInfo) |
| [https://www.boomlings.com/database/**getGJTopArtists**.php](/#/endpoints/misc/getGJTopArtists) |
| [https://www.boomlings.com/database/**getGJUserList20**.php](/#/endpoints/social/getGJUserList20) |
| [https://www.boomlings.com/database/**getGJUsers20**.php](/#/endpoints/account/getGJUsers20) |
| [https://www.boomlings.com/database/**getSaveData**.php](/#/endpoints/misc/getSaveData) |
| [https://www.boomlings.com/database/**likeGJItem211**.php](/#/endpoints/misc/likeGJItem211) |
| [https://www.boomlings.com/database/**rateGJStars211**.php](/#/endpoints/level/rateGJStars211) |
| [https://www.boomlings.com/database/**readGJFriendRequest20**.php](/#/endpoints/social/readGJFriendRequest20) |
| [https://www.boomlings.com/database/**removeGJFriend20**.php](/#/endpoints/social/removeGJFriend20) |
| [https://www.boomlings.com/database/**reportGJLevel**.php](/#/endpoints/level/reportGJLevel) |
| [https://www.boomlings.com/database/**requestUserAccess**.php](/#/endpoints/misc/requestUserAccess) |
| [https://www.boomlings.com/database/**restoreGJItems**.php](/#/endpoints/account/restoreGJItems) |
| [https://www.boomlings.com/database/**unblockGJUser20**.php](/#/endpoints/social/unblockGJUser20) |
| [https://www.boomlings.com/database/**updateGJDesc20**.php](/#/endpoints/level/updateGJDesc20) |
| [https://www.boomlings.com/database/**updateGJUserScore22**.php](/#/endpoints/account/updateGJUserScore22) |
| [https://www.boomlings.com/database/**uploadFriendRequest20**.php](/#/endpoints/social/uploadFriendRequest20) |
| [https://www.boomlings.com/database/**uploadGJAccComment20**.php](/#/endpoints/comment/uploadGJAccComment20) |
| [https://www.boomlings.com/database/**uploadGJComment21**.php](/#/endpoints/comment/uploadGJComment21) |
| [https://www.boomlings.com/database/**uploadGJLevel21**.php](/#/endpoints/level/uploadGJLevel21) |
| [https://www.boomlings.com/database/**uploadGJLevelList**.php](/#/endpoints/social/uploadGJLevelList) |
| [https://www.boomlings.com/database/**uploadGJMessage20**.php](/#/endpoints/social/uploadGJMessage20) |

</details>  

### Account Secret

> There are 5 endpoints which use the `Account Secret`. The Account Secret was created for endpoints that deal with <u>important account features such as save data and privacy settings</u>. However, some unused code in 2.2 also reveals that the secret could be used for the upcoming multiplayer mode, but this is subject to change. Below is a table of each endpoint which uses the Account Secret.

<details close>
<summary><u>Endpoints</u></summary>

| <center>Endpoint</center> |
|:--------------------------|
| [http://www.boomlings.com/database/accounts/**registerGJAccount**.php](/#/endpoints/account/registerGJAccount) |
| [http://www.boomlings.com/database/accounts/**loginGJAccount**.php](/#/endpoints/account/loginGJAccount) |
| [http://geometrydash.com/database/accounts/**syncGJAccountNew**.php](/#/endpoints/account/syncGJAccountNew) |
| [http://geometrydash.com/database/accounts/**backupGJAccountNew**.php](/#/endpoints/account/backupGJAccountNew) |
| [http://www.boomlings.com/database/**updateGJAccSettings20**.php](/#/endpoints/account/updateGJAccSettings20) |

</details>

<details close>
<summary><u>Known Multiplayer Endpoints</u></summary>

| <center>Endpoint</center> |
|:--------------------------|
| [http://www.boomlings.com/database/**exitMPLobby**.php](/#/endpoints/multiplayer/exitMPLobby) |
| [http://www.boomlings.com/database/**joinMPLobby**.php](/#/endpoints/multiplayer/joinMPLobby) |
| [http://www.boomlings.com/database/**uploadMPComment**.php](/#/endpoints/multiplayer/uploadMPComment) |

</details>

### Level Secret

> There are only 2 endpoints that use the `Level Secret`. The Level Secret is used to handle level deletions. Below you can find the 2 endpoints which use the Level Secret

<details close>
<summary><u>Endpoints</u></summary>

| <center>Endpoint</center> |
|:--------------------------|
| [http://www.boomlings.com/database/**deleteGJLevelUser20**.php](/#/endpoints/level/deleteGJLevelUser20) |
| [http://www.boomlings.com/database/**deleteGJLevelList**.php](/#/endpoints/lists/deleteGJLevelList) |

</details>

### Mod Secret

> There are only 2 endpoints which use the `Mod Secret`. These endpoints allow hand-picked users called moderators to send in-game levels to the server which then have a chance to earn a star rating. Below are the endpoints in question.

<details close>
<summary><u>Endpoints</u></summary>

| <center>Endpoint</center> |
|:--------------------------|
| [http://www.boomlings.com/database/**rateGJDemon21**.php](#/endpoints/level/rateGJDemon21) |
| [http://www.boomlings.com/database/**suggestGJStars20**.php](/#/endpoints/level/suggestGJStars20) |

</details>

### Admin Secret

> In the client for Geometry Dash 1.9, RobTop mistakenly included the secret for `Admin Endpoints` inside of a function. Admin Endpoints are only accessible for game admins and they make direct changes in-game that affect everyone.
  
<link rel="stylesheet" href="stylesheets/imageStyles.css">

<center>
**<u>Below is a screenshot of the Admin Secret being created from Geometry Dash 1.9. RobTop split it into 6 segments to <i>obfuscate</i> it.</u>**<br>
<img src="https://raw.githubusercontent.com/Wyliemaster/gddocs/master/assets/screenshots/admin_secret.png" class="admin">

Currently, the Admin Secret no longer works as RobTop became aware of it
</center>

<!-- todo: clean-up + explain reasoning clearer-->

## Secret Structure

A Secret is split into 5 components and can be divided as such: `x|xxx|xxxx|xx|x`. From analysing the available secrets that we have access too, we have a general idea of what each component may represent.

> **Note:** *The following is based on analysis using the endpoints the secret is used by as well as the status in the community one is required to have in order to access them. **<u>None of the information below has been proven</u>***

- The first component of a Secret is always a `W`.

- The second component denotes the permissions level of the user.
    - `mfd` is endpoints that anyone can use.
    - `mfv` is endpoints that anyone can use but, they handle important information regarding a users account - save data and levels.
    - `mfp` is endpoints that are restricted to a select few individuals - Geometry Dash Moderators.
    - `mfx` is endpoints that are restricted to everyone except Game Admins.

- The third component is a 4-digit number which it's purpose is unknown.
    - `2893`
    - `3899`
    - `2898`
    - `3879`
    - `2878`

- The fourth component denotes the purpose of the secret.
    - `gb` is general use.
    - `gc` is specialised use - managing accounts, sending levels, deleting levels.

- The fifth component is overall power the endpoints have:
    - `3` being able to submit data that can greatly affect in-game levels,
    - `7` being able to perform general activities on the server,
    - `9` being able to alter accounts and remove levels from the server.
