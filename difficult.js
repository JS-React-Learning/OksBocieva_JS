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
