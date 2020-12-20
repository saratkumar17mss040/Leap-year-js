const birthdayDate = document.querySelector('input[type="date"]');
const checkBtn = document.querySelector('button');
const output = document.getElementById('output');

checkBtn.addEventListener('click', checkLeapYear);

function checkLeapYear() {
	const year = birthdayDate.value.slice(0, 4);
	if (year.length === 0) {
		output.innerHTML =
			'<strong>Please select or enter your birthday !</strong>';
	} else {
		return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
			? (output.innerHTML = '<strong>You were born in a leap year !</strong>')
			: (output.innerHTML =
					'<strong>You were not born in a leap year !</strong>');
	}
}
