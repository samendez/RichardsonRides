var loc = {latitude: 0, longitude: 0};

function getLatitude()  {
  return loc.latitude;
}
function getLongitude() {
  return loc.longitude;
}

function updateLocation() {
    if (navigator && navigator.geolocation) {
        console.log('map updated');

        return navigator.geolocation.getCurrentPosition((position)=>{loc = position.coords;var cityCircle = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            center: {lat: position.coords.latitude, lng: position.coords.longitude},
            radius:50})}, ()=>console.log('Geolocation error'));
    } else {
        console.log('Geolocation is not supported');
    }

}
