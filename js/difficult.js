// Difficult  task 3  start
/*
let lang = prompt('Выбери язык: ru или en').toLowerCase();

if (lang === 'ru') {
  console.log(['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']);
} else if (lang === 'en') {
  console.log(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
} else {
  console.log('Язык не поддерживается');
}

switch (lang) {
  case 'ru':
    console.log(['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']);
    break;
  case 'en':
    console.log(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
    break;
  default:
    console.log('Язык не поддерживается');
}

const days = {
  ru: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
  en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
};

console.log(days[lang] || 'Язык не поддерживается');

let namePerson = prompt('Введите имя');

let role =
  namePerson === 'Артем'
    ? 'директор'
    : namePerson === 'Александр'
    ? 'преподаватель'
    : 'студент';

console.log(role);
*/
// Difficult  task 3  end

// Difficult task 4 start
/*
const stringCheck = function (str) {
  if (typeof str !== 'string') {
    alert('Это не строка, введи строку');
    return;
  }

  str = str.trim();

  if (str.length === 0) {
    alert('Строка пуста');
    return;
  }

  if (str.length > 30) {
    str = str.slice(0, 30) + '...';
  }
  return str;
};

console.log(stringCheck('   Строка с пробелами в начале и в конце    '));

console.log(
  stringCheck(
    'Это очень длинная строка, которая точно больше тридцати символов...',
  ),
);

console.log(stringCheck(12345));
*/
// Difficult task 4 end

// Difficult task 5 start
/*
const primeNumbers = function () {
  for (let n = 2; n <= 100; n++) {
    let d;

    for (d = 2; d < n; d++) {
      if (n % d === 0) {
        break;
      }
    }

    if (d === n) {
      console.log(`${n} - Делители этого числа: 1 и ${n}`);
    }
  }
};

primeNumbers();
*/
// Difficult task 5 end

// Difficult task 7 start

// const week = [
//   'monday',
//   'tuesday',
//   'wednesday',
//   'thursday',
//   'friday',
//   'saturday',
//   'sunday',
// ];

// const today = new Date();
// const dayIndex = today.getDay();
// const todayIndex = (dayIndex + 6) % 7;

// const container = document.querySelector('.week');

// week.forEach((day, index) => {
//   const paragraph = document.createElement('p');
//   paragraph.textContent = day;

//   paragraph.style.fontWeight = index === todayIndex ? 'bold' : 'normal';
//   paragraph.style.fontStyle =
//     day === 'saturday' || day === 'sunday' ? 'italic' : 'normal';

//   container.appendChild(paragraph);
// });

// Difficult task 7 end

// Difficult task 9 start
// function declension(num, words) {
//   num = Math.abs(num) % 100;
//   const n1 = num % 10;
//   if (num > 10 && num < 20) return words[2];
//   if (n1 > 1 && n1 < 5) return words[1];
//   if (n1 === 1) return words[0];
//   return words[2];
// }

// function addZero(num) {
//   return num < 10 ? '0' + num : num;
// }

// function updateDateTime() {
//   const now = new Date();

//   const daysOfWeek = [
//     'Воскресенье',
//     'Понедельник',
//     'Вторник',
//     'Среда',
//     'Четверг',
//     'Пятница',
//     'Суббота',
//   ];

//   const months = [
//     'января',
//     'февраля',
//     'марта',
//     'апреля',
//     'мая',
//     'июня',
//     'июля',
//     'августа',
//     'сентября',
//     'октября',
//     'ноября',
//     'декабря',
//   ];

//   const dayName = daysOfWeek[now.getDay()];
//   const day = now.getDate();
//   const month = months[now.getMonth()];
//   const year = now.getFullYear();

//   const hours = now.getHours();
//   const minutes = now.getMinutes();
//   const seconds = now.getSeconds();

//   const formatA = `Сегодня ${dayName}, ${day} ${month} ${year} года, ${hours} ${declension(hours, ['час', 'часа', 'часов'])} ${minutes} ${declension(minutes, ['минута', 'минуты', 'минут'])} ${seconds} ${declension(seconds, ['секунда', 'секунды', 'секунд'])}`;

//   const formatB = `${addZero(day)}.${addZero(now.getMonth() + 1)}.${year} - ${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;

//   document.getElementById('formatA').textContent = formatA;
//   document.getElementById('formatB').textContent = formatB;
// }

// updateDateTime();
// setInterval(updateDateTime, 1000);

// Difficult task 9 end
