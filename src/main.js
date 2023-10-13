import initModalDevelop from './modal-develop';
import initModalPayment from './modal-payment';
import initValidateForm from './validate-form';
import initRollUpList from './roll-up-list';
import initChangesProductList from './change-product-list';
import "./style.css";

// единая точка старта
document.addEventListener("DOMContentLoaded", function () {
  initModalDevelop();
  initModalPayment();
  initValidateForm();
  initRollUpList();
  initChangesProductList();
});
