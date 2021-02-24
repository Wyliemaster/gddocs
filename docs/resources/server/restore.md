# Server Restore Resource

## RestoreGJItems

`Restore` was a feature used in Geometry dash from Versions `1.7 - 2.0` and it was used as an alternative to the [Account System](/topics/accounts.md) that is currently used as of 2.11


### Restore Items Structure

| Key | Name/Value     | Type       |Description                           |
| --- | -------------- | ---------- | -------------------------------------|
| 1   | Offical Levels | **String** | Please refer to [Official Level Structure](/resources/server/restore?id=official-level-structure) |
| 2   | Stars          | **Integer** | This is how many stars that should be given to your account  |
| 3   | Demons         | **Integer** | This is how many demons that should be added to your account |
| 4   | Jumps          | **Integer** | This is how many jumps you have made on your account of its lifetime|
| 5   | attempts       | **Integer** | This is how many attempts you have spent on levels on your accounts lifetime |
| 6   | Online levels  | **String** | These are the ID's of online levels you have beaten. seperated by `,` |

#### Official Level Structure

There are three sections in regards to the `Official Level State` from the restore endpoint. The data is sent as `{NormalCompleted},{PracticeComepleted},{SecretCoins}`

> - `{NormalCompleted}` is a `Bool` which denotes if you have completed the level in Normal Mode<br/><br/>
> - `{PracticeComepleted}` is a `Bool` which denotes if you have completed the level in Practice Mode<br/><br/>
> - `{SecretCoins}` is an `Integer` which includes the ammount of Secret Coins you collected during the completion of the Official level

**<h4/>This structure is then iterated for each official level in the update and is split with a `;`**

