# Enums

> **There are various enums used by the GD Client. This document will include all of the know Enumerations found within GD as well as a short explanation on its use**

## Account Enums

### AccountError

Used by during account registeration and logins

```cpp
enum AccountError
{
  kAccountErrorUnknown = 0,
  kAccountErrorEmailsDontMatch = -99, // Both the emails you inputed do not match 
  kAccountErrorLinkedToDifferentSteamAccount = -13, // your account is linked to a different steam account
  kAccountErrorAccountDisabled = -12, // account disabled
  kAccountErrorLinkedToDifferentAccount = -10, // you are linked to a different account
  kAccountErrorUsernameTooShort = -9, // username is less than 3 characters
  kAccountErrorPasswordTooShort = -8, // password is less than 6 characters
  kAccountErrorPasswordsDontMatch = -7, // your passwords don't match
  kAccountErrorInvalidEmail = -6, // email is invalid
  kAccountErrorInvalidPassword = -5, // password is invalid
  kAccountErrorInvalidUsername = -4, // username is invalid
  kAccountErrorTakenEmail = -3, // an account with that email already exists
  kAccountErrorTakenUsername = -2, //an account with that name already exists
  kAccountErrorGeneric = -1 // common error
};
```

### BackupAccountError

Used during save data Syncing/backing up

```cpp
enum BackupAccountError
{
  kBackupAccountErrorUnknown = 0,
  kBackupAccountErrorGeneric = -1, // common error
  kBackupAccountErrorLoginFailed = -2 // login details were incorrect
};
```

## Menu Enums

### LeaderboardState

which tab of the leaderboards you are viewing

```cpp
enum LeaderboardState {
    kLeaderboardStateTop = 1,
    kLeaderboardStateGlobal = 2,
    kLeaderboardStateCreator = 3,
    kLeaderboardStateFriends = 4
}
```

### GauntletType

```cpp
enum GauntletType {
    kGauntletTypeUnkown = 0,
    kGauntletTypeFire = 1,
    kGauntletTypeIce = 2,
    kGauntletTypePoison = 3,
    kGauntletTypeShadow = 4,
    kGauntletTypeLava = 5,
    kGauntletTypeBonus = 6,
    kGauntletTypeChaos = 7,
    kGauntletTypeDemon = 8,
    kGauntletTypeTime = 9,
    kGauntletTypeCrystal = 10,
    kGauntletTypeMagic = 11,
    kGauntletTypeSpike = 12,
    kGauntletTypeMonster = 13,
    kGauntletTypeDoom = 14,
    kGauntletTypeDeath = 15
}
```

### CreatorLayer

```cpp
enum CreatorLayerBtn {
    kCreatorLayerBtnCreateLevel = 0,
    kCreatorLayerBtnSavedLevels = 1,
    kCreatorLayerBtnLeaderboards = 2,
    kCreatorLayerBtnChallenges = 3,
    kCreatorLayerBtnDailyLevel = 4,
    kCreatorLayerBtnWeeklyDemon = 5,
    kCreatorLayerBtnFeaturedLevels = 6,
    kCreatorLayerBtnHallOfFame = 7,
    kCreatorLayerBtnMapPacks = 8,
    kCreatorLayerBtnSearch = 9,
    kCreatorLayerBtnGauntlets = 10
}
```

### GJSearchType

The search type used when searching for online levels

```cpp
enum GJSearchType
{
  kGJSearchTypeLiked = 0,
  kGJSearchTypeDownloaded = 1,
  kGJSearchTypeSearch = 2,
  kGJSearchTypeTrending = 3,
  kGJSearchTypeRecent = 4,
  kGJSearchTypeUsersLevels = 5,
  kGJSearchTypeFeatured = 6,
  kGJSearchTypeMagic = 7,
  kGJSearchTypeSends = 8,
  kGJSearchTypeMapPack = 9,
  kGJSearchTypeMapPackLevels = 10,
  kGJSearchTypeAwarded = 11,
  kGJSearchTypeFollowed = 12,
  kGJSearchTypeFriends = 13,
  kGJSearchTypeUsers = 14,
  kGJSearchTypeLikedGDW = 15,
  kGJSearchTypeHallOfFame = 16,
  kGJSearchTypeFeaturedGDW = 17,
  kGJSearchTypeSimilar = 18,
  kGJSearchTypeMyLevels = 98,
  kGJSearchTypeSavedLevels = 99,
  kGJSearchTypeFavouriteLevels = 100,
};
```
