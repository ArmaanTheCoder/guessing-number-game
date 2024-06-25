const Submit = document.getElementById("Submit");
const Input = document.getElementById("Input");
const Guesses = document.getElementById("GuessNumber");
const GuessingGame = document.getElementById("Body");
const Closeness = document.getElementById("Closeness");
const Reset = document.getElementById("myReset");
let myRandom = (Math.random() * 20);
let sound = new Audio("7cr.mp3");
let y;

myRandom = Math.floor(myRandom) + 1;

Reset.onclick = function () {
    myRandom = (Math.random() * 20);
    myRandom = Math.floor(myRandom) + 1;
    GuessingGame.classList.remove("green");
    Guesses.textContent = 0;
    Closeness.textContent = "";

    y = 3;
}
Submit.onclick = function () {

    let Guess = Input.value;
    Guess = Number(Guess);

    if (y == 5) {
        Closeness.textContent = "Please click reset to play again";
        GuessingGame.classList.remove("green");

    }
    else if (Guess == myRandom) {
        GuessingGame.classList.add("green");
        let n = Guesses.textContent;
        n = Number(n);
        Guesses.textContent = n + 1;
        let z = n + 1;
        Closeness.textContent = "Correct DAMN !!, took you " + z + " Guesses";
        sound.play();
        y = 5;
    }
    else {
        let a = myRandom - 5;
        let b = myRandom + 5;
        if (Guess > 20 || Guess < 1) {
            Closeness.textContent = "Please enter a number between 1 and 20";
        }
        else if (Guess > a && Guess < myRandom) {
            Closeness.textContent = "Close but Guess Higher";
        }
        else if (Guess < b && Guess > myRandom) {
            Closeness.textContent = "Close but Guess Lower";
        }
        else if (Guess > myRandom) {
            Closeness.textContent = "too High";
        }
        else {
            Closeness.textContent = "too low";
        }
    }
    while (Guess != myRandom && Guess >= 1 && Guess <= 20 && y != 5) {
        let n = Guesses.textContent;
        n = Number(n);
        Guesses.textContent = n + 1;
        break;
    }


}



