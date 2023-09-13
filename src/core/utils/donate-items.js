import { getDateFormat } from './time';

export const createDonateItem = (donate) => {
  const donateItem = document.createElement('div');
  donateItem.className = 'donate-item';
  donateItem.innerHTML = `${getDateFormat(donate.date)} am - <b>${
    donate.amount
  }$</b>`;

  return donateItem;
};
