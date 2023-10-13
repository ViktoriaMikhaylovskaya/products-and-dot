import { changeCountInBasketIcon } from './count-product-in-notify';
import { WORDS, getPrice, sklonenie, numberWithSpaces } from './utils';

const productsSectionNode = document.getElementsByClassName('products')[0];
const productsCollection = productsSectionNode.getElementsByClassName('product');
const productListNode = productsSectionNode.querySelector('.products__list');
const selectAllCheckbox = productsSectionNode.querySelector('.checkbox-select-all');
const stockListNode = document.querySelector('.stock__list'); // Отсутствующие товары
const missingProducts = document.getElementsByClassName('stock__item');
const paymentNode = document.querySelector('.payment-write-off');
const paymentDescriptionNode = paymentNode.querySelector('.payment-write-off__description');
const paymentCheckboxNode = paymentNode.querySelector('.checkbox__input');
const orderButtonNode = document.querySelector('.order-button');

const changeTotalPrice = () => { 
    const totalPriceNode = document.querySelector('.total__price'); // итоговая цена с вычетом скидки - Блок Итого
    const initTotalPriceNode = document.querySelector('.total__init-ptice'); // цена до вычета скидки - Блок Итого
    const discountNode = document.querySelector('.total__item-discount'); // сумма скидки - Блок Итого
    const countProductsNode = document.querySelector('.total__product-count');

    let totalPrice = 0;
    let initTotalPrice = 0;
    let discountSum = 0;
    let count = 0;

    if (productsCollection.length === 0) { 
        totalPriceNode.textContent = '0 сом';
        initTotalPriceNode.textContent = '0 сом';
        discountNode.textContent = '0 сом';
    }

    for (let product of productsCollection) {
        const checkbox = product.querySelector('.checkbox__input');
        const price = product.querySelector('.price__total').textContent;
        const initPrice = product.querySelector('.price__initial-sum').textContent;
        const countSum = product.querySelector('.count__sum').textContent;

        if (checkbox.checked) {
            totalPrice += getPrice(price);
            initTotalPrice += getPrice(initPrice);
            discountSum += getPrice(initPrice) - getPrice(price);
            count += getPrice(countSum);
        }
    }

    //  разделения цены по трем знакам
    // totalPriceNode.textContent = `${numberWithSpaces(totalPrice)} сом`;
    // initTotalPriceNode.textContent = `${numberWithSpaces(initTotalPrice)} сом`;
    // discountNode.textContent = `- ${numberWithSpaces(discountSum)} сом`;
    totalPriceNode.textContent = `${totalPrice} сом`;
    initTotalPriceNode.textContent = `${initTotalPrice} сом`;
    discountNode.textContent = `- ${discountSum} сом`;
    countProductsNode.textContent = `${count} ${sklonenie(count, WORDS)}`;
}

// Функция для пересчитывания цены при изменении количества продуктов
const changeProductPrice = (productId) => {
    const productsSectionNode = document.querySelector('.products');
    const product = productsSectionNode.querySelector(`.product[data-product="${productId}"]`);
    const productCount = product.querySelector('.count__sum').textContent; // количество товаров

    const startingPriceNode = product.querySelector('.price__initial-sum'); // начальная цена
    const unitStartingPrice = startingPriceNode.getAttribute('data-price'); // начальная цена за единицу
    const discountedPriceNode = product.querySelector('.price__total'); // цена с вычетом скидки
    const unitDiscountedPrice = discountedPriceNode.getAttribute('data-price'); // цена за единицу со скидкой

    // startingPriceNode.textContent = Math.round(Number(productCount) * Number(unitStartingPrice));
    // discountedPriceNode.textContent = Math.round(Number(productCount) * Number(unitDiscountedPrice));

    startingPriceNode.textContent = numberWithSpaces((Number(productCount) * Number(unitStartingPrice)).toFixed(2));
    discountedPriceNode.textContent = numberWithSpaces((Number(productCount) * Number(unitDiscountedPrice)).toFixed(2));

    changeTotalPrice();
}

const onClickSelectAllCheckbox = () => {
    for (let product of productsCollection) { 
        const checkbox = product.querySelector('.checkbox__input');

        if (selectAllCheckbox.checked) {
            checkbox.checked = true;
        } else { 
            checkbox.checked = false;
        }
    };
    changeTotalPrice();
}

const onClickCheckbox = () => {
    for (let product of productsCollection) { 
        if (!product.checked) {
            selectAllCheckbox.checked = false;
        }
    };
}

const deleteProduct = (elementNode) => { 
    const basketNumber = elementNode.getAttribute('data-product');

    for (let product of productsCollection) {
        const productNumber = product.getAttribute('data-product');

        if (productNumber === basketNumber) {
            product.remove();
            changeCountInBasketIcon();
        }
    }

}

