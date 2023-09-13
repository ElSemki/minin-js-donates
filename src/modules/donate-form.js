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

  #handlerSubmitForm(e) {
    e.preventDefault();
    const donateInputValue = Number(e.target.amount.value);
    if (!donateInputValue) {
      return;
    }
    const newDonate = {
      date: new Date(),
      amount: donateInputValue,
    };
    this.#createNewDonate(newDonate);
    e.target.amount.value = '';
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

    this.#donateForm.addEventListener(
      'submit',
      this.#handlerSubmitForm.bind(this)
    );

    return this.#donateForm;
  }
}
