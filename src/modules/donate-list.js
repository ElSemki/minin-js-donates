import { createDonateItem } from '../core/utils/donate-items';

export class DonateList {
  #donates;
  #donateList;
  #donatContainer;

  constructor(donates) {
    this.#donates = donates;
    this.#donateList = document.createElement('div');
  }

  #renderDonates(container) {
    container.innerHTML = '';
    this.#donates.forEach((donate) => {
      const donatItem = createDonateItem(donate);
      container.append(donatItem);
    });
  }

  updateDonates(updatedDonates) {
    this.#donates = updatedDonates;
    this.#renderDonates(this.#donatContainer);
  }

  render() {
    this.#donateList.className = 'donates-container';
    const donatTitle = document.createElement('h2');
    donatTitle.className = 'donates-container__title';
    donatTitle.textContent = 'Список донатов';
    this.#donatContainer = document.createElement('div');
    this.#donatContainer.className = 'donates-container__donates';

    this.#donateList.append(donatTitle, this.#donatContainer);
    this.#renderDonates(this.#donatContainer);
    return this.#donateList;
  }
}
