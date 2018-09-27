console.log("hello");

// have a button to start the game

// create a decrementing timer to answer the questions
////////////////////////////////////////////////////////////////////////////////

window.onload = function() {
  //  Click events are done for us:
  $("#lap").click(timer.recordLap);
  $("#stop").click(timer.stop);
  $("#reset").click(timer.reset);
  $("#start").click(timer.start);
};

var intervalId;
var clockRunning = false;

var timer = {
  time: 0,
  lap: 1,
  reset: function() {
    timer.time = 0;
    timer.lap = 1;
    $("#display").text(timer.timeConverter(0));
    $("#laps").empty();
  },

  start: function() {
    if (!clockRunning) {
      intervalId = setInterval(timer.count, 1000);
      clockRunning = true;
      console.log(intervalId, clockRunning);
    }
  },
  stop: function() {
    clearInterval(intervalId);
    clockRunning = false;
  },

  recordLap: function() {
    var currentTime = timer.timeConverter(timer.time);

    $("#laps").append("<p> Lap " + timer.lap + ": " + currentTime + "</p>");

    timer.lap++;
  },
  count: function() {
    timer.time++;

    var currentFormattedTime = timer.timeConverter(timer.time);

    $("#display").text(currentFormattedTime);
  },

  //  THIS FUNCTION IS DONE FOR US!
  //  We do not need to touch it.

  timeConverter: function(t) {
    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - minutes * 60;

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    } else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};

//////////////////////////////////////////////////////////////////////////////////

// create a function for if the question is right, then show an image of trump with a thumbs up

// create a function for if the question is wrong, then an image
