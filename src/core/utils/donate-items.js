import { getTodayDateFormat } from './time';

export const createDonatItem = (donate) => {
  const donateItem = document.createElement('div');
  donateItem.className = 'donate-item';
  donateItem.innerHTML = `${getTodayDateFormat(donate.date)} am - <b>${
    donate.amount
  }$</b>`;

  return donateItem;
};
