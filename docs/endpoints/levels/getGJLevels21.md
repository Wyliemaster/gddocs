# getGJLevels21

> This endpoint is used to search levels by name and or filter

## Parameters

| Parameter         | Description                                                                                                   | Required                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| `secret`          | [Common secret](/reference/secrets.md) `Wmfd2893gb7`                                                          | Yes                                   |
| `gameVersion`     | [Game Version](#), 21 on 2.1                                                                                  |                                       |
| `binaryVersion`   | [Binary Version](#), 35 on 2.113                                                                              |                                       |
| `type`            | Search type, [see values](#type). Defaults to most liked                                                      |                                       |
| `str`             | Search query, user ID or level list depending on `type`                                                       | Only on types 5 and 10                |
| `page`            | Which page to request, defaults to 0                                                                          |                                       |
| `total`           | Currently unknown. Defaults to the amount of levels available up to 9999, but 0 or leaving it out also work.  |                                       |
| `gjp`             | The [GJP](/topics/Algorithms/robtop-cipher.md) for the `accountID`                                            |                                       |
| `accountID`       | The ID for the account which is doing the search. Only sent on types 8, 13 and 5                              |                                       |
| `gdw`             | Whether the request is for GD World, either 0 or 1                                                            |                                       |
| `gauntlet`        | The ID for the gauntlet being requested                                                                       |                                       |
| `diff`            | Difficulty filter, [see values](#diff)                                                                        |                                       |
| `demonFilter`     | Selects which demon difficulty to search, [see values](#demonFilter). If not sent will search all demon types |                                       |
| `len`             | Level length, [see values](#len)                                                                              |                                       |
| `uncompleted`     | Uncompleted filter, either 0 or 1                                                                             |                                       |
| `onlyCompleted`   | Completed filter, either 0 or 1                                                                               |                                       |
| `completedLevels` | Comma separated list of completed level IDs surrounded by `()`                                                | Only when using (un)completed filters |
| `featured`        | Featured filter, either 0 or 1                                                                                |                                       |
| `original`        | Original filter, either 0 or 1                                                                                |                                       |
| `twoPlayer`       | Two Player Mode filter, either 0 or 1                                                                         |                                       |
| `coins`           | Coins filter, either 0 or 1                                                                                   |                                       |
| `epic`            | Epic filter, either 0 or 1                                                                                    |                                       |
| `noStar`          | Unrated filter, either 0 or 1                                                                                 |                                       |
| `star`            | Rated filter, either 0 or 1                                                                                   |                                       |
| `song`            | Official (or custom) song ID, not sent when off                                                               |                                       |
| `customSong`      | Newgrounds song, 1 when on and uses `song` as the ID, not sent when off                                       |                                       |
| `followed`        | Comma separated list of the followed user IDs                                                                 | Only on type 12                       |
| `local`           | Whether to fetch "My Levels", either 0 or 1                                                                   | Only on type 5                        |

<details open id="type">
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

<details id="diff">
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

<details id="demonFilter">
    <summary><code>demonFilter</code></summary>

| demonFilter | Description   |
| :---------: | ------------- |
|      1      | Easy demon    |
|      2      | Medium demon  |
|      3      | Hard demon    |
|      4      | Insane demon  |
|      5      | Extreme demon |

</details>

<details id="len">
    <summary><code>len</code></summary>

| len | Value  |
| :-: | ------ |
|  0  | Tiny   |
|  1  | Short  |
|  2  | Medium |
|  3  | Long   |
|  4  | XL     |

</details>

## Response

A successful level search will return the data in the format

```
levels#creators#songs#page info#hash
```

where:

- `levels` is a list of [Level Objects](#) separated by `|`
- `creators` is a list of creators separated by `|`, each in the format `userID:username:accountID`
- `songs` is a list of [Song Objects](#) separated by `~:~`
- `page info` is in the format `total:offset:amount` where:
  - `total` - total number of levels for the query
  - `offset` - offset from which the current page starts
  - `amount` - number of levels per page (always 10 for the gd servers)
- `hash` is a hash of every level, see [Hashes](#)
<!-- should the hash be explained here or on its own page like how the old docs had a page for CHK -->

If the request is not successful, it will return `-1`


<!-- tabs:start -->

### **Python**

```py
import requests

headers = {
    "User-Agent": ""
}

data = {
    "str": "bloodbath",
    "star": 1,
    "type": 0,
    "secret": "Wmfd2893gb7",
}

url = "http://www.boomlings.com/database/getGJLevels21.php"

req = requests.post(url=url, data=data, headers=headers)
print(req.text)
```

### **curl**

```plain
curl http://www.boomlings.com/database/getGJLevels21.php -A "" -d "str=bloodbath&star=1&type=0&secret=Wmfd2893gb7"
```

<!-- tabs:end -->

### Output

```
1:10565740:2:Bloodbath:5:3:6:503085:8:10:9:50:10:44138442:12:0:13:21:14:2375318:17:1:43:6:25::18:10:19:10330:42:0:45:24746:3:V2hvc2UgYmxvb2Qgd2lsbCBiZSBzcGlsdCBpbiB0aGUgQmxvb2RiYXRoPyBXaG8gd2lsbCB0aGUgdmljdG9ycyBiZT8gSG93IG1hbnkgd2lsbCBzdXJ2aXZlPyBHb29kIGx1Y2suLi4=:15:3:30:7679228:31:0:37:0:38:0:39:0:46:1:47:2:35:467339|1:21761387:2:Bloodbath Z:5:1:6:3277407:8:10:9:20:10:4556435:12:0:13:20:14:200369:17:1:43:4:25::18:10:19:17840:42:0:45:0:3:UmVtYWtlIG9mIEJCLCBidXQgU2hvcnRlciBhbmQgbXVjaCBlYXNpZXIgWEQgTW9yZSBvZiBhIGdhbWVwbGF5IGxldmVsISAgSnVzdCBhIGZ1biBlYXN5IGRlbW9uLiBWZXJpZmllZCBCeSBYaW9kYXplciEgRW5qb3kgOkQ=:15:3:30:0:31:0:37:3:38:1:39:10:46:1:47:2:35:223469|1:64968478:2:Bloodbath but no:5:1:6:19747356:8:10:9:50:10:652130:12:0:13:21:14:51559:17::43:6:25::18:8:19:24992:42:0:45:23233:3:Qmxvb2RiYXRoLCBJdCdzIG5vdCBldmVuIHRoaXM=:15:3:30:0:31:0:37:0:38:1:39:8:46:1:47:2:35:706340|1:75795864:2:Bloodbath:5:2:6:12348083:8:10:9:40:10:88763:12:0:13:21:14:4326:17::43:5:25::18:7:19:25025:42:0:45:55947:3:VGhhbmtzIHRvIGV2ZXJ5b25lIGluIG15IGRpc2NvcmQgc2VydmVyIHRoYXQgY29udHJpYnV0ZWQ=:15:3:30:0:31:0:37:0:38:1:39:6:46:1:47:2:35:513064#503085:Riot:37415|3277407:Zyzyx:88354|12348083:KNOEPPEL:3009121|19747356:Texic:6152129#1~|~223469~|~2~|~ParagonX9 - HyperioxX~|~3~|~31~|~4~|~ParagonX9~|~5~|~3.77~|~6~|~~|~10~|~http%3A%2F%2Faudio.ngfiles.com%2F223000%2F223469_ParagonX9___HyperioxX.mp3~|~7~|~~|~8~|~1~:~1~|~467339~|~2~|~At the Speed of Light~|~3~|~52~|~4~|~Dimrain47~|~5~|~9.56~|~6~|~~|~10~|~http%3A%2F%2Fgeometrydashcontent.com%2Fsongs%2F467339.mp3~|~7~|~~|~8~|~1~:~1~|~513064~|~2~|~EnV - Uprise~|~3~|~149~|~4~|~Envy~|~5~|~8.71~|~6~|~~|~10~|~http%3A%2F%2Faudio.ngfiles.com%2F513000%2F513064_EnV---Uprise.mp3~|~7~|~UCaRqE7rKwJl1BvMRU4FFVJQ~|~8~|~1~:~1~|~706340~|~2~|~-At the Speed of Light- (8 bit Remix)~|~3~|~46724~|~4~|~ThaPredator~|~5~|~4.78~|~6~|~~|~10~|~http%3A%2F%2Faudio.ngfiles.com%2F706000%2F706340_-At-the-Speed-of-Light--8-.mp3~|~7~|~~|~8~|~1#4:0:10#1664b8bb919b0822a4408752c37a9fb5f651f813
```
