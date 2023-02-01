var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var userClickedPattern = [];

var level = 0;

var started = false;

// gamePattern.push(randomChosenColour);

function nextSequence() {
  userClickedPattern = [];
  if (started === true) {
    level += 1;
    $("h1").text("Level " + level);
  }
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(50).fadeIn(50);
  playSound(randomChosenColour);
}
// alert(randomChosenColour);
//$("body").click(function(){nextSequence();});

// var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
//  audio.play();

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
 audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

$(document).keypress(function() {
  if(started === false)
  {
    nextSequence(); 
    $("h1").text("Level " + level);
    started = true;
  }
  // else {
  //   nextSequence();
  //   $("h1").text("Level " + keyPressIndex);
  //   keyPressIndex += 1;
  // }
});

function checkAnswer(currentLevel) {
  if(userClickedPattern[currentLevel] === gamePattern[currentLevel])
  {
    console.log("success");
  }
  else
  {
    console.log("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    playSound("wrong");
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
  if(userClickedPattern.length === gamePattern.length)
  {
    setTimeout(function () {
      nextSequence();
    }, 1000);
  }
  
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
// function remove(color , className) {
  
// }
// var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
// audio.play();
//alert("sounds/" + randomChosenColour + ".mp3")





// function makeSound(randomChosenColour) {
//     switch (randomChosenColour) {
//         case "red":
//             var red = new Audio("sounds/red.mp3");
//             red.play(); break;
//         case "blue":
//             var blue = new Audio("sounds/blue.mp3");
//             blue.play(); break;
//         case "green":
//             var green = new Audio("sounds/green.mp3");
//             green.play(); break;
//         case "yellow":
//             var yellow = new Audio("sounds/yellow.mp3");
//             yellow.play(); break;
//     }
// }
