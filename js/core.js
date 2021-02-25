const iconMapMarker = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>';
const iconAccount = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>';
const iconAccountDetails = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M11 9C11 10.66 9.66 12 8 12C6.34 12 5 10.66 5 9C5 7.34 6.34 6 8 6C9.66 6 11 7.34 11 9M14 20H2V18C2 15.79 4.69 14 8 14C11.31 14 14 15.79 14 18M22 12V14H13V12M22 8V10H13V8M22 4V6H13V4Z" /></svg>';
const iconAccountSwitch = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M16 9C22 9 22 13 22 13V15H16V13C16 13 16 11.31 14.85 9.8C14.68 9.57 14.47 9.35 14.25 9.14C14.77 9.06 15.34 9 16 9M2 13C2 13 2 9 8 9S14 13 14 13V15H2V13M9 17V19H15V17L18 20L15 23V21H9V23L6 20L9 17M8 1C6.34 1 5 2.34 5 4S6.34 7 8 7 11 5.66 11 4 9.66 1 8 1M16 1C14.34 1 13 2.34 13 4S14.34 7 16 7 19 5.66 19 4 17.66 1 16 1Z" /></svg>';
const iconHeart = '<svg style="transform: scale(0.9);" viewBox="0 0 24 24"><path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" /></svg>';
const iconRun = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M13.5,5.5C14.59,5.5 15.5,4.58 15.5,3.5C15.5,2.38 14.59,1.5 13.5,1.5C12.39,1.5 11.5,2.38 11.5,3.5C11.5,4.58 12.39,5.5 13.5,5.5M9.89,19.38L10.89,15L13,17V23H15V15.5L12.89,13.5L13.5,10.5C14.79,12 16.79,13 19,13V11C17.09,11 15.5,10 14.69,8.58L13.69,7C13.29,6.38 12.69,6 12,6C11.69,6 11.5,6.08 11.19,6.08L6,8.28V13H8V9.58L9.79,8.88L8.19,17L3.29,16L2.89,18L9.89,19.38Z" /></svg>';

const iconChevronLeft = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" /></svg>';
const iconChevronRight = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>';

const iconCog = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" /></svg>';
const iconInfo = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>';
const iconChevronDoubleRight = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z" /></svg>';
const iconClose = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>';

const iconCheckboxBlankOutline = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" /></svg>';
const iconCheckboxMarked = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" /></svg>';
const iconFormatSize = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 4V7H7V19H10V7H15V4H2M21 9H12V12H15V19H18V12H21V9Z" /></svg>';
const iconPlusBox = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" /></svg>';
const iconMinusBox = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" /></svg>';
const iconPlusBoxOutline = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5C3,3.89 3.9,3 5,3H19M11,7H13V11H17V13H13V17H11V13H7V11H11V7Z" /></svg>';
const iconMinusBoxOutline = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5C3,3.89 3.9,3 5,3H19M17,11V13H7V11H17Z" /></svg>';

const iconEmail = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>';
const iconGithub = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>';
const iconCopyright = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M10.08,10.86C10.13,10.53 10.24,10.24 10.38,10C10.5,9.74 10.72,9.53 10.97,9.37C11.21,9.22 11.5,9.15 11.88,9.14C12.11,9.15 12.32,9.19 12.5,9.27C12.71,9.36 12.89,9.5 13.03,9.63C13.17,9.78 13.28,9.96 13.37,10.16C13.46,10.36 13.5,10.58 13.5,10.8H15.3C15.28,10.33 15.19,9.9 15,9.5C14.85,9.12 14.62,8.78 14.32,8.5C14,8.22 13.66,8 13.24,7.84C12.82,7.68 12.36,7.61 11.85,7.61C11.2,7.61 10.63,7.72 10.15,7.95C9.67,8.18 9.27,8.5 8.95,8.87C8.63,9.26 8.39,9.71 8.24,10.23C8.09,10.75 8,11.29 8,11.87V12.14C8,12.72 8.08,13.26 8.23,13.78C8.38,14.3 8.62,14.75 8.94,15.13C9.26,15.5 9.66,15.82 10.14,16.04C10.62,16.26 11.19,16.38 11.84,16.38C12.31,16.38 12.75,16.3 13.16,16.15C13.57,16 13.93,15.79 14.24,15.5C14.55,15.25 14.8,14.94 15,14.58C15.16,14.22 15.27,13.84 15.28,13.43H13.5C13.5,13.64 13.43,13.83 13.34,14C13.25,14.19 13.13,14.34 13,14.47C12.83,14.6 12.66,14.7 12.46,14.77C12.27,14.84 12.07,14.86 11.86,14.87C11.5,14.86 11.2,14.79 10.97,14.64C10.72,14.5 10.5,14.27 10.38,14C10.24,13.77 10.13,13.47 10.08,13.14C10.03,12.81 10,12.47 10,12.14V11.87C10,11.5 10.03,11.19 10.08,10.86M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20Z" /></svg>';

