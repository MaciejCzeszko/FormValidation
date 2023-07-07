const username = document.querySelector('#username');
const password = document.querySelector('#password');
const passwordConf = document.querySelector('#pass-confirmation');
const agreement = document.querySelector('#agree');
const submitBtn = document.querySelector('#submit');
const errors = document.querySelector('.errors');
const errorList = document.querySelector('.errors-list');

// validation section

function validateUsername() {
	const regex = /^.{6,}$/;
	if (!regex.test(username.value)) {
		return false;
	} else {
		return true;
	}
}

function validatePassword() {
	const regex = /^.{10,}$/;
	if (!regex.test(password.value)) {
		return false;
	} else {
		return true;
	}
}

function isChecked() {
	if (!agreement.checked) {
		return false;
	} else {
		return true;
	}
}

function comparePasswords() {
	if (password.value === '') return false;
	if (password.value !== passwordConf.value) {
		return false;
	} else {
		return true;
	}
}

function validate() {
	if (
		!validateUsername() ||
		!validatePassword() ||
		!isChecked() ||
		!comparePasswords()
	) {
		return false;
	} else {
		return true;
	}
}

// showing errors section

function checkErrors() {
	validate()
		? (errors.style.display = 'none')
		: (errors.style.display = 'block');
	usernameError();
	passwordError();
	comparePassError();
	agreementError();
}

function usernameError() {
	if (!validateUsername()) {
		const li = document.createElement('li');
		li.classList.add('username');
		li.innerText = 'Username must be at least 6 characters long';
		errorList.appendChild(li);
	}
	if (errorList === '')
		window.location.href = 'http://127.0.0.1:5500/thank-you.html';
}

function passwordError() {
	if (!validatePassword()) {
		const li = document.createElement('li');
		li.classList.add('password');
		li.innerText = 'Password must be at least 10 characters long';
		errorList.appendChild(li);
	}
}

function comparePassError() {
	if (!comparePasswords()) {
		const li = document.createElement('li');
		li.classList.add('compare');
		li.innerText = 'Passwords must match';
		errorList.appendChild(li);
	}
}

function agreementError() {
	if (!isChecked()) {
		const li = document.createElement('li');
		li.classList.add('agree');
		li.innerText = 'You must accept the terms';
		errorList.appendChild(li);
	}
}

function clearState() {
	errorList.innerHTML = '';
}

submitBtn.addEventListener('click', (e) => {
	clearState();
	checkErrors();
	if (errorList.innerHTML === '') {
		checkErrors();
	} else {
		e.preventDefault();
	}
});
