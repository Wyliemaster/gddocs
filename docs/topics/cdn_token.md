# CDN Tokens

For both musiclibrary and sfxlibrary, there are 2 optional parameters that are sent by the GD client but are currently **not** required to receive the data. One still may want to implement these into their code for future-proofing.

#### `expires`

This is the UNIX timestamp (seconds) that is an hour later than the current timestamp.
It can be generated like this:

```py
import time

def generateCdnExpireTimestamp():
    '''
    Will generate a unix timestamp offseted by 1H (3600 seconds)
    '''
    unix_timestamp = int(time.time()) # removing the decimals
    return unix_timestamp + 3600 # offseting the timestamp by 1H

```

#### `token`

Tokens are generated this way:

```py
import base64

def generateCdnToken(endpoint:str, expires:int):
    '''
    Will generate a CDN token for the geometry dash sfx/music library endpoint
    
    The endpoint is what's after `https://geometrydashfiles.b-cdn.net`
    
    For example `https://geometrydashfiles.b-cdn.net/sfx/sfxlibrary_version.txt`'s endpoint is `/sfx/sfxlibrary_version.txt`
    
    ---
    
    The expires argument is generated via the `generateCdnExpireTimestamp()` function
    '''
    return base64.urlsafe_b64encode(hashlib.md5(f"8501f9c2-75ba-4230-8188-51037c4da102{endpoint}{expires}".encode()).digest()).decode()
```

Here's it's pseudocode:

```
# The endpoint is the part of the URL after https://geometrydashfiles.b-cdn.net. So, for example, the endpoint for https://geometrydashfiles.b-cdn.net/sfx/sfxlibrary_version.txt would be /sfx/sfxlibrary_version.txt
hash = md5("8501f9c2-75ba-4230-8188-51037c4da102{endpoint}{expires}")
base64EncodeUrlSafe(hash.digest(ASCII))
# Please note that the hash must be digested as ASCII, not hexadecimal!
```


