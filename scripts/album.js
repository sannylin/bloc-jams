var albumPicasso = {
    name: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
        { name: 'Blue', length: '4:26' },
        { name: 'Green', length: '3:14' },
        { name: 'Red', length: '5:01' },
        { name: 'Pink', length: '3:21'},
        { name: 'Magenta', length: '2:15'}
    ]
};

var albumMarconi = {
    name: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/06.png',
    songs: [
        { name: 'Hello, Operator?', length: '1:01' },
        { name: 'Ring, ring, ring', length: '5:01' },
        { name: 'Fits in your pocket', length: '3:21'},
        { name: 'Can you hear me now?', length: '3:14' },
        { name: 'Wrong phone number', length: '2:15'}
    ]
};

var albumSanny = {
    name: 'Lego',
    artist: 'Sanny Lin',
    label: 'Black Cat',
    year: '2015',
    albumArtUrl: 'assets/images/album_covers/19.png',
    songs: [
        { name: 'Crazy Cat Lady', length: '3:01' },
        { name: 'Cat hair everywhere', length: '2:02' },
        { name: 'Hide those claws', length: '3:45' },
        { name: 'Stalker cat', length: '3:13' }
    ]
}

var createSongRow = function(songNumber, songName, songLength) {
    var template =
          '<tr class="album-view-song-item">'
        + '  <td class="song-item-number">' + songNumber + '</td>'
        + '  <td class="song-item-title">' + songName + '</td>'
        + '  <td class="song-item-duration">' + songLength + '</td>'
        + '</tr>'
        ;

    return template;
};

var setCurrentAlbum = function(album) {
    var albumTitle = document.getElementsByClassName('album-view-title')[0];
    var albumArtist = document.getElementsByClassName('album-view-artist')[0];
    var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
    var albumImage = document.getElementsByClassName('album-cover-art')[0];
    var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

    albumTitle.firstChild.nodeValue = album.name;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);

    albumSongList.innerHTML = '';

    for (i = 0; i < album.songs.length; i++) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].name, album.songs[i].length);
    }
};
 
window.onload = function() {
    var i=3;

    setCurrentAlbum(albumPicasso);

    var albumArt = document.getElementsByClassName('album-cover-art')[0];

    albumArt.addEventListener('click', function(event) {
         if(i%3 == 0){
            setCurrentAlbum(albumMarconi);
         }
         else if(i%3 == 1){
            setCurrentAlbum(albumSanny);
         }
         else{
            setCurrentAlbum(albumPicasso);
         }

         i++;
    });
};
