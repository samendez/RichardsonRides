function updateLocation() {
 if (navigator && navigator.geolocation) {
            return navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {maximumAge: 30000});
        } else {
            console.log('Geolocation is not supported');
        }

}

function errorCallback(){
  console.log('Geolocation error');
}

function successCallback(position) {
  var lon = position.coords.longitude;
  var lat = position.coords.latitude;
  document.getElementById("position").value = lat + ", " + lon;

}

function onClick(){
  var el = document.getElementById("locBut");
    el.addEventListener("click", updateLocation(), false);
}
