# deleteGJLevelList.php

Deletes a list from the server.

## Parameters

### Required Parameters

**accountID** - The list author's account ID
  
**udid** - The list author's UDID
  
**uuid** - The list author's UUID

**gjp2** - The level author's [GJP2](/topics/gjp.md)

**listID** - The ID of the level being deleted

**secret** - Wmfv2898gc9

### Optional Parameters

**gameVersion** - 22

**binaryVersion** - 42

## Response

Returns 1 if deleted, -1 if it failed or the list does not exist.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code, DevExit is deleting the list with ID 414808

data = {
        "accountID": 173831, # DevExit's account ID
        "gjp2": "********", # This would be DevExit's password encoded with GJP2 encryption
        "listID": 414808,
        "secret": "Wmfv2898gc9"
}

req = requests.post("http://boomlings.com/database/deleteGJLevelList.php", data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->
