# Secrets

> Secrets are 11 character strings used to validate if requests to the server were from a Geometry Dash client. Rather than generating a new secret for each request sent to the server, RobTop opted with hardcoing these secrets and slightly obfuscating them instead to stop people finding them. 

- **Below is a table showing all known secrets**

### Table of Secrets

|     Secret    |  Type      |
|:--------------|:-----------|
| `Wmfd2893gb7` | Common     |
| `Wmfv3899gc9` | Account/MP |
| `Wmfv2898gc9` | Level      |
| `Wmfp3879gc3` | Mod        |
| `Wmfx2878gb9` | Admin      |

### Secret Types
<u>**As of Geometry Dash version 2.206, there are 4 *publicly* known secrets**</u>

- Common Secret
- Account Secret
- Level Secret
- Mod Secret

### **<u>Common Secret</u>**

> As of Geometry Dash 2.206, there are <u>43</u> endpoints on the server which use the `Common Secret`. Below is a table of all known endpoints which use the Common Secret.

<details close>
<summary><u>Endpoints</u></summary>

<table>
    <tr><th><center>Endpoint</center></th></tr>
      <tr><td><a href="/#/endpoints/social/acceptGJFriendRequest20">https://www.boomlings.com/database/acceptGJFriendRequest20.php</a></td></tr>  
      <tr><td><a href="/#/endpoints/social/blockGJUser20">https://www.boomlings.com/database/blockGJUser20.php</a></td></tr>
      <tr><td><a href="/#/endpoints/comment/deleteGJAccComment20">https://www.boomlings.com/database/deleteGJAccComment20.php</a></td></tr>        
      <tr><td><a href="/#/endpoints/comment/deleteGJComment20">https://www.boomlings.com/database/deleteGJComment20.php</a></td></tr>
      <tr><td><a href="/#/endpoints/social/deleteGJFriendRequests20">https://www.boomlings.com/database/deleteGJFriendRequests20.php</a></td></tr>
      <tr><td><a href="/#/endpoints/social/deleteGJMessages20">https://www.boomlings.com/database/deleteGJMessages20.php</a></td></tr>
      <tr><td><a href="/#/endpoints/level/downloadGJLevel22">https://www.boomlings.com/database/downloadGJLevel22.php</a></td></tr>
      <tr><td><a href="/#/endpoints/social/downloadGJMessage20">https://www.boomlings.com/database/downloadGJMessage20.php</a></td></tr>
      <tr><td><a href="/#/endpoints/comment/getGJAccountComments20">https://www.boomlings.com/database/getGJAccountComments20.php</a></td></tr>    
      <tr><td><a href="/#/endpoints/misc/getGJChallenges">https://www.boomlings.com/database/getGJChallenges.php</a></td></tr>
      <tr><td><a href="/#/endpoints/comment/getGJCommentHistory">https://www.boomlings.com/database/getGJCommentHistory.php</a></td></tr>
      <tr><td><a href="/#/endpoints/comment/getGJComments21">https://www.boomlings.com/database/getGJComments21.php</a></td></tr>
      <tr><td><a href="/#/endpoints/level/getGJDailyLevel">https://www.boomlings.com/database/getGJDailyLevel.php</a></td></tr>
      <tr><td><a href="/#/endpoints/social/getGJFriendRequests20">https://www.boomlings.com/database/getGJFriendRequests20.php</a></td></tr>      
      <tr><td><a href="/#/endpoints/level/getGJGauntlets21">https://www.boomlings.com/database/getGJGauntlets21.php</a></td></tr>
      <tr><td><a href="/#/endpoints/social/getGJLevelLists">https://www.boomlings.com/database/getGJLevelLists.php</a></td></tr>
      <tr><td><a href="/#/endpoints/level/getGJLevelScores211">https://www.boomlings.com/database/getGJLevelScores211.php</a></td></tr>
      <tr><td><a href="/#/endpoints/level/getGJLevelScoresPlat">https://www.boomlings.com/database/getGJLevelScoresPlat.php</a></td></tr>
      <tr><td><a href="/#/endpoints/level/getGJLevels21">https://www.boomlings.com/database/getGJLevels21.php</a></td></tr>
      <tr><td><a href="/#/endpoints/level/getGJMapPacks21">https://www.boomlings.com/database/getGJMapPacks21.php</a></td></tr>
      <tr><td><a href="/#/endpoints/social/getGJMessages20">https://www.boomlings.com/database/getGJMessages20.php</a></td></tr>
      <tr><td><a href="/#/endpoints/misc/getGJRewards">https://www.boomlings.com/database/getGJRewards.php</a></td></tr>
      <tr><td><a href="/#/endpoints/account/getGJScores20">https://www.boomlings.com/database/getGJScores20.php</a></td></tr>
      <tr><td><a href="/#/endpoints/level/getGJSongInfo">https://www.boomlings.com/database/getGJSongInfo.php</a></td></tr>
      <tr><td><a href="/#/endpoints/misc/getGJTopArtists">https://www.boomlings.com/database/getGJTopArtists.php</a></td></tr>
      <tr><td><a href="/#/endpoints/social/getGJUserList20">https://www.boomlings.com/database/getGJUserList20.php</a></td></tr>
      <tr><td><a href="/#/endpoints/account/getGJUsers20">https://www.boomlings.com/database/getGJUsers20.php</a></td></tr>
      <tr><td><a href="/#/endpoints/misc/getSaveData">https://www.boomlings.com/database/getSaveData.php</a></td></tr>
      <tr><td><a href="/#/endpoints/misc/likeGJItem211">https://www.boomlings.com/database/likeGJItem211.php</a></td></tr>
      <tr><td><a href="/#/endpoints/level/rateGJStars211">https://www.boomlings.com/database/rateGJStars211.php</a></td></tr>
      <tr><td><a href="/#/endpoints/social/readGJFriendRequest20">https://www.boomlings.com/database/readGJFriendRequest20.php</a></td></tr>
      <tr><td><a href="/#/endpoints/social/removeGJFriend20">https://www.boomlings.com/database/removeGJFriend20.php</a></td></tr>
      <tr><td><a href="/#/endpoints/level/reportGJLevel">https://www.boomlings.com/database/reportGJLevel.php</a></td></tr>
      <tr><td><a href="/#/endpoints/misc/requestUserAccess">https://www.boomlings.com/database/requestUserAccess.php</a></td></tr>
      <tr><td><a href="/#/endpoints/account/restoreGJItems">https://www.boomlings.com/database/restoreGJItems.php</a></td></tr>
      <tr><td><a href="/#/endpoints/social/unblockGJUser20">https://www.boomlings.com/database/unblockGJUser20.php</a></td></tr>
      <tr><td><a href="/#/endpoints/level/updateGJDesc20">https://www.boomlings.com/database/updateGJDesc20.php</a></td></tr>
      <tr><td><a href="/#/endpoints/account/updateGJUserScore22">https://www.boomlings.com/database/updateGJUserScore22.php</a></td></tr>
      <tr><td><a href="/#/endpoints/social/uploadFriendRequest20">https://www.boomlings.com/database/uploadFriendRequest20.php</a></td></tr>
      <tr><td><a href="/#/endpoints/comment/uploadGJAccComment20">https://www.boomlings.com/database/uploadGJAccComment20.php</a></td></tr>
      <tr><td><a href="/#/endpoints/comment/uploadGJComment21">https://www.boomlings.com/database/uploadGJComment21.php</a></td></tr>
      <tr><td><a href="/#/endpoints/level/uploadGJLevel21">https://www.boomlings.com/database/uploadGJLevel21.php</a></td></tr>
      <tr><td><a href="/#/endpoints/social/uploadGJLevelList">https://www.boomlings.com/database/uploadGJLevelList.php</a></td></tr>
      <tr><td><a href="/#/endpoints/social/uploadGJMessage20">https://www.boomlings.com/database/uploadGJMessage20.php</a></td></tr>