let containers = [
  {
    type: "location",
    label: "Miejsce",
    icon: iconMapMarker,
  },
  {
    type: "character",
    label: "Postać",
    icon: iconAccount,
  },
  {
    type: "character-modifier",
    label: "Cecha postaci",
    icon: iconAccountDetails,
  },
  {
    type: "relation",
    label: "Relacja",
    icon: iconAccountSwitch,
  },
  {
    type: "emotion",
    label: "Emocja",
    icon: iconHeart,
  },
  {
    type: "action",
    label: "Czynność",
    icon: iconRun,
  },
  // {
  //   type: "body-part",
  //   label: "Część ciała",
  //   icon: 'heart',
  // },
  // {
  //   type: "genre",
  //   label: "Gatunek",
  //   icon: 'heart',
  // },
  // {
  //   type: "name",
  //   label: "Imię",
  //   icon: 'heart',
  // },
  // {
  //   type: "noun",
  //   label: "Rzeczownik",
  //   icon: 'box',
  // },
  // {
  //   type: "dictionary",
  //   label: "dowolne słowo",
  //   icon: 'question-mark',
  // },
];

let wordsContainer = [];

const fontScaleValues = [0.67, 0.75, 0.9, 1.0, 1.1, 1.2, 1.35, 1.5];
const visibleClass = 'visible';
const defaulSwiperAnimationDuration = 180;
const defaultSheetClosingAnimationDuration = 200;
const defaultDelayBetweenLoadedWordsDuration = 20;

let swiperAnimationDuration = defaulSwiperAnimationDuration;
let sheetClosingAnimationDuration = defaultSheetClosingAnimationDuration;
let delayBetweenLoadedWordsDuration = defaultDelayBetweenLoadedWordsDuration;

class Selector {
  static sectionId(type) {
    return `section-${type}`;
  }

  static swiperSelector(type) {
    return `#${this.sectionId(type)} .swiper-container`;
  }

  static getSwiper(type) {
    return document.querySelector(this.swiperSelector(type))?.swiper;
  }

  static getScrim() {
    return document.getElementById('scrim');
  }
}

class Util {
  static shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  static ajax(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        callback(xhr.responseText);
      }
    }
    xhr.open('GET', url, true);
    xhr.send();
  }

  static getWords(type, callback) {
    this.ajax('ajax/' + type + '.php', (output) => callback(output));
  }

  static updateAllSwipers() {
    for (let container of containers) {
      wordsContainer[container.type]?.swiper?.update();
    }
  }
}

class Container {
  constructor(container) {
    this.type = container.type;
    this.label = container.label;
    this.numberOfSlidesToGenerateFromWordsCache = 20;
    this.wordsCache = [];
    this.wordsCacheIndex = 0;
    this.slideCount = 0;
    this.slideIndex = 0;

    this.initializeWords();
    WordSectionCreator.addSection(container);
    this.swiper = this.initializeSwiper();
    setInterval(() => this.runCleanup(), swiperAnimationDuration * 10 + 11);
  }

  initializeWords() {
    Util.getWords(this.type, (output) => {
      this.wordsCache = eval(output);
      this.removeFirstSlides(0); // Removes the hardcoded first slide with 'Loading...' text
      this.recalculateSlideCountAndIndex();
      this.appendSlidesFromWordsCache(this.numberOfSlidesToGenerateFromWordsCache, 0);
    });
  }

  runCleanup() {
    if (!this.isCleanupAllowed) return;
    if (this.isSwiperTransitionOngoing()) return; // Let's clean up later, so animations are not disrupted.
    this.deleteSlidesIfNeeded();
  }

