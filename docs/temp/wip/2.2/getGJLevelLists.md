# getGJLevelLists.php

> Fetchs a list of levels from the server

## Parameters

| Parameter       | Description                                                                                 | Required                              |
| :-------------- | :------------------------------------------------------------------------------------------ | :------------------------------------ |
| `gameVersion`   | The current Game Version                                                                    |                                       |
| `binaryVersion` | The current binary version                                                                  |                                       |
| `udid`          | The unique device identifier                                                                |                                       |
| `uuid`          | The universally unique identifier                                                           |                                       |
| `accountID`     | The player's Account Id                                                                     | Only for `type` `5`, `8`, `13`        |
| `gjp2`          | The player's hashed password                                                                | if accountID is needed                |
| `type`          | What type of list should be prioritised in the search                                       | Only on `type` `5` and `10`           |
| `str`           | The name of the list <br> User ID of list author if `type` is set to `5`                    | Only required if `type` is set to `5` |
| `page`          | Which page of the search to display                                                         |                                       |
| `diff`          | A list of integers which denote which difficulty to filter for                              |                                       |
| `star`          | An integer which is set to 1 if the list should be rated                                    |                                       |
| `noStar`        | An integer which is set to 1 if the list is not rated                                       |                                       |
| `demonFilter`   | An integer which denotes which demon difficulty to filter by if `diff` is filtered by demon |
| `followed`      | A list of user Ids of creators the player follows                                           |                                       |
| `secret`        | Common Secret - `Wmfd2893gb7`                                                               | Yes                                   |

<details id="type" style="cursor: pointer;">
    <summary><code>type</code></summary>

| Type | Description                                                                       |
| :--: | --------------------------------------------------------------------------------- |
|  0   | Search query                                                                      |
|  1   | Most downloaded                                                                   |
|  2   | Most liked                                                                        |
|  3   | Trending                                                                          |
|  4   | Recent                                                                            |
|  5   | User's levels, uses `str` as the **user ID**                                      |
|  6   | Featured                                                                          |
|  7   | Magic                                                                             |
|  8   | Moderator sent levels                                                             |
|  10  | Level list (used in map packs), uses `str` as a comma separated list of level IDs |
|  11  | Awarded                                                                           |
|  12  | Followed (see `followed` parameter)                                               |
|  13  | Friends (login required)                                                          |
|  15  | Most liked in GD World                                                            |
|  16  | Hall of fame                                                                      |
|  17  | Featured in GD World                                                              |
|  18  | Unknown (always empty, perhaps robtop only?)                                      |
|  21  | Daily history                                                                     |
|  22  | Weekly history                                                                    |

</details>

<details id="diff" style="cursor: pointer;">
    <summary><code>diff</code></summary>

| diff | Description                                                |
| :--: | ---------------------------------------------------------- |
|  -1  | N/A                                                        |
|  -2  | Demons (see `demonFilter` for specifying demon difficulty) |
|  1   | Easy                                                       |
|  2   | Normal                                                     |
|  3   | Hard                                                       |
|  4   | Harder                                                     |
|  5   | Insane                                                     |

</details>

<details id="demonFilter" style="cursor: pointer;">
    <summary><code>demonFilter</code></summary>

| demonFilter | Description   |
| :---------: | ------------- |
|      1      | Easy demon    |
|      2      | Medium demon  |
|      3      | Hard demon    |
|      4      | Insane demon  |
|      5      | Extreme demon |

</details>

## Response

A successful list search will return the data in the format

```
lists#creators#page info#hash
```

where:

- `lists` is a list of [Level Objects](#) separated by `|`
- `creators` is a list of creators separated by `|`, each in the format `userID:username:accountID`
- `page info` is in the format `total:offset:amount` where:
  - `total` - total number of levels for the query
  - `offset` - offset from which the current page starts
  - `amount` - number of levels per page (always 10 for the gd servers)
- `hash` is a hash of every level, see [Hashes](#)
<!-- should the hash be explained here or on its own page like how the old docs had a page for CHK -->

If the request is not successful, it will return `-1`

## Example

### **curl**

```cmd
curl -H "User-Agent:" http://www.boomlings.com/database/getGJLevelLists.php -X POST -d "secret=Wmfd2893gb7&type=6"
```

**Response**

<!-- This response was captured during 2.2's development -->

```py
1:17:2:The Demon Trial:3:Q2FuIHlvdSBiZWF0IGFueXRoaW5nPw==:5:1:49:1187377:50:YunHaSeu14:10:12:7:10:14:2:19:1:51:10565740,3979721,28220417,42584142:28:1687427379:29:0|1:16:2:My New List:3:U2Vjb25kIGxpc3QuIFRlc3RpbmcgdmVyc2lvbnMu:5:4:49:71:50:RobTop:10:11:7:1:14:1:19:1:51:91530036,91427162:28:1687427214:29:1687478036#16:RobTop:71|36314:YunHaSeu14:1187377#1:0:10#f5da5823d94bbe7208dd83a30ff427c7d88fdb99
```

## Notes

> This endpoint is extremely similar to `getGJLevels21.php` and may support some of the same parameters
