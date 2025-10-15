const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  service1: '',
  service2: '',
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,

  asking: function () {
    this.title = prompt('Как называется ваш проект', 'Сайт визитка');
    this.screens = prompt(
      'Какие типы экранов нужно разработать?',
      'Простые, Сложные, Интерактивные',
    );

    do {
      this.screenPrice = prompt('Сколько будет стоить данная работа?');
    } while (
      this.screenPrice === null ||
      this.screenPrice.trim() === '' ||
      !this.isNumber(this.screenPrice)
    );

    this.screenPrice = Number(this.screenPrice);
    this.adaptive =
      prompt('Нужен ли адаптив на сайте?', 'да').trim().toLowerCase() === 'да';
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  getAllServicePrices: function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      const serviceName = prompt('Какой дополнительный тип услуги нужен?');

      let price;
      do {
        price = prompt('Сколько это будет стоить?');
      } while (price === null || price.trim() === '' || !this.isNumber(price));

      if (i === 0) {
        this.service1 = serviceName;
      } else {
        this.service2 = serviceName;
      }

      sum += Number(price);
    }

    return sum;
  },

  getFullPrice: function () {
    return this.screenPrice + this.allServicePrices;
  },

  getTitle: function () {
    return (
      this.title.trim().charAt(0).toUpperCase() +
      this.title.slice(1).toLowerCase()
    );
  },

  getRollBackMessage: function (price) {
    if (price > 30000) {
      return 'Даем скидку в 10%';
    } else if (price > 15000 && price <= 30000) {
      return 'Даем скидку в 5%';
    } else if (price > 0 && price <= 15000) {
      return 'Скидка не предусмотрена';
    } else {
      return 'Что-то пошло не так';
    }
  },

  getServicePercentPrices: function () {
    return Math.ceil(this.fullPrice - this.fullPrice * 0.28);
  },

  start: function () {
    this.asking();
    this.allServicePrices = this.getAllServicePrices();
    this.fullPrice = this.getFullPrice();
    this.title = this.getTitle();
    this.servicePercentPrice = this.getServicePercentPrices();

    console.log(this.servicePercentPrice, this.fullPrice);
    console.log(this.getRollBackMessage(this.fullPrice));
  },
};

// appData.start();
