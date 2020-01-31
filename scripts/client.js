console.log('IN JS')

$(document).ready(onReady);

//songs app
let songs = [];

function onReady() {
    console.log('in onReady');
    $('#updateSongsButton').on('click', displaySongs);

} //end onReady

/// - test song

function displaySongs () {
    console.log('in displaySongs');

    // target an output element by ID
    let el = $('#songsOut');
    //empty out element
    el.empty();
    //loop through songs array
    for (let i=0; i<songs.length; i++){
        // append each song to the DOM
        el.append(`<li>${songs[i].artist} ${songs[i].title} ${songs[i].album} ${songs[i].year}</li>`)
        } // end for
    
} //end displaySongs

songs.push( {
    artist: 'Red Hot Chile Peppers',
    title: 'Under the Bridge',
    album: 'Blood Sugar Sex Magik',
    year: 1991
});