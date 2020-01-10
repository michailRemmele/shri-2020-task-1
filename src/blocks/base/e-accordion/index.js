const clickHandler = require('../../../helpers/clickHandler');

const accordionClassName = 'e-accordion';
const accordionExpandedClassName = `${accordionClassName}__more_expanded`;

const accordionSelector = `.${accordionClassName}`;
const accordionShortSelector = `${accordionSelector}__short`;
const accordionMoreSelector = `${accordionSelector}__more`;

function onAccordionClick(event, target) {
  const accordion = target.closest(accordionSelector);
  const accordionMore = accordion.querySelectorAll(accordionMoreSelector)[0];

  accordionMore.classList.toggle(accordionExpandedClassName);
}

clickHandler.onClick(accordionShortSelector, onAccordionClick);