  initializeSwiper() {
    const prevSlideCallback = () => { this.wordsCacheIndex--; }
    const nextSlideCallback = () => { this.wordsCacheIndex++; this.addSlidesIfNeeded(); }
    const transitionStartedCallback = () => { this.isCleanupAllowed = false; }
    const transitionFinishedCallback = () => { this.isCleanupAllowed = true; }
    const swiperInitialized = Creator.createSwiper(this.type,
      prevSlideCallback, nextSlideCallback, transitionStartedCallback, transitionFinishedCallback);
    swiperInitialized.slideNext(swiperAnimationDuration);
    return Selector.getSwiper(this.type);
  }

  isSwiperTransitionOngoing() {
    return this.swiper.animating;
  }

  addSlidesIfNeeded() {
    const marginFromEnd = 5;
    const numberOfSlidesToAppendToEnd = 10;
    this.recalculateSlideCountAndIndex();
    if (this.isActiveSlideCloseToEnd(marginFromEnd)) {
      this.appendSlidesFromWordsCache(numberOfSlidesToAppendToEnd, marginFromEnd);
    }
  }

  deleteSlidesIfNeeded() {
    const marginFromBeginning = 20;
    const numberOfSlidesToRemoveFromBeginning = 10;
    this.recalculateSlideCountAndIndex();
    if (this.isActiveSlideFarFromBeginning(marginFromBeginning)) {
      this.removeFirstSlides(numberOfSlidesToRemoveFromBeginning);
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
    if (this.isSwiperTransitionOngoing()) return;
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
    if (this.isWordCacheAboutToRunOut(numberOfSlidesToAppend + safetyMargin)) {
      this.loadMoreWordsIntoCache();
    }
    const startIndex = this.wordsCacheIndex + marginFromEnd;
    const endIndex = startIndex + numberOfSlidesToAppend;
    const nextChunkOfWordsFromCache = this.wordsCache.slice(startIndex, endIndex);
    this.swiper.appendSlide(Creator.createSlides(nextChunkOfWordsFromCache));
    this.recalculateSlideCountAndIndex();
  }

  loadMoreWordsIntoCache() {
    Util.getWords(this.type, (output) => {
      let newWords = eval(output);
      this.wordsCache = this.wordsCache.concat(newWords);
    });
  }
}

class Creator {
  static createSwiper(type, prevSlideCallback, nextSlideCallback, transitionStartedCallback, transitionFinishedCallback) {
    const swiper = new Swiper(Selector.swiperSelector(type), {
      speed: swiperAnimationDuration, // TODO: zero this if prefers-reduced-motion is on
      spaceBetween: 0,
      navigation: {
        prevEl: `#${Selector.sectionId(type)} .navigation-button-prev`,
        nextEl: `#${Selector.sectionId(type)} .navigation-button-next`,
      },
    });
    swiper.on('slidePrevTransitionStart', prevSlideCallback);
    swiper.on('slideNextTransitionStart', nextSlideCallback);
    swiper.on('slideChangeTransitionStart', transitionStartedCallback);
    swiper.on('slideChangeTransitionEnd', transitionFinishedCallback);
    const swiperInitialized = Selector.getSwiper(type);
    swiperInitialized.appendSlide(Creator.createSlide('Ładuję...'));
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

  static createIcon(svgCode, additionalClass = undefined) {
    const iconContainer = this.createElementWithClass('div', 'icon');
    if (additionalClass) {
      iconContainer.classList.add(additionalClass);
    }
    iconContainer.innerHTML = svgCode;
    return iconContainer;
  }

  static createSpan(text, additionalClass = undefined) {
    const spanElement = document.createElement('span');
    if (additionalClass) {
      spanElement.classList.add(additionalClass);
    }
    spanElement.innerHTML = text;
    return spanElement;
  }

  static createHidingSpan(text) {
    const spanElement = this.createElementWithClass('span', 'hidden-when-narrow');
    spanElement.innerHTML = text;
    return spanElement;
  }

  static createParagraph(text, additionalClass = undefined) {
    const paragraphElement = document.createElement('p');
    if (additionalClass) {
      paragraphElement.classList.add(additionalClass);
    }
    paragraphElement.innerHTML = text;
    return paragraphElement;
  }

  static createLink(text, url, additionalClass = undefined) {
    const linkElement = document.createElement('a');
    if (additionalClass) {
      linkElement.classList.add(additionalClass);
    }
    linkElement.innerHTML = text;
    linkElement.setAttribute('href', url);
    return linkElement;
  }

  static createLinkWithIcon(text, url, svgCode, additionalClass = undefined) {
    const iconElement = Creator.createIcon(svgCode);
    const textElement = Creator.createSpan(text);
    const link = this.createLink(iconElement.outerHTML + textElement.outerHTML, url, additionalClass);
    link.classList.add('link-with-icon');
    Creator.addRipple(link);
    return link;
  }

  static createSlidingSheet(id) {
    const sheet = this.createElementWithClassAndId('div', 'sliding-sheet', id);
    const content = this.createElementWithClass('div', 'sliding-sheet-content');
    sheet.appendChild(content);
    return sheet;
  }

  static createCircularButton(buttonId, buttonText, svgCode, callback) {
    const button = this.createElementWithClassAndId('button', 'circular-button', buttonId);
    button.addEventListener('click', function (event) {
      event.preventDefault();
      if (event.detail >= 2) return;
      callback();
    });
    // button.appendChild(this.createSpan(buttonText));
    button.appendChild(this.createIcon(svgCode));
    this.addRipple(button);
    return button;
  }

  static addRipple(parentElement) {
    parentElement.appendChild(this.createElementWithClass('div', 'rippleJS'));
  }

  static createSlide(text) {
    const capitalizedText = text?.charAt(0)?.toUpperCase() + text?.slice(1);
    const textWithNonBreakingSpace = capitalizedText.replace(/ (i|z|w|od|za|oraz) /gi, ' $1&nbsp;');
    return `<div class="swiper-slide">${textWithNonBreakingSpace}</div>`;
  }

  static createSlides(texts = []) {
    let slides = [];
    for (let text of texts) {
      slides.push(this.createSlide(text));
    }
    return slides;
  }

  static createSeparator() {
    const separator = document.createElement('hr');
    separator.classList.add('separator');
    return separator;
  }
}

class SpecializedCreator {
  static createSettingsButton() {
    const buttonId = 'button-settings';
    const buttonText = 'Ustawienia';
    const iconSvgCode = iconCog;
    const callback = () => {
      VisibilityController.toggleSheetVisibility('settings');
    }
    return Creator.createCircularButton(buttonId, buttonText, iconSvgCode, callback);
  }

