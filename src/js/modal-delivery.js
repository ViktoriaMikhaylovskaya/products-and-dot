const modalDeliveryNode = document.querySelector('.modal-delivery');
const editDeliveryButton = document.querySelector('.delivery__edit');
const editButtonInTotalBlock = document.querySelector('.delivery-info__edit');
const closeModalButton =  modalDeliveryNode.querySelector('.modal__close-icon');
const saveButton = modalDeliveryNode.querySelector('.button-select');
const methodInputsParent = modalDeliveryNode.querySelector('.method');
const firstAddressesBlock = modalDeliveryNode.querySelector('.addresses-point-block');
const secondAddressesBlock = modalDeliveryNode.querySelector('.addresses-courier-block');

const currentMethodNode = document.querySelector('.point__title'); // Способ доставки из блока на странице
const currentAddressNode = document.querySelector('.point__address'); // Адрес из блока на странице

const totalPointDeliveryNode = document.querySelector('.delivery-info__title');
const totalDeliveryAddressNode = document.querySelector('.delivery-info__address');

const openModal = () => { 
    onChangeAddressList();
    modalDeliveryNode.classList.add('modal-delivery__show-modal');
    document.body.style.overflowY = 'hidden';   

    const methodList = modalDeliveryNode.querySelectorAll('.method__item');
    let defaultMethod = 'Пункт выдачи';
    for (let i = 0; i < methodList.length; i++) { 
        const methodNode = methodList[i].querySelector('.method__text');
        const inputNode = methodList[i].querySelector('.method__input');
        const currentMethod = methodNode.getAttribute("data-method");
        if (currentMethodNode.textContent.trim() === currentMethod) {
            inputNode.checked = true;
            defaultMethod = currentMethod;
        }
    }

    let addressList;
    if (defaultMethod === 'Пункт выдачи') {
        addressList = firstAddressesBlock.querySelectorAll('.address__label');
        let IdFirstInput = addressList[0].getAttribute('for');
        let input = document.getElementById(IdFirstInput);
        input.checked = true;
    } else { 
        addressList = secondAddressesBlock.querySelectorAll('.address__label');
    }

    for (let i = 0; i < addressList.length; i++) { 
        const address = addressList[i].textContent.trim();
        if (currentAddressNode.textContent.trim() === address) {
            let inputId = addressList[i].getAttribute('for');
            let input = document.getElementById(inputId);
            input.checked = true;
        }
    }
}

const closeModal = () => { 
    modalDeliveryNode.classList.remove('modal-delivery__show-modal');
    document.body.style.overflowY = 'scroll';
}

const onSaveClickButton = () => { 
    const addressInfo = modalDeliveryNode.querySelector('.address__input:checked + .address__info');
    const newAddress = addressInfo.querySelector('.address__label').textContent.trim();
    const deliveryMethod = modalDeliveryNode.querySelector('.method__input:checked + .method__text').textContent;

    currentAddressNode.textContent = newAddress;
    currentMethodNode.textContent = deliveryMethod === 'Курьером' ? 'Курьером' : 'Пункт выдачи';

    totalDeliveryAddressNode.textContent = newAddress;
    totalPointDeliveryNode.textContent = deliveryMethod === 'Курьером' ? 'Доставка курьером' : 'Доставка в пункт выдачи';
}

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
    const inputsCollection = methodInputsParent.querySelectorAll('.method__input');
    if (!!inputsCollection[0].checked) {
        firstAddressesBlock.classList.remove('addresses-block--hidden');
        secondAddressesBlock.classList.add('addresses-block--hidden');
    } else { 
        secondAddressesBlock.classList.remove('addresses-block--hidden');
        firstAddressesBlock.classList.add('addresses-block--hidden');
    }
}

const initModalDelivery = () => {
    methodInputsParent.addEventListener('change', onChangeAddressList);
    
    editDeliveryButton.addEventListener('click', openModal);

    editButtonInTotalBlock.addEventListener('click', openModal);

    closeModalButton.addEventListener('click', closeModal);

    saveButton.addEventListener('click', () => {
        onSaveClickButton();
        closeModal();
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

export default initModalDelivery;