
//Renders Google Maps API.  Function written as advised by Google Could API documentation
       function initMap() {
           let map = new google.maps.Map(document.getElementById("map"), {
                zoom: 8,
                center:  {
                    lat: 51.5074,
                    lng: -0.1278
                },
            });
        }
