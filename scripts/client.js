console.log('IN JS')

$(document).ready(onReady);

//songs app
let songs = [];

function onReady() {
    console.log('in onReady');
    $('#addSongsButton').on('click', addSong);
    $('#songsOut').on('click', '.digButton', digSong);
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

function digSong() {
    console.log('in digSong');
    let el = $(this); //this clicked button
    //change text of button
    // if Dig set to Hate, otherwise set to Dig
    if (el.text() === 'Dig'){
        el.text('Hate');
    } else {
        el.text('Dig');
    } //end else
    //change style of parent
    //select parent element
    let parent = $(this).parent();
    console.log('in parent', parent);
    //parent.addClass('hate');
    parent.toggleClass('hate');
    //parent.removeClass('hate');
    
}//end digSong

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
        el.append(`<li class="dig">${songs[i].title}: ${songs[i].artist}, ${songs[i].album} (${songs[i].year})
         <button class="digButton"->Dig</button></li>`);
        } // end for
    
} //end displaySongs

songs.push( {
    artist: 'Red Hot Chile Peppers',
    title: 'Under the Bridge',
    album: 'Blood Sugar Sex Magik',
    year: 1991
});