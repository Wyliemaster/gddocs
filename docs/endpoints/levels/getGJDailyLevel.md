# getGJDailyLevel.php

Gets which daily level we're on and gets how much time is left.

## Parameters

### Required Parameters

**secret** - Wmfd2893gb7

### Optional Parameters

**gameVersion** - 22

**binaryVersion** - 44

**gdw** - 0

**accountID** - The user's account ID

**gjp** - The user's [GJP](/topics/encryption/gjp.md)

**weekly** - 0 for daily, 1 for weekly. Defaults to 0 if not sent

## Response

Returns the index of the current daily level and the time left in seconds, separated by a pipe `|`.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests
url = "http://www.boomlings.com/database/getGJDailyLevel.php"
data = {
    "secret": "Wmfd2893gb7",
    "weekly": "1"
}
headers = {
    "User-Agent": ""  # Empty User-Agent
}

response = requests.post(url, data=data, headers=headers)
print(response.text)
```

### **curl**

```plain
curl -X POST http://www.boomlings.com/database/getGJDailyLevel.php -d "secret=Wmfd2893gb7&weekly=1" -A ""
```

<!-- tabs:end -->

**Response**
```py
2959|19186
```

<!-- tabs:end -->
