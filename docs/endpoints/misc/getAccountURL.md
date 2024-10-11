# getAccountURL.php

Gets the URL for the data server.

## Parameters

### Required Parameters

**accountID** - Any valid account ID

**type** - used to decide which endpoint is used after the data server is found - 1 = backup data/ 2 = sync data

**secret** - Wmfv3899gc9

## Response

Usually [https://www.robtopgames.org](https://www.robtopgames.org). However, if type 2 is specified and either the secret or account ID is invalid, [https://www.robtopgames.net](https://www.robtopgames.net) is returned instead

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
        "accountID": 71,
        "type": 2,
        "secret": "Wmfd2893gb7"
}

req = requests.post("http://boomlings.com/database/getAccountURL.php", data=data)
print(req.text)
```

**Response**
```py
https://www.robtopgames.net
```

<!-- tabs:end -->
