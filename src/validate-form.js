import { regForNumbers, regForEmail } from './utils';
const form = document.querySelector('form');
const nameLabel = document.querySelector('.form__label--name');
const nameInput = document.querySelector('.form__label--name > .form__field');

const surnameLabel = form.querySelector('.form__label--surname');
const surnameInput = form.querySelector('.form__label--surname > .form__field');

const emailLabel = document.querySelector('.form__label--email');
const emailInput = document.querySelector('.form__label--email > .form__field');

const telLabel = form.querySelector('.form__label--tel');
const telInput = form.querySelector('.form__label--tel > .form__field');

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

    // вынести (?)
    let pattern = /(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g;    // паттерн с проставленными скобками
    let correctNumber = inputValue.replace(pattern, '+7 ($2) $3-$4-$5');    //  заменa

    if (!pattern.test(inputValue) && inputValue.length === 0) {
        console.log(inputValue);
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

    input.value = correctNumber;
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

const onSubmitForm = (e) => { 
    e.preventDefault();
    const nameInputValue = form.querySelector('.form__label--name > .form__field').value;
    const surnameInputValue = form.querySelector('.form__label--surname > .form__field').value;
    const emailInputValue = form.querySelector('.form__label--email > .form__field').value;
    const telInput = form.querySelector('.form__label--tel > .form__field').value;

    validateEmailField(emailLabel, emailInput)

    let isValidName = !regForNumbers.test(nameInputValue);
    let isValidSurame = !regForNumbers.test(surnameInputValue);
    let isValidEmail = regForEmail.test(emailInputValue);

    if (isValidName && isValidSurame && isValidEmail) {
        alert('Заказ успешно создан!');
    } else { 
        alert('Форма заполнена неверно!');
    }
}

const initValidateForm = () => { 
    nameLabel.addEventListener('input', () => validateNameField(nameLabel, nameInput));
    surnameLabel.addEventListener('input', () => validateSurnameField(surnameLabel, surnameInput));
    emailLabel.addEventListener('input', () => validateEmailField(emailLabel, emailInput));

    telLabel.addEventListener('input', () => validateTelField(telLabel, telInput));

    form.addEventListener('submit', onSubmitForm);
}

export default initValidateForm;