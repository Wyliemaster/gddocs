# Levels

> Levels are what define Geometry Dash. Each level has an extensive amount of metadata is stored within the player's [save data][SAVES].

## Metadata

As stated in the [Gamesave][SAVES] section, data is stored in an [Apple property list][PLIST] format. In this document, you will find the key-value pairs for each piece of metadata.  

> _If you are only interested in the level string, please refer to the [Level Objects][OBJ] section_

**Note: Value's denoted with a `*` symbol will redirect to a section with extra clarification when clicked**

| Key  | Value    | Type    | Notes                                                        |
| :--- | :------- | :------ | :----------------------------------------------------------- |
| `k1` | Level Id | int | This is the Id of the level which is uploaded to the servers |
| `k2` | Level Name | string | This is the name of the level |
| `k3` | Level Description | string | This is the description for a level. In version 2.1, this string is [Base64 Encoded][BASE64] |
| `k4` | Level Data | string | This is the level which is played in-game. In version 2.1, this string is compressed using [GZip][ZLIB] compression and then it is [Base64 Encoded][BASE64] |
| `k5` | Author Name | string | This is the level creator's Username |
| `k6` | Author User Id | int | This is the level creator's User Id |
| `k7` | Level Difficulty | [enum][ENUM] | An Id which represents the level diffiulty |
| `k8` | Song Id | int | The Id for the official song if one is used in the level|
| `k9` | [Total Difficulty Ratings][ROB_NOTE]* | int | The total of difficulty ratings given to a level. |
| `k10` | [Sum of Difficulty Ratings][ROB_NOTE]* | int | The sum of all difficulty ratings given to a level |
| `k11` | Downloads | int | The number of downloads the level had last time it was viewed |
| `k12`| UNKNOWN| UNKNOWN | UNKNOWN |
| `k13` | Editable | bool | Whether the player can edit the level from the pause menu |
| `k14` | Verified | bool | Whether the level has been verified |
| `k15` | Uploaded | bool | Whether the level has been uploaded to the servers |
| `k16` | Level Version | int | The version of the level at the time it was last viewed |
| `k17` | Game Version | int | The version of the game the level was uploaded with |
| `k18` | Attempts | int | The number of attempts the player has invested on the level |
| `k19` | Normal Mode Percentage | int | The percentage of the player's best attempt relative to the level's length |
| `k20` | Practice Mode Percentage | int | The percentage of the player's best practice attempt relative to the level's length |
| `k21` | Level Type | [enum][ENUM] | An Id which tells the game where the level is from |
| `k22` | Likes | int | The number of likes a level has recieved. <br>In 2.1, the difference between likes and dislikes are used |
| `k23` | Level Length | [enum][ENUM] | An ID which represents different lengths the level could be categorised under |
| `k24` | Dislikes | int | The number of dislikes the level has recieved. |
| `k25` | Demon | bool | Whether the level has a demon rating |
| `k26` | Stars | int | If the level is rated, this will be the number of stars which will be awarded upon completion |
| `k27` | Feature Score | int | A Score given to featured levels which denote where they are placed in the featured section |
| `k28`<br>`k29`<br>`k30`<br>`k31`<br>`k32` | Unknown | Unknown | Despite these being unknown, the symbols within older clients gives hints to what it could represent. <u>This is not confirmed information</u> but these values are believed to represent:**<br>- Total Star Ratings<br>- Star Ratings Sum<br>- Maximum Star Rating Total<br>- Minimum Star Rating Total<br>- Total Demon Difficulty Votes**
| `k33` | Auto | bool | Whether the level is auto |
| `k34` | Replay | string | This string contains data from the verification attempt which can theoretically be used to play back the attempt. Due to a poor implementation, it does not work. In version 2.1, this string is compressed using [GZip][ZLIB] compression and then it is [Base64 Encoded][BASE64] |
| `k35` | Hidden | bool | Whether to hide the level on list views |
| `k36` | Jumps | int | The number of jumps invested on the level |
| `k37` | Required Coins to Unlock | int | Main levels which require coins in order to play will have the coins required stored here |
| `k38` | Unlocked Level | bool | Whether the player has unlocked an official level which requires coins |
| `k39` | UNKNOWN | UNKNOWN | UNKNOWN |
| `k40` | UNKNOWN | UNKNOWN | UNKNOWN |
| `k41` | Level Password | string | Unless the level has passwords disabled, this string will be a 6 digit passcode which is encrypted with [Xor Cipher][XOR] and then [Base64 Encoded][BASE64] |
| `k42` | Original Id | int | If the level has been copied before, the original level Id will be stored here so it can be accessed from the copied levels |
| `k43` | Two Player Mode | bool | Whether Two player mode is enabled |
| `k44` | UNKNOWN | UNKNOWN | UNKNOWN |

## RobTop Metadata


[SAVES]: #
[OBJ]: #
[PLIST]: /topics/files/plist.md
[BASE64]: /topics/encryption/base64.md
[XOR]: /topics/encryption/xor.md
[ZLIB]: /topics/encryption/zip.md
[ENUM]: /topics/enums/level.md
[ROB_NOTE]: #robtop-metadata

<!--
    To Investigate: k12, k39, k40
-->