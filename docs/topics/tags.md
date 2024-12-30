# Tags

Various text interfaces within the Geometry Dash client can be manipulated using special tags similar to markup languages such as `HTML`. Geometry Dash has 4 primary types of tags:

- Colour Tags
- Fade Tags
- Delay Tags
- Shake Tags

## Colour Tags

<img src="https://raw.githubusercontent.com/Wyliemaster/gddocs/master/assets/screenshots/colour_tags.png" class="padded alertlayer">

Colour Tags are used to style areas of text with colour. They contain both a start and an end tag - the start tag defining which colour should be rendered on screen and the end tag denoting when to stop reading. 

**Usage:** `<cl>Coloured Text!</c>`

<link rel="stylesheet" href="stylesheets/colour_tags.css">

| Tag    | Colour code | Example (website only)         |
| :----- | :---------- | :----------------------------- |
| `<cb>` | `0x4A52E1`  | <gdfmt><cb>Sample</cb></gdfmt> |
| `<cg>` | `0x40E348`  | <gdfmt><cg>Sample</cg></gdfmt> |
| `<cl>` | `0x60ABEF`  | <gdfmt><cl>Sample</cl></gdfmt> |
| `<cj>` | `0x32C8FF`  | <gdfmt><cj>Sample</cj></gdfmt> |
| `<cy>` | `0xFFFF00`  | <gdfmt><cy>Sample</cy></gdfmt> |
| `<co>` | `0xFF5A4B`  | <gdfmt><co>Sample</co></gdfmt> |
| `<cr>` | `0xFF5A5A`  | <gdfmt><cr>Sample</cr></gdfmt> |
| `<cp>` | `0xFF00FF`  | <gdfmt><cp>Sample</cp></gdfmt> |
| `<ca>` | `0x9632FF`  | <gdfmt><ca>Sample</ca></gdfmt> |
| `<cd>` | `0xFF96FF`  | <gdfmt><cd>Sample</cd></gdfmt> |
| `<cc>` | `0xFFFF96`  | <gdfmt><cc>Sample</cc></gdfmt> |
| `<cf>` | `0x96FFFF`  | <gdfmt><cf>Sample</cf></gdfmt> |
| `<cs>` | `0xFFDC41`  | <gdfmt><cs>Sample</cs></gdfmt> |
| `<c>`  | `0xFF0000`  | <gdfmt><c>Sample</c></gdfmt>   |

## Instant/Fade Tags

Fade Tags are used to fade in a block of text on screen instead of making it appear character by character. Similarly to colour tags, Fade tags have a start and end tag to denote which piece of text should appear instantly. The number is specified in centiseconds, which is 1/100th of a second.

**Usage:** `Hello, <i100>world!</i>`

![fade-in preview](../assets/images/fadein_tag.gif)

## Delay Tags

Delay tags are used to create a delay before a specific string in dialog boxes. The game detects a Delay Tag if the string contains a `<d` and then it reads the next 3 characters and converts them into an integer. This value is then passed into the [CCDelayTime](https://docs.cocos2d-x.org/api-ref/cplusplus/V2.2/d6/dde/classcocos2d_1_1_c_c_delay_time.html) class from the [cocos2d-x](/) engine which Geometry Dash uses. The number is specified in centiseconds, which is 1/100th of a second.

**Usage:** `uhh<d030>.<d030>.<d030>.`

![delay preview](../assets/images/delay_tag.gif)

## Shake Tags

Shake Tags are used to render shaky text on screen. The number denotes the intensity of the shake.

**Usage:** `<s260>CHOPPER!</s>`

![shake preview](../assets/images/shake_tag.gif)

## Notes

- In 2.1, failing to add an end tag for Colour tags and Instant tags would result in the game crashing, but this was fixed in 2.2

- In 2.1, the Fade tags actually made the block of text appear instantly, and so no number was required. To emulate the old behavior, you can use `<i000>`

- Only Colour tags are usable without modifying the client - via level descriptions and comment bans

- The tags are defined within the `MultilineBitmapFont` class and are sometimes disabled within the create method using a bool
