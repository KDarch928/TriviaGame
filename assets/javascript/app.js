console.log("test");

$("#startBtn").on("click",function () {
    console.log(this);
    $("#startScreen").addClass("invisible");
    $("#triviaQuestions").removeClass("invisible");
});
