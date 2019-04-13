$(document).ready(function () {
        // Show countdown timer
        // Present questions to user
        // collec answers
        // store correct and incorect answers to variables
        // display message to users sayng time is out
        // display score on screen

        // Setup the variables to hold scoring data and declare global variables
        var myWins = 0;
        var myLosses = 0;
        var currentQuestion = 0;

        // Setup Questions and answer object array
        var questions = [
                {
                        ask: "What was the character name of the Skipper on the Gilligan's Island TV Series?",
                        choices: ["The Skipper", "Jonas Grumby", "Alan Hale Jr.", "Hey You!"],
                        rightChoice: "Jonas Grumby",
                        pic: "<img src='http://images4.fanpop.com/image/photos/20600000/Alan-Hale-Jr-as-Skipper-gilligans-island-20605756-380-304.jpg' class='rounded-circle shadow'>"
                },
                {
                        ask: "What is a group of unicons known as?",
                        choices: ["A Pride", "A Sparkle", "A Blessing", "What?"],
                        rightChoice: "A Blessing",
                        pic: "<img src='https://www.greenbiz.com/sites/default/files/styles/gbz_article_primary_breakpoints_kalapicture_screen-lg_1x/public/images/articles/featured/unicorn_sstock.jpg?itok=8lLbsA_1&timestamp=1533926040' class='rounded-circle shadow'>"
                },
                {
                        ask: "Where was the fortune cookie invented?",
                        choices: ["Mexico", "China", "America", "Japan"],
                        rightChoice: "America",
                        pic: "<img src='https://www.peter-treadway.com/wp-content/uploads/2017/09/china-fotune-cookie.jpg' class='rounded-circle shadow'>"
                }
        ]

        // Hide the scoring area to display the Game Intro screen, make sure the game intro background image is showing
        $(".container, .card-body, .gameBg").hide();
        $(".bg").show();

        // Set the variables that need to reset with each game to 0 here
        function resetGame() {
                myPercentage = 0;
                myGrade = 0;
                questionTimer = 10;
                nextQuestionTimer = 3;


                setTimeout(fiveSeconds, 1000 * 5);
        }
        function go() {
                var startTimer = setInterval(function () {
                        $("#timeLeft").html("<h4>Timer: </h4>" + questionTimer);
                        questionTimer -= 1;
                        console.log(questionTimer);
                        if (questionTimer < 0) {
                                clearInterval(startTimer);
                                questionTimer = 10;
                                $("#timeLeft").html("<h4>Times UP!</h4>");
                                nextQuestion();
                        }
                }, 1000);
        }



        // function resetQuestionTime () {
        //         questionTimer = 10;
        // }

        // Display game intro Screen for 7 seconds, then show the game play background and the scoring box
        function fiveSeconds() {
                $(".bg").hide();
                $(".gameBg").show();
                $(".container, #score, #cardSpace, .card-body, .row").show();
                $("#score").html("<h4> - Score - ");
                $("#correct").html("<h4>Correct: </h4>");
                $("#wrong").html("<h4>Incorrect: </h4>");
                $("#percentage").html("<h4>Percentage Correct: </h4>");
                $("#grade").html("<h4>Grade: </h4>");
                go();
                showQuestions();
        }
        function nextQuestion() {
                var beginTimer = setInterval(function () {
                        $("#nextTimerSpace").show();
                        $("#questionForward").html("<h4>Next question in: </h4>" + nextQuestionTimer);
                        nextQuestionTimer -= 1;
                        if (nextQuestionTimer < 0) {
                                clearInterval(beginTimer);
                                NextQuestionTimer = 3;
                                showQuestions();
                        }
                }, 1000);
        }
        // show the questions and the choices
        function showQuestions() {
                // a for loop would be cool here...
                $("#questions").html("<p><strong>" +
                        questions[currentQuestion].ask +
                        "</p><p class='choices'>" +
                        questions[currentQuestion].choices[0] +
                        "</p><p class='choices'>" +
                        questions[currentQuestion].choices[1] +
                        "</p><p class='choices'>" +
                        questions[currentQuestion].choices[2] +
                        "</p><p class='choices'>" +
                        questions[currentQuestion].choices[3] +
                        "</strong></p>");
                // call the reset function to restart the game
        }
        resetGame();
});
