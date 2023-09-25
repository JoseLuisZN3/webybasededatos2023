const words = [
    "javascript", "html", "css", "programacion", "web",
    "desarrollo", "aplicacion", "tecnologia", "computadora", "framework",
    "base de datos", "diseño", "responsive", "frontend", "backend",
    "cliente", "servidor", "seguridad", "internet",
    "software", "hardware", "encriptacion", "programador", "redes",
    "repositorio", "ciberseguridad"
];
let selectedWord = "";
let wordToGuess = [];
let remainingAttempts = 6;

function chooseRandomWord() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    wordToGuess = selectedWord.split("").map(letter => ({ letter, guessed: false }));
}

function displayWord() {
    const wordContainer = document.getElementById("word");
    wordContainer.innerHTML = wordToGuess.map(item => (item.guessed ? item.letter : "_")).join(" ");
}

function displayLetters() {
    const letterContainer = document.getElementById("letters");
    letterContainer.innerHTML = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))
        .map(letter => `<button class="letter" onclick="checkLetter('${letter}')">${letter}</button>`)
        .join(" ");
}

function checkLetter(letter) {
    if (remainingAttempts > 0) {
        const correct = wordToGuess.some(item => {
            if (item.letter.toUpperCase() === letter) {
                item.guessed = true;
                return true;
            }
            return false;
        });

        if (!correct) {
            remainingAttempts--;
            document.getElementById("remaining-attempts").textContent = remainingAttempts;
        }

        displayWord();

        if (wordToGuess.every(item => item.guessed)) {
            document.getElementById("message").textContent = "¡Felicidades! Has adivinado la palabra correctamente.";
            document.getElementById("restart-button").style.display = "block";
        } else if (remainingAttempts === 0) {
            document.getElementById("message").textContent = `¡Agotaste tus intentos! La palabra era "${selectedWord}".`;
            document.getElementById("restart-button").style.display = "block";
        }
    }
}

function restartGame() {
    remainingAttempts = 6;
    document.getElementById("remaining-attempts").textContent = remainingAttempts;
    document.getElementById("message").textContent = "";
    document.getElementById("restart-button").style.display = "none";
    chooseRandomWord();
    displayWord();
    displayLetters();
}
function startGame() {
    document.getElementById("start-container").style.display = "none";
    document.getElementById("word-container").style.display = "block";
    chooseRandomWord();
    displayWord();
    displayLetters();
}

chooseRandomWord();
displayWord();
displayLetters();