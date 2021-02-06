let wordsContainer = [];

function sectionId(type) {
  return `section-${type}`;
}

function nextButtonId(type) {
  return `button-next-${type}`;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function ajax(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      callback(xhr.responseText);
    }
  }
  xhr.open('GET', url, true);
  xhr.send();
}

function getWords(type, callback) {
  ajax('ajax/' + type + '.php', (output) => callback(output));
}

class Container {
  constructor(container) {
    this.type = container.type;
    this.color = container.color;
    this.label = container.label;
    this.numberOfSlidesToGenerateFromWordsCache = 30;
    this.wordsCache = [];
    this.wordsCacheIndex = 0;
    this.slideCount = 0;
    this.slideIndex = 0;

    this.initializeWords();
    addSection(this.type, this.color, this.label);
    this.swiper = this.initializeSwiper();
  }

  initializeWords() {
    getWords(this.type, (output) => {
      this.wordsCache = eval(output);
      shuffle(this.wordsCache);
      this.removeFirstSlides(0); // Removes the hardcoded first slide with 'Loading...' text
      this.appendMoreSlidesFromCache(this.numberOfSlidesToGenerateFromWordsCache, 0);
    });
  }

  initializeSwiper() {
    const prevSlideCallback = () => { this.wordsCacheIndex--; }
    const nextSlideCallback = () => { this.wordsCacheIndex++; }
    const afterSlideChangedCallback = () => { this.maintainSensibleSlideCount(); }
    const swiperInitialized = Creator.createSwiper(this.type, prevSlideCallback, nextSlideCallback, afterSlideChangedCallback);
    swiperInitialized.slideNext();
    return getSwiper(this.type);
  }

  maintainSensibleSlideCount() {
    const marginFromBeginning = 20;
    const numberOfSlidesToRemoveFromBeginning = 10;
    const marginFromEnd = 10;
    const numberOfSlidesToAppendToEnd = 10;
    this.recalculateSlideCountAndIndex();
    if (this.isActiveSlideCloseToEnd(marginFromEnd)) {
      this.appendMoreSlidesFromCache(numberOfSlidesToAppendToEnd, marginFromEnd);
    }
    if (this.isActiveSlideFarFromBeginning(marginFromBeginning)) {
      setTimeout(() => this.removeFirstSlides(numberOfSlidesToRemoveFromBeginning), 200);
    }
  }

  isWordCacheAboutToRunOut(minimumRemainingWordCacheLength) {
    return this.wordsCacheIndex + minimumRemainingWordCacheLength >= this.wordsCache.length;
  }

  isActiveSlideCloseToEnd(marginFromEnd) {
    return this.slideIndex >= this.slideCount - marginFromEnd;
  }

  isActiveSlideFarFromBeginning(marginFromBeginning) {
    return this.slideIndex >= marginFromBeginning;
  }

  recalculateSlideCountAndIndex() {
    this.slideCount = this.swiper.slides.length;
    this.slideIndex = this.swiper.activeIndex;
  }

  removeFirstSlides(numberOfSlidesToRemove) {
    this.wordsCache.splice(0, numberOfSlidesToRemove);
    this.wordsCacheIndex -= numberOfSlidesToRemove;
    if (numberOfSlidesToRemove > 1) {
      const range = (x, y) => Array.from((function* () { while (x <= y) yield x++; })());
      this.swiper.removeSlide(range(0, numberOfSlidesToRemove - 1));
    } else {
      this.swiper.removeSlide(0);
    }
    this.recalculateSlideCountAndIndex();
  }

  appendMoreSlidesFromCache(numberOfSlidesToAppend, marginFromEnd, safetyMargin = 5) {
    this.recalculateSlideCountAndIndex();
    if (this.isWordCacheAboutToRunOut(numberOfSlidesToAppend + safetyMargin)) {
      this.loadMoreWordsIntoCache();
    }
    const startIndex = this.wordsCacheIndex + marginFromEnd;
    const endIndex = startIndex + numberOfSlidesToAppend;
    const nextChunkOfWordsFromCache = this.wordsCache.slice(startIndex, endIndex);
    this.swiper.appendSlide(textArrayToSlides(nextChunkOfWordsFromCache));
  }

