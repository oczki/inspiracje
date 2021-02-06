let wordsContainer = [];

function sectionId(type) {
  return `section-${type}`;
}

function nextButtonId(type) {
  return `button-next-${type}`;
}

function swiperSelector(type) {
  return `#${sectionId(type)} .swiper-container`;
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
    addSection(container);
    this.swiper = this.initializeSwiper();
  }

  initializeWords() {
    getWords(this.type, (output) => {
      this.wordsCache = eval(output);
      shuffle(this.wordsCache);
      this.removeFirstSlides(0); // Removes the hardcoded first slide with 'Loading...' text
      this.appendSlidesFromWordsCache(this.numberOfSlidesToGenerateFromWordsCache, 0);
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
      this.appendSlidesFromWordsCache(numberOfSlidesToAppendToEnd, marginFromEnd);
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

  appendSlidesFromWordsCache(numberOfSlidesToAppend, marginFromEnd, safetyMargin = 5) {
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

function getSwiper(type) {
  return document.querySelector(swiperSelector(type))?.swiper;
}

function textToSlide(text) {
  const capitalizedText = text?.charAt(0)?.toUpperCase() + text?.slice(1);
  return `<div class="swiper-slide">${capitalizedText}</div>`;
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
    const swiper = new Swiper(swiperSelector(type), {
      speed: 180, // TODO: zero this if prefers-reduced-motion is on
      spaceBetween: 0,
      navigation: {
        nextEl: `#${sectionId(type)} .navigation-button-next`,
        prevEl: `#${sectionId(type)} .navigation-button-prev`,
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
  const prevButton = Creator.createElementWithClass('div', 'navigation-button-prev');
  prevButton.innerHTML = 'Wstecz';

  const nextButton = Creator.createElementWithClass('div', 'navigation-button-next');
  nextButton.innerHTML = 'Dalej';

  parentElement.appendChild(prevButton);
  parentElement.appendChild(nextButton);
}

function addSwiperWrapper(parentElement) {
  // parentElement.appendChild(Creator.createElementWithClass('div', 'swiper-overlay'));
  parentElement.appendChild(Creator.createElementWithClass('div', 'swiper-wrapper'));
}

function appendElementToMainDocument(newElement) {
  document.getElementsByTagName('main')[0].appendChild(newElement);
}

function addSectionHeader(parentElement, container) {
  const header = Creator.createElementWithClass('div', 'header-container');
  header.innerHTML = container.label;
  parentElement.appendChild(header);
}

function addSection(container) {
  const section = Creator.createElementWithClassAndId('section', 'word-section', sectionId(container.type));

  const swiperContainer = Creator.createElementWithClass('div', 'swiper-container');
  addSwiperWrapper(swiperContainer);

  const headerAndNavigationContainer = Creator.createElementWithClass('div', 'header-and-navigation-container');
  addSectionHeader(headerAndNavigationContainer, container);
  const navigationContainer = Creator.createElementWithClass('div', 'navigation-container');
  addSwiperPrevNextButtons(navigationContainer);
  headerAndNavigationContainer.appendChild(navigationContainer);

  section.appendChild(swiperContainer);
  section.appendChild(headerAndNavigationContainer);
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
      setTimeout(() => swiper.slideNext(), 20 * index); // TODO: zero this if prefers-reduced-motion is on
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