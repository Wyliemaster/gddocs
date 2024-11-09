# Client Gamesave Resource

## CCGameManager.dat

Your CCGameManager.dat File contains a lot of information regarding your account. it is encrypted using [Xor](/topics/encryption/xor.md) with a key of 11 / 0xB, [url-Safe Base64](/topics/encryption/base64.md) and [Gzip](/topics/encryption/zip.md) and is in the [XML](https://en.wikipedia.org/wiki/XML) format

## Gamesave Key structure

| Key     | Type | description |
| :-------| :--- | :-----------|
| bgVolume| Float| any value between 0 - 1 |
| sfxVolume| Float| any value between 0 - 1 |
| playerUDID| [UDID](/topics/encryption/id?id=udid)| The UDID of the user |
| playerName| String| The In-game Name of the player|
| playerUserID| Integer| The userID of the player|
| playerFrame| [Icon](enumerations.md)| The ID of the player's cube |
| playerShip| [Icon](enumerations.md)| The ID of the player's ship |
| playerBall| [Icon](enumerations.md)| The ID of the player's ball |
| playerBird| [Icon](enumerations.md)| The ID of the player's UFO |
| playerDart| [Icon](enumerations.md)| The ID of the player's wave |
| playerRobot| [Icon](enumerations.md)| The ID of the player's robot |
| playerSpider| [Icon](enumerations.md)| The ID of the player's spider |
| playerSwing| [Icon](enumerations.md)| The ID of the player's swing |
| playerColor| [Icon](enumerations.md)| The ID of the player's primary color |
| playerColor2| [Icon](enumerations.md)| The ID of the player's secondary color |
| playerColor3| [Icon](enumerations.md)| The ID of the player's glow color, -1 if same as secondary color |
| playerStreak| [Icon](enumerations.md)| The ID of the player's trail |
| playerShipStreak| [Icon](enumerations.md)| The ID of the player's ship streak |
| playerDeathEffect| [Icon](enumerations.md)| The ID of the player's death effect |
| playerJetpack| [Icon](enumerations.md)| The ID of the player's jetpack |
| playerIconType| [Icon](enumerations.md)| The Index of the player's IconType |
| playerGlow| Bool| if Glow is enabled or not |
| secretNumber| Integer| the answer to `cod3breaker` in the vault of secrets |
| hasRP       | Bool | If the player is a moderator |
| [valueKeeper](/resources/client/gamesave/valueKeeper.md)| Dictionary | Dictionary filled with GV values you have enabled |
| unlockValueKeeper | Dictionary | Dictionary of Unlockable GV values|
| customObjectDict| Dictionary | Dictionary of object data of custom objects saved|
| reportedAchievements| Dictionary | contains a dictonary of all reported achievements on your account|
| showSongMarkers| Bool | if showSongMarkers is enabled |
| showProgressBar| Bool | if showProgressBar is enabled |
| clickedGarage| Bool | if Garage has been clicked |
| clickedEditor| Bool | if Editor has been clicked |
| clickedPractice| Bool | if Practice mode button has been clicked |
| showedEditorGuide| Bool | if EditorGuide has been clicked |
| showedLowDetailDialog| Bool | if low detail mode has been has been clicked |
| showedRateStarDialog| Bool | Whether the difficulty rating explanation was shown |
| bootups| integer | The ammount of times you have opened Geometry Dash |
| hasRatedGame| Bool | if you have rated the game |
| binaryVersion| integer | The Games Binary Version |
| resolution| [resolution](/resources/client/gamesave/enums.md) | The games resolution  |
| texQuality| integer | how high the text quality is (0 for Auto, 1 for Low, 2 for Medium and 3 for High) |
| timeOffset| integer | music offset in milliseconds  |
| customFPSTarget| float | the FPS target value |
| dpad01 | [Platformer UI](/resources/client/gamesave/dpad.md) | Platformer UI configuration #1 |
| dpad02 | [Platformer UI](/resources/client/gamesave/dpad.md) | Platformer UI configuration #2 |
| dpad03 | [Platformer UI](/resources/client/gamesave/dpad.md) | Platformer UI configuration #3 |
| dpad04 | [Platformer UI](/resources/client/gamesave/dpad.md) | Platformer UI configuration #4, however it's missing the last 5 options |
| dpad05 | [Platformer UI](/resources/client/gamesave/dpad.md) | Platformer UI configuration #5, however it's missing the last 5 options |
| dpadLayout01 | [Platformer UI](/resources/client/gamesave/dpad.md) | Default UI? |
| dpadLayoutDual01 | [Platformer UI](/resources/client/gamesave/dpad.md) | 2 platformer UIs separated by `;`, then 2 gamepad placements, also separated by `;`
| practiceOpacity | float | The opacity of the practice UI, from 0 to 1|
| practicePosX | float | The X position of the practice UI |
| practicePosY | float | The Y position of the practice UI |

## Legacy Keys

These keys were used in old versions of the game but are now obsolete.

| Key     | Type | description |
| :-------| :--- | :-----------|
| musicEnabled | Bool | Whether music is enabled or not. Moved to bgVolume |
| fxEnabled | Bool | Whether sound effects are enabled or not. Moved to sfxVolume |
| moreGamesString | String | The contents of the More Games button. It was a list of values separated by `_`. The values were: `gj` for GD Lite, `boom` for Boomlings, `mu` for Boomlings MatchUp and `mm` for Memory Mastermind. The game allowed repeated values |
| hasNewGames | Bool | Whether there are new games in the More Games button. This showed an exclamation mark icon next to the button |
| gameCenterEnabled | Bool | Whether the Game Center (iOS) was enabled. Moved to valueKeeper::[gv_0034](/resources/client/gamesave/gv.md) |
| lastDay | Integer | Presumably the day when you last played (0-indexed) |
| lastMonth | Integer | Presumably the month when you last played (0-indexed) |
| clickedName | Bool | Whether you clicked on your name in the icon kit to change it |
| autoCheckpoints | Bool | Whether checkpoints are placed automatically in practice mode. Moved to valueKeeper::[gv_0027](/resources/client/gamesave/gv.md) |
| showBPMMarkers | Bool | if BPM markers are shown |
| autoRetryLevel | Bool | If the level automatically restarts after death. Moved to valueKeeper::[gv_0026](/resources/client/gamesave/gv.md) |
| recordGameplay | Bool | Presumably whether to record gameplay with Everyplay |
| showedRateDiffDialog | Bool | Unknown (showedRateStarDialog does the same thing?) |
| commentSortRecent | Bool | unknown (there was no option to sort comments by most liked at the time) |
| kEnableTutorial | Bool | unknown |
| showedFirstTutorial | Bool | unknown |

### GLM 

| Key     | Type | description |
| :-------| :--- | :-----------|
| [GLM_01](/resources/client/gamesave/GLM.md#GLM_01) | [Level](/resources/client/level.md)| All Official Levels you have progress on are stored here |
| [GLM_02](/resources/client/gamesave/GLM.md#GLM_02) | [level](/resources/client/level.md) | Uploaded levels - before the account System |
| [GLM_03](/resources/client/gamesave/GLM.md#GLM_03) | [Level](/resources/client/level.md)| online levels played|
| [GLM_04](/resources/client/gamesave/GLM.md#GLM_04) | rating| Shows what levels you have rated. was removed after 1.9 |
| [GLM_06](/resources/client/gamesave/GLM.md#GLM_06) | AccountIDs| The AccountIDs of all creators you follow    |
| [GLM_07](/resources/client/gamesave/GLM.md#GLM_07) | levelID| Levels played in last session |
| [GLM_08](/resources/client/gamesave/GLM.md#GLM_08) | filters | Search Filters States |
| [GLM_09](/resources/client/gamesave/GLM.md#GLM_09) | filters | Search Filters for Online Levels    |
| [GLM_10](/resources/client/gamesave/GLM.md#GLM_10) | [Level](/resources/client/level.md)| Completed dailies |
| [GLM_11](/resources/client/gamesave/GLM.md#GLM_11) | Integer| Current Daily ID |
| [GLM_12](/resources/client/gamesave/GLM.md#GLM_12) | likes | Something Related to likes |
| [GLM_13](/resources/client/gamesave/GLM.md#GLM_13) | levelID | All levels you submitted a rating on |
| [GLM_14](/resources/client/gamesave/GLM.md#GLM_14) | reportedLevels| A dictionary of all levels you have reported|
| [GLM_15](/resources/client/gamesave/GLM.md#GLM_15) | levelID | all Demon levels you have submitted a rating for |
| [GLM_16](/resources/client/gamesave/GLM.md#GLM_16) | [Level](/resources/client/level.md)| All the levels found in the Gauntlets that you have progress on are stored in here |
| [GLM_17](/resources/client/gamesave/GLM.md#GLM_17) | integer| Current Weekly ID |
| [GLM_18](/resources/client/gamesave/GLM.md#GLM_18) | Folder | The Folder Names for saved levels |
| [GLM_19](/resources/client/gamesave/GLM.md#GLM_19) | Folder | The Folder names for Local Levels |
| [GLM_20](/resources/client/gamesave/GLM.md#GLM_20) | [Templates](/resources/client/gamesave/template.md) | Your Smart Templates |

### GS

| Key     | Type |
| :-------| :--- |
| [GS_value](/resources/client/gamesave/GS_Value?id=gs-value-structure)| Player Stats  |
| [GS_completed](/resources/client/gamesave/GS_Value?id=gs_completed)| Completed Levels  |
| [GS_3](/resources/client/gamesave/GS_Value?id=gs_3)| Completed levels with coins `{levelID}_{number of coins aquired from level}` |
| [GS_4](/resources/client/gamesave/GS_Value?id=gs_4)| Completed levels with coins `{levelID}_{number of coins aquired from level}` |
| [GS_5](/resources/client/gamesave/GS_Value?id=gs_5)| Completed Mappacks + rewarded stars `<k>pack_{MappackID}</k><s>{Stars rewarded}</s>` |
| [GS_6](/resources/client/gamesave/GS_Value?id=gs_6)| all Purchased Icons/Colours in the shops `<k>{ListingID}</k><s>{Price}</s>` |
| [GS_7](/resources/client/gamesave/GS_Value?id=gs_7)| level progress `<k>{levelID}</k><s>{percentage}</s>` |
| [GS_8](/resources/client/gamesave/GS_Value?id=gs_8)| Unused |
| [GS_9](/resources/client/gamesave/GS_Value?id=gs_9)| How many stars downloaded levels give `<k>{levelID}</k><s>{rewardedStars}</s>` |
| [GS_10](/resources/client/gamesave/GS_Value?id=gs_10)| Offical level progress `<k>{ID}</k><s>{percentage}</s>` |
| [GS_11](/resources/client/gamesave/GS_Value?id=gs_11)| All rewards gained from Daily Chests |
| [GS_12](/resources/client/gamesave/GS_Value?id=gs_12)| Contains [Quests](resources/client/gamesave/quests.md)|
| [GS_14](/resources/client/gamesave/GS_Value#GS_14)| Daily/Challenges rewards |
| [GS_15](/resources/client/gamesave/GS_Value?id=gs_15)| Contains Upcoming [Quests](resources/client/gamesave/quests.md)|
| [GS_16](/resources/client/gamesave/GS_Value?id=gs_16)| Daily/Weekly level progress `<k>{Daily/WeeklyID}</k><s>{percentage}</s>` |
| [GS_17](/resources/client/gamesave/GS_Value?id=gs_17)| Daily/Weekly Stars `<k>{Daily/WeeklyID}</k><s>{Stars}</s>` |
| [GS_18](/resources/client/gamesave/GS_Value?id=gs_18)| Gauntlet Level Progress `<k>{levelID}</k><s>{percentage}</s>` |
| [GS_19](/resources/client/gamesave/GS_Value#GS_19)| All the Rewards from unlocked chests in the treasure room |
| [GS_20](/resources/client/gamesave/GS_Value?id=gs_20)| Demon Keys |
| [GS_21](/resources/client/gamesave/GS_Value#GS_21)| All rewards for Completed Gauntlets + rewards for Demon quest/social medias   |
| [GS_22](/resources/client/gamesave/GS_Value?id=gs_22)| Rewards from Geometry Dash world |
| [GS_23](/resources/client/gamesave/GS_Value?id=gs_23)| Gauntlet Level Progress `<k>{levelID}</k><s>{percentage}</s>` |
| [GS_24](/resources/client/gamesave/GS_Value?id=gs_24)| Daily/Weekly Percentage |
| [GS_25](/resources/client/gamesave/GS_Value#GS_25)| All the rewards from completed weekly Demons |
| [GS_26](/resources/client/gamesave/GS_Value#GS_26)| Your active path |
| [GS_27](/resources/client/gamesave/GS_Value#GS_27)| All the list rewards |
| [GS_28](/resources/client/gamesave/GS_Value#GS_28)| Your enabled items (animations) |
| [GS_29](/resources/client/gamesave/GS_Value#GS_29)| Unknown (boolean) |
| [GS_29](/resources/client/gamesave/GS_Value#GS_29)| Unknown (boolean) |
| [GS_30](/resources/client/gamesave/GS_Value#GS_30)| Wraith rewards |
| [GS_31](/resources/client/gamesave/GS_Value#GS_31)| Event level rewards |

### GJA

| Key | Value|
| :-- |:-----------|
| GJA_001 | Username|
| GJA_002 | Password (in plaintext) (2.1 and below)|
| GJA_003 | AccountID |
| GJA_004 | Session ID (unused) |
| GJA_005 | Your password with [GJP2](/topics/gjp.md) Encryption|

### LLM

| Key | Value|
| :-- |:-----------|
| LLM_01 | Local [Levels](/resources/client/level.md) |
| LLM_02 | Hardcoded to `binaryVersion`|
| LLM_03 | Local [Lists](/resources/client/gamesave/list.md) |

### MDLM

| Key | Value |
|:----|:------|
| MDLM_001 | Dictionary of [SongInfoObject](/resources/server/song.md) |
| MDLM_002 | Song Priority of a song |
| MDLM_003 | Unknown (dict) |

### KBM

| Key | Value |
|:----|:------|
| KBM_001 | Keybindings |
| KBM_002 | Keybindings |
