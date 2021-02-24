# Server Friend Request Resource

## Friend Request

One of the features in Geometry Dash is the friend system which allows players to add each other as a friend

#### Friend Request Structure

**Note:** We will use "other user" to describe the user on the other side of the friend request, be it the receiving end or the sending end.

| Key | Name/Value                | Type                                         | Description                                                              
|-----|---------------------------|----------------------------------------------|--------------------------------------------------------------------------
| 1   | userName				  | **String**									 | The username of the other user
| 2   | playerID				  | **Integer**									 | The player ID of the other user. **This is different than the account ID**
| 9   | icon					  | **Integer**									 | Which icon the other user is using, starting with 1 as the first icon
| 10  | playerColor			      | **Integer**									 | The other user's primary player color, presumably ordered cronologically from left to right per update
| 11  | playerColor2			  | **Integer**									 | The other user's secondary player color, presumably ordered cronologically from left to right per update
| 14  | iconType				  | **Integer**									 | The other user's icon type indexing an array of `icon, ship, ball, ufo, wave, robot, spider`
| 15  | glow					  | **Integer**									 | Either 0 or 2, might be related to glow
| 16  | accountID				  | **Integer**									 | The other user's account ID. **This is different than the player ID**
| 32  | friendRequestID		      | **Integer**									 | An ID unique to each friend request. (I'm not 100% certain on this)
| 35  | message					  | **String**									 | The friend requests's message, encoded in [base64](/topics/encryption/base64.md)
| 37  | age						  | **String** 									 | How long ago the friend request was sent (e.g. "2 months")
| 41  | isBlocked			      | **Bool**									 | if you have blocked the user