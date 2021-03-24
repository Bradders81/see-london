

document.addEventListener('DOMContentLoaded', () => {

    let attractionBtn = document.getElementById('dropDown1');
    let theatreBtn = document.getElementById('dropDown2');
    let attractionMenu = document.getElementById('menu1');
    let theatreMenu = document.getElementById('menu2');

  // Turns on the attraction list items and turns off the theatre list items
    attractionBtn.addEventListener("click", () => { 
        attractionMenu.style.display = 'block';
        theatreMenu.style.display = 'none';
    });
// Turns on the theatre list items and turns off the attraction list items
    theatreBtn.addEventListener("click", () => {
        attractionMenu.style.display = 'none';
        theatreMenu.style.display = 'block';
    });

// function attractions()  {
// let bPlace = getElementById('bPalace')
// if 

// }

function theatres() {

    
}

});



//JQuery

$('#callOutText').hide() //Hides call out text before the DOM loads.

$(function () {
    $('#callOutText').fadeIn(2500); //Fades in call out text

});



















