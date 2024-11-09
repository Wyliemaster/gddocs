# updateGJUserScore22.php

Updates a user's data

## Parameters

### Required Parameters

**accountID** - Account ID of the user updating their profile

**gjp2** - The [GJP2](/topics/encryption/gjp.md) of the user updating their profile

**stars** - The amount of stars the user has

**moons** - The amount of moons the user has

**demons** - The amount of demons the user has

**diamonds** - The amount of diamonds the user has

**icon** - Which icon the iconType has selected, for example if iconType is 0 (cube), then it's the selected cube

**iconType** - Which gamemode the player has last selected when changing their icons, 0 for cube, 1 for ship, 2 for ball, 3 for ufo, 4 for wave, 5 for robot, 6 for spider

**coins** - The amount of secret coins the user has

**userCoins** - The amount of user coins the user has

**accIcon** - The ID of the user's selected icon.

**accShip** - The ID of the user's selected ship.

**accBall** - The ID of the user's selected ball.

**accBird** - The ID of the user's selected UFO.

**accDart** - The ID of the user's selected wave.

**accRobot** - The ID of the user's selected robot.

**accGlow** - Whether the user has glow enabled.

**accSpider** - The ID of the user's selected spider.

**accExplosion** - The ID of the user's selected death effect.

**accSwing** - The ID of the user's selected swing.

**accJetpack** - The ID of the user's selected jetpack.

**seed2** - [See here](/topics/encryption/chk?id=user-profile)

**dinfo** - List of all completed demons (level IDs separated by `,`)

**dinfow** - Amount of completed weeklies

**dinfog** - Amount of completed gauntlet demons

**sinfo** - `{autoClassic},{easyClassic},{normalClassic},{hardClassic},{harderClassic},{insaneClassic},{autoPlatformer},{easyPlatformer},{normalPlatformer},{hardPlatformer},{harderPlatformer},{insanePlatformer}`

**sinfod** - Amount of completed dailies

**sinfog** - Amount of completed gauntlet non-demon levels

**secret** - Wmfd2893gb7

### Optional Parameters

**gameVersion** - 22

**binaryVersion** - 44

**gdw** - 0

**userName** - The username of the player

**color1** - Color 1 of the player. Defaults to the default primary color when left out

**color2** - Color 2 of the player. Defaults to the default secondary color when left out

**color3** - Glow color of the player. Defaults to secondary color when left out

**special** - Glow (2 if enabled)

**seed** - A random set of 10 numbers and letters in A-Za-z0-9

## Response

The player ID of the user

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "accountID": 5317656, # PasswordFinders' Account ID
    "gjp": "********", # This would be PasswordFinders' password encoded with GJP encryption
    "userName": "PasswordFinders",
    "stars": 6969,
    "moons": 696,
    "demons": 69,
    "diamonds": 5000,
    "icon": 0,
    "color1": 21,
    "color2": 42,
    "color3": -1,
    "iconType": 0,
    "coins": 150,
    "userCoins": 400,
    "special": 2,
    "accIcon": 0,
    "accShip": 0,
    "accBall": 0,
    "accBird": 0,
    "accDart": 0,
    "accRobot": 0,
    "accGlow": 0,
    "accSpider": 0,
    "accExplosion": 1,
    "accSwing": 0,
    "accJetpack": 0,
    "dinfo": "13519,10109",
    "dinfow": 0,
    "dinfog": 0,
    "sinfo": "6,9,6,9,6,9,6,9,6,9,6,9",
    "sinfod": 0,
    "sinfog": 0,
    "secret": "Wmfd2893gb7",
    "seed": ''.join(random.sample("1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM", 10))
}
data['seed2'] = generate_chk([data['accountID'], data['userCoins'], data['demons'], data['stars'], data['coins'], data['iconType'], data['icon'], data['diamonds'], data['accIcon'], data['accShip'], data['accBall'], data['accBird'], data['accDart'], data['accRobot'], data['accGlow'], data['accSpider'], data['accExplosion'], len(data['dinfo']), data['dinfow'], data['dinfog'], data['sinfo'], data['sinfod'], data['sinfog']], "85271", "xI35fsAapCRg")

r = requests.post('http://boomlings.com/database/updateGJUserScore22.php', data=data)
print(req.text)
```

**Response**
```py
17787971
```

<!-- tabs:end -->