  static createAboutButton() {
    const buttonId = 'button-about';
    const buttonText = 'Informacje';
    const iconSvgCode = iconInfo;
    const callback = () => {
      VisibilityController.toggleSheetVisibility('about');
    }
    return Creator.createCircularButton(buttonId, buttonText, iconSvgCode, callback);
  }

  static createCheckboxIcons() {
    const container = Creator.createElementWithClass('div', 'checkbox-icon');
    container.appendChild(Creator.createIcon(iconCheckboxMarked, 'checked'));
    container.appendChild(Creator.createIcon(iconCheckboxBlankOutline, 'unchecked'));
    return container;
  }

  static createAdvanceAllWordsFloatingActionButton() {
    const forwardButton = Creator.createElementWithClassAndId('button', 'floating-action-button', 'button-advance-all');
    Creator.addRipple(forwardButton);
    VisibilityController.showElement(forwardButton);

    forwardButton.addEventListener('click', function (e) {
      e.preventDefault();
      const types = Object.keys(containers).map(key => containers[key].type);
      Util.shuffle(types);
      for (const [index, type] of types.entries()) {
        const swiper = Selector.getSwiper(type);
        setTimeout(() => {
          requestAnimationFrame(() => swiper?.slideNext(swiperAnimationDuration));
        }, delayBetweenLoadedWordsDuration * index);
      }
    });

    forwardButton.appendChild(Creator.createIcon(iconChevronDoubleRight));
    return forwardButton;
  }

