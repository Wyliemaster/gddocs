# getCustomContentURL.php

Gets the URL for the music & SFX library server.

## Parameters

### Required Parameters

None

## Response

https://geometrydashfiles.b-cdn.net

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {}

req = requests.post("http://boomlings.com/database/getCustomContentURL.php", data=data)
print(req.text)
```

**Response**
```py
https://geometrydashfiles.b-cdn.net
```

<!-- tabs:end -->
