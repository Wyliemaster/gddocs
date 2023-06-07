# Base64

> Base64 is a method of encoding data which is widely used in the context of Geometry Dash.

**GD uses a variant of Base64 called url safe Base64 which replaces characters that may unintentionally break requests sent to the servers**

## Table of characters

> This table covers the characters url safe base64 use

| Index | Binary   | Char |     | Index | Binary   | Char |
| :---- | :------- | :--- | :-- | :---- | -------- | ---- |
| `0`   | `000000` | A    |     | `32`  | `100000` | g    |
| `1`   | `000001` | B    |     | `33`  | `100001` | h    |
| `2`   | `000010` | C    |     | `34`  | `100010` | i    |
| `3`   | `000011` | D    |     | `35`  | `100011` | j    |
| `4`   | `000100` | E    |     | `36`  | `100100` | k    |
| `5`   | `000101` | F    |     | `37`  | `100101` | l    |
| `6`   | `000110` | G    |     | `38`  | `100110` | m    |
| `7`   | `000111` | H    |     | `39`  | `100111` | n    |
| `8`   | `001000` | I    |     | `40`  | `101000` | o    |
| `9`   | `001001` | J    |     | `41`  | `101001` | p    |
| `10`  | `001010` | K    |     | `42`  | `101010` | q    |
| `11`  | `001011` | L    |     | `43`  | `101011` | r    |
| `12`  | `001100` | M    |     | `44`  | `101100` | s    |
| `13`  | `001101` | N    |     | `45`  | `101101` | t    |
| `14`  | `001110` | O    |     | `46`  | `101110` | u    |
| `15`  | `001111` | P    |     | `47`  | `101111` | v    |
| `16`  | `010000` | Q    |     | `48`  | `110000` | w    |
| `17`  | `010001` | R    |     | `49`  | `110001` | x    |
| `18`  | `010010` | S    |     | `50`  | `110010` | y    |
| `19`  | `010011` | T    |     | `51`  | `110011` | z    |
| `20`  | `010100` | U    |     | `52`  | `110100` | 0    |
| `21`  | `010101` | V    |     | `53`  | `110101` | 1    |
| `22`  | `010110` | W    |     | `54`  | `110110` | 2    |
| `23`  | `010111` | X    |     | `55`  | `110111` | 3    |
| `24`  | `011000` | Y    |     | `56`  | `111000` | 4    |
| `25`  | `011001` | Z    |     | `57`  | `111001` | 5    |
| `26`  | `011010` | a    |     | `58`  | `111010` | 6    |
| `27`  | `011011` | b    |     | `59`  | `111011` | 7    |
| `28`  | `011100` | c    |     | `60`  | `111100` | 8    |
| `29`  | `011101` | d    |     | `61`  | `111101` | 9    |
| `30`  | `011110` | e    |     | `62`  | `111110` | \_   |
| `31`  | `011111` | f    |     | `63`  | `111111` | -    |

## Padding

> The padding character is `=` however, it is optional as the Geometry Dash servers will automatically correct strings that do not have any padding

## Fun Fact

**Due to the way the buffer which stores the encoded data is allocated, there are some side effects.**
```cpp
// Pseudocode
unsigned int base64Encode(char *data, int length, char *buff, bool url_safe)
{
    // Calculating the size of the encoded data
    int padding = (length % 3) != 0 ? 4 : 0;
    int alloc_size = (padding + 4) * (length / 3);

    // using malloc here is a bad idea as the data does not
    // get set. It is expected that the developer resets
    // the data
    char* base64_data = (char*)malloc(alloc_size + 1);

    // The actual base 64 decoding
    if ( base64_data )
        cocos2d::_base64Encode(data, length, base64_data, url_safe);
    return alloc_size;
}
```

> As malloc does not set the data for the developer, the current state of memory will be inside of the buffer. In most cases, the data will already be null however, in the events that memory wasn't already null, garbage data will be returned at the end of the base64 data