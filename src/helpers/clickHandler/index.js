class ClickHandler {
  static processClick(event, selector, fn) {
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

  static onClick(selector, fn) {
    document.addEventListener('DOMContentLoaded', () => {
      document.body.addEventListener('click', (event) => this.processClick(event, selector, fn), true);
    });
  }
}

module.exports = ClickHandler;
