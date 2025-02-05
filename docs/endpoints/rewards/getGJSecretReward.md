# getGJRewards.php

Gets the rewards from the wraith vault depending on the entered code, which can be found in the tower select level screen at the bottom right.

## Parameters

### Required Parameters

**udid** - A unique identifier for the user's device. You can put anything here

**secret** - Wmfd2893gb7

**chk** - 5 random chars appended to the beginning of a random number [XOR](/topics/encryption/xor.md)'d and [URL-Safe Base64](/topics/encryption/base64.md) encoded

### Optional Parameters

**gameVersion** - 22

**binaryVersion** - 42

**gdw** - 0

**accountID** - Account ID of the user

**gjp2** - The user's [GJP2](/topics/encryption/gjp.md)

**uuid** - Seemingly a random number also used for identifying someone

## Response

A list of attributes of the Rewards, separated by colons `:` as follows:
- A random string of 5 characters
- The number used to verify the `chk`
- The rewardID
- The chest type (1 small, 2 large)
- comma separated chest reward in the format `{itemid},{total1}{itemid2}{total2}...`


Where each itemID is as follows:

| itemID | Type        |
|--------|-------------|
| 1      | Fire Shard        |
| 2      | Ice Shard         |
| 3      | Poison Shard      |
| 4      | Shadow Shard      |
| 5      | Lava Shard        |
| 6      | Demon Key         |
| 7 | Orbs |
| 8 | Diamonds |
| 10     | Earth Shard       |
| 11     | Blood Shard       |
| 12     | Metal Shard       |
| 13     | Light Shard       |
| 14     | Soul Shard        |
| 15     | Gold Key          |

If the itemID is greater than 1000, it seems to be treated as a special reward (unlock type), where

| itemID - 1000 | Unlock Type |
|---------------|-------------|
| 1             | Cube        |
| 2             | Col1        |
| 3             | Col2        |
| 4             | Ship        |
| 5             | Ball        |
| 6             | Bird        |
| 7             | Dart        |
| 8             | Robot       |
| 9             | Spider      |
| 10            | Streak      |
| 11            | Death       |
| 12            | GJItem      |
| 13            | Swing       |
| 14            | Jetpack     |
| 15            | ShipFire    |



This list is then [XOR](/topics/encryption/xor.md)'d and [URL-Safe Base64](/topics/encryption/base64.md) encoded. Then it is separated with its [hash](/resources/server/hashes.md?id=getgjrewards) by a pipe `|`. It also has a random string of 5 characters appended to the front.

## Example

<!-- tabs:start -->

### **Python**

```py
import random
import requests
import base64


def xor_cipher(text: str, key: str) -> str:
    """
    XOR cipher function: Encrypts or decrypts a text using a key.
    """
    return ''.join(
        chr(ord(char) ^ ord(key[i % len(key)])) for i, char in enumerate(text)
    )


def generate_chk() -> str:
    """
    Generates the 'chk' parameter by combining a random string and 
    an XOR-ciphered, base64-encoded random integer.
    """
    random_string = ''.join(random.choice("1234567890qwertyuiopaqsdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM") for _ in range(5))
    random_number = str(random.randint(10000, 1000000))
    xor_ciphered = xor_cipher(random_number, "59182")
    encoded = base64.b64encode(xor_ciphered.encode()).decode()
    return random_string + encoded


def decode_response(response_text: str) -> str:
    """
    Decodes the response text from the server.
    """
    try:
        encoded_part = response_text.split("|")[0][5:]
        decoded_part = base64.urlsafe_b64decode(encoded_part.encode()).decode()
        return xor_cipher(decoded_part, "59182")
    except Exception:
        return response_text


url = "https://www.boomlings.com/database/getGJSecretReward.php"
headers = {"User-Agent": ""}
data = {
    "accountID": "1688850", #iAndyHD accountID
    "binaryVersion": "42", 
    "gameVersion": "22",
    "gjp2": "***", #iAndyHD gjp2
    "secret": "Wmfd2893gb7",
    "udid": "ffffffff-88c5-aa6d-ffff-ffffcd72151b",
    "uuid": "4460760",
    "rewardKey": "backstreetboy",
    "chk": generate_chk(),
}
# Send POST request
response = requests.post(url, headers=headers, data=data).text
# Decode and print response
print(f"Response: {response}")
decoded_text = decode_response(response)
print(f"Decoded: {decoded_text}")
```

**Response**


```plain
Response: bHR3IU2oCVGoPDQgAAgEKCwsDDwsLCQIFAR0LBQ==|4adffcb7db1fdad7a665a96fa68da46157cbed78
Decoded: fS3lX:498043:31:2:1008,37
```

<!-- tabs:end -->
