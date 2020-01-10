const switchClassName = 'onoffswitch';
const switchCheckedClassName = 'onoffswitch_checked';
const themeDefaultClassName = 'theme_color_project-default';
const themeInverseClassName = 'theme_color_project-inverse';

const switchSelector = `.${switchClassName}`;
const themeDefaultSelector = `.${themeDefaultClassName}`;
const themeInverseSelector = `.${themeInverseClassName}`;

function onSwitchClick(event, target) {
  target.classList.toggle(switchCheckedClassName);

  document.body.querySelectorAll(`${themeDefaultSelector}, ${themeInverseSelector}`).forEach((item) => {
    item.classList.toggle(themeDefaultClassName);
    item.classList.toggle(themeInverseClassName);
  });
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
  document.body.addEventListener('click', (event) => processClick(event, switchSelector, onSwitchClick), true);
});
