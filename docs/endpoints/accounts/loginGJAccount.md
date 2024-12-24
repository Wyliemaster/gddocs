# LoginGJAccount

> This endpoint is used to log into a players Geometry Dash account.

## Parameters

| Parameter  | Explanation                                                                                           | Optional |
| :--------- | :---------------------------------------------------------------------------------------------------- | :------- |
| `udid`     | [The user's Universal Unique Identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier) | `False`  |
| `userName` | The username for the account the player is trying to log into                                         | `False`  |
| `password` | The plaintext password for the account the player is trying to log into                               | `False`  |
| `sID`      | The player's steam ID                                                                                 | `True`   |
| `secret`   | Account Secret: `Wmfv3899gc9`                                                                         | `False`  |

**Note** 
the `sID` parameter is only sent to the servers if the player is logging into their account from the steam release of Geometry Dash. From what has been observed, it has not been utilised.

## Responses

A successful login attempt will return the players accountID and player ID seperated by a `,`

```py
# response = 71,16
accountID, playerID = response.split(",")
```

If the request was not successful, there are 7 different error codes that can be returned

| Error Code | Meaning                                                                                                   |
| :--------- | :-------------------------------------------------------------------------------------------------------- |
| `-1`       | Generic Error                                                                                             |
| `-8`       | If the user's password is less than 6 characters long                                                     |
| `-9`       | If the user's Username is less than 3 characters long                                                     |
| `-11`      | If the user's login credentials are incorrect                                                             |
| `-12`      | If the user's account is disabled                                                                         |
| `-13`      | If the account the user is trying to log into has a different steam ID to to that account **(Unused)** |
