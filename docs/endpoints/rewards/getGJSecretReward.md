# getGJSecretReward.php

Tries a Wraith code.

## Parameters

### Required Parameters

**rewardKey** - The code to try

**secret** - Wmfd2893gb7

**chk** - 5 random chars appended to the beginning of a random number [XOR](/topics/encryption/xor.md)'d and [URL-Safe Base64](/topics/encryption/base64.md) encoded. Currently the server accepts any string 6 characters or longer

### Optional Parameters

**gameVersion** - 22

**binaryVersion** - 43

**accountID** - Account ID of the user

**gjp2** - The user's [GJP2](/topics/encryption/gjp.md)

**uuid** - Seemingly a random number also used for identifying someone

## Response

A list of attributes of the Rewards, separated by colons `:` as follows:
- A random string of 5 characters
- The number used for the `chk`
- The reward ID
- Unknown (always 1)
- Item (1 is Fire, 2 is Ice, 3 is Poison, 4 is Shadow, 5 is Lava, 6 is Demon Key, 7 is Orbs, 8 is Diamonds, 10 is Earth, 11 is Blood, 12 is Metal, 13 is Light and 14 is Soul, 15 is Golden Key), followed by a comma and the amount of said item

This list is then [XOR](/topics/encryption/xor.md)'d and [URL-Safe Base64](/topics/encryption/base64.md) encoded. Then it is separated with its [hash](/resources/server/hashes.md?id=getgjrewards) by a pipe `|`. It also has a random string of 5 characters appended to the front.

`-1` if the code is invalid

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "rewardKey": "wellmet",
    "secret": "Wmfd2893gb7",
    "chk": f"{''.join(random.choice('1234567890qwertyuiopaqsdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM') for i in range(5))}{base64.b64encode(xor_cipher(str(random.randint(10000, 1000000)), '59182').encode()).decode()}"
}

req = requests.post("http://boomlings.com/database/getGJSecretReward.php", data=data)
print(req.text)

decoded_text = xor_cipher(base64.urlsafe_b64decode(response_text.split("|")[0][5:].encode()).decode(), '59182')
print(decoded_text)
```

**Response**
```py
QZGsPX1pTS0QPCAYKCwUJCwkHDwgLAB4A|36881f02620d399cc6f3e702964dc28e513ab122
jcbsv:172900:15:1:8,5
```

<!-- tabs:end -->
