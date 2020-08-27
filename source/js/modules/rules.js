export default () => {
  const rulesItems = document.querySelectorAll(`.rules__item p`);
  const rulesLink = document.querySelector(`.rules__link.btn`);
  const lastRulesItem = rulesItems[rulesItems.length - 1];

  lastRulesItem.addEventListener(`animationend`, function () {
    rulesLink.classList.add(`active`);
  });
};
