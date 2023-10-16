import initModalDelivery from './js/modal-delivery';
import initModalPayment from './js/modal-payment';
import initValidationForm from './js/validation-form';
import initRollUpList from './js/roll-up-list';
import initChangesProductList from './js/change-product-list';
import "./style.css";

document.addEventListener("DOMContentLoaded", function () {
  initModalDelivery();
  initModalPayment();
  initValidationForm();
  initRollUpList();
  initChangesProductList();
});
