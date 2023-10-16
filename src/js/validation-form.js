import { regForNumbers, regForEmail, regForInn, regForTel } from './utils';
const form = document.querySelector('form');
const nameLabel = document.querySelector('.form__label--name');
const nameInput = document.querySelector('.form__label--name > .form__field');

const surnameLabel = form.querySelector('.form__label--surname');
const surnameInput = form.querySelector('.form__label--surname > .form__field');

const emailLabel = document.querySelector('.form__label--email');
const emailInput = document.querySelector('.form__label--email > .form__field');

const telLabel = form.querySelector('.form__label--tel');
const telInput = form.querySelector('.form__label--tel > .form__field');

const innLabel = form.querySelector('.form__label--inn');
const innInput = form.querySelector('.form__label--inn > .form__field');

const validateSurnameField = (label, input) => { 
    const error = label.querySelector('.form__field-error');
    const labelField = label.querySelector('.form__field-name');

    if (regForNumbers.test(input.value)) {
        error.style.opacity = 1;
        input.style.borderColor = 'rgba(245, 81, 35, 1)';
    } else { 
        error.style.opacity = 0;
        input.style.borderColor = 'rgba(0, 0, 0, 0.2)';
    }

    if (input.value.length > 0) {
        labelField.style.opacity = 1;
    } else { 
        labelField.style.opacity = 0;
    }
}

const validateTelField = (label, input) => {
    const error = label.querySelector('.form__field-error');
    const labelField = label.querySelector('.form__field-name');
    let inputValue = input.value.replace(/[a-zA-Z\.&^%$_=?><!@#*]/, '');

    if (regForTel.test(inputValue) || inputValue.length === 0) {
        error.style.opacity = 0;
        input.style.borderColor = 'rgba(0, 0, 0, 0.2)';
    } else { 
        error.style.opacity = 1;
        input.style.borderColor = 'rgba(245, 81, 35, 1)';
    }

    if (inputValue.length > 0) {
        labelField.style.opacity = 1;
    } else { 
        labelField.style.opacity = 0;
    }
}

const validateNameField = (label, input) => { 
    const error = label.querySelector('.form__field-error');
    const labelField = label.querySelector('.form__field-name');

    if (regForNumbers.test(input.value)) {
        error.style.opacity = 1;
        input.style.borderColor = 'rgba(245, 81, 35, 1)';
    } else { 
        error.style.opacity = 0;
        input.style.borderColor = 'rgba(0, 0, 0, 0.2)';
    }

    if (input.value.length > 0) {
        labelField.style.opacity = 1;
    } else { 
        labelField.style.opacity = 0;
    }
}

const validateEmailField = (label, input) => { 
    const error = label.querySelector('.form__field-error');
    const labelField = label.querySelector('.form__field-name');

    if (!regForEmail.test(input.value)) {
        error.style.opacity = 1;
        input.style.borderColor = 'rgba(245, 81, 35, 1)';
        error.textContent = 'Проверьте адрес электронной почты';
    } else { 
        error.style.opacity = 0;
        input.style.borderColor = 'rgba(0, 0, 0, 0.2)';
    }

    input.value.length === 0 ? labelField.style.opacity = 0 : labelField.style.opacity = 1;
}

const validateInnField = (label, input) => { 
    const error = label.querySelector('.form__field-extra-text');
    const labelField = label.querySelector('.form__field-name');

    if (regForInn.test(input.value)) {
        input.style.borderColor = 'rgba(245, 81, 35, 1)';
        error.style.opacity = 1;
        error.textContent = 'Проверьте ИНН';
        error.style.color = 'rgba(245, 81, 35, 1)';
    } else { 
        error.style.borderColor = 'rgba(0, 0, 0, 0.2)';
        error.style.color = 'rgba(0, 0, 0, 1)';
        error.textContent = 'Для таможенного оформления';
        input.style.borderColor = 'rgba(0, 0, 0, 0.2)';
    }

    input.value.length === 0 ? labelField.style.opacity = 0 : labelField.style.opacity = 1;
}

const onSubmitForm = (e) => {
    const nameInputValue = form.querySelector('.form__label--name > .form__field').value;
    const surnameInputValue = form.querySelector('.form__label--surname > .form__field').value;
    const emailInputValue = form.querySelector('.form__label--email > .form__field').value;
    const telInput = form.querySelector('.form__label--tel > .form__field').value;
    const innInput = form.querySelector('.form__label--inn > .form__field').value;

    let isValidName = !regForNumbers.test(nameInputValue);
    let isValidSurame = !regForNumbers.test(surnameInputValue);
    let isValidEmail = regForEmail.test(emailInputValue);
    let isValidTel = !regForTel.test(telInput);
    let isValidInn = !regForInn.test(innInput);

    if (isValidName && isValidSurame && isValidEmail && isValidInn && isValidTel) {
        alert('Заказ успешно создан!');
    } else { 
        alert('Форма заполнена неверно!');
    }
}

const initValidationForm = () => { 
    nameLabel.addEventListener('input', () => validateNameField(nameLabel, nameInput));
    surnameLabel.addEventListener('input', () => validateSurnameField(surnameLabel, surnameInput));
    emailLabel.addEventListener('input', () => validateEmailField(emailLabel, emailInput));
    telLabel.addEventListener('input', () => validateTelField(telLabel, telInput));
    innLabel.addEventListener('input', () => validateInnField(innLabel, innInput));

    form.addEventListener('submit', onSubmitForm);
}

export default initValidationForm;
