'use strict';
$(document).ready(function(){
  function startTimer(){
		sendLocation();
    let counter = 10;
  	let lbl = $("#creq").attr("value");
    let id;
    id = setInterval(()=> {
  		$("#startClock").attr("value",lbl+"... "+counter);
      counter--;
      if (counter === 0) {
					sendLocation();
          alert('You will now be redirected');

          clearInterval(id);
      }
    }, 1000);
  }
  $("#creq").click(startTimer);
});
