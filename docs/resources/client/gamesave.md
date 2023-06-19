# Client Gamesave Resource

> Gamesaves contain very important information regarding the players of Geometry Dash. This document will detail the data that can be found within a save file. For information regarding the decryption of save files, refer to the [Save Decryption][SAVE] section.

## Types of save files

There are 2 types of save files for Geometry Dash.

- CCGameManager
- CCLocalLevels

<!-- Todo: Plist section -->

These files contain a lot of data regarding a player and their levels. They are stored in an [Apple property list][PLIST] format

> On some platforms, special backup files called `CCGameManager2.dat` and `CCLocalLevels2.dat` are created with the intent of restoring save data in the event of save data corruption. Unfortunately, it rarely helps.

## Game Manager

Gamemanager is an extremely large file which contains all of the player's save data. The following is all the data which can be found within

| Key                     | Type   | Description                                                                       |
| :---------------------- | :----- | :-------------------------------------------------------------------------------- |
| `bgVolume`              | float  | A value typically between the range of 0-1 which controls the background volume   |
| `sfxVolume`             | float  | A value typically between the range of 0-1 which controls the sound effect volume |
| `playerUDID`            | string | The player's [Unique Device Identifier][UDID]                                     |
| `playerUserID`          | int    | The player's User ID                                                              |
| `playerFrame`           | int    | The ID of the player's cube                                                       |
| `playerShip`            | int    | The ID of the player's ship                                                       |
| `playerBall`            | int    | The ID of the player's ball                                                       |
| `playerBird`            | int    | The ID of the player's UFO                                                        |
| `playerDart`            | int    | The ID of the player's wave                                                       |
| `playerRobot`           | int    | The ID of the player's robot                                                      |
| `playerSpider`          | int    | The ID of the player's spider                                                     |
| `playerStreak`          | int    | The ID of the player's trail                                                      |
| `playerDeathEffect`     | int    | The ID of the player's death effect                                               |
| `playerColor`           | int    | The ID of the player's primary icon colour                                        |
| `playerColor2`          | int    | The ID of the player's secondary icon colour                                      |
| `playerGlow`            | bool   | Whether the player has icon glow enabled                                          |
| `playerIconType`        | int    | The type of icon the player last selected in the icon select screen               |
| `hasRP`                 | bool   | Whether the player has been given [moderator][MODERATOR] status                   |
| `secretNumber`          | int    | The answer to the `cod3breaker` vault code in the [vault of secrets][VAULT]       |
| `recordGameplay`        | bool   | A toggle for if the game should record gameplay for [everyplay][EVERYPLAY]        |
| `showSongMarkers`       | bool   | A toggle for showing song markers in the editor                                   |
| `showBPMMarkers`        | bool   | A toggle for showing markers for BPM in the editor                                |
| `showProgressBar`       | bool   | A toggle for if the progress bar shows during gameplay                            |
| `clickedGarage`         | bool   | If the player has entered the icon selection screen before                        |
| `clickedEditor`         | bool   | If the player has entered the editor before                                       |
| `clickedPractice`       | bool   | If the player has entered practice mode before                                    |
| `clickedName`           | bool   | If the player has clicked their name in the icon selection screen                 |
| `showedEditorGuide`     | bool   | If the editor guide popup has been shown to the player                            |
| `showedLowDetailDialog` | bool   | If the popup explaining low detail mode has been shown in the support menu        |
| `performanceMode`       | bool   | A toggle for if low detail mode in the support settings has been enabled          |
| `showedRateDiffDialog`  | bool   | If the popup explaining how difficulty ratings work has been shown                |
| `showedRateStarDialog`  | bool   | If the popup explaining how star ratings work has been shown                      |
| `hasRatedGame`          | bool   | If the player has rated the game on the Google Play store or the Apple App Store  |
| `bootups`               | int    | The number of times the player has opened the game                                |
| `binaryVersion`         | int    | The current binary version the game is running on                                 |
| `resolution`            | int    | An enum value which tells the game which resolution to display the game at        |
| `texQuality`            | int    | An enum value which tells the game which texture quality to use                   |
| `timeOffset`            | int    | An offset for music in milliseconds                                               |

### Dictionaries

Some parts of save data are embedded within dictionaries. For more information about these dictionaries, please refer to their respective sections

