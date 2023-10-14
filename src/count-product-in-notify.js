export const changeCountInBasketIcon = () => { 
    const itemNode = document.querySelector('.nav__item--basket');
    const itemInModileNode = document.querySelector('.tabbar__tab--active');
    const procuctsCount = document.querySelectorAll('.product').length;

    itemNode.dataset.count = `${procuctsCount}`;
    itemInModileNode.dataset.numb = `${procuctsCount}`;

    if (procuctsCount === 0) {
        itemNode.classList.remove('&::after');
        itemInModileNode.classList.remove('&::before');
    }
}
