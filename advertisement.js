function startTimer(){
  var counter = 30;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = "Your code will be available in " + counter.toString() + " seconds.";
    }
    if (counter === 0) {
        alert('You will now be redirected');
        window.location.href = "http://www.google.com";
        clearInterval(counter);
    }
  }, 1000);
}
$("#startClock").click(function(){
    startTimer();
 });
