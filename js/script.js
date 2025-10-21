const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  services: {},
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,

  asking: function () {
    let title;
    do {
      title = prompt('Как называется ваш проект?', 'Сайт визитка');
    } while (!title || /^\d+$/.test(title.trim()));
    this.title = title;

    this.adaptive =
      prompt('Нужен ли адаптив на сайте?', 'да').trim().toLowerCase() === 'да';

    for (let i = 0; i < 2; i++) {
      let name;
      do {
        name = prompt('Какие типы экранов нужно разработать?');
      } while (!name || /^\d+$/.test(name.trim()));

      let price;
      do {
        price = prompt('Сколько будет стоить данная работа?');
      } while (!this.isNumber(price));

      this.screens.push({ id: i, name: name, price: Number(price) });
    }

    for (let i = 0; i < 2; i++) {
      let serviceName;
      do {
        serviceName = prompt('Какой дополнительный тип услуги нужен?');
      } while (!serviceName || /^\d+$/.test(serviceName.trim()));

      let price;
      do {
        price = prompt('Сколько это будет стоить?');
      } while (!this.isNumber(price));

      let key = serviceName;
      let counter = 1;
      while (this.services.hasOwnProperty(key)) {
        key = `${serviceName}_${counter}`;
        counter++;
      }

      this.services[key] = Number(price);
    }
  },

  addPrices: function () {
    this.screenPrice = this.screens.reduce(
      (sum, screen) => sum + screen.price,
      0,
    );

    this.allServicePrices = Object.values(this.services).reduce(
      (sum, price) => sum + price,
      0,
    );
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  getFullPrice: function () {
    this.fullPrice = this.screenPrice + this.allServicePrices;
  },

  getTitle: function () {
    this.title =
      this.title.trim().charAt(0).toUpperCase() +
      this.title.slice(1).toLowerCase();
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
    this.servicePercentPrice = Math.ceil(
      this.fullPrice - this.fullPrice * 0.28,
    );
  },

  start: function () {
    this.asking();
    this.addPrices();
    this.getFullPrice();
    this.getTitle();
    this.getServicePercentPrices();

    console.log('Полная стоимость:', this.fullPrice);
    console.log('скидка:', this.getRollBackMessage(this.fullPrice));
    console.log('стоимость с вычетом 28%:', this.servicePercentPrice);
    console.log('экраны:', this.screens);
  },
};

appData.start();