</table>

</details>  

**<h3><u>Account Secret</u></h3>**  
> As of Geometry Dash 2.206, there are 6 endpoints which use the `Account Secret`. The Account Secret was created for endpoints that deal with <u>important account features such as save data and privacy settings</u>. However, some unused code in 2.2 also reveals that the secret could be used for the upcoming multiplayer mode, however this is subject to change. Below is a table of each endpoint which uses the Account Secret.

<details close>
<summary><u>Endpoints</u></summary>

<table>
    <tr><th><center>Endpoint</center></th></tr>
    <tr><td><a href="/#/endpoints/account/registerGJAccount">http://www.boomlings.com/database/accounts/registerGJAccount.php</a></td></tr>     
    <tr><td><a href="/#/endpoints/account/loginGJAccount">http://www.boomlings.com/database/accounts/loginGJAccount.php</a></td></tr>
    <tr><td><a href="/#/endpoints/account/syncGJAccountNew">http://geometrydash.com/database/accounts/syncGJAccountNew.php</a></td></tr>        
    <tr><td><a href="/#/endpoints/account/backupGJAccountNew">http://geometrydash.com/database/accounts/backupGJAccountNew.php</a></td></tr>    
    <tr><td><a href="/#/endpoints/account/updateGJAccSettings20">http://www.boomlings.com/database/updateGJAccSettings20.php</a></td></tr>    
    <tr><td><a href="/#/endpoints/account/getAccountURL">https://www.boomlings.com/database/getAccountURL.php</a></td></tr>
