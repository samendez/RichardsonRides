var loc;

function sendLocation() {
	console.log("Polling Coordinates");
    if (navigator && navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition(successCallback, ()=>console.log('Geolocation error'));
    } else {
        console.log('Geolocation is not supported');
    }

}

function successCallback(position) {
		console.log("Coordinates Recieved");
		console.log("Sending Coordinates");
		$.post("/",{lat:position.coords.latitude,
			long:position.coords.longitude,
			 store: document.getElementById("sel1").value},
		function(res,err){
			console.log("Through");
		});
}

function getLatitude()  {
  return loc.latitude;
}
function getLongitude() {
  return loc.longitude;
}

function updateLocation() {
    if (navigator && navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition((position)=>{map.panTo(new google.maps.LatLng(position.latitude,position.longitude))},map: map,title: 'You Are Here'});}, ()=>console.log('Geolocation error'));
    } else {
        console.log('Geolocation is not supported');
    }

}
