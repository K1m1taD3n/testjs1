function validation(form) {
    function removeError(input) {
        const parent = input.parentNode;
        if (parent.classList.contains('error')) {
            parent.querySelector('.error-label').remove();
            parent.classList.remove('error');
        }
    }

    function createError(input, text) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('label');
        errorLabel.classList.add('error-label');
        errorLabel.textContent = text;
        parent.append(errorLabel);
        parent.classList.add('error');
    }

    function passwordValidation(input) {
        const parent = input.parentNode;
        const errorSpan = document.createElement('span');
        errorSpan.classList.add('error-span');
        if (input.value.length < input.dataset.minLength) {
            errorSpan.textContent = 'Password must be at least ' + input.dataset.minLength + ' characters long';
            parent.append(errorSpan);
            parent.classList.add('error-password');
        }
    }

    let result = true;

    const allInputs = form.querySelectorAll('input');

    for (const input of allInputs) {
        removeError(input);

        if (input.dataset.required === 'true') {
            if (input.value === '') {
                console.log('Error.');
                createError(input, 'Field is not filled in.');
                result = false;
            }
        }

        if (input.dataset.minLength) {
            passwordValidation(input);
            result = false;
        }
    }

    return result;
}

document.getElementById('add-form').addEventListener('submit', function (event) {
    event.preventDefault();

    if (validation(this) === true) {
        alert('Form is submitted successfully!');
    }
});

