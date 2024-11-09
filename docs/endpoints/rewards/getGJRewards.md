# getGJRewards.php

Gets the rewards from the chests.

## Parameters

### Required Parameters

**udid** - A unique identifier for the user's device. You can put anything here

**secret** - Wmfd2893gb7

**chk** - 5 random chars appended to the beginning of a random number [XOR](/topics/encryption/xor.md)'d and [URL-Safe Base64](/topics/encryption/base64.md) encoded

### Optional Parameters

**gameVersion** - 22

**binaryVersion** - 44

**gdw** - 0

**accountID** - Account ID of the user

**gjp2** - The user's [GJP2](/topics/encryption/gjp.md)

**uuid** - Seemingly a random number also used for identifying someone

**rewardType** - 0 for getting info about the chests, 1 for small chest, 2 for large chest. Defaults to 0 if left out

**r1** - A random 3-5 digit number

**r2** - A random 3-5 digit number

## Response

A list of attributes of the Rewards, separated by colons `:` as follows:
- A random string of 5 characters
- User's player ID
- The number used for the `chk`
- `udid`
- User's account ID
- Small chest time remaining
- Small chest's rewards in a comma separated list
	- Orbs
	- Diamonds
	- Item 1 (1 is Fire, 2 is Ice, 3 is Poison, 4 is Shadow, 5 is Lava, 6 is Demon Key, 10 is Earth, 11 is Blood, 12 is Metal, 13 is Light and 14 is Soul)
	- Item 2
- Amount of small chests claimed
- Large chest time remaining
- Large chest's rewards in a comma separated list
- Amount of large chests claimed
- `rewardType`

This list is then [XOR](/topics/encryption/xor.md)'d and [URL-Safe Base64](/topics/encryption/base64.md) encoded. Then it is separated with its [hash](/resources/server/hashes.md?id=getgjrewards) by a pipe `|`. It also has a random string of 5 characters appended to the front.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
	"accountID": 173831, # DevExit's account ID
    "gjp": "********", # This would be DevExit's password encoded with GJP encryption
    "udid": "605BE9FD-300E-49EA-A45C-B272EE64D3E0",
    "secret": "Wmfd2893gb7",
    "chk": f"{''.join(random.choice('1234567890qwertyuiopaqsdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM') for i in range(5))}{base64.b64encode(xor_cipher(str(random.randint(10000, 1000000)), '59182').encode()).decode()}",
    "rewardType": 1
}

req = requests.post("http://boomlings.com/database/getGJRewards.php", data=data)
print(req.text)

decoded_text = xor_cipher(base64.urlsafe_b64decode(response_text.split("|")[0][5:].encode()).decode(), '59182')
print(decoded_text)
```

**Response**
```py
DA96FcVVmQnEPCggLBwMOAwIGDAAGDgsPcBFbU1sZQU1GFXtiGFpQS1QCAwIKCQsDDwsHDAQPDQEUAxkJHQgIBA4DDAgCDQcMAg8LAQgeAxUFFAIPDAILCAQ=|3f5f0ad92a601380e7eea113c223be94ff75304d
DlWzC:3935672:499769:I can put BS here:173831:2646:40,1,0,0:1724:74640:200,6,4,0:533:1
```

<!-- tabs:end -->
