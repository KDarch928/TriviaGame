console.log("test");

var answers = ["Gene Roddenberry", "Rummaging through a debris field to salvage junk", "His Singing", "Enterprise D and the Star Gazer", "Water", "Being able to turn invisible", "Guinan", "Reginald Barclay", "James Tiberius Kirk", "Klingons", "3", "Human", "Fluidic", "Joe", "Dr. Noonian Soong"];
var userAnswers = [];
var win = 0;
var lose = 0;
var unanswered = 0;
var na = "na"
var arrLength;


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
    // console.log("win: " + win);
    // console.log("Lose: " + lose);
    // console.log("NotAnswered: " + unanswered);
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

$("#startBtn").on("click",function () {
    // console.log(this);
    $("#startScreen").addClass("invisible");
    $("#triviaQuestions").removeClass("invisible");
});

$(document).ready(function () {
    $("#submitBtn").click(function() {

        arrLength = answers.length;
        // var q1Val = $("input[name=num1]:checked").val();
        // var q2Val = $("input[name=num2]:checked").val();

        for (var i = 0; i < arrLength; i++) {
            var qVal = $("input[name=num" + (i + 1) + "]:checked").val();
            addUserAnswerToUserAnswerArray(qVal);

        }
        // addUserAnswerToUserAnswerArray(q1Val);
        // addUserAnswerToUserAnswerArray(q2Val);
        //console.log($(this).val());
        checkAnswers();
        displayResultsScreen();

    });
});
console.log(answers);
console.log(userAnswers);
