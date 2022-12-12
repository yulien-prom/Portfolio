function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 10.48801, lng: -66.87919};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Caracas, Venezuela' // Title Location
    });
}