var myWins = 0;
var myLosses = 0;
var currentQuestion = 0;
var time = 11;
var gradePercent = 0;


console.log("ready");
// Show countdown timer
// Present questions to user
// collec answers
// store correct and incorect answers to variables
// display message to users sayng time is out
// display score on screen

// Setup the variables to hold scoring data and declare global variables



// Setup Questions and answer object array
var questions = [
        {
                ask: "What was the character name of the Skipper on the Gilligan's Island TV Series?",
                choices: ["The Skipper", "Jonas Grumby", "Alan Hale Jr.", "Hey, You!"],
                rightChoice: "Jonas Grumby",
                pic: "<img src='http://images4.fanpop.com/image/photos/20600000/Alan-Hale-Jr-as-Skipper-gilligans-island-20605756-380-304.jpg' class='rounded-circle shadow'>"
        },
        {
                ask: "What is a group of unicons known as?",
                choices: ["A Pride", "A Sparkle", "A Blessing", "What?"],
                rightChoice: "A Blessing",
                pic: "<img src='https://www.greenbiz.com/sites/default/files/styles/gbz_article_primary_breakpoints_kalapicture_screen-lg_1x/public/images/articles/featured/unicorn_sstock.jpg?itok=8lLbsA_1&timestamp=1533926040' width='380' class='rounded-circle shadow'>"
        },
        {
                ask: "Where was the fortune cookie invented?",
                choices: ["Mexico", "China", "America", "Japan"],
                rightChoice: "America",
                pic: "<img src='https://www.peter-treadway.com/wp-content/uploads/2017/09/china-fotune-cookie.jpg' width='380' class='rounded-circle shadow'>"
        },
        {
                ask: "What is the fear of being buried alive known as?",
                choices: ["depthophobia", "Taphophobia", "cryophobia", "embalmophobia"],
                rightChoice: "Taphophobia",
                pic: "<img src='https://www.thevintagenews.com/wp-content/uploads/2016/12/The-recovery-of-supposedly-dead-victims-of-cholera-as-depicted-in-The-Premature-Burial-by-Antoine-Wiertz-fuelled-the-demand-for-safety-coffins.-Photo-Credit-640x437.jpg' width='380' class='rounded-circle shadow'>"
        },
        {
                ask: "In China, animals are forbidden to use human language. This belief led to the ban of a book of which famous writer, in the country?",
                choices: ["Winny The Pooh", "Alice In Wonderland", "Animal Farm", "Cosmopolitan"],
                rightChoice: "Alice In Wonderland",
                pic: "<img src='https://thomaskinkade.com/wp-content/uploads/2016/03/alicew.jpg' width='380' class='rounded-circle shadow'>"
        },
        {
                ask: "What is a group of frogs known as?",
                choices: ["A Murder", "A Croak", "A Grunt", "An Army"],
                rightChoice: "An Army",
                pic: "<img src='https://nypdecider.files.wordpress.com/2016/09/kulipari.jpg?quality=90&strip=all&w=646&h=335&crop=1' width='380' class='rounded-circle shadow'>"
        },
        {
                ask: "What is a group of toads known as?",
                choices: ["A Swimmer", "A Grobble", "A Knot", "A Navy"],
                rightChoice: "A Knot",
                pic: "<img src='https://i.pinimg.com/originals/bd/f0/8c/bdf08ce859aaacb87cca96a6e50e8f3b.jpg' width='380' class='rounded-circle shadow'>"
        },
        {
                ask: "The Empire State Building is composed of how many bricks?",
                choices: ["10 Million", "14 Million", "38 Million", "14"],
                rightChoice: "10 Million",
                pic: "<img src='https://aws-tiqets-cdn.imgix.net/images/content/1e74453a4d2c45f9becb39add27f2dff.jpg?auto=format&fit=crop&ixlib=python-1.1.2&q=25&s=b720cbf5ab86e1786ee7bd2a6b4f26be&w=400&h=320&dpr=2.625' width='380' class='rounded-circle shadow'>"
        },
        {
                ask: "If cats are feline, and dogs, canine, then what are bears?",
                choices: ["Beline", "Furline", "Groline", "Ursine"],
                rightChoice: "Ursine",
                pic: "<img src='https://d3i6fh83elv35t.cloudfront.net/static/2018/11/fat-bears_GettyImages-966223700-1200x800.jpg' width='380' class='rounded-circle shadow'>"
        }
]

// Hide the scoring area to display the Game Intro screen, make sure the game intro background image is showing
        $(".container, .card-body, .col-12, .gameBg").hide();
        $(".bg").show();
        nextQuestionTimer = 3;
        setTimeout(fiveSeconds, 1000 * 3);

