const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  services: {},
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,

  // asking: function () {

  //   for (let i = 0; i < 2; i++) {
  //     let serviceName;
  //     do {
  //       serviceName = prompt('Какой дополнительный тип услуги нужен?');
  //     } while (!serviceName || /^\d+$/.test(serviceName.trim()));

  //     let price;
  //     do {
  //       price = prompt('Сколько это будет стоить?');
  //     } while (!this.isNumber(price));

  //     let key = serviceName;
  //     let counter = 1;
  //     while (this.services.hasOwnProperty(key)) {
  //       key = `${serviceName}_${counter}`;
  //       counter++;
  //     }

  //     this.services[key] = Number(price);
  //   }
  // },

  init: function () {
    this.getElements();
    this.addTitle();
    this.btnHave.addEventListener('click', this.start);
    this.btnPlus.addEventListener('click', this.addScreenBlock);
  },
  addTitle: function () {
    document.title = this.heading.textContent;
  },
  getElements: function () {
    this.heading = document.getElementsByTagName('h1')[0];
    this.btnHave = document.getElementsByClassName('handler_btn')[0];
    this.btnReset = document.getElementsByClassName('handler_btn')[1];
    this.btnPlus = document.querySelector('.screen-btn');
    this.otherItems = document.querySelectorAll('.other-items.percent');
    this.otherItems1 = document.querySelectorAll('.other-items.number');
    this.rangeInput = document.querySelector('.rollback input[type="range"]');
    this.rangeValue = document.querySelector('.rollback .range-value');
    this.totalInputs = Array.from(
      document.getElementsByClassName('total-input'),
    );
    this.screenElements = document.querySelectorAll('.screen');
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

  addScreens: function () {
    this.screens = [];
    this.screenElements = document.querySelectorAll('.screen');
    this.screenElements.forEach((screen, index) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;

      this.screens.push({
        id: index,
        name: selectName,
        price: Number(select.value * input.value),
      });
    });
  },

  addServices: function () {
    this.otherItems.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      console.log(check, label, input);
    });
  },

  addScreenBlock: function () {
    this.screenElements = document.querySelectorAll('.screen');
    const cloneScreen = this.screenElements[0].cloneNode(true);
    this.screenElements[this.screenElements.length - 1].after(cloneScreen);
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
    appData.addScreens();
    appData.addServices();
    // this.getElements();
    // // this.asking();
    // this.addPrices();
    // this.getFullPrice();
    // this.getTitle();
    // this.getServicePercentPrices();
    // console.log('Полная стоимость:', this.fullPrice);
    // console.log('скидка:', this.getRollBackMessage(this.fullPrice));
    // console.log('стоимость с вычетом 28%:', this.servicePercentPrice);
    // console.log('экраны:', this.screens);
  },
};

appData.init();
