# Server Comment Resource

## Comment

A Comment is a message that the player can create inside of Geometry Dash. There are **Two** types of comments: `Level Comments` and `Account Comments`

> - `Level Comments` can be found after pressing the `i` button which is located on the right side of the level menu which then opens the Comment Menu - you can also view comments by clicking on the comment icon on the player Profile. To Post a comment, the player has to click on the speech bubble icon and they can type their comment. Without any external tools, a comment can be up to **100** Characters in length<br/><br/>
> - `Account Comments` can be found on a user's profile. `Account Comments` are exactly the same as `Level Comments` however the following keys will not affect it: `10, 11, 12`<br/>The only example of `Account Comments` where a variant of key `12` was successful is if the accountID of the author is `71` which has the colour hardcoded. To Upload an Account Comment the player must click the speech bubble icon on their profile and they can type their comment. Without any external tools, a comment can be up to **140** Characters in length

### Comment Object

A Comment Object is split into two sections: a `Comment String` and an `Author String`. these two strings are divided by a `:`

> - The `Comment String` contains all the data regarding the comment itself<br/><br/>
> - The `Author String` contains all the data regarding the user who is commenting

### Comment Structure

**Note:** Keys marked with an asterisk `*` do not affect `Account Comments`

| Key | Name/Value                | Type                                         | Description                                                              
|-----|---------------------------|----------------------------------------------|--------------------------------------------------------------------------
| 1   | Level ID                  | **Integer**                                  | The levelID linked to the comment
| 2	  | Comment					  | **String**									 | The comment left by the user, encoded in [base64](/topics/encryption/base64.md)
| 3   | Author*					  | **Integer**									 | The player ID of the author. **This is different than the account ID**
| 4   | Likes					  | **Integer**									 | The amount of likes the comment has
| 6   | Message ID				  | **Integer**									 | The message ID. Account comments have different IDs than level comments
| 7   | isSpam                    | **Bool**                                     | if a comment has been flagged as spam
| 9   | Age						  | **String**									 | How long ago the comment was posted (e.g. "2 months")
| 10  | Percent*				  | **Integer**									 | The percent the player put in their comment
| 11  | ModBadge*                 | **Integer**                                   | The Mod Badge of a moderator commenting
| 12  | Moderator Chat Color*     | **String**									 | Comma separated list of the RGB values of the moderator's chat color. only appears if `modBadgeID != 0`

### Author Structure
  
**Note:** These values are only returned through `Level Comments`

| Key | Name/Value                | Type                                         | Description                                                              
|-----|---------------------------|----------------------------------------------|--------------------------------------------------------------------------
| 1   | Username				  | **String**									 | Author's username
| 9   | Icon					  | **Integer**									 | Which icon the player is using, starting with 1 as the first icon
| 10  | Player Color 1			  | **Integer**									 | Author's primary player color, presumably ordered cronologically from left to right per update
| 11  | Player Color 2			  | **Integer**									 | Author's secondary player color, presumably ordered cronologically from left to right per update
| 14  | Icon Type				  | **Integer**									 | Author's icon type indexing an array of `icon, ship, ball, ufo, wave, robot, spider`
| 15  | glow					  | **Integer**									 | 0 = no glow, 2 = glow
| 16  | Account ID				  | **Integer**									 | Author's account ID. **This is different than the player ID**

These Keys a mirror the data found on [Player Profiles](/resources/server/user.md)