"use strict";
 
/*
   WEB 2630 Javascript Review
   
  By: Amber Jeffers
   Date:   August 30, 2021
   Filename: rpsscripts.js
*/


// Allow the user to select Rock, Paper, or Scissors
    // Event Listener
    // Highlight Selected

// Next the computer will randomly choose 
    // Highlight Selected

// Generate Message saying who won [maybe already part of game logic the way you wrote it]

// Game Logic
    // If statements for all variations
    // Best 2 out of 3 loop 

// Final Win/Loss Message & Final Score

// Scoreboard
    // div#playerSide th
    // div#computerSide th








    
// Computer Randomly Chooses Next
function computerAI() 
{
   srand (time(NULL));
   let ai = rand() % 3 + 1;
   /////////// NEED TO DISPLAY CHOICE WITH IMAGE //////////////
   document.write("Computer chose", ai);
   return ai;
}

// Game Logic
/////////////// NEED TO CONNECT IMAGE AND NUMBERS TOGETHER  ///////////////////
/////////////// 1 = Rock, 2 = Paper, 3 = Scissors  ///////////////////
function RockPaperScissors(player, computer) 
{
   if (player == 1 && computer == 1)
   {
      document.write("It's a tie!")
   }

   if (player == 1 && computer == 2)
   {
      document.write("The computer wins!")
   }

   if (player == 1 && computer == 3)
   {
      document.write("You win!")
   }

   if (player == 2 && computer == 1)
   {
      document.write("You win!")
   }

   if (player == 2 && computer == 2)
   {
      document.write("It's a tie!")
   }

   if (player == 2 && computer == 3)
   {
      document.write("The computer wins!")
   }

   if (player == 3 && computer == 1)
   {
      document.write("The computer wins!")
   }

   if (player == 3 && computer == 2)
   {
      document.write("You win")
   }

   if (player == 3 && computer == 3)
   {
      document.write("It's a tie!")
   }

   else 
   {
      document.write("Please enter 1, 2, or 3")
   }
}