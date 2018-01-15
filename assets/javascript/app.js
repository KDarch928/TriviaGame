console.log("test");

var answers = ["Gene Roddenberry", "Rummaging through a debris field to salvage junk", "His Singing", "Enterprise D and the Star Gazer", "Water", "Being able to turn invisible", "Guinan", "Reginald Barclay", "James Tiberius Kirk", "Klingons", "3", "Human", "Fluidic", "Joe", "Dr. Noonian Soong"];
var userAnswers = [];
var win = 0;
var lose = 0;
var unanswered = 0;
var na = "na"
var arrLength;

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

//prevents the clock from being sped up unnecessarily
var clockRunning = false;


function checkAnswers() {
    for (var i = 0; i < answers.length; i++) {
        // console.log(answers[i]);
        // console.log(userAnswers[i]);
        if(answers[i] === userAnswers[i]){
            win++;
        } else if (userAnswers[i] === "na"){
            unanswered++;
        } else {
            lose++;
        }

    }
}

// fucntion adds the users answer to the user array
function addUserAnswerToUserAnswerArray(value) {
    //if the users answer is null or undefinied, then push "na" to the userAnswer array; na = not answered
    if (value == null){
        userAnswers.push(na);
    // else if the user selected an answer, then push the push their answer to the userAnswer array
    } else {
        userAnswers.push(value);
    }

}

//display results
function displayResultsScreen() {
    $("#triviaQuestions").addClass("invisible");
    $("#gameDone").removeClass("invisible");

    $("#win").text(win);
    $("#lose").text(lose);
    $("#blank").text(unanswered);
}

//check the DOM
$(document).ready(function () {

    //Grab the users selection on the DOM
    function checkRadioAnswers() {
        arrLength = answers.length;

        //Array to check through to check every question and grab their answers
        for (var i = 0; i < arrLength; i++) {
            var qVal = $("input[name=num" + (i + 1) + "]:checked").val();
            //send the answer from the question to add to the userAnswer array
            addUserAnswerToUserAnswerArray(qVal);

        }
    }

    //gametimer object
    var gameTimer = {

        time: 300, //120

        start: function () {

            // DONE: Use setInterval to start the count here and set the clock to running.
            if (!clockRunning) {
                intervalId = setInterval(gameTimer.count, 1000);
                clockRunning = true;
            }
        },
        stop: function () {

            // DONE: Use clearInterval to stop the count here and set the clock to not be running.
            clearInterval(intervalId);
            clockRunning = false;
        },
        count: function () {

            // DONE: decrment time by 1, remember we cant use "this" here.
            gameTimer.time--;

            // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
            //       and save the result in a variable.
            var converted = gameTimer.timeConverter(gameTimer.time);

            if (converted === "00:00") {
                //alert("You time is out");
                gameTimer.stop();
                checkRadioAnswers();
                //compare the users slection to the answers
                checkAnswers();
                //show the resutl screen showing how well the user played
                displayResultsScreen();
            }


            // DONE: Use the variable we just created to show the converted time in the "display" div.
            $("#time").text(converted);
        },
        timeConverter: function (t) {

            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);

            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            if (minutes === 0) {
                minutes = "00";
            }
            else if (minutes < 10) {
                minutes = "0" + minutes;
            }

            return minutes + ":" + seconds;
        }
    };

    $("#startBtn").on("click", function () {
        $("#startScreen").addClass("invisible");
        $("#triviaQuestions").removeClass("invisible");
        gameTimer.start();

    });

    //when the submit button is pushed then run the fuctions to get user selection and check answers
    $("#submitBtn").click(function() {

        // arrLength = answers.length;
        // // var q1Val = $("input[name=num1]:checked").val();
        // // var q2Val = $("input[name=num2]:checked").val();

        // for (var i = 0; i < arrLength; i++) {
        //     var qVal = $("input[name=num" + (i + 1) + "]:checked").val();
        //     addUserAnswerToUserAnswerArray(qVal);

        // }
        // addUserAnswerToUserAnswerArray(q1Val);
        // addUserAnswerToUserAnswerArray(q2Val);
        //console.log($(this).val());

        //grab users selection
        checkRadioAnswers();
        //compare the users slection to the answers
        checkAnswers();
        //show the resutl screen showing how well the user played
        displayResultsScreen();

    });
});

