import { WORDS, getNoun, getNumber } from './utils';

const arrowIconNode = document.querySelector('.products__icon');
const productListNode = document.querySelector('.products__list');
const hideInfoNode = document.querySelector('.products__hide-info');
const productCheckboxNode = document.querySelector('.products__checkbox');
const selectAllNode = document.querySelector('.products__select-all');

const productCountNode = document.querySelector('.total__product-count');
const totalPriceNode = document.querySelector('.total__price');

const outOfStockArrowIconNode = document.querySelector('.stock__icon');
const stockListNode = document.querySelector('.stock__list');

const hideProductlist = () => { 
    const count = getNumber(productCountNode.textContent);
    if (arrowIconNode.classList.contains('closed-list-icon')) {
        arrowIconNode.classList.remove('closed-list-icon');
        productListNode.style.display = 'none';

        hideInfoNode.style.display = 'block';
        hideInfoNode.textContent = `${count} ${getNoun(count, WORDS)} · ${totalPriceNode.textContent}`;
        productCheckboxNode.style.display = 'none';
        selectAllNode.style.display = 'none';
    } else { 
        arrowIconNode.classList.add('closed-list-icon');
        productListNode.style.display = 'block';
        hideInfoNode.style.display = 'none';
        productCheckboxNode.style.display = 'block';
        selectAllNode.style.display = 'block';
    }
}

const hideMissingProducts = () => { 
    if (outOfStockArrowIconNode.classList.contains('closed-list-icon')) {
        outOfStockArrowIconNode.classList.remove('closed-list-icon');
        stockListNode.style.display = 'none';
    } else { 
        outOfStockArrowIconNode.classList.add('closed-list-icon');
        stockListNode.style.display = 'block';
    }
}

const initRollUpList = () => { 
    hideProductlist();
    hideMissingProducts();

    arrowIconNode.addEventListener('click', hideProductlist);
    outOfStockArrowIconNode.addEventListener('click', hideMissingProducts);
}

export default initRollUpList;
