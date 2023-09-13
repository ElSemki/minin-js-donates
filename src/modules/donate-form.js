export class DonateForm {
  #donateForm;
  #totalAmount;
  #createNewDonate;

  constructor(totalAmount, createNewDonate) {
    this.#donateForm = document.createElement('form');
    this.#totalAmount = totalAmount;
    this.#createNewDonate = createNewDonate;
  }

  updateTotalAmount(newAmount) {
    this.totalAmountHTML.textContent = `${newAmount}$`;
  }

  render() {
    this.#donateForm.className = 'donate-form';
    this.#donateForm.innerHTML = `
      <label class="donate-form__input-label">
        Введите сумму в $
      <input
        class="donate-form__donate-input"
        name="amount"
        type="number"
        max="100"
        min="1"
        required=""
      />
      </label>
      <button class="donate-form__submit-button" type="submit">Задонатить</button>
    `;

    this.totalAmountHTML = document.createElement('h1');
    this.totalAmountHTML.id = 'total-amount';
    this.#donateForm.prepend(this.totalAmountHTML);
    this.updateTotalAmount(this.#totalAmount);

    this.#donateForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newDonate = {
        date: new Date(),
        amount: Number(
          document.querySelector('.donate-form__donate-input').value
        ),
      };
      this.#createNewDonate(newDonate);
      document.querySelector('.donate-form__donate-input').value = '';
    });

    return this.#donateForm;
  }
}
