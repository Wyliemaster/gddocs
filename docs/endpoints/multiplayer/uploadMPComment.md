# uploadMPComment.php

> Note: everything here is based on leaks, unused code and educated guesses. As such, everything you see here is subject to change, and most likely **will** be changed!

Uploads a comment (chat message?) to a multiplayer lobby. This endpoint is hosted on `geometrydash.com`, not `boomlings.com`.

## Parameters

### Required Parameters

**accountID** - The commenter's account ID

**gjp2** - The commenter's [GJP2](/topics/encryption/gjp.md)

**extra** - 10 random characters from `[A-Za-z0-9]`

**comment** - The comment, with some delimiter characters stripped out

**secret** - Wmfv3899gc9

**gameID** - The ID of the multiplayer lobby

[**chk**](/topics/encryption/chk) - `accountID` + `comment` + `gameID` + `extra`

### Optional Parameters

**gameVersion** - 22

**binaryVersion** - 44

**gdw** - 0

## Response

Currently unknown, but most likely the comment ID if it was posted and -1 if the request was rejected.
