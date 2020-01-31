console.log('IN JS')

$(document).ready(onReady);

//songs app
let songs = [];

function onReady() {
    console.log('in onReady');
    $('#addSongsButton').on('click', addSong);

} //end onReady

function addSong() {
    console.log('in addSong')
    //select inputs by their ID and 
    //use their data in a newSong obj (using .val as a "getter")
    let newSong = {
        artist: $('#artistIn').val(),
         title: $('#titleIn').val(),
         album: $('#albumIn').val(),
         year: $('#yearIn').val()
    }   //end newSong
    //empty inputs (using .val as a "setter")
    $('#artistIn').val('');
    $('#titleIn').val('');
    $('#albumIn').val('');
    $('#yearIn').val('');
    //push new song object into songs array
    songs.push( newSong );
    //display songs
    displaySongs();
} //end addSong

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
        el.append(`<li>${songs[i].title}: ${songs[i].artist}, ${songs[i].album} (${songs[i].year})
         <button class="digButton">Digit</button></li>`);
        } // end for
    
} //end displaySongs

songs.push( {
    artist: 'Red Hot Chile Peppers',
    title: 'Under the Bridge',
    album: 'Blood Sugar Sex Magik',
    year: 1991
});