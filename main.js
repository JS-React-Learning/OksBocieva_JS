let title = prompt('Как называется ваш проект');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = Number(prompt('Сколько будет стоить данная работа?'));
let adaptive =
  prompt('Нужен ли адаптив на сайте?').trim().toLowerCase() === 'да';

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = Number(prompt('Сколько это будет стоить?'));

let service2 = prompt(' Какой дополнительный тип услуги нужен?');
let servicePrice2 = Number(prompt('Сколько это будет стоить?'));

const fullPrice = servicePrice1 + screenPrice + servicePrice2;

const servicePercentPrice = Math.ceil(fullPrice - 28);
console.log('servicePercentPrice :', servicePercentPrice);

console.log({
  title,
  screens,
  screenPrice,
  adaptive,
  service1,
  servicePrice1,
  service2,
  servicePrice2,
  fullPrice,
  servicePercentPrice,
});

if (fullPrice > 30000) {
  console.log('Даем скидку в 10%');
} else if (fullPrice > 15000 && fullPrice <= 30000) {
  console.log('Даем скидку в 5%');
} else if (fullPrice > 0 && fullPrice <= 15000) {
  console.log('Скидка не предусмотрена');
} else if (fullPrice <= 0) {
  console.log('Что то пошло не так');
}
