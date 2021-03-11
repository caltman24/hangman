// Store words
const WORDBANK = ["rumor","happen","match","sail","sick","floor","summit","shadow","census"]

// Select random word from wordbank
const pickWord = () => WORDBANK[Math.floor(Math.random() * WORDBANK.length)];

// Get output element
const output = document.querySelector(".output");

// Display dashes according to word length
let word = pickWord();
console.log(word, "length: " + word.length);

for (let i = 0; i < word.length; i++) {
    // Create letter-input elements
    const letterBox = document.createElement("div");
    letterBox.className = "letter-box";
    letterBox.innerHTML = 
        `<div class="letter">${i + 1}</div>
        <div class="letter-floor"></div>`
    output.appendChild(letterBox);
}



//Get input element
const letterInput = document.querySelector('#letter-input');