</table>

</details>

<details close>
<summary><u>Known Multiplayer Endpoints</u></summary>

<table>
    <tr><th><center>Endpoint</center></th></tr>
    <tr><td><a href="/#/endpoints/multiplayer/exitMPLobby">http://www.boomlings.com/database/exitMPLobby.php</a></td></tr>     
    <tr><td><a href="/#/endpoints/multiplayer/joinMPLobby">http://www.boomlings.com/database/joinMPLobby.php</a></td></tr>      
    <tr><td><a href="/#/endpoints/multiplayer/uploadMPComment">http://www.boomlings.com/database/uploadMPComment.php</a></td></tr>    
</table>

</details>

**<h3><u>Level Secret</u></h3>**  
> As of Geometry Dash 2.206, there are only 2 endpoints that use the `Level Secret`. The Level Secret is used to handle level deletions. Below you can find the 2 endpoints which use the Level Secret

<details close>
<summary><u>Endpoints</u></summary>

<table>
    <tr><th><center>Endpoint</center></th></tr>
    <tr><td><a href="/#/endpoints/level/deleteGJLevelUser20">http://www.boomlings.com/database/deleteGJLevelUser20.php</a></td></tr>
    <tr><td><a href="/#/endpoints/lists/deleteGJLevelList">http://www.boomlings.com/database/deleteGJLevelList.php</a></td></tr>
    </table>
</details>

**<h3><u>Mod Secret</u></h3>**  
> As of Geometry Dash 2.206, there are only 2 endpoints which use the `Mod Secret`. These endpoints allow hand-picked users called moderators to send in-game levels to the server which then have a chance to earn a star rating. Below are the endpoints in question.

<details close>
<summary><u>Endpoints</u></summary>

<table>
    <tr><th><center>Endpoint</center></th></tr>
    <tr><td><a href="/#/endpoints/level/rateGJDemon21">http://www.boomlings.com/database/rateGJDemon21.php</a></td></tr>
    <tr><td><a href="/#/endpoints/level/suggestGJStars20">http://www.boomlings.com/database/suggestGJStars20.php</a></td></tr>
    </table>
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

### Secret Structure

A Secret is split into 5 components and can be divided as such: `x|xxx|xxxx|xx|x`. From analysing the available secrets that we have access too, we have a general idea of what each component may represent.

> **Note:** *The following is based on analysis using the endpoints the secret is used by as well as the status in the community one is required to have in order to access them. **<u>None of the information below has been proven</u>***

- **The first component of a Secret is always a `W`**

- **The second component seems to denote the permissions level of the user**  
    `mfd` seems to be endpoints that anyone can use.  
    `mfv` seems to be endpoints that anyone can use but, they handle important information regarding a users account - save data and levels.  
    `mfp` seems to be endpoints that are restricted to a select few individuals - Geometry Dash Moderators.  
    `mfx` seems to be endpoints that are restricted to everyone except Game Admins.  

- **The third component is a 4-digit number which it's purpose is unknown**  
    `2893`  
    `3899`  
    `2898`  
    `3879`  
    `2878`


- **The fourth component seems denote the purpose of the secret.**  
    `gb` seems to be <u>general use</u>.  
    `gc` Seems to be <u>specialised use</u> - managing accounts, sending levels, deleting levels.

- **The fifth component seems to be overall power the endpoints have.**  
    `3` being able to submit data that can greatly affect in-game levels  
    `7` being able to perform general activities on the server  
    `9` being able to alter accounts and remove levels from the server