const addProductToFavorites = (elementNode) => {
    if (elementNode.style.stroke === 'rgb(203, 17, 171)') {
        elementNode.style.stroke === 'none';
    } else { 
        elementNode.style.stroke = 'rgb(203, 17, 171)';
    }
}

// Изменение количества продуктов в корзине
const incrementCountProducts = (elementNode) => {
    const buttonNumber = elementNode.getAttribute('data-increment');
    const productsSectionNode = document.querySelector('.products');
    const product = productsSectionNode.querySelector(`.product[data-product="${buttonNumber}"]`);
    const countNode = product.querySelector('.count__sum');

    if (!!product.querySelector('.count__remainder')) {
        const remainderNode = product.querySelector('.count__remainder');
        const remainder = getPrice(remainderNode.textContent);

        if (Number(countNode.textContent) < remainder) {
            countNode.textContent = Number(countNode.textContent) + 1;
        }
        
        elementNode.disabled = Number(countNode.textContent) === remainder ? true : false;
    } else {
        countNode.textContent = Number(countNode.textContent) + 1;
    }

    changeProductPrice(buttonNumber);
    onChangeOrderButtonText();
}

const decrementCountProducts = (elementNode) => { 
    const buttonNumber = elementNode.getAttribute('data-decrement');
    const productsSectionNode = document.querySelector('.products');
    const productNode = productsSectionNode.querySelector(`.product[data-product="${buttonNumber}"]`);
    const countNode = productNode.querySelector('.count__sum');
    let count = Number(countNode.textContent);

    if (count > 1) {
        countNode.textContent = count - 1;
        count = count - 1;
    } else { 
        productNode.parentNode.removeChild(productNode);
        changeCountInBasketIcon();
    }

    if (!!productNode.querySelector('.count__remainder')) {
        const remainderNode = productNode.querySelector('.count__remainder');
        const remainder = getPrice(remainderNode.textContent);
        const incrementButtonNode = productNode.querySelector('.count__increment');

        incrementButtonNode.disabled = remainder >= Number(countNode.textContent) ? false : true;
    } 
    changeProductPrice(buttonNumber);
    onChangeOrderButtonText();
}


// Блок с отстуствующими товарами
const deleteMissingProduct = (elementNode) => { // Удаление отвутствующего продукта
    const basketNumber = elementNode.getAttribute('data-missing-product');

    for (let product of missingProducts) {
        const productNumber = product.getAttribute('data-missing-product');

        if (productNumber === basketNumber) {
            product.remove();
        }
    }
}

const changeMissingProductsBlock = () => { 
    const block = document.querySelector('.out-of-stock');
    const title = document.querySelector('.stock__title');

    title.textContent = `Отсутствуют · ${missingProducts.length} ${sklonenie(missingProducts.length, WORDS)}`;

    if (missingProducts.length === 0) { 
        block.style.display = 'none';
    }
}

const onChangeOrderButtonText = () => {
    const paymentCheckboxNode = paymentNode.querySelector('.checkbox__input');
        if (!paymentCheckboxNode.checked) {
            orderButtonNode.textContent = 'Заказать';
            paymentDescriptionNode.style.display = 'block';
        } else { 
            let finalPrice = document.getElementsByClassName('total__price')[0].textContent;
            orderButtonNode.textContent = `Оплатить ${finalPrice}`;
            paymentDescriptionNode.style.display = 'none';

        }
    }


const initChangesProductList = () => {
    changeTotalPrice();
    selectAllCheckbox.addEventListener('click', onClickSelectAllCheckbox);

    productListNode.addEventListener('click', (e) => {
        const element = e.target;

        if (element.classList.contains('action__delete-product')) {
            deleteProduct(e.target);
            changeTotalPrice();
        }

        if (element.classList.contains('checkbox__span') || element.classList.contains('checkbox__input')) {
            onClickCheckbox();
            changeTotalPrice();
        }

        if (element.classList.contains('action__add-favorite')) {
            addProductToFavorites(element);
        }

        if (element.classList.contains('count__increment')) { 
            incrementCountProducts(element);
        }

        if (element.classList.contains('count__decrement')) { 
            decrementCountProducts(element);
        }
    });

    stockListNode.addEventListener('click', (e) => { 
        const element = e.target;

        if (element.classList.contains('action__delete-product')) { 
            deleteMissingProduct(e.target);
            changeMissingProductsBlock();
        }

        if (element.classList.contains('action__add-favorite')) { 
            addProductToFavorites(element);
        }
    });

    paymentCheckboxNode.addEventListener('click', onChangeOrderButtonText)
}

export default initChangesProductList;
