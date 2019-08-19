
var score, activePlayer, roundScore, startGame, choosen, lastdice, finalScore;

document.getElementById('button').addEventListener('click', newGame); 
document.querySelector('.btn-new').addEventListener('click', refresh);

function refresh() {
	document.querySelector('.container').style.visibility = 'hidden';
	document.querySelector('#level').style.visibility = 'visible';
	document.getElementById('button').addEventListener('click', newGame);
}

function newGame() {
	document.querySelector('.container').style.visibility = 'visible';
	document.querySelector('#level').style.visibility = 'hidden';
	 choosen = document.querySelector('#insert').value;
 scores = [0, 0];
 activePlayer = 0;
 roundScore = 0;
 startGame = true;

 document.querySelector('.dice').style.display = 'none';

document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;
document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;
document.querySelector('#name-0').innerHTML = 'Player 1';
document.querySelector('#name-1').innerHTML = 'Player 2';
document.querySelector('.player-0-platform').classList.remove('winner');
document.querySelector('.player-1-platform').classList.remove('winner');
document.querySelector('.player-0-platform').classList.remove('active');
document.querySelector('.player-0-platform').classList.add('active');
document.querySelector('.player-1-platform').classList.remove('active');
}





document.querySelector('.btn-roll').addEventListener('click', function() {
	if (startGame) {var dice = Math.floor(Math.random() * 6) + 1;

        var diceView = document.querySelector('.dice') 
       diceView.style.display = 'block';
       diceView.src = 'dice-' + dice + '.png';


    if(dice !== 1) {
       
       roundScore += dice;
       document.getElementById('current-' + activePlayer).innerHTML = roundScore; 
    }
    else {
    	document.querySelector('.dice').style.display = 'none';
    	roundScore = 0;
        document.getElementById('current-' + activePlayer).innerHTML = roundScore;
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
        document.querySelector('.player-0-platform').classList.toggle('active');
        document.querySelector('.player-1-platform').classList.toggle('active');
    }if (lastdice === 6 && dice === 6) {
    	document.querySelector('.dice').style.display = 'none';
       roundScore = 0;
       scores[activePlayer] = roundScore;
       document.getElementById('current-' + activePlayer).innerHTML = roundScore;
       document.getElementById('score-' + activePlayer).innerHTML = scores[activePlayer];
       activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
        document.querySelector('.player-0-platform').classList.toggle('active');
        document.querySelector('.player-1-platform').classList.toggle('active');
    }}

	lastdice = dice;
});

document.querySelector('.btn-hold').addEventListener('click', function() {
	scores[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).innerHTML = scores[activePlayer];
    document.querySelector('.dice').style.display = 'none';
    
    if (choosen) {
        finalScore = choosen;
    } else {
    	finalScore = 100;
    }

    if (scores[activePlayer] >= finalScore) {
    	document.querySelector('#name-' + activePlayer).innerHTML = 'WINNER !';
        document.querySelector('.player-' + activePlayer + '-platform').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-platform').classList.remove('active');
        document.querySelector('.dice').style.display = 'none'; 
        roundScore = 0;
        document.getElementById('current-' + activePlayer).innerHTML = roundScore;    
        startGame = false;
    } else {
    	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
        roundScore = 0;
    	document.querySelector('#current-0').textContent = 0;
        document.querySelector('#current-1').textContent = 0;
        document.querySelector('.player-0-platform').classList.toggle('active');
        document.querySelector('.player-1-platform').classList.toggle('active');
    }
    
});