  static createCloseSheetFloatingActionButton() {
    const closeSheetButton = Creator.createElementWithClassAndId('button', 'floating-action-button', 'button-close-sheet');
    Creator.addRipple(closeSheetButton);

    closeSheetButton.addEventListener('click', function (e) {
      e.preventDefault();
      VisibilityController.hideSlidingSheetsAndScrim();
    });

    closeSheetButton.appendChild(Creator.createIcon(iconClose));
    return closeSheetButton;
  }
}

class WordSectionCreator {
  static addSwiperPrevNextButtons(parentElement) {
    const prevButton = Creator.createElementWithClass('button', 'navigation-button-prev');
    prevButton.appendChild(Creator.createIcon(iconChevronLeft));
    prevButton.appendChild(Creator.createHidingSpan('Wstecz'));
    prevButton.style.position = 'relative';
    Creator.addRipple(prevButton);

    const nextButton = Creator.createElementWithClass('button', 'navigation-button-next');
    nextButton.appendChild(Creator.createHidingSpan('Dalej'));
    nextButton.appendChild(Creator.createIcon(iconChevronRight));
    nextButton.style.position = 'relative';
    Creator.addRipple(nextButton);

    parentElement.appendChild(prevButton);
    parentElement.appendChild(nextButton);
  }

  static addIcon(parentElement, svgCode) {
    parentElement.appendChild(Creator.createIcon(svgCode, 'section-icon'));
  }

  static addSwiperWrapper(parentElement) {
    parentElement.appendChild(Creator.createElementWithClass('div', 'swiper-overlay'));
    parentElement.appendChild(Creator.createElementWithClass('div', 'swiper-wrapper'));
  }

  static addSectionHeader(parentElement, container) {
    const header = Creator.createElementWithClass('div', 'header-container');
    header.innerHTML = container.label;
    parentElement.appendChild(header);
  }

  static addSection(container) {
    const section = Creator.createElementWithClassAndId('section', 'word-section', Selector.sectionId(container.type));
    this.addSectionHeader(section, container);
    this.addIcon(section, container.icon);
    this.addSwiperPrevNextButtons(section);

    const mySwiperContainer = Creator.createElementWithClass('div', 'swiper-outer-container');
    const swiperScriptsContainer = Creator.createElementWithClass('div', 'swiper-container');
    this.addSwiperWrapper(swiperScriptsContainer);
    mySwiperContainer.appendChild(swiperScriptsContainer);
    section.appendChild(mySwiperContainer);

    document.getElementsByTagName('main')[0].appendChild(section);
  }
}

class SheetCreator {
  static createSettingsSheet() {
    const sheetName = 'settings';
    const sheet = Creator.createSlidingSheet(sheetName);
    VisibilityController.preventTabbingToElement(sheet);

    const sheetContent = sheet.children[0];
    sheetContent.appendChild(Creator.createParagraph('Ustawienia', 'sliding-sheet-header'));

    sheetContent.appendChild(Creator.createSeparator());

    sheetContent.appendChild(Settings.createAnimationsToggle());
    sheetContent.appendChild(Settings.createCompactModeToggle());
    sheetContent.appendChild(Settings.createDarkModeToggle());

    sheetContent.appendChild(Creator.createSeparator());

    sheetContent.appendChild(Settings.createFontScaleControl());

    return sheet;
  }

  static createAboutSheet() {
    const sheet = Creator.createSlidingSheet('about');
    VisibilityController.preventTabbingToElement(sheet);

    const sheetContent = sheet.children[0];

    sheetContent.appendChild(Creator.createParagraph('Magazyn Inspiracji', 'sliding-sheet-header'));

    sheetContent.appendChild(Creator.createSeparator());

    sheetContent.appendChild(Creator.createParagraph('Podręczny generator słów służących za początkową ' +
      'inspirację do scenek teatru improwizowanego.', 'sliding-sheet-text'));
    sheetContent.appendChild(Creator.createParagraph('Na występach źródłem inspiracji jest publiczność, ' +
      'lecz ich pomoc nie jest dostępna podczas prób i ćwiczeń. Magazyn Inspiracji wypełnia tę lukę ' +
      'zbiorem ponad 1500 pomysłów, podzielonych na wygodne kategorie.', 'sliding-sheet-text'
    ));

    sheetContent.appendChild(Creator.createSeparator());

    sheetContent.appendChild(Creator.createParagraph('Chcesz dodać nowe słówka, pomóc w rozwoju aplikacji lub zgłosić błąd?', 'sliding-sheet-text'));
    sheetContent.appendChild(Creator.createLinkWithIcon('Repozytorium na GitHub', 'https://github.com/oczki/inspiracje', iconGithub));
    sheetContent.appendChild(Creator.createLinkWithIcon('E-mail', 'mailto:damian.oczki@gmail.com', iconEmail));

    sheetContent.appendChild(Creator.createSeparator());

    const currentYear = Math.max(2021, new Date().getFullYear());
    sheetContent.appendChild(Creator.createLinkWithIcon(`2018–${currentYear} Damian Oczki`, 'https://oczki.pl', iconCopyright));

    return sheet;
  }
}

class VisibilityController {
  static showElement(element) {
    element?.classList.add(visibleClass);
  }

