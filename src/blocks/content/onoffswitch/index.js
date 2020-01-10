const clickHandler = require('../../../helpers/clickHandler');

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

clickHandler.onClick(switchSelector, onSwitchClick);
