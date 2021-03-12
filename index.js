// Store words
const WORDBANK = [
    "rumor", "happen", "match", "sail", "sick", "floor", "summit",
    "shadow", "census", "giant", "death", "start", "Sunday", "squash",
    "tune", "clean", "chain", "sacred", "father", "salmon",
    "tense", "halt"
];


let guesses = [];
let attempts = 6;
let correctAttempts;

// Select random word from wordbank
const pickWord = () => WORDBANK[Math.floor(Math.random() * WORDBANK.length)];

// Display dashes according to word length
let word = pickWord();
console.log(word, "length: " + word.length);
for (let i = 0; i < word.length; i++) {
    // Get output element
    const output = document.querySelector(".output");
    // Create letter-input elements
    const letterBox = document.createElement("div");
    letterBox.className = "letter-box";
    letterBox.innerHTML =
        `<div class="letter"></div>
        <div class="letter-floor"></div>`;
    output.appendChild(letterBox);
}

//Get input element
const letterInput = document.querySelector('#letter-input');

// On input value change
letterInput.addEventListener("change", () => {
    const guess = letterInput.value;
    // If guess is one letter and is included in the word
    if (guess.length === 1 && word.includes(guess)) {
        guesses.push(guess);
        console.log(guesses);
        // for each letter of the word
        for (let i = 0; i < word.length; i++) {
            // if guess is === to the word[index of i]
            if (guess === word[i]) {
                const letterDiv = document.querySelectorAll(".letter");
                // for each letterDiv elemetn
                for (let j = 0; j < letterDiv.length; j++) {
                    // if the index of the element is equal the index of the guess in the word
                    if (j === word.indexOf(guess)) letterDiv[j].textContent = word[j];
                }
            }
        }
    } else {
        if (attempts > 0) {
            attempts -= 1;
            const attemptCount = document.querySelector(".attempt-count");
            attemptCount.textContent = attempts;
        } else {
            attempts = 0;
        }


    };
});

