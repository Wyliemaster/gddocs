# Server Gauntlet Resource

## Gauntlet Info

Gauntlets are a collection of themed levels created by the users of Geometry Dash which were hand-picked by RobTop.

 - As of Geometry Dash 2.20, there are `52 gauntlets`
 - **A list of the Gauntlet Names can be found [here](/resources/server/gauntlet?id=gauntlet-names)**<br/>*Keep in mind that these are subject to change*

A typical gauntlet server response is structured with a `key:value:key:value` pairing and is then split with a `|`
<!-- tabs:start -->

#### **Gauntlet Example Response**
```md
1:1:3:27732941,28200611,27483789,28225110,27448202|1:2:3:20635816,28151870,25969464,24302376,27399722 
```
<!-- tabs:end -->

Each `key` is tied to a component within the client and the `value` sets data for the specific component.  
A list of all known keys can be found in the table below

### Gauntlet Structure

| Key | Name/Value | Type       | Description                           |
| --- | ---------- | ---------- | ------------------------------------- |
| 1   | gauntletID | **Integer**| the Gauntlet ID, starting at 1        |
| 3   | levels     | **String** | List of gauntlet level IDs seperated by `,`|

### Gauntlet names

Here is a table which shows which `gauntletID` corresponds to a specific gauntlet

<!-- table made with a json to mdtable script so it looks ugky :/-->
Note: Bolded gauntlet names are the ones that are added in-game, and the rest are yet to be added

| ID | Name |
|:---|:-----|
| 1  | **Fire** |
| 2  | **Ice** |
| 3  | **Poison** |
| 4  | **Shadow** |
| 5  | **Lava** |
| 6  | **Bonus** |
| 7  | **Chaos** |
| 8  | **Demon** |
| 9  | **Time** |
| 10 | **Crystal** |
| 11 | **Magic** |
| 12 | **Spike**|
| 13 | **Monster** |
| 14 | **Doom** |
| 15 | **Death** |
| 16 | **Forest** |
| 17 | Rune |
| 18 | **Force** |
| 19 | Spooky |
| 20 | Dragon |
| 21 | **Water** |
| 22 | **Haunted** |
| 23 | Acid |
| 24 | Witch |
| 25 | Power |
| 26 | Potion |
| 27 | Snake |
| 28 | Toxic |
| 29 | **Halloween** |
| 30 | Treasure |
| 31 | Ghost |
| 32 | Gem |
| 33 | **Inferno** |
| 34 | **Portal** |
| 35 | **Strange** |
| 36 | **Fantasy** |
| 37 | **Christmas** |
| 38 | Surprise |
| 39 | **Mystery** |
| 40 | **Cursed** |
| 41 | **Cyborg** |
| 42 | **Castle** |
| 43 | Grave |
| 44 | Temple |
| 46 | **World** |
| 47 | **Galaxy** |
| 48 | **Universe** |
| 49 | **Discord** |
| 50 | **Split** |
| 51 | **NCS I** |
| 52 | **NCS II** |
| ?  | Space |
| ?  | Cosmos |

### Trivia

- Gauntlets use the same response parser as [MapPacks](/resources/server/mappack) but they do not share the full range of features mappacks have
- The **Spike Gauntlet** used to be improperly capitalized in 2.1 as `spike` gauntlet
