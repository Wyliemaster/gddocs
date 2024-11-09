# requestUserAccess.php

Requests moderator access

## Parameters

### Required Parameters

**accountID** - The accountID of the user requesting mod access

**gjp2** - The [GJP2](/topics/encryption/gjp.md) of the user requesting mod access

**secret** - Wmfd2893gb7

### Optional Parameters

**gameVersion** - 22

**binaryVersion** - 44

**gdw** - 0

## Response

1 if granted Moderator, 2 if granted Elder Moderator, -1 if not granted

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
	data = {
    'accountID': 173831, # DevExit's account ID
    'gjp': "********", # This would be DevExit's password encoded with GJP encryption
    "secret": "Wmfd2893gb7"
}

req = requests.post('http://www.boomlings.com/database/requestUserAccess.php', data=data)
print(req.text)
```

**Response**
```py
-1
```

<!-- tabs:end -->
