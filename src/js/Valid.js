/* eslint-disable linebreak-style */
import {
  luhnAlgorithm,
  checkPaySystem,
} from './function';

export default class Valid {
  constructor() {
    this.cards = [...document.querySelectorAll('.card__item')];
    this.input = document.querySelector('.form__input');
    this.form = document.querySelector('.form');
  }

  init() {
    this.form.addEventListener('submit', this.onSubmit.bind(this));
  }

  onSubmit(e) {
    e.preventDefault();
    const cardNumber = this.input.value.replace(/\s/g, '');
    const checkLuhn = luhnAlgorithm(cardNumber);
    if (!checkLuhn) {
      this.clear();
      this.showMessage();
      return;
    }
    const pay = checkPaySystem(cardNumber);
    this.showPay(pay);
  }

  showPay(pay) {
    this.clear();
    this.cards.forEach((item) => {
      if (!item.classList.contains(pay)) {
        item.classList.add('no-valid');
      }
    });
  }

  clear() {
    this.cards.forEach((item) => {
      if (item.classList.contains('no-valid')) {
        item.classList.remove('no-valid');
      }
    });
  }

  showMessage() {
    if (document.querySelector('.mesaage')) {
      return;
    }
    const message = document.createElement('div');
    message.textContent = 'card number entered incorrectly';
    message.classList.add('message');
    this.form.append(message);
    setTimeout(() => {
      this.form.querySelector('.message').remove();
    }, 2000);
  }
}
