/////////////////////////////////////////////////////////
// Variables
/////////////////////////////////////////////////////////
var questions = [
"It's really cold outside, they are calling it a major freeze, weeks ahead of normal. Man, we could use a big fat dose of global warming!",


  "We're rounding 'em up in a very humane way, in a very nice way. And they're going to be happy because they want to be legalized. And, by the way, I know it doesn't sound nice. But not everything is nice.",

  "I will build a great, great wall on our southern border, and I will have Mexico pay for that wall. Mark my words.",

  "I have a great relationship with African Americans, as you possibly have heard. I just have great respect for them. And they like me. I like them.",

  "The concept of global warming was created by and for the Chinese in order to make U.S. manufacturing non-competitive.",

  "To be blunt, people would vote for me. They just would. Why? Maybe because I'm so good looking.",

  "I will go down as the voice of this generation, of this decade, I will be the loudest voice.",

  "You basically can say anything to someone on an email or text as long as you put an LOL at the end.",

  "I’ll say things that are serious and put them in a joke form so people can enjoy them. We laugh to keep from crying.",

  "People say I have a bad reputation. I think I’ve got the best reputation in the building."
];
questions[0, 1, 2, 3, 4, 5] = true;
questions[6, 7, 8, 9] = false;
var trueAnswer = true;
var falseAnswer = false;
var tenTimer = 11;
var correct = 0;
var wrong = 0;
var count = 0;
var intervalId;

/////////////////////////////////////////////////////////
// have a button to start the game
/////////////////////////////////////////////////////////

$(document).ready(function() {
  $("#start-button").on("click", function() {
    console.log("I've been clicked!");
    $("#start-button").remove();
    $('.instructions').remove();
    $("#question-display").text(questions[count]);
    run();

    /////////////////////////////////////////////////////////
    // Timer Functions
    /////////////////////////////////////////////////////////
    function run() {
      if (intervalId) {
        return;
      }
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
      tenTimer--;
      $("#timer").html(tenTimer);

      if (tenTimer === 0) {
        wrong++;
        $("#Wrong-answers").text(wrong);
        nextQuestion();
        // alert("Time Up!");
      }
    }

    function stop() {
      clearInterval(intervalId);
      intervalId = null;
    }

    /////////////////////////////////////////////////////////
    // Next Question Function
    /////////////////////////////////////////////////////////
    function nextQuestion() {
      clearInterval(intervalId);
      tenTimer = 11;
      intervalId = null;
      intervalId = setInterval(decrement, 1000);
      decrement();
      count++;
      $("#question-display").text(questions[count]);
    }

    /////////////////////////////////////////////////////////
    // True Click
    /////////////////////////////////////////////////////////
    $("#true").on("click", function() {
      alert("truth");
      if (question[count] === true) {
        correct++;
        nextQuestion();
      } else {
        wrong++;
        nextQuestion();
      }
    });

    /////////////////////////////////////////////////////////
    // False Click
    /////////////////////////////////////////////////////////
    $("#false").on("click", function() {
      alert("false");
      if (question[count] === false) {
        correct++;
        nextQuestion();
      } else {
        wrong++;
        nextQuestion();
      }
    });
  });
});

// When a question is answered correctly, the timer restarts

//if you answer ten random trump quotes correctly, you get an alert that says you win.
