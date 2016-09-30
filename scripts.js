var loc;

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
    loc = lat + "," + lon;
    console.log(loc);

}

function getLocation() {
    return loc;
}

function setLocation() {
    updateLocation();
    console.log({userLocation: loc, store: document.getElementById("sel1").value});
    $.post("",{userLocation: loc, store: document.getElementById("sel1").value},fuckyeah);
}
function fuckyeah(){
  console.log("fuckyeah");
}
