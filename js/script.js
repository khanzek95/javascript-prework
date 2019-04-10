
function buttonClicked(buttonName) {
  clearMessages();
  console.log(buttonName + ' został kliknięty');
  const playerMove = buttonName;
   randomNumber = Math.floor(Math.random() * 3 + 1);
   console.log('wylosowana liczba to: ' + randomNumber);
   const computerMove = getMoveName(randomNumber);
   console.log('ruch komputera to: ' + computerMove);
   displayResult(playerMove, computerMove);
}

function getMoveName(MoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + MoveId);
  if (MoveId == 1) {
    return 'kamień';
  } 
  else if (MoveId == 2) {
	  return 'papier';
  }
else if (MoveId == 3) {
	   return 'nożyce';
} 
   else {
    printMessage('Nie znam ruchu o id ' + MoveId + '. Zakładam, że chodziło o "kamień,papier lub nożyce".');
    return 'kamień,papier czy no';
  }
}

function displayResult(PlayerMove, ComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + PlayerMove + ', ' + ComputerMove);
  if (PlayerMove == 'papier' && ComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  }
  else if (PlayerMove == 'kamień' && ComputerMove == 'nożyce') {
	  printMessage('Wygrywasz!');
  }
  else if (PlayerMove == 'nożyce' && ComputerMove == 'papier') {
	  printMessage('Wygrywasz!');
  }
  else if (PlayerMove == ComputerMove) {
	  printMessage('Remis!');
  }
  else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + ComputerMove + ', a Ty ' + PlayerMove);
}

const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });
