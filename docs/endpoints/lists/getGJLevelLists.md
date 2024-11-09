# getGJLevelLists

> This endpoint is used to search level lists by name and / or filter

## Parameters

| Parameter         | Description                                                                                                   | Required                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| `secret`          | [Common secret](/reference/secrets.md) `Wmfd2893gb7`                                                          | Yes                                   |
| `gameVersion`     | [Game Version](#), 22 on 2.2                                                                                  |                                       |
| `binaryVersion`   | [Binary Version](#), 44 on 2.20                                                                              |                                       |
| `type`            | Search type, [see values](#type). Defaults to most liked                                                      |                                       |
| `str`             | Search query, user ID or level list depending on `type`                                                       | Only on types 5 and 10                |
| `page`            | Which page to request, defaults to 0                                                                          |                                       |
| `gjp2`            | The [GJP2](/topics/encryption/gjp.md) for the `accountID`.                                                    |                                       |
| `accountID`       | The ID for the account which is doing the search. Only sent on types 8, 13 and 5                              |                                       |
| `diff`            | Difficulty filter, [see values](#diff)                                                                        |                                       |
| `demonFilter`     | Selects which demon difficulty to search, [see values](#demonFilter). If not sent will search all demon types |                                       |
| `star`            | Rated filter, either 0 or 1                                                                                   |                                       |
| `followed`        | Comma separated list of the followed user IDs                                                                 | Only on type 12                       |
| `udid`            | Your [UDID](/topics/encryption/id.md)                                                                         |                                       |
| `uuid`            | Your [UUID](/topics/encryption/id.md)                                                                         |                                       |
<details open id="type">
    <summary><code>type</code></summary>

| Type | Description                                                                       |
| :--: | --------------------------------------------------------------------------------- |
|  0   | Search query                                                                      |
|  1   | Most downloaded                                                                   |
|  2   | Most liked                                                                        |
|  3   | Trending                                                                          |
|  4   | Recent                                                                            |
|  5   | User's lists, uses `str` as the **account ID**                                    |
|  6   | Lists button                                                                      |
|  7   | Magic (returns the same levels as most liked)                                     |
|  11  | Awarded                                                                           |
|  12  | Followed (see `followed` parameter)                                               |
|  13  | Friends (login required)                                                          |
|  27  | Sent lists                                                                        |

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

- `levels` is a list of [Level Objects](/resources/client/level-components/level-object.md)  separated by `|`
- `creators` is a list of creators separated by `|`, each in the format `userID:username:accountID`
- `songs` is a list of [Song Objects](/resources/server/song.md) separated by `~:~`
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
    "str": "my mcdonalds order",
    "type": 0,
    "secret": "Wmfd2893gb7",
}

url = "http://www.boomlings.com/database/getGJLevelLists.php"

req = requests.post(url=url, data=data, headers=headers)
print(req.text)
```

### **curl**

```plain
curl http://www.boomlings.com/database/getGJLevelLists.php -A "" -d "str=my mcdonalds order&type=0&secret=Wmfd2893gb7"
```

<!-- tabs:end -->

### Output

```
1:10834:2:my mcdonalds order:3:aSB3YWxrZWQgdG8gbWNkb25hbGRz:5:1:49:6061424:50:tricipital:10:143479:7:10:14:5334:19::51:78111123,80840474,20556675,71480069,51008389,26108947,59604964,190626,53898587,72443435,47499900,89638158,43758774,90640638,96282081,86742812:55:0:56:0:28:1703082168:29:0|1:4406:2:my mcdonalds order:3:aW0gYXQgdGhlIGRyaXZlIHRocnUgLy8gcGFydCAyIG91dCBub3cgYXQgNzIxMTQ=:5:7:49:17062290:50:GD2G:10:90039:7:2:14:4457:19::51:25147297,82785965,11171792,30261946,31496121,71189946,19716898,14456417,4050125,79412478,1442329,67287373,61350256:55:0:56:0:28:1703048969:29:1703631457|1:22325:2:My McDonalds Order:3:YmFuZ2VyIGxpc3QgaWNs:5:1:49:10722530:50:Jexamania:10:8469:7:9:14:222:19::51:25147297,83671207,46104803,72867858,65500565,16683338,32666588,25717922,84904479,92727112,69043485,4846999,58038680,67287373:55:0:56:0:28:1703125026:29:0|1:72114:2:my mcdonalds order 2:3:aSB0aGluayBoZSBsaWVkIGFib3V0IHRoZSBtYWNoaW5lIGJlaW5nIGJyb2tlbiAvLyB0aGUgc2VxdWVsIG5vIG9uZSBhc2tlZCBmb3IgdG8gbXkgbWNkb25hbGRzIG9yZGVy:5:3:49:17062290:50:GD2G:10:4732:7:2:14:156:19::51:25147297,65037091,88758014,59604964,67993675,59966737,56102262,97933043,2056444,85312317,91482208,58038680,46160451,75940156,95959832,81466909,68064189,61350256:55:0:56:0:28:1703631267:29:1703638822|1:16619:2:my mcdonalds order:3:SSBLTk9XIElUJ1MgQkFELCBUSEVSRSBXRVJFTidUIE1BTlkgT1BUSU9OUyE=:5:1:49:14542509:50:ZohMyGoodnessGD:10:2652:7:6:14:44:19::51:47499900,57410100,57474996,84904479,38557238,59157328,87981410,60001202,77367261,41551990,67287373:55:0:56:0:28:1703101621:29:0|1:12460:2:My McDonalds Order:3:bWNkb25hbA==:5:1:49:4236858:50:tim55:10:1198:7:4:14:32:19::51:82931130,69309640,56455492,36619357,55320441:55:0:56:0:28:1703087812:29:0|1:29628:2:My mcdonalds order:3:YmFzZWQgb2ZmIGEgc3BvdGlmeSBwbGF5bGlzdCBvciBzb21ldGhpbmc=:5:3:49:10055542:50:RuSsiaNrobToP:10:1254:7:10:14:17:19::51:78111123,34889235,80840474,11171792,71480069,84904479,97589710,443669,4460853,72443435,97590104,13550658,2056444,86742812:55:0:56:0:28:1703180209:29:1703614964|1:45077:2:My McDonalds Order:3:UmVhbA==:5:1:49:1839061:50:CreatorFreeze:10:503:7:5:14:17:19::51:80840474,30963660,79412478,14456417,61293573,71971062,86929245,86742812,58038680:55:0:56:0:28:1703307069:29:0|1:33953:2:My mcdonalds order:3::5:3:49:14092610:50:RealGDVerse:10:347:7:2:14:16:19::51:82785965,11012303,38557238,18931295,11255719,61408958,26162113,72014001,42633903,13752832,69768064,49186967,77554979,22294605,70549760,66416136,50525701,89933948,37039661,58976282,6988127,86449162,3134009,87727825,82995551,73004601,57585857,82139948,95318968,69925593,1203245,69765381,50647963,67254591,14370474,96968200,93201502,92509265,65430141,56495221,76489404,91963243,41035356,62427241,68752244,69996378,26880009,7360312,79013891,65269818,76963460,88732322,11171792:55:0:56:0:28:1703206770:29:1703428545|1:68104:2:My McDonalds Order:3:TXkgcmVhbCBNY0RvbmFsZHMgb3JkZXIu:5:1:49:25642445:50:Anjixdude25z:10:393:7:9:14:12:19::51:78111123,59413153,12664426,97172976,87995257,85508683,89490621,72811779,10558915,9007089,84904479,27742076,61718673,27090448:55:0:56:0:28:1703571483:29:0#10532982:CreatorFreeze:1839061|14827098:tim55:4236858|15479163:tricipital:6061424|92900676:RuSsiaNrobToP:10055542|98535835:Jexamania:10722530|139957548:RealGDVerse:14092610|147859835:ZohMyGoodnessGD:14542509|25220930:GD2G:17062290|221186876:Anjixdude25z:25642445#9999:0:10#f5da5823d94bbe7208dd83a30ff427c7d88fdb99
```
