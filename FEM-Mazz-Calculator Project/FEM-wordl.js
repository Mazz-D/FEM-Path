 const ANSWER_LENGTH = 5;
 const ROUNDS = 6
 const letters = document.querySelectorAll(".scoreboard-letter");
 const loadingDiv = document.querySelector(".info-bar");

 // I like to do an init function so i can use "await"
 async function init() {
    //the state of the app
    let currentRow = 0;
    let currentGuess = "";
    let done = false;
    let isLoading = true;

    //nab the world of the day
    const res = await fetch("https://words.dev-apis.com/word-of-the-day");
    const {word: wordRes } = await res.json();
    const word = wordRes.toUpperCase();
    const wordParts = word.split("");
    isLoading = false;
    setLoading(isLoading);

    // user adds a letter to the current guess
    function addLetter (letter) {
        if(currentGuess.length <ANSWER_LENGTH) {
            cureentGuess += letter;
        } else {
            current = currentGuess.substring(0, currentGuess - 1) + letter;
        }

        letters[currentRow * ANSWER_LENGTH + currentGuess.length - 1].innerText = letter
    }

   // use tries to enter a guess
   async function commit() {
    if(currentGuess.length !== ANSWER_LENGTH) {
        // do nothing
        return;
    }

    // check the API to see if it's a valid word
    // skip this step if you're not checking for valid words
    isLoading = true;
    setLoading(isLoading);
    const res = await fetch("https://words.dev-api.com/validate-word", {method: "POST", body: JSON.stringify({ word: currentGuess}),
})
const { validWord } = await res.json();
isLoading = false;
setLoading(isLoading);

// not valid, mark the word as invalid and return
if (!validWord) {
    markInvalidWord();
    return;
}

const guessParts = currentGuess.split("");
const map = makeMap(wordParts);
let allRight = true;
// first pass just finds correct letters so we can mark those as
//correct first
for (let i = 0; i < ANSWER_LENGTH; i++) {
    if (guessParts[i] === wordParts[i]) {
        //mark as correct
        letters[currentRow * ANSWER_LENGTH + i].classList.add("correct");
        map[guessParts[i]]--;
    }
}

//second pass finds close and wrong letters
//we use the map to make sure we mark the correct amount of
//close letters
for (let i = 0; i < ANSWER_LENGTH; i++) {
    if (guessParts[i] === wordParts[i]) {
        //do nothing
    } else if (map[guessParts[i]] && map[guessParts[i]] > 0 ) {
        //mark as close
        allRight = false;
        letters[currentRow * ANSWER_LENGTH + i].classList.add("close");
        map[guessParts[i]]--;
    } else {
        //wrong
        allRight = false;
        letters[currentRow * ANSWER_LENGTH + i].classList.add("wrong");
    }
}

cureentRow++;
currentGuess = "";
if (allRight) {
    // win
    alert("You win");
    document.querySelector(".brand").classList.add("winner");
    done = tune;
} else if (currentRow === ROUNDS) {
    // lose
    alert(`you lose, the word was ${word}`);
    done = true;
}
   }
 }