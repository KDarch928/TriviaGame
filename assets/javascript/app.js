console.log("test");

var answers = ["Kayle"]
var userAnswers = [];
var win = 0;
var lose = 0;
var unanswered = 0;
var na = "na"


function checkAnswers() {
    for (var i = 0; i < answers.length; i++) {
        console.log(answers[i]);
        console.log(userAnswers[i]);
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

$("#startBtn").on("click",function () {
    console.log(this);
    $("#startScreen").addClass("invisible");
    $("#triviaQuestions").removeClass("invisible");
});

$(document).ready(function () {
    $("#submitBtn").click(function() {

        var q1Val = $("input[name=customRadioInline1]:checked").val();
        addUserAnswerToUserAnswerArray(q1Val);
        console.log($(this).val());
        checkAnswers();

    });
});
