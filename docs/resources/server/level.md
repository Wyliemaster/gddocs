# Server Level Resource

## Level

A level is a playable object in Geometry Dash, namely coming with data that explains on what it is, and the string that the client interprets, known as a [level string](/topics/levelstring_encoding_decoding).

### Level Object

Keys indicated with an asterisk (\*) are only returned from the downloadGJLevel22 endpoint.

#### Level Structure

| Key | Name/Value                | Type                                         | Description                                                              
|-----|---------------------------|----------------------------------------------|--------------------------------------------------------------------------
| 1   | levelID                  | **number**                                   | The id of the level                                                      
| 2   | levelName                | **string**                                   | The name of the level                                                    
| 3   | description               | **string**                                   | The level description, encoded in [base64](/topics/encryption/base64.md) 
| 4*  | levelString              | **[level string](/topics/levelstring_encoding_decoding)**| All the data for the level                               
| 5   | version                   | **number**                                   | The version of the level published                                       
| 6   | playerID                 | **number**                                   | The player ID of the level author
| 8   | difficultyDenominator    | **number**                                   | Returns 0 if the level is N/A, returns 10 if a difficulty is assigned. Historically used to be the amount of people who have voted on the difficulty.
| 9   | difficultyNumerator      | **number**                                   | The nominator used for calculating the level difficulty. Divided by the denominator to get the difficulty icon. Nowadays just 0 = unrated, 10 = easy, 20 = normal, 30 = hard, 40 = harder, 50 = insane. Can be also used to determine the demon difficulty as a side-effect of the voting system. Historically used to be the sum of stars from all votes |
| 10  | downloads                 | **number**                                   | The amount of times the level has been downloaded                          
| 11  | setCompletes              | **integer**                                  | The Number of people who have completed a specific level removed in update 2.1
| 12  | officialSong             | **number**                                   | The official song number used by the level, if applicable         
| 13  | gameVersion              | **number** 			                   	     | The GD version the level was uploaded in. Versions 1.0 to 1.6 use version numbers 1 to 7 respectively. Version 10 is 1.7. Otherwise, divide the version number by ten to get the correct number. 
| 14  | likes                     | **number** 			                   	     | likes - dislikes |
| 15  | length                    | **number** 			                   	     | A number from 0-4, where 0 is tiny and 4 is XL   |  
| 16  | dislikes                  | **number**                                   | dislikes - likes |
| 17  | demon                     | **boolean** 				                 | If the level's difficulty is demon    
| 18  | stars                     | **number** 				                     | The amount of stars rewarded for completing the level
| 19  | featureScore              | **number** 	                                 | 0 if the level is not featured, otherwise a positive number. The higher it is, the higher the level appears on the featured levels list. 
| 25  | auto                      | **boolean** 				                 | If the level's difficulty is auto
| 26  | recordString              | **String**                                   | appears in the [GJGameLevel parser](https://media.discordapp.net/attachments/801840133355470888/809495354880950272/unknown.png) but is unused
| 27* | password                  | **encrypted string** 	                     | The password required to copy the level. It is XOR encrypted with a key of 26364
| 28* | uploadDate               | **string** 				                     | The approximate date the level was uploaded on 
| 29* | updateDate               | **string** 				                     | The approximate date the level was last updated on 
| 30  | copiedID                 | **number** 				                     | The ID the of the original level (if the level was copied)   
| 31  | twoPlayer                | **boolean** 				                 | Whether the level uses two player mode
| 35  | customSongID            | **number** 				                     | The ID of the custom Newgrounds song used in the level    
| 36  | extraString              | **string**                                   | The extraString passed when uploading the level. Its use is currently unknown
| 37  | coins                     | **number** 				                     | The number of user coins placed in the level      
| 38  | verifiedCoins            | **boolean** 				                 | If the level's user coins are verified (silver)
| 39  | starsRequested           | **number** 				                     | The star value requested for the level     
| 40* | lowDetailMode           | **boolean** 				                 | If the level has a low detail checkbox    
| 41* | dailyNumber              | **number** 				                     | Daily/weekly levels only. Returns which daily/weekly the level was (e.g. the 500th daily level). Subtract 100,000 if the level is weekly
| 42  | epic                      | **integer** 				                 | If the level has an epic rating    
| 43  | demon Difficulty          | **number** 				                     | The difficulty of the demon rating. 3 = easy, 4 = medium, 0 = hard, 5 = insane, 6 = extreme. Can also be used to determine the level difficulty non-demons had before rating as a side-effect of the voting system.
| 44  | isGauntlet                | **Bool**                                     | if the level is in a gauntlet |
| 45  | objects                   | **number** 				                     | The amount of objects in the level, used to determine if the level is considered "large". It caps at 65535     
| 46  | editorTime                | **number** 				                     | 
| 47  | editorTime(Copies)        | **number** 				                     | 
| 48  | unknown                   | **String**                                   | not found it GD 2.1's parser however it is in 2.2's parser suggesting that it was a 2.2 key that rob accidentally sent from the servers seems to be unused after testing it |

