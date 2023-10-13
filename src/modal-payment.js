const modalPayment =  document.querySelector('.modal-payment');
const editPaymentButton = document.querySelector('.payment__edit');
const editButtonInTotalBlock = document.querySelector('.payment-by-card__edit');
const closePaymentModalButton =  modalPayment.querySelector('.modal__close-icon');
const saveChangesButton = modalPayment.querySelector('.button-select');
const currentCardNumber = document.querySelector('.payment__card-number'); // Текущий номер карты
const cardNumbers = modalPayment.querySelectorAll('.card__number'); // Список всех номеров карт в модалке

// Открытие модального окна "Способ оплаты"
function openModal() { 
    modalPayment.classList.add('modal-payment__show-modal');
    document.body.style.overflowY = 'hidden';

    // Для связывания, чтобы текущий номер был выбранным в списке
    for (let i = 0; i < cardNumbers.length; i++) { 
        if (currentCardNumber.textContent.trim() === cardNumbers[i].textContent.trim()) {
            let inputId = cardNumbers[i].getAttribute('for');
            let input = document.getElementById(inputId);
            input.checked = true;
        }
    }
}

// Закрытие модального окна
function closeModal() { 
    modalPayment.classList.remove('modal-payment__show-modal');
    document.body.style.overflowY = 'scroll';
}

// Сохранение и изменение данных
function onSaveClickButton() {
    const currentCardIcon = document.querySelector('.payment__card > img'); 
    const cardNumber = modalPayment.querySelector('.card__radio-btn:checked + .card__number').textContent.trim(); // Номер выбранной карты
    const cardId = modalPayment.querySelector('.card__radio-btn:checked').id; // ID выбранной карты

    const currentCardIconNode = document.querySelector('.payment-by-card__card-icon > img'); // add class
    const cardNumberNode = document.querySelector('.payment-by-card__card-number');

    currentCardNumber.textContent = cardNumber;
    currentCardIcon.src = `./images/icons/cards-icons/${cardId}.svg`;

    console.log(currentCardIconNode, `./images/icons/cards-icons/${cardId}.svg`);
    // информация в блоке с итоговыми данными
    cardNumberNode.textContent = cardNumber;
    currentCardIconNode.src = `./images/icons/cards-icons/${cardId}.svg`;
}

const initModalPayment = () => {
    editPaymentButton.addEventListener('click', openModal);
    editButtonInTotalBlock.addEventListener('click', openModal);
    closePaymentModalButton.addEventListener('click', closeModal);
    saveChangesButton.addEventListener('click', function () {
        onSaveClickButton();
        closeModal();
        // alert('Данные успешно сохранены!');
    });
}

export default initModalPayment;
