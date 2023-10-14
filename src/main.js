import initModalDelivery from './js/modal-delivery';
import initModalPayment from './js/modal-payment';
import initValidateForm from './js/validate-form';
import initRollUpList from './js/roll-up-list';
import initChangesProductList from './js/change-product-list';
import "./style.css";

document.addEventListener("DOMContentLoaded", function () {
  initModalDelivery();
  initModalPayment();
  initValidateForm();
  initRollUpList();
  initChangesProductList();
});
