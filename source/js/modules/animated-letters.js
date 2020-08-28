export default class AnimatedLetters {
  constructor({
    elementSelector,
    timer,
    classForActivate,
    property,
    delay,
    alternately,
  }) {
    this.elementSelector = elementSelector;
    this.timer = timer;
    this.classForActivate = classForActivate;
    this.property = property;
    this.delay = delay;
    this.alternately = alternately;

    this._element = document.querySelector(this.elementSelector);

    this.prepareText();
  }

  prepareText() {
    if (!this._element) {
      return;
    }
    const text = this._element.textContent
      .trim()
      .split(` `)
      .filter((letter) => letter !== ``);

    const content = text.reduce((fragmentParent, word, wordIndex) => {
      const wordElement = Array.from(word).reduce((fragment, letter, index) => {
        fragment.appendChild(this.createElement(letter, index, wordIndex));
        return fragment;
      }, document.createDocumentFragment());
      const wordContainer = document.createElement(`span`);

      wordContainer.classList.add(`animated-word`);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);

      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);
  }

  createElement(letter, index, wordIndex) {
    const span = document.createElement(`span`);

    const timeOffsets = [250, 150, 350];
    span.textContent = letter;
    span.style.transition = `${this.property} ${this.timer}ms ease ${
      timeOffsets[index % 3] + (this.alternately ? wordIndex * 400 : 0)
    }ms`;

    return span;
  }

  runAnimation() {
    if (!this._element) {
      return;
    }
    setTimeout(() => {
      this._element.classList.add(this.classForActivate);
    }, this.delay);
  }

  destroyAnimation() {
    this._element.classList.remove(this.classForActivate);
  }
}
