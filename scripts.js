var loc;

function sendLocation() {
    if (navigator && navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition(successCallback, ()=>console.log('Geolocation error'));
    } else {
        console.log('Geolocation is not supported');
    }

}

function successCallback(position) {
		$.post("/",{lat:position.coords.latitude,long:position.coords.longitude, store: document.getElementById("sel1").value},
		function(res,err){
			consoe.log("Through");
		});

}
