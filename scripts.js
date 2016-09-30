//var position;

function updateLocation() {
    if (navigator && navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
        console.log('Geolocation is not supported');
    }

}

function errorCallback() {
    console.log('Geolocation error');
}

function successCallback(position) {
    var lon = position.coords.longitude;
    var lat = position.coords.latitude;
    // position = lat + ", " + lon;
    console.log(lat + ", " + lon);
    document.getElementById("pos").value = lat + ", " + lon;

}

function getPosition() {
    //
    // return position;
}

function setPosition() {
    updateLocation();
    // document.getElementById("pos").value = getPosition();
}
