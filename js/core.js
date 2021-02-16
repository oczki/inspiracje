let wordsContainer = [];
let swiperAnimationDuration = 180;
let sheetClosingAnimationDuration = 200;

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
    this.numberOfSlidesToGenerateFromWordsCache = 20;
    this.wordsCache = [];
    this.wordsCacheIndex = 0;
    this.slideCount = 0;
    this.slideIndex = 0;

    this.initializeWords();
    addSection(container);
    this.swiper = this.initializeSwiper();
    setInterval(() => this.runCleanup(), swiperAnimationDuration * 10 + 11);
  }

  initializeWords() {
    getWords(this.type, (output) => {
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
    swiperInitialized.slideNext();
    return getSwiper(this.type);
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
    this.swiper.appendSlide(textArrayToSlides(nextChunkOfWordsFromCache));
    this.recalculateSlideCountAndIndex();
  }

  loadMoreWordsIntoCache() {
    getWords(this.type, (output) => {
      let newWords = eval(output);
      this.wordsCache = this.wordsCache.concat(newWords);
    });
  }
}

function getSwiper(type) {
  return document.querySelector(swiperSelector(type))?.swiper;
}

function textToSlide(text) {
  const capitalizedText = text?.charAt(0)?.toUpperCase() + text?.slice(1);
  const textWithNonBreakingSpace = capitalizedText.replace(/ (i|z|w|oraz) /gi, ' $1&nbsp;');
  return `<div class="swiper-slide">${textWithNonBreakingSpace}</div>`;
}

function textArrayToSlides(texts = []) {
  let slides = [];
  for (let text of texts) {
    slides.push(textToSlide(text));
  }
  return slides;
}

class Creator {
  static createSwiper(type, prevSlideCallback, nextSlideCallback, transitionStartedCallback, transitionFinishedCallback) {
    const swiper = new Swiper(swiperSelector(type), {
      speed: swiperAnimationDuration, // TODO: zero this if prefers-reduced-motion is on
      spaceBetween: 0,
      navigation: {
        prevEl: `#${sectionId(type)} .navigation-button-prev`,
        nextEl: `#${sectionId(type)} .navigation-button-next`,
      },
    });
    swiper.on('slidePrevTransitionStart', prevSlideCallback);
    swiper.on('slideNextTransitionStart', nextSlideCallback);
    swiper.on('slideChangeTransitionStart', transitionStartedCallback);
    swiper.on('slideChangeTransitionEnd', transitionFinishedCallback);
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

  static createIcon(iconName, additionalClass = undefined) {
    const iconContainer = this.createElementWithClass('div', `icon`);
    if (additionalClass) {
      iconContainer.classList.add(additionalClass);
    }

    const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElement.setAttribute('width', '24');
    svgElement.setAttribute('height', '24');

    const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    const pathToIcon = `./media/icons/tabler-sprite.svg#tabler-${iconName}`;
    useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', pathToIcon);

    svgElement.appendChild(useElement);
    iconContainer.appendChild(svgElement);
    return iconContainer;
  }

  static createSpan(text) {
    const spanElement = document.createElement('span');
    spanElement.innerHTML = text;
    return spanElement;
  }

  static createHidingSpan(text) {
    const spanElement = this.createElementWithClass('span', 'hidden-when-narrow');
    spanElement.innerHTML = text;
    return spanElement;
  }

  static createSlidingSheet(id) {
    const sheet = this.createElementWithClassAndId('div', 'sliding-sheet', id);

    const content = this.createElementWithClass('div', 'sliding-sheet-content');

    sheet.appendChild(content);
    return sheet;
  }
}

function getSlidingSheetContentById(id) {
  return document.querySelector(`#${id} .sliding-sheet-content`);
}

function getScrim() {
  return document.getElementById('scrim');
}

function addRipple(parentElement) {
  parentElement.appendChild(Creator.createElementWithClass('div', 'rippleJS'));
}

function addSwiperPrevNextButtons(parentElement) {
  const prevButton = Creator.createElementWithClass('button', 'navigation-button-prev');
  prevButton.appendChild(Creator.createIcon('chevron-left'));
  prevButton.appendChild(Creator.createHidingSpan('Wstecz'));
  prevButton.style.position = 'relative';
  addRipple(prevButton);

  const nextButton = Creator.createElementWithClass('button', 'navigation-button-next');
  nextButton.appendChild(Creator.createHidingSpan('Dalej'));
  nextButton.appendChild(Creator.createIcon('chevron-right'));
  nextButton.style.position = 'relative';
  addRipple(nextButton);

  parentElement.appendChild(prevButton);
  parentElement.appendChild(nextButton);
}

function addIcon(parentElement, iconName) {
  const icon = Creator.createIcon(iconName, 'section-icon');
  parentElement.appendChild(icon);
}

function addSwiperWrapper(parentElement) {
  parentElement.appendChild(Creator.createElementWithClass('div', 'swiper-overlay'));
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
  addSectionHeader(section, container);
  addIcon(section, container.icon);
  addSwiperPrevNextButtons(section);

  const mySwiperContainer = Creator.createElementWithClass('div', 'swiper-outer-container');
  const swiperScriptsContainer = Creator.createElementWithClass('div', 'swiper-container');
  addSwiperWrapper(swiperScriptsContainer);
  mySwiperContainer.appendChild(swiperScriptsContainer);
  section.appendChild(mySwiperContainer);


  appendElementToMainDocument(section);
}

function preventTabbingToElement(element) {
  element.style.visibility = 'hidden';
}

function allowTabbingToElement(sheetElement) {
  sheetElement.style.visibility = 'initial';
}

function createSettingsSheet() {
  const sheetName = 'settings';
  const sheet = Creator.createSlidingSheet(sheetName);
  preventTabbingToElement(sheet);

  const sheetContent = sheet.children[0];
  sheetContent.appendChild(createCompactModeToggle());
  sheetContent.appendChild(createDarkModeToggle());


  return sheet;
}

function createAboutSheet() {
  const sheet = Creator.createSlidingSheet('about');
  sheet.innerHTML = 'about';
  return sheet;
}

function populateSlidingSheetsContainer() {
  const container = document.getElementById('sliding-sheets-container');
  container.appendChild(createSettingsSheet());
  container.appendChild(createAboutSheet());
}

function createForwardAllWordsFloatingActionButton() {
  const forwardButton = Creator.createElementWithClassAndId('button', 'floating-action-button', 'button-advance-all');
  addRipple(forwardButton);
  //forwardButton.disabled = true; // TODO

  forwardButton.addEventListener('click', function (e) {
    e.preventDefault();
    const types = Object.keys(containers).map(key => containers[key].type);
    shuffle(types);
    for (const [index, type] of types.entries()) {
      const swiper = getSwiper(type);
      setTimeout(() => {
        requestAnimationFrame(() => swiper?.slideNext());
      }, 20 * index); // TODO: zero this if prefers-reduced-motion is on
    }
  });

  forwardButton.appendChild(Creator.createIcon('chevrons-right'));
  return forwardButton;
}

function createCloseSheetFloatingActionButton() {
  const closeSheetButton = Creator.createElementWithClassAndId('button', 'floating-action-button', 'button-close-sheet');
  addRipple(closeSheetButton);
  //forwardButton.disabled = true; // TODO

  closeSheetButton.addEventListener('click', function (e) {
    e.preventDefault();
    hideSlidingSheetsAndScrim();
  });

  closeSheetButton.appendChild(Creator.createIcon('x'));
  return closeSheetButton;
}

function createSettingsButton() {
  const settingsButton = Creator.createElementWithId('button', 'button-settings');

  const text = Creator.createElementWithClass('span');
  text.innerHTML = 'Opcje';
  const icon = Creator.createIcon('settings');

  settingsButton.addEventListener('click', function (event) {
    event.preventDefault();
    const visibleClass = 'visible';
    const sheet = document.getElementById('settings');
    if (sheet?.classList.contains(visibleClass)) {
      sheet.classList.remove(visibleClass);
      getScrim()?.classList.remove(visibleClass);
      setTimeout(() => preventTabbingToElement(sheet), sheetClosingAnimationDuration);
    } else {
      sheet.classList.add(visibleClass);
      getScrim()?.classList.add(visibleClass);
      allowTabbingToElement(sheet);
    }
    // TODO: change the fab to 'close' button
  });

  settingsButton.appendChild(text);
  settingsButton.appendChild(icon);
  addRipple(settingsButton);
  return settingsButton;
}

function createAboutButton() {
  const aboutButton = Creator.createElementWithId('button', 'button-about');

  const text = Creator.createElementWithClass('span');
  text.innerHTML = 'Info';
  const icon = Creator.createIcon('info-circle');

  aboutButton.addEventListener('click', function (event) {
    event.preventDefault();
    // TODO: toggle the about view, sliding from the bottom
    // TODO: change the fab to 'close' button
  });

  aboutButton.appendChild(text);
  aboutButton.appendChild(icon);
  addRipple(aboutButton);
  return aboutButton;
}

// TODO: not used yet, needs styling and this method to be called in proper places
function setForwardAllWordsButtonState() {
  const buttons = document.querySelectorAll(`main button[id^="${nextButtonId('')}"]`);
  const state = Array.from(buttons).every(button => !button.disabled);
  const forwardAllWordsButton = document.getElementById('button-advance-all');
  forwardAllWordsButton.disabled = !state;
}

function populateFooter() {
  const footer = document.getElementsByTagName('footer')[0];

  const innerContainer = Creator.createElementWithId('div', 'footer-inner-container');
  innerContainer.appendChild(createForwardAllWordsFloatingActionButton());
  innerContainer.appendChild(createCloseSheetFloatingActionButton());
  innerContainer.appendChild(createSettingsButton());
  innerContainer.appendChild(createAboutButton());

  footer.appendChild(innerContainer);
}

function handleKeyboardInput(event) {
  if (event.keyCode === 9) {
    document.body.classList.add('show-outline');
    window.removeEventListener('keydown', handleKeyboardInput);
    window.addEventListener('mousedown', handleMouseInput);
  }
}

function handleMouseInput() {
  document.body.classList.remove('show-outline');
  window.addEventListener('keydown', handleKeyboardInput);
  window.removeEventListener('mousedown', handleMouseInput);
}

function setDarkModeState(state) {
  localStorage.setItem('dark-mode', state);
  document.body.classList.toggle('dark', state);
  requestAnimationFrame(() => {
    const bgColor = window.getComputedStyle(document.body).backgroundColor;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', bgColor); // TODO add attr to index head
  });
}

// TODO: change checkbox to tabler icon
function createDarkModeToggle() {
  const darkModeKeyName = 'dark-mode';
  const toggle = Creator.createElementWithId('input', `${darkModeKeyName}-checkbox`);
  toggle.type = 'checkbox';
  // TODO if there is no key in local storage, read user's preferred color scheme
  toggle.checked = localStorage.getItem(darkModeKeyName) === 'true';
  setDarkModeState(toggle.checked);
  toggle.addEventListener('change', (event) => {
    setDarkModeState(event.currentTarget.checked);
  });

  const labelElement = Creator.createElementWithClassAndId('label', 'checkbox-label', darkModeKeyName);
  labelElement.appendChild(toggle);
  labelElement.appendChild(Creator.createSpan('Tryb ciemny'));
  addRipple(labelElement);
  return labelElement;
}

function updateAllSwipers() {
  for (let container of containers) {
    wordsContainer[container.type]?.swiper?.update();
  }
}

function setCompactModeState(state) {
  localStorage.setItem('compact-mode', state);
  document.body.classList.toggle('compact', state);
  updateAllSwipers();
}

// TODO: change checkbox to tabler icon
function createCompactModeToggle() {
  const compactModeKeyName = 'compact-mode';
  const toggle = Creator.createElementWithId('input', `${compactModeKeyName}-checkbox`);
  toggle.type = 'checkbox';
  // TODO if there is no key in local storage, read device width?
  toggle.checked = localStorage.getItem(compactModeKeyName) === 'false';
  setCompactModeState(!toggle.checked);
  toggle.addEventListener('change', (event) => {
    setCompactModeState(!event.currentTarget.checked);
  });

  const labelElement = Creator.createElementWithClassAndId('label', 'checkbox-label', compactModeKeyName);
  labelElement.appendChild(toggle);
  labelElement.appendChild(Creator.createSpan('Nagłówki kategorii'));
  addRipple(labelElement);
  return labelElement;
}

function hideSlidingSheetsAndScrim() {
  const visibleClass = 'visible';
  const sheetsToHide = Array.from(document.querySelectorAll(`.sliding-sheet.${visibleClass}`));
  for (const sheet of sheetsToHide) {
    sheet.classList.remove(visibleClass);
    setTimeout(() => preventTabbingToElement(sheet), sheetClosingAnimationDuration);
  }
  getScrim()?.classList.remove(visibleClass);
}

function attachEventsToSheetsAndScrim() {
  getScrim()?.addEventListener('click', (event) => {
    event.preventDefault();
    hideSlidingSheetsAndScrim();
  });

  window.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
      hideSlidingSheetsAndScrim();
    }
  });
}

function init() {
  populateSlidingSheetsContainer();
  attachEventsToSheetsAndScrim();
  populateFooter();
  window.addEventListener('keydown', handleKeyboardInput);
  for (const container of containers) {
    wordsContainer[container.type] = new Container(container);
  }
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