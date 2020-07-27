let wins = 0;
let game = function () {
  newGame();
};

let newGame = function () {
  //guess word list stored in array
  //Going to add more (once I think of them)
  let wordsArray = [
    "basketball",
    "soccer",
    "baseball",
    "hockey",
    "cricket",
    "swimming",
    "golf",
    "chess",
    "badminton",
    "skiing",
    "volleyball",
  ];

  let imgPaths = {
    badminton: "Images/badminton.png",
    baseball: "Images/baseball.png",
    basketball: "Images/basketball.png",
    swimming: "Images/swim.png",
    chess: "Images/chess.jpg",
    cricket: "Images/cricket.jpg",
    golf: "Images/golf.jpg",
    hockey: "Images/hockey.jpg",
    skiing: "Images/ski.jpg",
    soccer: "Images/soccer.jpg",
    volleyball: "Images/volley.jpg",
  };

  //select random word from wordArray
  let selectedWords = wordsArray[Math.floor(Math.random() * wordsArray.length)];
  let selectImg = imgPaths[selectedWords];
  document.getElementById("gamePic").src = selectImg;
  //puts letters in selectedWords and splitting into array
  let letters = selectedWords.split("");
  //stores right guessed letters in array
  let rightGuess = [];
  //stores wrong guessed letters in array
  let wrongGuess = [];
  //total attempts, if attempts reach 0 game will over
  let attempts = 5;
  //letter counter
  let letterCount = letters.length;
  //right guessed letters counter
  let rightGuessCount = 0;

  for (let i = 0; i < selectedWords.length; i++) {
    //swapping selected word's letters to _
    rightGuess.push("_ ");
    // if player select right letter reveal letter
    document.getElementById("rightGuess").innerHTML = rightGuess.join("");
    // display attempt status after every key pressed
    document.getElementById("attempts").innerHTML = attempts;
    // if selected letter(or any other key) wrong store them into wrongGuess
    document.getElementById("wrongGuess").innerHTML = wrongGuess;
  }
  //store players key input into playerGuess
  document.onkeyup = function (event) {
    let playerGuess = event.key;

    //if selected letter's index greater than -1
    if (letters.indexOf(playerGuess) > -1) {
      for (let i = 0; i < letterCount; i++) {
        //if player guessed right letter from selected word then reveal letter and add 1 on right guessed letters
        if (letters[i] === playerGuess) {
          rightGuess[i] = playerGuess;
          document.getElementById("rightGuess").innerHTML = rightGuess.join("");
          rightGuessCount++;
        }
      }
    }
    // losses attempts and stores wrong guessed letters
    else {
      attempts--;
      wrongGuess.push(playerGuess);
      document.getElementById("attempts").innerHTML = attempts;
      document.getElementById("wrongGuess").innerHTML = wrongGuess;
    }
    // if right guessed letters count equal to selected word's letter count add 1 to total win number and display message.
    if (rightGuessCount === letters.length) {
      wins++;
      document.getElementById("wins").innerHTML = wins;
      document.getElementById("winlose").innerHTML =
        "You Win! Word: " + letters.join("");
      //start new game
      game();
    }
    // if there is no more attempts left display message
    if (attempts === 0) {
      document.getElementById("winlose").innerHTML =
        "You Lost! Word: " + letters.join("");
      //start new game
      game();
    }
  };
};
newGame();

