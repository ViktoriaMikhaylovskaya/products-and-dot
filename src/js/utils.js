export const WORDS = ['товар', 'товара', 'товаров'];
export const regForNumbers = /[0-9]/;
export const regForEmail = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/;

export const getNumber = (str) => { 
  return Number(str.replace(/[^\d.]/ig, ''));
}

export const getNoun = (number, txt) => {
  let cases = [2, 0, 1, 1, 1, 2];
  return txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

export const getNumberWithSpaces = (num) => {
  return num.toLocaleString().toString().replace(/\,/g, ".");
}