  static hideElement(element) {
    element?.classList.remove(visibleClass);
  }

  static preventTabbingToElement(element) {
    element.style.visibility = 'hidden';
  }

  static allowTabbingToElement(sheetElement) {
    sheetElement.style.visibility = 'initial';
  }

  static showCloseFab() {
    this.hideElement(document.getElementById('button-advance-all'));
    this.showElement(document.getElementById('button-close-sheet'));
  }

  static showAdvanceAllFab() {
    this.hideElement(document.getElementById('button-close-sheet'));
    this.showElement(document.getElementById('button-advance-all'));
  }

  static hideSlidingSheetsAndScrim() {
    const sheetsToHide = Array.from(document.querySelectorAll(`.sliding-sheet.${visibleClass}`));
    for (const sheet of sheetsToHide) {
      sheet.classList.remove(visibleClass);
      setTimeout(() => this.preventTabbingToElement(sheet), sheetClosingAnimationDuration);
    }
    Selector.getScrim()?.classList.remove(visibleClass);
    this.showAdvanceAllFab();
  }

  static toggleSheetVisibility(sheetId) {
    const sheet = document.getElementById(sheetId);
    this.hideOtherSheets(sheetId);
    if (sheet?.classList.contains(visibleClass)) {
      this.showAdvanceAllFab();
      sheet.classList.remove(visibleClass);
      Selector.getScrim()?.classList.remove(visibleClass);
      setTimeout(() => this.preventTabbingToElement(sheet), sheetClosingAnimationDuration);
    } else {
      this.showCloseFab();
      sheet.classList.add(visibleClass);
      Selector.getScrim()?.classList.add(visibleClass);
      this.allowTabbingToElement(sheet);
    }
  }

  static hideOtherSheets(idOfSheetNotToHide) {
    const otherSheets = Array.from(document.querySelectorAll(`.sliding-sheet:not(#${idOfSheetNotToHide})`));
    for (let otherSheet of otherSheets) {
      otherSheet.classList.remove(visibleClass);
      setTimeout(() => this.preventTabbingToElement(otherSheet), sheetClosingAnimationDuration);
    }
  }
}

class Settings {
  static FontScale = class {
    static keyName = 'font-scale';
    static scaleDisplayElementId = 'scale-control-value';

    static getFontScale() {
      return localStorage.getItem(this.keyName) || 1.0;
    }

    static setFontScale(value) {
      localStorage.setItem(this.keyName, value);
      document.documentElement.style.setProperty('--font-size-multiplier', value);
      this.updateCurrentScaleDisplay();
      Util.updateAllSwipers();
    }

    static increaseFontScale() {
      const currentFontScale = this.getFontScale();
      const upperBound = fontScaleValues[fontScaleValues.length - 1];
      const valueLargerThanCurrent = fontScaleValues.filter(value => value > currentFontScale)[0] || upperBound;
      this.setFontScale(valueLargerThanCurrent);
    }

    static decreaseFontScale() {
      const currentScale = this.getFontScale();
      const lowerBound = fontScaleValues[0];
      const valueSmallerThanCurrent = Math.max(...fontScaleValues.filter(value => value < currentScale), lowerBound);
      this.setFontScale(valueSmallerThanCurrent);
    }

    static createIncreaseFontScaleButton() {
      const buttonId = 'button-font-scale-plus';
      const buttonText = 'Powiększ';
      const iconSvgCode = iconPlusBox;
      const callback = () => {
        this.increaseFontScale();
      }
      return Creator.createCircularButton(buttonId, buttonText, iconSvgCode, callback);
    }

    static createDecreaseFontScaleButton() {
      const buttonId = 'button-font-scale-minus';
      const buttonText = 'Pomniejsz';
      const iconSvgCode = iconMinusBox;
      const callback = () => {
        this.decreaseFontScale();
      }
      return Creator.createCircularButton(buttonId, buttonText, iconSvgCode, callback);
    }

    static createCurrentScaleDisplay() {
      return Creator.createElementWithId('span', this.scaleDisplayElementId);
    }

    static updateCurrentScaleDisplay() {
      const scaleDisplayElement = document.getElementById(this.scaleDisplayElementId);
      if (scaleDisplayElement) {
        const valueAsPercent = `${(this.getFontScale() * 100).toFixed(0)}%`;
        scaleDisplayElement.innerHTML = valueAsPercent;
      }
    }

    static createControl() {
      const container = Creator.createElementWithId('div', 'scale-control-container');
      container.appendChild(Creator.createIcon(iconFormatSize, 'decorative-icon'));
      container.appendChild(Creator.createSpan('Skala'));
      container.appendChild(this.createDecreaseFontScaleButton());
      container.appendChild(this.createCurrentScaleDisplay());
      container.appendChild(this.createIncreaseFontScaleButton());

      this.setFontScale(this.getFontScale());

      return container;
    }
  };

