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

function processClick(event, selector, fn) {
  if (event.target.matches(selector)) {
    fn(event, event.target);
  }

  let element = event.target.parentElement;

  while (element !== null) {
    if (element.matches(selector)) {
      fn(event, element);
      break;
    }

    element = element.parentElement;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (event) => processClick(event, accordionShortSelector, onAccordionClick), true);
});
