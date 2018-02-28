function startGame(){
    var numberOfGuesses = 0;
    number = getNumber();
    guess = getGuess();

    while(guess != number){
        if(guess > number){
            guess = tooHigh();
            numberOfGuesses++;
            
        }
        else{
            guess = tooLow();
            numberOfGuesses++;
            
        }
    }
    if(guess == number){
        numberOfGuesses++;
        alert("Correct! It took you " + numberOfGuesses + " tries to guess the number " + number);
    }
    
}
function getNumber() {
    
    let numString = prompt("Player 1, please enter a number: ");
    
    let numInt = parseInt(numString);
    
    return numInt;
}
function getGuess() {
    
    let numString = prompt("Player 2, please guess a number: ");
    
    let numInt = parseInt(numString);
    
    return numInt;
}
function tooHigh() {
    
    let numString = prompt("Too high, please guess another number: ");
    
    let numInt = parseInt(numString);
    
    return numInt;
}
function tooLow() {
    
    let numString = prompt("Too low, please guess another number: ");
    
    let numInt = parseInt(numString);
    
    return numInt;
}
