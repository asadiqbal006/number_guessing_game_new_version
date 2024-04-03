#! /usr/bin/env node
const randomNumber = Math.floor(Math.random() * 6 + 1);
import inquirer from "inquirer";
let guessChances = 10;
let defaultValue=true;
console.log("Welcome to Guessing Game");
console.log("Your number guessing chances are :",guessChances);

while (defaultValue) {
  const answers = await inquirer.prompt([
    {
      name: "guessNumber",
      type: "number",
      message: "Please guess a number between 1-6",
    },
  ]);
  if (answers.guessNumber < 1 || answers.guessNumber > 6) {
    console.log("Please enter a valid number");
    --guessChances;
    console.log("You remaining chances are :", guessChances);
  } else if (answers.guessNumber > randomNumber) {
    console.log("You number is greater than the random number");
    --guessChances;
    console.log("You remaining chances are :", guessChances);
  } else if (answers.guessNumber < randomNumber) {
    console.log("You number is less than the random number");
    --guessChances;
    console.log("You remaining chances are :", guessChances);
  } else if (answers.guessNumber == randomNumber) {
    console.log("Congratulation You guessed the correct number");
    --guessChances;
    defaultValue=false;
  }
  else if (guessChances == 0) {
    console.log("You are out of chances");
    defaultValue=false;
  } 
  else {
    console.log("You guessed wrong number");
    --guessChances;
    console.log("You remaining chances are :", guessChances);
  }
}
console.log("Game Over");
console.log(`The correct number is ${randomNumber}`);
console.log("You won the game on",guessChances,"guess chances left");
console.log("Thanks for playing the game");

