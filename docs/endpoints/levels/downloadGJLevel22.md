# downloadGJLevel22.php

Downloads a user level and info so it can be played.

## Parameters

### Required Parameters

**levelID** - The ID of the level to download. Use -1 for the daily level and -2 for the weekly.

**secret** - Wmfd2893gb7

### Optional Parameters

**gameVersion** - 21

**binaryVersion** - 35

**gdw** - 0

**accountID** - The account ID of the user who is downloading the level

**gjp** - The [GJP](/topics/encryption/gjp.md) of the user who is downloading the level

**udid** - The [udid](/topics/encryption/id?id=udid) of the user who is downloading the level

**uuid** - The [uuid](/topics/encryption/id?id=uuid) of the user who is downloading the level

**inc** - Unknown function. Set to 1

**extras** - Unknown function. Set to 0

**rs** - [See here](topics/encryption/id?id=rs)

**chk** - [See here](/topics/encryption/chk?id=download-level)

## Response

Returns a [level object](/resources/server/level.md).

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

headers = {
    "User-Agent": ""
}

data = {
    "levelID": 128,
    "secret": "Wmfd2893gb7"
}

url = "http://www.boomlings.com/database/downloadGJLevel22.php"

req = requests.post(url=url, data=data, headers=headers)
print(req.text)
```

### **curl**

```plain
curl http://www.boomlings.com/database/downloadGJLevel22.php -A "" -d "levelID=128&secret=Wmfd2893gb7"
```

<!-- tabs:end -->

**Response**
```plain
1:128:2:1st level:3::4:H4sIAAAAAAAAC6WXUZLkIAiGL5StEgWV2qc5wxzAA8wV9vDbielEvumprtp9if3_AiIi0l-fpW8yNI08JNsoI5sNkTnkOUyyDkkpjTZkiO2fPtLoQ_7IOLRTfqst_6qt45dME_7SxC4zFd65kMeu-n829KX-Hr6nfnq3DfvRjfTeidtM_cHM9vUhZUv7YHOoc9Dt8Z2_22TOoe_DZ_ED5eM7DRwTH3p856ykOciWfssmW95yt61sYicsEqEGqCXCGqEHaPmCfYcWZ3uYrRJhXLe2AFuKMHrVbq8eE3nrhx_5CV0C3A804Iz5gnm9zdUdW4yYtBhQ6ZjvcWvZDRgHknAiSYEbDjABF-AaIl3EI84ZOPpXmDDMmCVlDn3FestJHwEt8_jyU79jvY71HOs51vMWsKYEjBxOS7r4QRwBqReWDGxPfOhL9E8L7BdckhJviWqMt6oBx4uiJsC4ohbzQWsChn8d8XLEywswLz1ufcrAuPcpxstEgBU4-mfFgGN8zCrw4l_ZiXYs-FhlL7NXNTq0NFkkSiOhJATE436AMBL5JhC8iRX4cqLi8td5-RX4drLOanAbOKtBuokZrnITTiLFfZ7Evc_T6HfCsMpKOIiz7BQQq4S9JJa9nKWJxOLYWawSiGVzs3ytRHspsdpoIOYzuagoQ6j1pcQ3GytRSTg2pzw5YwiNIZyv8ErwGM5nu0BlIWZBX2ycFX6RUEooJRolGiTmm79INOZYY46dbUKBykow-RvTsjGmnTHtjGlnCPsawryI-N3QxKLaUqwLTTKwAcei2rIAKzAaqsKOKhb9VipwbBqawj-Ffwr_0DQ1PGLNYtFvNQGz5UP8KuLX4J9jvw57jv163G_HI9fxyPXlkTt70NhF9hKb0q4a8XzFblx7xB32HE1uuuzt_jiaOEcT52jiHH2_l5gvrgk45ouj6XON8XOL8XP8OXCDfxX-4f-B15gv3hIw_GsxX7zFfPEO_66m9C_bF5V-dQ8AAA==:5:1:6:30144023:8:10:9:30:10:2147720:12:4:13:21:14:206221:17::43:0:25::18:0:19:0:42:0:45:208:15:2:30:128:31:0:28:10 years:29:6 years:35:0:36:0_46_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0:37:0:38:0:39:2:46::47::40::27:Aw==#30c4a15cfeb12f97de69d6bd0cc9478794e6c6c4#48e36e24b267df00a9c87aed127b4a9f020ac9c1
```

<!-- tabs:end -->
