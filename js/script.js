var argButtonName, buttonTest;

/**
 * Describe this function...
 */
function buttonClicked(ButtonName) {
  clearMessages();
  console.log(ButtonName + ' został kliknięty');
   playerMove = buttonName;
   randomNumber = Math.floor(Math.random() * 3 + 1);
   console.log('wylosowana liczba to: ' + randomNumber);
   computerMove = getMoveName(randomNumber);
   console.log('ruch komputera to: ' + computerMove);
   displayResult(playerMove, computerMove);
}

playerMove = buttonName;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });


var playerMove;
playerMove = 'kamień';
printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
playerMove = 'papier';
printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to nozyczki, to wygrywasz!');
playerMove = 'nożyce';
printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to kamień, to wygrywasz!');


var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'papier';
} else if (playerInput == '3') {
  playerMove = 'nożyce';
} else {
  playerMove = 'nieznany ruch';
}
printMessage('Twój ruch: ' + playerMove);

playerInput == '1';

var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

/**
 * Describe this function...
 */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } 
  else if (argMoveId == 2) {
	  return 'papier';
  }
else if (argMoveId == 3) {
	   return 'nożyce';
} 
   else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień,papier lub nożyce".');
    return 'kamień,papier czy no';
  }
}

/**
 * Describe this function...
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  }
  else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
	  printMessage('Wygrywasz!');
  }
  else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
	  printMessage('Wygrywasz!');
  }
  else if (argPlayerMove == argComputerMove) {
	  printMessage('Remis!');
  }
  else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}


