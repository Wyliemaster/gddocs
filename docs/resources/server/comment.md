# Server Comment Resource

## Comment

A Comment is a message that the player can create inside of Geometry Dash. There are **Two** types of comments: `Level Comments` and `Account Comments`

> - `Level Comments` can be found after pressing the `i` button which is located on the right side of the level menu which then opens the Comment Menu - you can also view comments by clicking on the comment icon on the player Profile. To Post a comment, the player has to click on the speech bubble icon and they can type their comment. Without any external tools, a comment can be up to **100** Characters in length<br/><br/>
> - `Account Comments` can be found on a user's profile. `Account Comments` are exactly the same as `Level Comments` however the following keys will not affect it: `10, 11, 12`<br/>To Upload an Account Comment the player must click the speech bubble icon on their profile and they can type their comment. Without any external tools, a comment can be up to **140** Characters in length

### Comment Object

A Comment Object is split into two sections: a `Comment String` and an `Author String`. these two strings are divided by a `:`

> - The `Comment String` contains all the data regarding the comment itself<br/><br/>
> - The `User String` contains all the data regarding the user who is commenting

The `Comment String` and `User String` are both structured with a `key~value~key~value` pairing. Here is some examples of raw responses from the server


<!-- tabs:start -->

#### **Level Comment Example**
```md
 2~R0QgRG9jcyBhcmUgZXBpYw==~3~84696119~4~0~7~0~10~0~9~2 seconds~6~12872819:1~TheWylieMaster~9~1~10~4~11~16~14~3~15~2~16~9276649       
```

#### **Account Comment Example**
```md
            2~R0QgRG9jcyBhcmUgZXBpYw==~4~11~9~3 months~6~18083050
```


<!-- tabs:end -->

Each `key` is tied to a component within the client and the `value` sets data for the specific component.  
A list of all known keys can be found in the table below

### Comment Structure

**Note:** Keys marked with an asterisk `*` do not affect `Account Comments`

| Key | Name/Value                | Type                                         | Description                                                              
|-----|---------------------------|----------------------------------------------|--------------------------------------------------------------------------
| 1   | levelID                   | **Integer**                                  | The levelID linked to the comment
| 2	  | comment					  | **String**									 | The comment left by the user, encoded in [base64](/topics/encryption/base64.md)
| 3   | author*					  | **Integer**									 | The player ID of the author. **This is different than the account ID**
| 4   | likes					  | **Integer**									 | The amount of likes the comment has
| 6   | messageID				  | **Integer**									 | The message ID. Account comments have different IDs than level comments
| 7   | spam                      | **Bool**                                     | If a comment has been flagged as spam
| 9   | age						  | **String**									 | How long ago the comment was posted (e.g. "2 months")
| 10  | percent*				  | **Integer**									 | The percent the player put in their comment
| 11  | modBadge*                 | **Integer**                                  | The Mod Badge of a moderator commenting
| 12  | moderatorChatColor*       | **String**									 | Comma separated list of the RGB values of the moderator's chat color - only appears if the players `modBadge > 0`

### User Structure
  
**Note:** These values are only returned through `Level Comments`

| Key | Name/Value                | Type                                         | Description                                                              
|-----|---------------------------|----------------------------------------------|--------------------------------------------------------------------------
| 1   | userName				  | **String**									 | Author's username
| 9   | icon					  | **Integer**									 | Which icon the player is using, starting with 1 as the first icon
| 10  | playerColor 			  | **Integer**									 | Author's primary player color, presumably ordered cronologically from left to right per update
| 11  | playerColor2			  | **Integer**									 | Author's secondary player color, presumably ordered cronologically from left to right per update
| 14  | iconType				  | **Integer**									 | Author's icon type indexing an array of `icon, ship, ball, ufo, wave, robot, spider`
| 15  | glow					  | **Integer**									 | 0 = no glow, 2 = glow
| 16  | accountID				  | **Integer**									 | Author's account ID. **This is different than the player ID**

### Trivia

- The User String uses the same response parser that [Player Profiles use](/resources/server/user)

- The only example of `Account Comments` where it was able to display a colour is with [RobTop's](https://gdbrowser.com/u/71) profile, this is because Robtop hardcoded the account colour into the accountID of `71`

- In the [December 2019 2.2 leaks](https://www.reddit.com/r/geometrydash/comments/e9b0y6/update_22_leaks_megathread/), a key wih the ID of `8` can be found hardcoded into a string for the `Versus Mode` feature - it seems to be linked to accountID as you can see from [this piece of pseudocode](https://imgur.com/a/Rjvzshb)
 


