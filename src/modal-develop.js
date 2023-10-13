// import { FIRST_ADDRESS_LIST, SECOND_ADDRESS_LIST } from './constants';
// import { createAddressList } from './utils/createAddressList';

const modalDevelop = document.querySelector('.modal-develop');
const editDeliveryButton = document.querySelector('.delivery__edit');
const editDevelopButton = document.querySelector('.delivery-info__edit');
const closeModalButton =  modalDevelop.querySelector('.modal__close-icon');
const saveButton = modalDevelop.querySelector('.button-select');
const methodInputsParent = modalDevelop.querySelector('.method');
const firstAddressesBlock = modalDevelop.querySelector('.addresses-point-block');
const secondAddressesBlock = modalDevelop.querySelector('.addresses-courier-block');

const currentMethod = document.querySelector('.point__title'); // Способ доставки из блока на странице
const currentAddress = document.querySelector('.point__address'); // Адрес из блока на странице

const totalPointDeliveryNode = document.querySelector('.delivery-info__title');
const totalDeliveryAddressNode = document.querySelector('.delivery-info__address');

// Открытие модального окна "Способ доставки"
function openModal() { 
    onChangeAddressList();
    modalDevelop.classList.add('modal-develop__show-modal');
    document.body.style.overflowY = 'hidden';   

    
    // Для связывания, чтобы текущий адрес и способ доставки были выбранными в списке
    const methodList = modalDevelop.querySelectorAll('.method__item'); // Способы доставки из модалки
    let cerrentMet = 'Пункт выдачи';
    for (let i = 0; i < methodList.length; i++) { 
        const method = methodList[i].querySelector('.method__text');
        const input = methodList[i].querySelector('.method__input');
        const s = method.getAttribute("data-method");
        if (currentMethod.textContent.trim() === s) {
            input.checked = true;
            cerrentMet = s;
        }
    }

    let addressList;
    if (cerrentMet === 'Пункт выдачи') {
        addressList = firstAddressesBlock.querySelectorAll('.address__label');
        let IdFirstInput = addressList[0].getAttribute('for');
        let input = document.getElementById(IdFirstInput);
        input.checked = true;
    } else { 
        addressList = secondAddressesBlock.querySelectorAll('.address__label');
    }
    
    for (let i = 0; i < addressList.length; i++) { 
        const address = addressList[i].textContent.trim();
        if (currentAddress.textContent.trim() === address) {
            let inputId = addressList[i].getAttribute('for');
            let input = document.getElementById(inputId);
            input.checked = true;
        } else { 

        }
    }

}

// Закрытие модального окна
function closeModal() { 
    modalDevelop.classList.remove('modal-develop__show-modal');
    document.body.style.overflowY = 'scroll';
}

// Сохранение и изменение данных
function onSaveClickButton() { 
    const addressInfo = modalDevelop.querySelector('.address__input:checked + .address__info');
    const newAddress = addressInfo.querySelector('.address__label').textContent.trim(); // Новый выбраный адрес
    const deliveryMethod = modalDevelop.querySelector('.method__input:checked + .method__text').textContent; // Новый способ доставки

    currentAddress.textContent = newAddress;
    currentMethod.textContent = deliveryMethod === 'Курьером' ? 'Курьером' : 'Пункт выдачи';

    totalDeliveryAddressNode.textContent = newAddress;
    totalPointDeliveryNode.textContent = deliveryMethod === 'Курьером' ? 'Доставка курьером' : 'Доставка в пункт выдачи';
}

// Удаление адреса
const deleteAddress = (elementNode, deliveryMethod) => {
    const addressId = elementNode.getAttribute('data-address');

    if (deliveryMethod === 'courier') { 
        const addressNode = secondAddressesBlock.querySelector(`.address[data-address="${addressId}"]`);
        addressNode.parentNode.removeChild(addressNode);
    } else { 
        const addressNode = firstAddressesBlock.querySelector(`.address[data-address="${addressId}"]`);
        addressNode.parentNode.removeChild(addressNode);
    }
};

const onChangeAddressList = () => { 
    const hh = methodInputsParent.querySelectorAll('.method__input');
    if (!!hh[0].checked) {
        firstAddressesBlock.classList.remove('addresses-block--hidden');
        secondAddressesBlock.classList.add('addresses-block--hidden');
    } else { 
        secondAddressesBlock.classList.remove('addresses-block--hidden');
        firstAddressesBlock.classList.add('addresses-block--hidden');
    }
}

const initModalDevelop = () => {
    methodInputsParent.addEventListener('change', () => { 
        onChangeAddressList();
    });
    editDeliveryButton.addEventListener('click', openModal);

    editDevelopButton.addEventListener('click', openModal);

    closeModalButton.addEventListener('click', closeModal);

    saveButton.addEventListener('click', () => {
        onSaveClickButton();
        closeModal();
        // alert('Данные успешно сохранены!');
    });

    firstAddressesBlock.addEventListener('click', (e) => {
        const className = e.target.getAttribute('class');

        if (className === 'address__delete-svg') {
            deleteAddress(e.target, 'point');
        }
    });

    secondAddressesBlock.addEventListener('click', (e) => {
        const className = e.target.getAttribute('class');

        if (className === 'address__delete-svg') {
            deleteAddress(e.target, 'courier');
        }
    });

}

export default initModalDevelop;
