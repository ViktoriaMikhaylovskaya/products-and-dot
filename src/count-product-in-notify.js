// Переименовать
export const changeCountInBasketIcon = () => { 
    const itemNode = document.querySelector('.nav__item--basket');
    const procuctsCount = document.querySelectorAll('.product').length;

    itemNode.dataset.count = `${procuctsCount}`;
    if (procuctsCount === 0) {
        itemNode.classList.remove('&::after');
    }
}