  loadMoreWordsIntoCache() {
    getWords(this.type, (output) => {
      let newWords = eval(output);
      shuffle(newWords);
      this.wordsCache = this.wordsCache.concat(newWords);
    });
  }
}

function addSectionHeader(parentElement, color, label) {
  const header = Creator.createElementWithClass('div', 'section-header');
  header.style.color = color;
  header.innerHTML = label;
  parentElement.appendChild(header);
}

function getSwiper(type) {
  return document.querySelector(`#${sectionId(type)}`)?.swiper;
}

function textToSlide(text) {
  return `<div class="swiper-slide">${text}</div>`;
}

function textArrayToSlides(texts = []) {
  let slides = [];
  for (let text of texts) {
    slides.push(textToSlide(text));
  }
  return slides;
}

class Creator {
  static createSwiper(type, prevSlideCallback, nextSlideCallback, afterSlideChangedCallback) {
    const swiper = new Swiper(`#${sectionId(type)}`, {
      speed: 180, // zero this if prefers-reduced-motion is on
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    swiper.on('slidePrevTransitionStart', prevSlideCallback);
    swiper.on('slideNextTransitionStart', nextSlideCallback);
    swiper.on('slideChangeTransitionEnd', afterSlideChangedCallback);
    const swiperInitialized = getSwiper(type);
    swiperInitialized.appendSlide(textToSlide('Ładuję...'));
    return swiper;
  }

  static createElementWithClass(tagName, className = undefined) {
    const element = document.createElement(tagName);
    if (className) {
      element.classList.add(className);
    }
    return element;
  }

  static createElementWithId(tagName, id = undefined) {
    const element = document.createElement(tagName);
    if (id) {
      element.id = id;
    }
    return element;
  }

  static createElementWithClassAndId(tagName, className = undefined, id = undefined) {
    const element = this.createElementWithClass(tagName, className);
    if (id) {
      element.id = id;
    }
    return element;
  }
}

function addSwiperPrevNextButtons(parentElement) {
  parentElement.appendChild(Creator.createElementWithClass('div', 'swiper-button-prev'));
  parentElement.appendChild(Creator.createElementWithClass('div', 'swiper-button-next'));
}

function addSwiperWrapper(parentElement) {
  parentElement.appendChild(Creator.createElementWithClass('div', 'swiper-overlay'));
  parentElement.appendChild(Creator.createElementWithClass('div', 'swiper-wrapper'));
}

function appendElementToMainDocument(newElement) {
  document.getElementsByTagName('main')[0].appendChild(newElement);
}

function addSection(type, color, label) {
  const section = Creator.createElementWithClassAndId('section', 'word-section', sectionId(type));

  addSwiperWrapper(section);

  addSwiperPrevNextButtons(section);

  appendElementToMainDocument(section);


}

function addForwardAllWordsButton() {
  const forwardButton = Creator.createElementWithId('button', nextButtonId('all'));
  //forwardButton.disabled = true;
  forwardButton.style.backgroundColor = 'black';
  forwardButton.style.animationName = `pulse-${forwardButton.id}`;
  forwardButton.innerHTML = '<span>kolejny zestaw</span>';
  forwardButton.addEventListener('click', function (e) {
    e.preventDefault();
    const types = Object.keys(containers).map(key => containers[key].type);
    shuffle(types);
    for (const [index, type] of types.entries()) {
      const swiper = getSwiper(type);
      setTimeout(() => swiper.slideNext(), 20 * index); // zero this if prefers-reduced-motion is on
    }
  });

  const footer = document.getElementsByTagName('footer')[0];
  footer.insertBefore(forwardButton, footer.firstChild);
}

function setForwardAllWordsButtonState() {
  const buttons = document.querySelectorAll(`main button[id^="${nextButtonId('')}"]`);
  const state = Array.from(buttons).every(button => !button.disabled);
  const forwardAllWordsButton = document.getElementById(nextButtonId('all'));
  forwardAllWordsButton.disabled = !state;
}

function init() {
  for (const container of containers) {
    wordsContainer[container.type] = new Container(container);
  }

  addForwardAllWordsButton();
}

if (document.readyState != 'loading')
  init();
else if (document.addEventListener)
  document.addEventListener('DOMContentLoaded', init);
else
  document.attachEvent('onreadystatechange', function () {
    if (document.readyState == 'complete')
      init();
  });