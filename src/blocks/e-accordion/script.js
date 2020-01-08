const accordionSelector = '.e-accordion';
const accordionShortSelector = `${accordionSelector}__short`;
const accordionMoreSelector = `${accordionSelector}__more`;

const accordionExpandedClassName = 'e-accordion__more_expanded';

function onAccordionClick(event) {
  const accordion = event.target.closest(accordionSelector);
  const accordionMore = accordion.querySelectorAll(accordionMoreSelector)[0];

  accordionMore.classList.toggle(accordionExpandedClassName);
}

function processClick(event, selector, fn) {
  if (event.target.matches(selector)) {
    fn(event);
  }

  let element = event.target.parentElement;

  while (element !== null) {
    if (element.matches(selector)) {
      fn(event);
      break;
    }

    element = element.parentElement;
  }
}

document.body.addEventListener('click', (event) => processClick(event, accordionShortSelector, onAccordionClick), true);
