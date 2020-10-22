/* Part 2 */
console.log('PART 2');
for (let i = 1; i <= 20; i++) {
	console.log(i);
}

/* Part 3 */
console.log('PART 3');

// I know, new line for every number is excessive. Blame it on prettier and / or eslint
const numbers = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	19,
	20,
];

// Tried to make it as compact and efficient as possible
for (i = 0; i < numbers.length; i++) {
	if (numbers[i] % 15 == 0) {
		console.log('eplekake');
	} else if (numbers[i] % 3 == 0) {
		console.log('eple');
	} else if (numbers[i] % 5 == 0) {
		console.log('kake');
	} else console.log(numbers[i]);
}
/* 
    Don't really see the necessity of the array in this case, as we could just use i itself.
    But your wish is my command
*/

/* Part 4 */
document.getElementById('title').innerText = 'Hello World!';

/* Part 5 */
const magic = document.getElementById('magic');

// The functions are activated in the html document through onclick parameters

function changeDisplay() {
	magic.style.display = 'none';
}

function changeVisibility() {
	magic.style.display = 'block';
	magic.style.visibility = 'hidden';
}

function reset() {
	magic.style.display = 'block';
	magic.style.visibility = 'visible';
}

/* Part 6 */
const technologies = [
	'HTML5',
	'CSS3',
	'JavaScript',
	'Python',
	'Java',
	'AJAX',
	'JSON',
	'React',
	'Angular',
	'Bootstrap',
	'Node.js',
];

const list = document.getElementById('tech');
for (i = 0; i < technologies.length; i++) {
	list.innerHTML += '<li>' + technologies[i] + '</li>';
}
