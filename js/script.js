const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  screensAmmount: 0,
  adaptive: true,
  servicesPercent: {},
  servicesNumber: {},
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  rollback: null,

  init: function () {
    this.getElements();
    this.addTitle();
    this.getRollBackValue();
    this.handleCmsCheckbox();

    this.btnHave.addEventListener('click', () => {
      this.addScreens();

      if (this.invalidScreen()) {
        alert('Заполните все типы экранов и их количество');
        return;
      }

      this.start();

      this.screenElements.forEach((screen) => {
        screen.querySelector('input[type=text]').disabled = true;
        screen.querySelector('select').disabled = true;
      });

      [...this.otherItemsPercent, ...this.otherItemsNumber].forEach((item) => {
        const input = item.querySelector('input[type=text]');
        input.disabled = true;
      });

      this.cmsCheck.disabled = true;
      if (this.cmsInput) this.cmsInput.disabled = true;
      this.selectCms.disabled = true;

      this.btnHave.style.display = 'none';
      this.btnReset.style.display = 'inline-block';
    });

    this.btnPlus.addEventListener('click', this.addScreenBlock);
    this.btnReset.addEventListener('click', () => {
      this.reset();
    });
  },

  addTitle: function () {
    document.title = this.heading.textContent;
  },
  getElements: function () {
    this.heading = document.getElementsByTagName('h1')[0];
    this.btnHave = document.getElementsByClassName('handler_btn')[0];
    this.btnReset = document.getElementsByClassName('handler_btn')[1];
    this.btnPlus = document.querySelector('.screen-btn');

    this.otherItemsPercent = document.querySelectorAll('.other-items.percent');
    this.otherItemsNumber = document.querySelectorAll('.other-items.number');

    this.rangeInput = document.querySelector('.rollback input[type="range"]');
    this.rangeValue = document.querySelector('.rollback .range-value');
    this.totalInputs = Array.from(
      document.getElementsByClassName('total-input'),
    );

    this.screenElements = document.querySelectorAll('.screen');
    this.cmsCheck = document.querySelector('.cms input[type="checkbox"]');
    this.cmsBlock = document.querySelector('.hidden-cms-variants');
    this.cmsInput = document.querySelector('#cms-other-input');
    this.selectCms = document.querySelector('#cms-select');
  },
  handleCmsCheckbox: function () {
    this.cmsCheck.addEventListener('change', () => {
      this.cmsBlock.style.display = this.cmsCheck.checked ? 'flex' : 'none';
    });

    this.selectCms.addEventListener('change', () => {
      const input = this.cmsBlock.querySelector('.main-controls__input');
      input.style.display = this.selectCms.value === 'other' ? 'block' : 'none';
    });
  },

  addPrices: function () {
    this.screenPrice = this.screens.reduce((acc, el) => acc + el.price, 0);

    this.servicePricesNumber = 0;
    this.servicePercentPrice = 0;

    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }

    for (let key in this.servicesPercent) {
      this.servicePercentPrice +=
        this.screenPrice * (this.servicesPercent[key] / 100);
    }

    this.fullPrice =
      this.screenPrice + this.servicePricesNumber + this.servicePercentPrice;

    this.priceWithRollback = Math.ceil(
      this.fullPrice + this.fullPrice * (this.rollback / 100),
    );

    this.screensAmmount = this.screens.reduce(
      (acc, screen) => acc + screen.count,
      0,
    );

    if (this.cmsCheck.checked) {
      const cmsSelect = this.cmsBlock.querySelector('#cms-select');
      const cmsOtherInput = this.cmsBlock.querySelector('#cms-other-input');

      this.fullPrice +=
        cmsSelect.value === '50'
          ? this.fullPrice * 0.5
          : cmsSelect.value === 'other'
          ? this.fullPrice * (Number(cmsOtherInput.value) / 100)
          : 0;
    }
  },
  addScreens: function () {
    this.screens = [];
    this.screenElements = document.querySelectorAll('.screen');
    this.screenElements.forEach((screen, index) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const inputValue = input.value;
      const selectName = select.options[select.selectedIndex].textContent;

      this.screens.push({
        id: index,
        name: selectName,
        count: Number(inputValue),
        price: Number(select.value * input.value),
      });
    });
    // console.log(this.screens);
  },
  addServices: function () {
    this.servicesPercent = {};
    this.servicesNumber = {};

    this.otherItemsPercent.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        this.servicesPercent[label.textContent] = Number(input.value);
      }
    });

    this.otherItemsNumber.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        this.servicesNumber[label.textContent] = Number(input.value);
      }
    });
  },
  addScreenBlock: function () {
    this.screenElements = document.querySelectorAll('.screen');
    const cloneScreen = this.screenElements[0].cloneNode(true);
    this.screenElements[this.screenElements.length - 1].after(cloneScreen);
  },
  getRollBackValue: function () {
    this.rangeInput.addEventListener('input', () => {
      this.rollback = Number(this.rangeInput.value);
      this.rangeValue.textContent = this.rangeInput.value + '%';
    });
  },
  showResult: function () {
    this.totalInputs[0].value = this.screenPrice;
    this.totalInputs[1].value = this.screensAmmount;
    this.totalInputs[2].value =
      this.servicePercentPrice + this.servicePricesNumber;
    this.totalInputs[3].value = this.fullPrice;
    this.totalInputs[4].value = this.priceWithRollback;
  },
  invalidScreen: function () {
    return this.screens.some(
      (screen) =>
        !screen.name || screen.name === 'Тип экранов' || screen.price === 0,
    );
  },
  start: function () {
    this.addScreens();
    this.addServices();
    this.getElements();
    this.addPrices();
    this.showResult();
    this.invalidScreen();
    console.log(appData);
  },
  reset: function () {
    this.screenElements.forEach((screen) => {
      const input = screen.querySelector('input[type=text]');
      const select = screen.querySelector('select');
      input.disabled = false;
      input.value = '';
      select.disabled = false;
      select.selectedIndex = 0;
    });

    [...this.otherItemsPercent, ...this.otherItemsNumber].forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      check.checked = false;
    });

    this.screenElements.forEach((screen, index) => {
      if (index > 0) screen.remove();
    });

    this.cmsCheck.checked = false;
    this.cmsBlock.style.display = 'none';
    this.cmsBlock.querySelector('#cms-select').selectedIndex = 0;
    this.cmsInput.value = '';
    this.cmsBlock.querySelector('.main-controls__input').style.display = 'none';
    this.cmsInput.disabled = false;
    this.selectCms.disabled = false;

    this.totalInputs.forEach((input) => (input.value = 0));
    this.btnHave.style.display = 'inline-block';
    this.btnReset.style.display = 'none';
  },
};

appData.init();
