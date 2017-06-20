
var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png',
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png',
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png',
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png',
}

];
var cardsInPlay = [];

var resetButton = document.getElementById('resetButton');
	
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	    setTimeout(function(){ alert("You found a match!"); }, 600);
	} else {
		setTimeout(function(){ alert("Sorry try again :("); }, 600);
	}

};

var resetBoard = function() {

	cardsInPlay = [];

	document.getElementById('game-board').innerHTML = '';

	createBoard();
	createBoard();
};

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2) checkForMatch();
};

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);
}
};

createBoard();
createBoard();

resetButton.addEventListener('click', resetBoard);










