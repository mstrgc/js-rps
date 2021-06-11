let userPoint = 0, cpuPoint = 0;

function printPoints() {
	document.getElementById('user').innerHTML = userPoint;
	document.getElementById('cpu').innerHTML = cpuPoint;
}

function cpuChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const random_number = Math.floor(Math.random() * 3);
    return choices[random_number];
}

function winLoseDraw(user, cpu) {
	let userChoice = user[0], cpuChoice = cpu[0], result;
	switch (userChoice + cpuChoice) {
		case 'rr':
		case 'pp':
		case 'ss':
			result = 'Draw!';
			break;
		case 'rp':
		case 'ps':
		case 'sr':
			cpuPoint++;
			result = 'You Lose!';
			break;
		default:
			userPoint++;
			result = 'You Win!';
			break;
	}
	document.getElementById('result').innerHTML = result;
}

function game(userChoice) {
	let cpu = cpuChoice(), user = userChoice;
	winLoseDraw(user, cpu);
	printPoints();
}