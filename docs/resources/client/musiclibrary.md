# Music Library format

The Music Library is stored in your save directory as `musiclibrary.dat`. To learn how to retreive it from the servers, refer to [this page](/endpoints/songs/musiclibrary.md).

To decode musiclibrary.dat, you need to [Base64](/topics/encryption/base64.md) URL-Safe decode it and [Zlib](/topics/encryption/zip.md) inflate it.

The Music library is split into 4 parts:

```
{version}|{artists}|{songs}|{tags}
```

## Version

This is just the music library version. Not much more to say here.

## Artists

These are all of the artists, separated by `;` in the following format:

`{artistID},{name},{website},{youtubeChannel}`

The website is the full link, but it is URL encoded. The YouTube channel link is only the part that comes after `https://youtube.com/channel/`. If either of these are missing, there will be a space character in place of them.

Here is an example of an artist:

```
286,F-777,https%3A%2F%2Fjessevalentinemusic.bandcamp.com,UC6MNIegxWVDe6tOjL92QkUw
```

## Songs

This is where the old (2.205-) and new (2.206+) music libraries diverge. In both libraries, the songs are separated with `;`. However, the new music library has each song in this format:

```
{id},{name},{artistID},{filesize},{duration},{tags},{musicPlatform},{extraArtists},{externalLink},{newButton},{priorityOrder},{songNumber}
```

Meanwhile the old music library has each song in this format:

`{id},{name},{artistID},{filesize},{duration},{tags}`

Here's an explanation for each key:

| Name          | Type      | Description                                                                                                 |
| :------------ | :-------- | :---------------------------------------------------------------------------------------------------------- |
| id            | integer   | The song ID                                                                                                 |
| name          | string    | The song name                                                                                               |
| artistID      | integer   | The primary artist ID                                                                                       |
| filesize      | integer   | The file size of the song in bytes                                                                          |
| duration      | integer   | The song's duration in seconds                                                                              |
| tags          | string    | The song's tags, separated by dots. The string also has extra dots at the start and end for unknown reasons |
| musicPlatform | integer   | The platform this song comes from. 0 for None, 1 for NCS.                                                   |
| extraArtists  | string    | The IDs of the artists that contributed to the song, separated with `.`                                     |
| externalLink  | string    | The external link to the song (NOT the GD download link)                                                    |
| newButton     | boolean   | Whether there's a yellow `NEW` icon next to the song                                                        |
| priorityOrder | integer   | The priority order of the song. Usually, songs are ordered alphabetically, but if the song has this number set above 0, then it gets put above all the other songs. The song also receives a blue `NEW` icon. All of the songs with this property have the previous property set as 0. |
| songNumber    | integer   | The number of the song in the list. Starts at 1. Usage is unknown                                           |

## Tags

These are all the tags that you can filter songs by. They are stored in the following format:

`{id},{name};{id},{name}...`

All tags as of version `117`:

```
144,16bit;49,8bit;126,Acion;20,Action;114,Adventure;90,African;84,Aggressive;37,Alert;187,Alternative dance;211,Alternative hip-hop;186,Alternative pop;17,Ambiance;121,Ambience;124,Ambient;169,Angry;194,Anti-pop;66,Asian;115,Atmosphere;70,Atmospheric;204,Bass house;179,Bass music;39,Battle;232,Big room house;100,Blues;58,Boss;75,Bouncy;147,Brazilian phonk;184,Breakbeat;79,Bright;16,Calm;82,Calming;40,Casual;127,Celtic;165,Chasing;123,Chill;199,Chill bass;192,Chill house;195,Chill pop;48,Chiptune;23,Christmas;128,Cinematic;94,Classical;233,Color bass;41,Combat;9,Comedy;231,Complextro;89,Contemporary;72,Creepy;145,Cute;43,Cyberpunk;155,Dance;173,Dance-pop;221,Dance-punk;203,Dance-rock;11,Dark;190,Deep house;129,Desert;99,Disco;209,Disco house;14,Doom;205,Downtempo;149,Dreamy;78,Driving;109,Drone;164,Drum & bass;42,Drums;217,Drumstep;191,Dubstep;38,Dungeon;133,Dystopian;156,Eccentric;108,Edm;76,Eerie;6,Electro;219,Electro house;35,Electronic;174,Electronic pop;176,Electronic rock;96,Electronica;157,Elegant;64,Energetic;44,Environment;18,Epic;143,Ethnic;150,Euphoric;36,Event;177,Experimental;15,Fantasy;167,Fear;118,Field;132,Fire;158,Floating;139,Forest;85,Funk;10,Funny;210,Future bass;214,Future bounce;223,Future funk;197,Future house;212,Future rave;200,Future trap;201,Futurepop;110,Futuristic;153,Garage;159,Glamorous;216,Glitch hop;74,Grooving;54,Guitar;24,Happy;213,Hardcore;171,Hardstyle;135,Harp;166,Heavy;148,Hip-hop;91,Holiday;180,Hopeful;22,Horror;154,House;12,Humor;25,Humorous;56,Hybrid;59,Indie;208,Indie dance;29,Instrumental;8,Intense;95,Jazz;170,Jersey club;53,Jrpg;207,Jump-up;175,Laid back;101,Latin;193,Latin-dance;47,Light;188,Liquid;34,Lofi;182,Lofi hip-hop;61,Loop;113,Low-fi;28,Medieval;222,Melbourne bounce;178,Melodic dubstep;185,Melodic house;13,Metal;181,Midtempo bass;146,Military;196,Minimal;102,Modern;206,Moodshappy;105,Musical;26,Mysterious;46,Mystery;77,Mystical;140,Nature;189,Neurofunk;67,Nordic;19,Orchestral;183,Peaceful;57,Percussion;112,Phonk;30,Piano;32,Pirate;63,Platformer;98,Polka;86,Pop;202,Progressive electro;229,Progressive electron;218,Progressive house;73,Puzzle;142,Quirky;104,Reggae;80,Relaxed;62,Relaxing;160,Restless;45,Retro;52,Retrowave;92,Rock;161,Romantic;21,Rpg;151,Running;31,Sad;168,Scary;50,Sci-fi;137,Scifi;117,Sentimental;162,Sexy;122,Sfx;60,Short;87,Silentfilmscore;106,Ska;215,Slap house;131,Slavic;163,Smooth;172,Sneaking;7,Sneaky;81,Somber;71,Soundscape;88,Soundtrack;33,Spooky;103,Stings;134,Suspense;27,Suspenseful;130,Synth;220,Synth-pop;5,Synthwave;136,Tavern;198,Tech house;141,Techno;69,Texture;120,Theme;138,Tonal;119,Town;125,Trance;116,Tranquil;111,Trap;230,Tropical house;93,Unclassifiable;55,Underscore;68,Unnerving;51,Upbeat;83,Uplifting;107,Urban;152,Weird;65,Western;97,World;
```
