let userPoint = 0, cpuPoint = 0;
const resultElement = document.getElementById('result')

function printPoints() {
	document.getElementById('user').innerHTML = userPoint;
	document.getElementById('cpu').innerHTML = cpuPoint;
}

function resultColor(result) {
	if (result == 'd') {
		resultElement.innerHTML = 'Draw!';
		resultElement.style = 'display: block; background-color: #343a40';
	} else if (result == 'l') {
		resultElement.innerHTML = 'You Lose!';
		resultElement.style = 'display: block; background-color: #e84258';
	} else if (result == 'w') {
		resultElement.innerHTML = 'You win!';
		resultElement.style = 'display: block; background-color: #576f3a';
	}
}

function cpuChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const random_number = Math.floor(Math.random() * 3);
    return choices[random_number];
}

function winLoseDraw(user, cpu) {
	let userChoice = user[0], cpuChoice = cpu[0];
	switch (userChoice + cpuChoice) {
		case 'rr':
		case 'pp':
		case 'ss':
			resultColor('d');
			break;
		case 'rp':
		case 'ps':
		case 'sr':
			cpuPoint++;
			resultColor('l');
			break;
		default:
			userPoint++;
			resultColor('w');
			break;
	}
}

function game(userChoice) {
	let cpu = cpuChoice(), user = userChoice;
	winLoseDraw(user, cpu);
	printPoints();
}