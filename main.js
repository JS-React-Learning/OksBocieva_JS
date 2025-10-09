let title = prompt('Как называется ваш проект');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = Number(prompt('Сколько будет стоить данная работа?'));
let adaptive =
  prompt('Нужен ли адаптив на сайте?').trim().toLowerCase() === 'да';

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = Number(prompt('Сколько это будет стоить?'));

let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = Number(prompt('Сколько это будет стоить?'));

const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
};

const getFullPrice = function () {
  return screenPrice + getAllServicePrices();
};

const getTitle = function (title) {
  title = title.trim();
  return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
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

const allServicePrices = getAllServicePrices();
const fullPrice = getFullPrice();
const formattedTitle = getTitle(title);
const servicePercentPrice = getServicePercentPrices();

showTypeOf(title);
showTypeOf(screens);
showTypeOf(screenPrice);

console.log('Сумма дополнительных услуг:', allServicePrices);
console.log('Полная стоимость проекта:', fullPrice);
console.log(
  'Стоимость с округлением (servicePercentPrice):',
  servicePercentPrice,
);
console.log('Название проекта:', formattedTitle);
console.log(getRollBackMessage(fullPrice));
console.log('Стоимость за вычетом отката:', getServicePercentPrices());
