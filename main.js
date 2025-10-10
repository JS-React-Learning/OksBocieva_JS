let title;
let screens;
let screenPrice;
let adaptive;
let service1;

let service2;

let allServicePrices;
let fullPrice;
let servicePercentPrice;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt('Как называется ваш проект', 'Сайт визитка');
  screens = prompt(
    'Какие типы экранов нужно разработать?',
    'Простые, Сложные, Интерактивные',
  );

  do {
    screenPrice = prompt('Сколько будет стоить данная работа?');
  } while (
    screenPrice === null ||
    screenPrice.trim() === '' ||
    !isNumber(screenPrice)
  );

  screenPrice = Number(screenPrice);
  adaptive =
    prompt('Нужен ли адаптив на сайте?', 'да').trim().toLowerCase() === 'да';
};

const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt('Какой дополнительный тип услуги нужен?');
    } else if (i === 1) {
      service2 = prompt('Какой дополнительный тип услуги нужен?');
    }

    let price;

    do {
      price = prompt('Сколько это будет стоить?');
    } while (!isNumber(price));

    sum += Number(price);
  }

  return sum;
};

const getFullPrice = function () {
  return screenPrice + allServicePrices;
};

const getTitle = function () {
  return title.trim().charAt(0).toUpperCase() + title.slice(1).toLowerCase();
};

const getRollBackMessage = function (price) {
  if (price > 30000) {
    return 'Даем скидку в 10%';
  } else if (price > 15000 && price <= 30000) {
    return 'Даем скидку в 5%';
  } else if (price > 0 && price <= 15000) {
    return 'Скидка не предусмотрена';
  } else {
    return 'Что-то пошло не так';
  }
};

const showTypeOf = function (variable) {
  console.log(variable, ' - ', typeof variable);
};

const getServicePercentPrices = function () {
  return Math.ceil(fullPrice - 28);
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
title = getTitle(title);
servicePercentPrice = getServicePercentPrices();

console.log('allServicePrices', allServicePrices);

showTypeOf(title);
showTypeOf(screens);
showTypeOf(screenPrice);

console.log('Сумма дополнительных услуг:', allServicePrices);
console.log('Полная стоимость проекта:', fullPrice);
console.log(
  'Стоимость с округлением (servicePercentPrice):',
  servicePercentPrice,
);
console.log('Название проекта:', title);
console.log(getRollBackMessage(fullPrice));
console.log('Стоимость за вычетом отката:', getServicePercentPrices());
