# Server Song Resource

## Song

A song is a resource from newgrounds that people can sync their levels to, and information about them is sent to the client upon request.

#### Song Structure

| Key | Name/Value                | Type                                         | Description                                                              
|-----|---------------------------|----------------------------------------------|--------------------------------------------------------------------------
| 1   | ID						  | **number**									 | The ID of the song on Newgrounds
| 2   | name					  | **string**									 | The name of the song
| 3   | artistID				  | **number**									 | Newgrounds ArtistID  
| 4   | artistName				  | **string**									 | The name of the artist who made the song
| 5   | size					  | **number**									 | Size of the song in MB, rounded to two decimal places
| 6   | videoID 			      | **string**									 | the Video ID for the songs YouTube Video
| 7   | youtubeURL				  | **string**									 | The URL of the newgrounds user's youtube channel
| 8   | [unused]				  | **bool**									 | Either 0 or 1 -> the game does not have any checks for this internally so this is likely unused
| 10  | link					  | **string**									 | Link to the song's mp3