# rateGJStars211.php

Sends a star suggestion for a level

## Parameters

### Required Parameters

**secret** - Wmfd2893gb7

**levelID** - The ID of the level receiving the star suggestion.

**stars** - The amount of stars being suggested.

**rs** - [Random seed](/topics/encryption/id.md) generated.

**accountID** - Your account ID

**gjp2** - Your password, encrypted with [GJP2](/topics/gjp.md)

**udid** - Your [UDID](/topics/encryption/id.md).

**uuid** - Your player ID (different from account ID)

**chk** - [See here](/topics/encryption/chk.md?id=rate)

### Optional Parameters

**gameVersion** - 22

**binaryVersion** - 42

**gdw** - 0

## Response

Always `1` if the parameters `secret`, `levelID` and `stars` are specified. `chk`, `udid`, `uuid`, `rs`, `accountID` and `gjp2` are technically not required but the star rating will not go through if these parameters aren't specified.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "secret": "Wmfd2893gb7",
    "levelID": 15254724,
    "stars": 3
}

req = requests.post('http://boomlings.com/database/rateGJStars211.php', data=data)
print(req.text)
```

**Response**
```plain
1
```

<!-- tabs:end -->