// Display game intro Screen for 7 seconds, then show the game play background and the scoring box
function fiveSeconds() {
        $(".bg").hide();
        $(".gameBg").show();
        $(".container, #score, #cardSpace, .card-body, .row").show();
        $("#correct").html("<h4>Correct: " + myWins + "</h4>");
        $("#wrong").html("<h4>Incorrect: " + myLosses + "</h4>");
        $("#percentage").html("<h4>Percentage Correct: " + (parseFloat(myLosses / myWins) * 100) + "%</h4>");
        $("#grade").html("<h4>Grade: N/A</h4>");
        timer();
        showQuestions();
}

function setGrade() {
        console.log("set grad test");
        console.log("blah " + parseInt(myWins / (myLosses + myWins)));
        if ((myWins / (myLosses + myWins)) >= .90) {
                $("#grade").html("<h4>Grade: A</h4>");
        } else if((myWins / (myLosses + myWins)) >= .80) {
                $("#grade").html("<h4>Grade: B</h4>");
        } else if((myWins / (myLosses + myWins)) >= .70) {
                $("#grade").html("<h4>Grade: C</h4>");
        } else if((myWins / (myLosses + myWins)) >= .60) {
                $("#grade").html("<h4>Grade: D</h4>");
        } else if((myWins / (myLosses + myWins)) >= .50) {
                $("#grade").html("<h4>Grade: F</h4>");
        }
}

// This is the question timer
function timer() {
        $("#nextTimerSpace").show();
        time = 11;
        clock = setInterval(countDown, 1000);
        function countDown() {
                if (time <= 0) {
                        clearInterval(clock);
                        noTime();
                }
                if (time > 0) {
                        time--;
                }
                $("#timeLeft").html("<h4>Time: </h4>" + time);
                console.log(time);
        }
}

// This is where i update the scrren for wins and losses
function update() {
        $("#correct").html("<h4>Correct: " + myWins + "</h4>");
        $("#wrong").html("<h4>Incorrect: " + myLosses + "</h4>");
        $("#percentage").html("<h4>Percentage Correct: " + (parseFloat(myWins / (myLosses + myWins)) * 100)  + "%</h4>");
        console.log("Tester");
        setGrade();
}

// Winner Winner Function
function winner() {
        $("#questions").html("<h4>You are correct!</h4>");
        myWins++;
        update();
        var correctAnswer = questions[currentQuestion].rightChoice;
        $("#questions").append("<h4>The answer was <span class='answer'>" +
                questions[currentQuestion].rightChoice +
                "</h4>" +
                questions[currentQuestion].pic);
        setTimeout(gameOver, 1000);
}

// user guessed incorrectly
function loser() {
        $("#questions").html("<h4>Sorry Bub, You're wrong!</h4>");
        myLosses++;
        update();
        var correctAnswer = questions[currentQuestion].rightChoice;
        $("#questions").append("<h4>The answer was <span class='answer'>" +
                questions[currentQuestion].rightChoice +
                "</h4>" +
                questions[currentQuestion].pic);
        setTimeout(gameOver, 1000);
}


// The player ran out of time before making a choice
function noTime() {
        if (time === 0) {
                $("#outOfTime").html("<p>You ran out of time!</p>");
                myLosses++;
                update();
                var correctAnswer = questions[currentQuestion].rightChoice;
                $("#questions").html("<h4>The answer was <span class='answer'>" +
                        questions[currentQuestion].rightChoice +
                        "</h4>" +
                        questions[currentQuestion].pic);
                setTimeout(gameOver, 1000);
        }
}

// Advance to the next quesion and warn the player when the next question will happen
function nextQuestion() {
        $(".col-12").show();
        var beginTimer = setInterval(function () {

                $("#questionForward").html("<h4>Next question in: </h4>" + nextQuestionTimer);
                nextQuestionTimer -= 1;
                if (nextQuestionTimer < 0) {
                        clearInterval(beginTimer);
                        nextQuestionTimer = 3;
                        timer();
                        showQuestions();
                }
        }, 1000);
}
// show the questions and the choices
function showQuestions() {
        $(".col-12").hide();
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

//  Check to see if there are not any more questions
function gameOver() {
        if (currentQuestion >= questions.length - 1) {
                console.log("Current Question: " + currentQuestion);
                console.log("Total Questions: " + questions.length);
                alert("game over, check your score and reload the page to try again");

        }
        else {
                currentQuestion++;
                console.log("game over else: " + currentQuestion);
                nextQuestion();

        }
}
// click to trigger right or wrong screen
$("#questions").on("click", ".choices", (function () {
        var userGuess = $(this).text();
        if (userGuess === questions[currentQuestion].rightChoice) {
                clearInterval(clock);
                winner();
        }
        else {
                clearInterval(clock);
                loser();
        }
}));



// Set the variables that need to reset with each game to 0 here 
resetGame();