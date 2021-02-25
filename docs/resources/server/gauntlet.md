# Server Gauntlet Resource

## Gauntlet Info

Gauntlets are a collection of themed levels created by the users of Geometry Dash which were hand-picked by RobTop.

 - As of Geometry Dash 2.11, There are `15 gauntlets`

  - According to the [December 2019 2.2 leaks](https://www.reddit.com/r/geometrydash/comments/e9b0y6/update_22_leaks_megathread/), 2.2 will include `44 Gauntlets`
    - **A list of the Gauntlet Names can be found [here](/resources/server/gauntlet?id=gauntlet-names)**<br/>*Keep in mind that these are subject to change*

### Gauntlet Structure

| Key | Name/Value | Type       | Description                           |
| --- | ---------- | ---------- | ------------------------------------- |
| 1   | gauntletID | **Integer**| the Gauntlet ID, starting at 1        |
| 3   | levels     | **String** | List of gauntlet level IDs seperated by `,`|

### Trivia

- Gauntlets use the same response parser as [MapPacks](/resources/server/mappack) but they do not share the full range of features mappacks have

### Gauntlet names


| ID ⠀| Name |
|:---|:-----|
  | 1| Fire|
  | 2| Ice|
  | 3| Poison|
  | 4| Shadow|
  | 5| Lava|
  | 6| Bonus|
  | 7| Chaos|
  | 8| Demon|
  | 9| Time|
  | 10| Crystal|
  | 11| Magic|
  | 12| spike|
  | 13| Monster|
  | 14| Doom|
  | 15| Death|
  | 16| Forest|
  | 17| Rune|
  | 18| Force|
  | 19| Spooky|
  | 20| Dragon|
  | 21| Water|
  | 22| Haunted|
  | 23| Acid|
  | 24| Witch|
  | 25| Power|
  | 26| Potion|
  | 27| Snake|
  | 28| Toxic|
  | 29| Halloween|
  | 30| Treasure|
  | 31| Ghost|
  | 32| Gem|
  | 33| Inferno|
  | 34| Portal|
  | 35| Strange|
  | 36| Fantasy|
  | 37| Christmas|
  | 38| Surprise|
  | 39| Mystery|
  | 40| Cursed|
  | 41| Cyborg|
  | 42| Castle|
  | 43| Grave|
  | 44| Temple|


### Response Examples


<!-- tabs:start -->

#### **Gauntlet Example Response**
```md
    1:1:3:27732941,28200611,27483789,28225110,27448202|1:2:3:20635816,28151870,25969464,24302376,27399722 
```
<!-- tabs:end -->

