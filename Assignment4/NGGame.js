let y = Math.floor(Math.random() * 10 + 1);
let guess = 0; // initialize guess to 0

document.getElementById("submitguess").onclick = function() {
    let x = parseInt(document.getElementById("guessField").value); // convert x to a number
    guess++; // increment guess count
    if (x === y) {
        alert("Congratulations!! you guessed it right in " + guess + " GUESS");
        guess = 0; // reset guess count
    } else if (x > y) {
        alert("Your guess is too high. Try Again.");
    } else {
        alert("Your guess is too low. Try Again.");
    }
}