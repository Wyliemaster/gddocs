# Server Map Pack Resource

#### Map Pack

A map pack is a series of 3 levels, although it can go higher, handpicked by Robtop. They preceded Gauntlets and can be seen as the predecessor to them. They reward star coins and stars as opposed to user coins or any other form of currency.

#### Map Pack Structure

| Key | Name/Value | Type | Description |
| --- | ---------- | ---- | ----------- |
| 1   | packID	   | **number** | the ID for the specified Map Pack
| 2   | packName       | **string** | Name of the map pack
| 3   | levels	   | **string** | List of level IDs separated by a `,`
| 4   | stars	   | **number** | How many stars the map pack should give
| 5   | coins	   | **number** | How many coins the map pack should give
| 6   | difficulty | **number** | Difficulty ranging from `0->10`
| 7   | textColor | **string** | RGB color for the title text separated by `,`
| 8   | barColor  | **string** | RGB color for the completion bar separated by `,`


### Difficulty structure

| Value | Difficulty |
|:------|:-----------|
| 0 |  auto | 
| 1 |  easy | 
| 2 |  normal | 
| 3 |  hard | 
| 4 |  harder | 
| 5 |  insane | 
| 6 |  hard Demon | 
| 7 |  easy Demon | 
| 8 |  medium Demon | 
| 9 |  insane Demon | 
| 10 |  extreme Demon | 

