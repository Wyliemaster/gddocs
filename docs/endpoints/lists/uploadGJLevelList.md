# uploadGJLevel21.php

Uploads a created level to the servers.

## Parameters

### Required Parameters

**accountID** - The uploader's account ID

**gjp2** - The uploader's [GJP2](./topics/encryption/gjp.md)

**listName** - The name of the list, in plain text

**listLevels** - All level IDs included in the list. Each ID is separated by `,`

**seed** - A mandatory [chk value](./topics/encryption/chk.md) generated from the first 50 characters of the listLevels parameter, followed by the accountID.

**seed2** - 5 randomly generated characters from \[A-Za-z0-9]

**secret** - Wmfd2893gb7

### Optional Parameters

**gameVersion** - The game version. Currently 22

**binaryVersion** - Currently 42 as of 2.206

**listDesc** - The description of the list, in [URL-safe base64](./topics/encryption/base64.md)

**difficulty** - The list's difficulty face. -1 is N/A, and then it's 0-10 where 0 is Auto and 10 is Extreme Demon. If unspecified, defaults to Auto.

**listID** - The ID of the list if updating to a newer version, otherwise 0

**unlisted** - Set to 2 if the list should be unlisted, and to 1 if the list should be unlisted and only viewable by friends

**listVersion** - The version number of the list. Seems to be always 0

**original** - Unsure why this is a thing. Seems to be always 0

## Response

Returns the ID of the uploaded list, or one of a few error codes if the request was rejected:

`-4` - invalid list name

`-5` - missing list name

`-6` - invalid/missing level list

`-9` - missing/invalid account ID

`-10` - incorrect/missing seed value

`-11` - incorrect/missing password

`-12` - ratelimit

`-100` - incorrect/missing secret

## Example

<!-- tabs:start -->

### **Python**

```py
import requests
import random
from string import ascii_letters, digits  # so we don't have to type [A-Za-z0-9] by hand

possible_letters = ascii_letters + digits
seed = ("").join(random.choices(possible_letters, k=5))

data = {
    "gameVersion": 22,
    "accountID": 173831, # This is DevExit's account ID
    "gjp": "*******", # This would be DevExit's password encoded with GJP encryption
    "listLevels": "128,132,133,134,136", # These are the IDs of the levels in the list
    "listID": 0,
    "listName": "First Levels", # This is the list name
    "listDesc": "QSB0ZXN0IGxpc3QgZm9yIHRoZSBHRCBEb2NzIQ==", # "A test list for the GD Docs!"
    "listVersion": 0,
    "original": 0,
    "difficulty": 3, # This indicates a Hard difficulty face
    "unlisted": 2, # This list is unlisted, but does exist!
    "levelString": levelString, # The level string for the level described above
    "seed": seed,
    "seed2": '', # TODO,
    "secret": "Wmfd2893gb7"
}

headers = {
	"User-Agent": ""
}

url = "https://www.boomlings.com/database/uploadGJLevelList.php"

req = requests.post(url=url, data=data, headers=headers)
print(req.text)
```

<!-- tabs:end -->

**Response**

```plain
297650
```

