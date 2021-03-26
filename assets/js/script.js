document.addEventListener('DOMContentLoaded', () => {

    //Elements declared for click functions
    let buttons = document.getElementsByClassName('lButtons');
    let infoSection = document.getElementById("infoSection");
    let buckPalace = document.getElementById("bPalace");
    let londonEye = document.getElementById("lEye");
    let towerLondon = document.getElementById("tLondon");
    let housesParliament = document.getElementById("hParliament");
    


    let setNone = document.querySelectorAll('info');
    for (setAllNone of setNone)
        setAllNone.style.display = "none";

    //Controls user clicks for the things to see & do section
    for (let button of buttons) {
        button.addEventListener("click", function () {
            //Attractions Section
            if (this.getAttribute("data-id") === "bPalace") {
                infoSection.removeChild(infoSection.firstElementChild)
                buckPalace.style.display = "block";
                infoSection.appendChild(buckPalace);

            } else if (this.getAttribute("data-id") === "lEye") {
                infoSection.removeChild(infoSection.firstElementChild)
                londonEye.style.display = "block";
                infoSection.appendChild(londonEye);

            } else if (this.getAttribute("data-id") === "tLondon") {
                infoSection.removeChild(infoSection.firstElementChild)
                towerLondon.style.display = "block";
                infoSection.appendChild(towerLondon);

            } else if (this.getAttribute("data-id") === "hParliament") {
                infoSection.removeChild(infoSection.firstElementChild)
                housesParliament.style.display = "block";
                infoSection.appendChild(housesParliament);



            } else {
                alert('Sorry, there seems to be a fault at the moment')
            }
        })
    }

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

});


//JQuery Code
$('#callOutText').hide() //Hides call out text before the DOM loads.

$(function () {
    $('#callOutText').fadeIn(2500); //Fades in call out text

});


















