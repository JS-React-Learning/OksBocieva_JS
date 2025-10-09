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

// Difficult task 4

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
