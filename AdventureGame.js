const readline = require("readline-sync");
let playName = "";
const readlineSync = require('readline-sync');

// Ask for the player's name
const playerName = readlineSync.question('What is your name? ');

// Greet the player
console.log(`Hello, ${playerName}!`);
// Define starting stats
const startingStats = {
    health: 100,
    strength: 10,
    inventory: []
   };
   let playerGold = 20; // Starting gold
  
  // Display starting stats
  console.log("\nYour starting stats:");
  console.log(`Health: ${startingStats.health}`);
  console.log(`Strength: ${startingStats.strength}`);
  console.log(`Inventory: ${startingStats.inventory.length > 0 ? startingStats.inventory.join(", ") : "Empty"}`);
/*
Adventure Game
This game will be a text-based game where the player will be able
to make choices that affect the outcome of the game.
The player will be able to choose their own path and the story will change
based on their decisions.
*/

// Display the game title
console.log("Welcome to the Adventure Game");

// Add a welcome message
console.log("Prepare yourself for an epic journey!");