  static AnimationsToggle = class {
    static keyName = 'animations-disabled';

    static doesTheUserPreferReducedMotion() {
      return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    static shouldAnimationsToggleBeChecked(keyName) {
      const currentAnimationsDisabledKeyValue = localStorage.getItem(keyName);
      if (currentAnimationsDisabledKeyValue === null)
        return !this.doesTheUserPreferReducedMotion();
      else
        return currentAnimationsDisabledKeyValue === 'false';
    }

    static setAnimationsDisabledState(state) {
      localStorage.setItem(this.keyName, state);
      document.body.classList.toggle('no-animations', state);
      if (state) {
        swiperAnimationDuration = 0;
        sheetClosingAnimationDuration = 0;
        delayBetweenLoadedWordsDuration = 0;
      } else {
        swiperAnimationDuration = defaulSwiperAnimationDuration;
        sheetClosingAnimationDuration = defaultSheetClosingAnimationDuration;
        delayBetweenLoadedWordsDuration = defaultDelayBetweenLoadedWordsDuration;
      }
    }

    static createToggle() {
      const toggle = Creator.createElementWithId('input', `${this.keyName}-checkbox`);
      toggle.type = 'checkbox';
      toggle.checked = this.shouldAnimationsToggleBeChecked(this.keyName);
      this.setAnimationsDisabledState(!toggle.checked);
      toggle.addEventListener('change', (event) => {
        this.setAnimationsDisabledState(!event.currentTarget.checked);
      });

      const labelElement = Creator.createElementWithClassAndId('label', 'checkbox-label', this.keyName);
      labelElement.appendChild(toggle);
      labelElement.appendChild(SpecializedCreator.createCheckboxIcons());
      labelElement.appendChild(Creator.createSpan('Animacje'));
      Creator.addRipple(labelElement);
      return labelElement;
    }
  };

  static CompactModeToggle = class {
    static keyName = 'compact-mode';

    static shouldToggleBeChecked() {
      return localStorage.getItem(this.keyName) === 'false';
    }

    static setCompactModeState(state) {
      localStorage.setItem(this.keyName, state);
      document.body.classList.toggle('compact', state);
      Util.updateAllSwipers();
    }

    static createToggle() {
      const toggle = Creator.createElementWithId('input', `${this.keyName}-checkbox`);
      toggle.type = 'checkbox';
      toggle.checked = this.shouldToggleBeChecked();
      this.setCompactModeState(!toggle.checked);
      toggle.addEventListener('change', (event) => {
        this.setCompactModeState(!event.currentTarget.checked);
      });

      const labelElement = Creator.createElementWithClassAndId('label', 'checkbox-label', this.keyName);
      labelElement.appendChild(toggle);
      labelElement.appendChild(SpecializedCreator.createCheckboxIcons());
      labelElement.appendChild(Creator.createSpan('Nagłówki kategorii'));
      Creator.addRipple(labelElement);
      return labelElement;
    }
  };

  static DarkModeToggle = class {
    static keyName = 'dark-mode';

    static doesTheUserPreferDarkMode() {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    static shouldToggleBeChecked() {
      const currentDarkModeKeyValue = localStorage.getItem(this.keyName);
      if (currentDarkModeKeyValue === null)
        return this.doesTheUserPreferDarkMode();
      else
        return currentDarkModeKeyValue === 'true';
    }

    static setDarkModeState(state) {
      localStorage.setItem(this.keyName, state);
      document.body.classList.toggle('dark', state);
      requestAnimationFrame(() => {
        const bgColor = window.getComputedStyle(document.body).backgroundColor;
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', bgColor);
      });
    }

    static createToggle() {
      const toggle = Creator.createElementWithId('input', `${this.keyName}-checkbox`);
      toggle.type = 'checkbox';
      toggle.checked = this.shouldToggleBeChecked();
      this.setDarkModeState(toggle.checked);
      toggle.addEventListener('change', (event) => {
        this.setDarkModeState(event.currentTarget.checked);
      });

      const labelElement = Creator.createElementWithClassAndId('label', 'checkbox-label', this.keyName);
      labelElement.appendChild(toggle);
      labelElement.appendChild(SpecializedCreator.createCheckboxIcons());
      labelElement.appendChild(Creator.createSpan('Tryb ciemny'));
      Creator.addRipple(labelElement);
      return labelElement;
    }
  };

  static updateCurrentScaleDisplay() {
    this.FontScale.updateCurrentScaleDisplay();
  }

  static createFontScaleControl() {
    return this.FontScale.createControl();
  }

  static createAnimationsToggle() {
    return this.AnimationsToggle.createToggle();
  }

  static createCompactModeToggle() {
    return this.CompactModeToggle.createToggle();
  }

  static createDarkModeToggle() {
    return this.DarkModeToggle.createToggle();
  }
}

class ElementPopulator {
  static populateSlidingSheetsContainer() {
    const container = document.getElementById('sliding-sheets-container');
    container.appendChild(SheetCreator.createSettingsSheet());
    container.appendChild(SheetCreator.createAboutSheet());
  }

  static populateFooter() {
    const footer = document.getElementsByTagName('footer')[0];

    const innerContainer = Creator.createElementWithId('div', 'footer-inner-container');
    innerContainer.appendChild(SpecializedCreator.createAdvanceAllWordsFloatingActionButton());
    innerContainer.appendChild(SpecializedCreator.createCloseSheetFloatingActionButton());
    innerContainer.appendChild(SpecializedCreator.createSettingsButton());
    innerContainer.appendChild(SpecializedCreator.createAboutButton());

    footer.appendChild(innerContainer);
  }

  static populatePageWithWordContainers() {
    for (const container of containers) {
      wordsContainer[container.type] = new Container(container);
    }
  }
}

class GlobalEventHandler {
  static attachEventsToSheetsAndScrim() {
    Selector.getScrim()?.addEventListener('click', (event) => {
      event.preventDefault();
      VisibilityController.hideSlidingSheetsAndScrim();
    });

    window.addEventListener('keydown', (event) => {
      if (event.keyCode === 27) {
        VisibilityController.hideSlidingSheetsAndScrim();
      }
    });
  }

  static handleKeyboardInput(event) {
    if (event.keyCode === 9) {
      document.body.classList.add('show-outline');
      window.removeEventListener('keydown', GlobalEventHandler.handleKeyboardInput);
      window.addEventListener('mousedown', GlobalEventHandler.handleMouseInput);
    }
  }

  static handleMouseInput() {
    document.body.classList.remove('show-outline');
    window.addEventListener('keydown', GlobalEventHandler.handleKeyboardInput);
    window.removeEventListener('mousedown', GlobalEventHandler.handleMouseInput);
  }

  static handleFirstKeyboardInput() {
    window.addEventListener('keydown', GlobalEventHandler.handleKeyboardInput);
  }
}

function init() {
  ElementPopulator.populateSlidingSheetsContainer();
  GlobalEventHandler.attachEventsToSheetsAndScrim();
  GlobalEventHandler.handleFirstKeyboardInput();
  ElementPopulator.populateFooter();
  ElementPopulator.populatePageWithWordContainers();
  Settings.updateCurrentScaleDisplay();
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