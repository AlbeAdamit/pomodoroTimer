// Required variables
var session_seconds = "00";
var session_minutes = 25;

// Audio files
var click_sound = new Audio("click.mp3");
var bell = new Audio("bell.mp3");

// Starting template for the timer
function template() {
  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;
}

function start_timer() {

  // Change the minutes and seconds to starting time
  session_minutes = 24;
  session_seconds = 59;

  // Add the seconds and minutes to the page
  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;

  // Start the countdown
  var minutes_interval = setInterval(minutesTimer, 60000);
  var seconds_interval = setInterval(secondsTimer, 1000);

  // Functions
  // Function minute 
  function minutesTimer() {
    session_minutes = session_minutes - 1;
    document.getElementById("minutes").innerHTML = session_minutes;
  }

  // Function second
  function secondsTimer() {
    session_seconds = session_seconds - 1;
    document.getElementById("seconds").innerHTML = session_seconds;

    // Check if the seconds and minutes counter has reached 0
    // If 0  end the session
    if (session_seconds <= 0) {
      if (session_minutes <= 0) {
        // Clears the interval
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);

        document.getElementById("done").innerHTML =
          "Session Completed!! Take a Break";

        document.getElementById("done").classList.add("show_message");
      } 

      // Reset the session seconds to 60
      session_seconds = 60;
    } 
  }
}