| Key                         | Description                                                              |
| :-------------------------- | :----------------------------------------------------------------------- |
| [valueKeeper][VK]           | Contains temporary values as well as some unlockables                    |
| [unlockValueKeeper][UVK]    | Contains completed events                                                |
| [customObjectDict][OBJ]     | Contains custom objects created within the editor                        |
| [reportedAchievements][ACH] | Contains all the achievements the player has had any progress on         |
| [GLM][GLM]                  | The Game Level Manager which contains a set of dictionaries about levels |
| [GSM][GSM]                  | The Game Stats Manager which contains a set of dictionaries about stats  |
| [GJA][GJA]                  | The Account Manager which handles account data                           |
| [MDLM][MDLM]                | The Music Download Manager which handles downloaded music                |
| [KBM][KBM]                  | The Keybindings Manager which handles keybindings                        |

## Local Level Manager

Local Level Manager is stored inside of the `CCLocalLevels` and contains all locally created levels. For information regarding how levels are serialised, please refer to the [level][LEVEL] section.

| Key      | Type | Description                                                                          |
| :------- | :--- | :----------------------------------------------------------------------------------- |
| `LLM_01` | list | LLM_01 is a list of dictionaries which contain various information regarding levels. |
| `LLM_02` | int  | The binary version of the game                                                       |

<!-- Links -->

[SAVE]: #
[PLIST]: #
[UDID]: #
[MODERATOR]: #
[VAULT]: #
[EVERYPLAY]: #
[LEVEL]: #
[VK]: /resources/client/saves/value_keeper.md
[UVK]: #
[OBJ]: #
[ACH]: /resources/client/saves/achievement.md
[GLM]: #
[GSM]: #
[GJA]: /resources/client/saves/account.md
[MDLM]: /resources/client/saves/music.md
[KBM]: /resources/client/saves/keybindings.md

<!-- ## Gamesave Key structure

### GLM

| Key     | Type | description |
| :-------| :--- | :-----------|
| [GLM_01](/resources/client/gamesave/GLM.md#GLM_01) | [Level](/resources/server/level.md)| All Official Levels you have progress on are stored here |
| [GLM_02](/resources/client/gamesave/GLM.md#GLM_02) | [level](/resources/server/level.md) | Uploaded levels - before the account System |
| [GLM_03](/resources/client/gamesave/GLM.md#GLM_03) | [Level](/resources/server/level.md)| online levels played|
| [GLM_04](/resources/client/gamesave/GLM.md#GLM_04) | rating| Shows what levels you have rated. was removed after 1.9 |
| [GLM_06](/resources/client/gamesave/GLM.md#GLM_06) | AccountIDs| The AccountIDs of all creators you follow    |
| [GLM_07](/resources/client/gamesave/GLM.md#GLM_07) | levelID| Levels played in last session |
| [GLM_08](/resources/client/gamesave/GLM.md#GLM_08) | filters | Search Filters States |
| [GLM_09](/resources/client/gamesave/GLM.md#GLM_09) | filters | Search Filters for Online Levels    |
| [GLM_10](/resources/client/gamesave/GLM.md#GLM_10) | [Level](/resources/server/level.md)| Completed dailies |
| [GLM_11](/resources/client/gamesave/GLM.md#GLM_11) | Integer| Current Daily ID |
| [GLM_12](/resources/client/gamesave/GLM.md#GLM_12) | likes | Something Related to likes |
| [GLM_13](/resources/client/gamesave/GLM.md#GLM_13) | levelID | All levels you submitted a rating on |
| [GLM_14](/resources/client/gamesave/GLM.md#GLM_14) | reportedLevels| A dictionary of all levels you have reported|
| [GLM_15](/resources/client/gamesave/GLM.md#GLM_15) | levelID | all Demon levels you have submitted a rating for |
| [GLM_16](/resources/client/gamesave/GLM.md#GLM_16) | [Level](/resources/server/level.md)| All the levels found in the Gauntlets that you have progress on are stored in here |
| [GLM_17](/resources/client/gamesave/GLM.md#GLM_17) | integer| Current Weekly ID |
| [GLM_18](/resources/client/gamesave/GLM.md#GLM_18) | Folder | The Folder Names for saved levels |
| [GLM_19](/resources/client/gamesave/GLM.md#GLM_19) | Folder | The Folder names for Local Levels |

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

### GJA

| Key | Value|
| :-- |:-----------|
| GJA_001 | Username|
| GJA_002 | Password (in plaintext)|
| GJA_003 | AccountID |

#### GDL22 GJA
| Key | Value|
| :-- |:-----------|
| GJA_004 | SessionID |

### LLM

| Key | Value|
| :-- |:-----------|
| LLM_01 | Local Levels |
| LLM_02 | Hardcoded to `binaryVersion`|

