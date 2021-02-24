# Server Leaderboard Score Resource

## Leaderboard Score

Leadboards are the in-game ranking system for Geometry Dash. There are `7` Types of Leaderboards that are used as of version `2.11` 
> - `Star Top 100` - The Top 100 best Star Grinders
> - `Star Friends` - The Relative Leaderboards betweem the user and his Friends
> - `Relative Star` - The PLayers position on the global leaderboards along with 100 other players that have a rank relative to the player
> - `Creator Top 100` - The top 100 Creator Point Grinders
> - `Global Level Scores` - The fastest victors to a specific level since the level was uploaded to the servers
> - `Global Weekly Level Scores` - The fastest victors to a specific level since the last `604800` seconds
> - `Friend Level Scores` - The fastest victors to a specific level between the user and his friends since the level was uploaded to the servers

### Leaderboard Score Structure

The key structure that Leaderboards follow are exactly the same as the structure used for [Player Profiles](/resources/server/user.md)  
**Note:** keys marked by a `*` are only used for Level Leaderboards

| Key | Name/Value                | Type                                         | Description                                                              
|-----|---------------------------|----------------------------------------------|--------------------------------------------------------------------------
| 1   | userName				  | **String**									 | The username of the user
| 2   | playerID				  | **Integer**									 | The player ID of the user. **This is different than the account ID**
| 3   | percentage*				  | **Integer**									 | Percentage the user has on the level
| 6   | ranking					  | **Integer**									 | What rank they are (e.g. Viprin would have 1 in the creating leaderboard)
| 9   | Icon					  | **Integer**									 | Which icon the user is using, starting with 1 as the first icon
| 10  | playerColor 			  | **Integer**									 | The user's primary player color, presumably ordered cronologically from left to right per update
| 11  | playerColor2			  | **Integer**									 | The user's secondary player color, presumably ordered cronologically from left to right per update
| 13  | coins        	          | **Integer**									 | Secret coins/number of usercoins you get on a level*
| 14  | iconType				  | **Integer**									 | The user's icon type indexing an array of `icon, ship, ball, ufo, wave, robot, spider`
| 15  | special					  | **Integer**									 | functions the same as glow however it returns a 2 rather than a 1
| 16  | accountID				  | **Integer**									 | The user's account ID. **This is different than the player ID**
| 42  | age						  | **String** 									 | How long ago the score was set (e.g. "2 months")