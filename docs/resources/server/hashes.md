# Hashes
## getGJLevels21
```py
import dataclasses, hashlib

@dataclasses.dataclass
class Level:
    id: int
    stars: int
    verified_coins: bool

def generate_getGJLevels21_hash(levels) -> str:
    hasher = hashlib.sha1()
    level: Level
    for level in levels:
        # %letter meanings: https://peps.python.org/pep-0461/#interpolation
        decimal_id: bytes = b"%d" % (level.id,)
        hasher.update(b"%c%c%d%c" % (
            decimal_id[0],
            decimal_id[-1],
            level.stars,
            b"1" if level.verified_coins else b"0"
        ))
    hasher.update(b"xI25fpAapCQg")
    return hasher.hexdigest()
```
## getGJMapPacks21
```py
import dataclasses, hashlib

@dataclasses.dataclass
class MapPack:
    id: int
    stars: int
    coins: int

def generate_getGJMapPacks21_hash(map_packs) -> str:
    hasher = hashlib.sha1()
    map_pack: MapPack
    for map_pack in map_packs:
        # %letter meanings: https://peps.python.org/pep-0461/#interpolation
        decimal_id: bytes = b"%d" % (map_pack.id,)
        hasher.update(b"%c%c%d%d" % (
            decimal_id[0],
            decimal_id[-1],
            map_pack.stars,
            map_pack.coins
        ))
    hasher.update(b"xI25fpAapCQg")
    return hasher.hexdigest()
```
## getGJGauntlets21
```py
import dataclasses, hashlib

@dataclasses.dataclass
class Gauntlet:
    id: int
    level_ids: tuple[int, ...]

def generate_getGJGauntlets21_hash(gauntlets) -> str:
    hasher = hashlib.sha1()
    gauntlet: Gauntlet
    for gauntlet in gauntlets:
        # %letter meanings: https://peps.python.org/pep-0461/#interpolation
        hasher.update(b"%d%b" % (
            gauntlet.id,
            b",".join(b"%d" % (level_id,) for level_id in gauntlet.level_ids)
        ))
    hasher.update(b"xI25fpAapCQg")
    return hasher.hexdigest()
```
## downloadGJLevel22
```py
import dataclasses, hashlib

@dataclasses.dataclass
class Level:
    id: int
    encoded_level_data: bytes
    player_id: int
    demon: bool
    stars: int
    feature_score: int
    password: int # <- like k41 in save files
    verified_coins: bool
    daily_number: int

def generate_downloadGJLevel22_hash1(level: Level) -> str:
    d: bytes = level.encoded_level_data
    return hashlib.sha1(
        (d[: len(d)//40*40 : len(d)//40] if len(d) > 40 else d)
        + b"xI25fpAapCQg"
    ).hexdigest()

def generate_downloadGJLevel22_hash2(level: Level) -> str:
    # %letter meanings: https://peps.python.org/pep-0461/#interpolation
    return hashlib.sha1(b"%d,%d,%c,%d,%c,%d,%d,%dxI25fpAapCQg" % (
        level.player_id,
        level.stars,
        b"1" if level.demon else b"0",
        level.id,
        b"1" if level.verified_coins else b"0",
        level.feature_score,
        level.password,
        level.daily_number
    )).hexdigest()
```
