# getTop1000.php

[getTop1000.php](http://www.boomlings.com/database/accounts/getTop1000.php) is one of the very few endpoints found on the servers that can be accessed via a [GET request](https://www.w3schools.com/tags/ref_httpmethods.asp). The purpose of this endpoint is to gather the top 1000 star grinders to be used on the star leaderboards.

## Parameters

This endpoint does not require any parameters

## Example

```py
import requests

req = requests.get("http://www.boomlings.com/database/accounts/getTop1000.php")
print(req.text)

```

## Response Structure

This endpoint returns an HTML response with a table in the following format:

`{Rank},{AccountID},{Username},{Stars},{Diamonds},{Demons},{UserCoins},{Coins}`
