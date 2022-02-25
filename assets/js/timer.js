// Set the date we're counting down to
var countDownDate = new Date("Mar 11, 2022 22:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"

  //days
  if(days<10){
    
    document.getElementById("days").innerHTML = "0"+days;
  }
  else{
    document.getElementById("days").innerHTML = days;

  }
  //hours
  if(hours<10){

    document.getElementById("hours").innerHTML ="0"+hours;  
  }
  else{
  document.getElementById("hours").innerHTML = hours;
  }
  //mins
  if(minutes<10){

  document.getElementById("minutes").innerHTML ="0"+minutes;
  }else{
  document.getElementById("minutes").innerHTML = minutes;
  }
  //secs
  if(seconds<10){
  document.getElementById("seconds").innerHTML = "0"+seconds;
  }
  else{
  document.getElementById("seconds").innerHTML = seconds;
  }
  // document.getElementById("days").innerHTML = days;
  // document.getElementById("hours").innerHTML = hours;
  // document.getElementById("minutes").innerHTML = minutes;
  // document.getElementById("seconds").innerHTML = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "0";
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("minutes").innerHTML = "0";
    document.getElementById("seconds").innerHTML = "0";
  }
}, 1000);