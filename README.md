![Picture 1](https://media1.tenor.com/images/acbbb3e80901dacf702a58f37784a2a3/tenor.gif)
# Summary:
This is a game that allows 2 players to play "Head or Tails". The first user chooses his decision head or tail and chooses the corresponding button. Then his buttons are locked (marked with red) and he can't change his choice. The same is done with the 2nd user - User 2. After the 2 users have picked their choice, there is a button "Click" in the center of the screen. After clicking it, the coin starts spinning. Then the coin stops spinning, the result is displayed on the screen.
Each player gets a win or lose point. After 5 rounds the winner is decided and the game starts again.

# Code explanation:
The 2 users are objects with properties: name, wins, loses,  chosenSide. They are defined in elements/variables.js
After throwing the coin, their properties are updated. For example, when they decided what side they will pick, the chosenSide get values - Head/Tail.
When the coin stops spinning, "chosenSide" is back to null. If the users has guessed it corrected he get 1 win point and if he is wrong 1 lose point.
In the end of the 5th round there is a validation checking who has more wins. If both players have the same wins, they get a Draw message. If one of them has won, it displays a winning message.

# Code structure.
HTML - Single page - index.html
CSS
index.css - layout, buttons, fields
coin.css - related with coinflip animation (keyframes, animation etc...)
JS
index.js - main JavaScript file which index.html calls. (EventListeners are defined there)
elements:
htmlEelements.js - all HTML elements are bind to variables and exported to other files
variables.js - variables(player objects) and coin with coin functions(to modify it from other js files)

buttonFunctions:
hideButton.js - when player chooses head or tail, his buttons are locked and marked as red.
htmlFunctions.js - all css-changes are made into functions and exported to prevent boilerplate.

coinFunctions:
coinFlip.js - when the flip button is clicked, this code is loaded. Depending on the Random const result, a winning side is picked. After waiting 2900ms the result is displayed.

userFunctions:
resultProcess.js - after coinFlip is called the result is updated here. With processResult user objects are updated, chosenSide is back to null and if 5 rounds have passed the winner is declared.
increaseValues.js -  functions for player object to increase win or lose property.
nullateValues.js - functions that clear results when needed.

Img Folder: Head and Tail pictures are stored there. The coin is Bulgarian Lev.