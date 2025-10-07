# exitMPLobby.php

> Note: everything here is based on leaks, unused code and educated guesses. As such, everything you see here is subject to change, and most likely **will** be changed!

Exits from a multiplayer lobby. This endpoint is hosted on `geometrydash.com`, not `boomlings.com`.

## Parameters

### Required Parameters

**accountID** - The player's account ID

**gjp2** - The player's [GJP2](/topics/encryption/gjp.md)

**secret** - Wmfv3899gc9

**gameID** - The ID of the multiplayer lobby

### Optional Parameters

**gameVersion** - 22

**binaryVersion** - 44

**gdw** - 0

## Response

Currently unknown, but most likely 1 if successful and -1 if the request was rejected.
