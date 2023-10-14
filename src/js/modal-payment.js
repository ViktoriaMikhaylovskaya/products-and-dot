const modalPaymentNode =  document.querySelector('.modal-payment');
const editPaymentButton = document.querySelector('.payment__edit');
const editButtonInTotalBlock = document.querySelector('.payment-by-card__edit');
const closeModalButton =  modalPaymentNode.querySelector('.modal__close-icon');
const saveChangesButton = modalPaymentNode.querySelector('.button-select');
const currentCardNumber = document.querySelector('.payment__card-number');
const cardNumbers = modalPaymentNode.querySelectorAll('.card__number');

const openModal = () => { 
    modalPaymentNode.classList.add('modal-payment__show-modal');
    document.body.style.overflowY = 'hidden';

    for (let i = 0; i < cardNumbers.length; i++) { 
        if (currentCardNumber.textContent.trim() === cardNumbers[i].textContent.trim()) {
            let inputId = cardNumbers[i].getAttribute('for');
            let input = document.getElementById(inputId);
            input.checked = true;
        }
    }
}

const closeModal = () => { 
    modalPaymentNode.classList.remove('modal-payment__show-modal');
    document.body.style.overflowY = 'scroll';
}

const onSaveClickButton = () => {
    const currentCardIcon = document.querySelector('.payment__card > img'); 
    const cardNumber = modalPaymentNode.querySelector('.card__radio-btn:checked + .card__number').textContent.trim(); // Номер выбранной карты
    const cardId = modalPaymentNode.querySelector('.card__radio-btn:checked').id; // ID выбранной карты

    const currentCardIconNode = document.querySelector('.payment-by-card__card-icon > img');
    const cardNumberNode = document.querySelector('.payment-by-card__card-number');

    currentCardNumber.textContent = cardNumber;
    currentCardIcon.src = `./images/icons/cards-icons/${cardId}.svg`;

    cardNumberNode.textContent = cardNumber;
    currentCardIconNode.src = `./images/icons/cards-icons/${cardId}.svg`;
}

const initModalPayment = () => {
    editPaymentButton.addEventListener('click', openModal);

    editButtonInTotalBlock.addEventListener('click', openModal);

    closeModalButton.addEventListener('click', closeModal);

    saveChangesButton.addEventListener('click', function () {
        onSaveClickButton();
        closeModal();
    });
}

export default initModalPayment;
