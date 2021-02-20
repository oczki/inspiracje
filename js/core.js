let wordsContainer = [];

const fontScaleValues = [0.67, 0.75, 0.9, 1.0, 1.1, 1.25, 1.5];
const visibleClass = 'visible';
const defaulSwiperAnimationDuration = 180;
const defaultSheetClosingAnimationDuration = 200;
const defaultDelayBetweenLoadedWordsDuration = 20;

let swiperAnimationDuration = defaulSwiperAnimationDuration;
let sheetClosingAnimationDuration = defaultSheetClosingAnimationDuration;
let delayBetweenLoadedWordsDuration = defaultDelayBetweenLoadedWordsDuration;

function sectionId(type) {
  return `section-${type}`;
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
    swiperInitialized.slideNext(swiperAnimationDuration);
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
  sheetContent.appendChild(createFontScaleControl());
  sheetContent.appendChild(createAnimationsDisabledToggle());
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

function showElement(element) {
  element?.classList.add(visibleClass);
}

function hideElement(element) {
  element?.classList.remove(visibleClass);
}

function showCloseFab() {
  hideElement(document.getElementById('button-advance-all'));
  showElement(document.getElementById('button-close-sheet'));
}

function showAdvanceAllFab() {
  hideElement(document.getElementById('button-close-sheet'));
  showElement(document.getElementById('button-advance-all'));
}

function createAdvanceAllWordsFloatingActionButton() {
  const forwardButton = Creator.createElementWithClassAndId('button', 'floating-action-button', 'button-advance-all');
  addRipple(forwardButton);
  showElement(forwardButton);

  forwardButton.addEventListener('click', function (e) {
    e.preventDefault();
    const types = Object.keys(containers).map(key => containers[key].type);
    shuffle(types);
    for (const [index, type] of types.entries()) {
      const swiper = getSwiper(type);
      setTimeout(() => {
        requestAnimationFrame(() => swiper?.slideNext(swiperAnimationDuration));
      }, delayBetweenLoadedWordsDuration * index);
    }
  });

  forwardButton.appendChild(Creator.createIcon('chevrons-right'));
  return forwardButton;
}

function createCloseSheetFloatingActionButton() {
  const closeSheetButton = Creator.createElementWithClassAndId('button', 'floating-action-button', 'button-close-sheet');
  addRipple(closeSheetButton);

  closeSheetButton.addEventListener('click', function (e) {
    e.preventDefault();
    hideSlidingSheetsAndScrim();
  });

  closeSheetButton.appendChild(Creator.createIcon('x'));
  return closeSheetButton;
}

function createSettingsButton() {
  const buttonId = 'button-settings';
  const buttonText = 'Opcje';
  const iconName = 'settings';
  const callback = () => {
    toggleSheetVisibility('settings');
  }
  return createCircularButton(buttonId, buttonText, iconName, callback);
}

function hideOtherSheets(idOfSheetNotToHide) {
  const otherSheets = Array.from(document.querySelectorAll(`.sliding-sheet:not(#${idOfSheetNotToHide})`));
  for (let otherSheet of otherSheets) {
    otherSheet.classList.remove(visibleClass);
    setTimeout(() => preventTabbingToElement(otherSheet), sheetClosingAnimationDuration);
  }
}

function toggleSheetVisibility(sheetId) {
  const sheet = document.getElementById(sheetId);
  hideOtherSheets(sheetId);
  if (sheet?.classList.contains(visibleClass)) {
    showAdvanceAllFab();
    sheet.classList.remove(visibleClass);
    getScrim()?.classList.remove(visibleClass);
    setTimeout(() => preventTabbingToElement(sheet), sheetClosingAnimationDuration);
  } else {
    showCloseFab();
    sheet.classList.add(visibleClass);
    getScrim()?.classList.add(visibleClass);
    allowTabbingToElement(sheet);
  }
}

function createCircularButton(buttonId, buttonText, iconName, callback) {
  const button = Creator.createElementWithClassAndId('button', 'circular-button', buttonId);
  button.addEventListener('click', function (event) {
    event.preventDefault();
    if (event.detail >= 2) return;
    callback();
  });
  button.appendChild(Creator.createSpan(buttonText));
  button.appendChild(Creator.createIcon(iconName));
  addRipple(button);
  return button;
}

function createAboutButton() {
  const buttonId = 'button-about';
  const buttonText = 'Info';
  const iconName = 'info-circle';
  const callback = () => {
    toggleSheetVisibility('about');
  }
  return createCircularButton(buttonId, buttonText, iconName, callback);
}

function populateFooter() {
  const footer = document.getElementsByTagName('footer')[0];

  const innerContainer = Creator.createElementWithId('div', 'footer-inner-container');
  innerContainer.appendChild(createAdvanceAllWordsFloatingActionButton());
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

function doesTheUserPreferDarkMode() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function shouldDarkModeToggleBeChecked(keyName) {
  const currentDarkModeKeyValue = localStorage.getItem(keyName);
  if (currentDarkModeKeyValue === null)
    return doesTheUserPreferDarkMode();
  else
    return currentDarkModeKeyValue === 'true';
}

function createDarkModeToggle() {
  const darkModeKeyName = 'dark-mode';
  const toggle = Creator.createElementWithId('input', `${darkModeKeyName}-checkbox`);
  toggle.type = 'checkbox';
  toggle.checked = shouldDarkModeToggleBeChecked(darkModeKeyName);
  setDarkModeState(toggle.checked);
  toggle.addEventListener('change', (event) => {
    setDarkModeState(event.currentTarget.checked);
  });

  const labelElement = Creator.createElementWithClassAndId('label', 'checkbox-label', darkModeKeyName);
  labelElement.appendChild(toggle);
  labelElement.appendChild(createCheckboxIcons());
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

function createCompactModeToggle() {
  const compactModeKeyName = 'compact-mode';
  const toggle = Creator.createElementWithId('input', `${compactModeKeyName}-checkbox`);
  toggle.type = 'checkbox';
  // TODO if there is no key in local storage, read device height?
  toggle.checked = localStorage.getItem(compactModeKeyName) === 'false';
  setCompactModeState(!toggle.checked);
  toggle.addEventListener('change', (event) => {
    setCompactModeState(!event.currentTarget.checked);
  });

  const labelElement = Creator.createElementWithClassAndId('label', 'checkbox-label', compactModeKeyName);
  labelElement.appendChild(toggle);
  labelElement.appendChild(createCheckboxIcons());
  labelElement.appendChild(Creator.createSpan('Nagłówki kategorii'));
  addRipple(labelElement);
  return labelElement;
}

function setAnimationsDisabledState(state) {
  localStorage.setItem('animations-disabled', state);
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

function createCheckboxIcons() {
  const container = Creator.createElementWithClass('div', 'checkbox-icon');
  container.appendChild(Creator.createIcon('square-check', 'checked'));
  container.appendChild(Creator.createIcon('square', 'unchecked'));
  return container;
}

function doesTheUserPreferReducedMotion() {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function shouldAnimationsToggleBeChecked(keyName) {
  const currentAnimationsDisabledKeyValue = localStorage.getItem(keyName);
  if (currentAnimationsDisabledKeyValue === null)
    return !doesTheUserPreferReducedMotion();
  else
    return currentAnimationsDisabledKeyValue === 'false';
}

function createAnimationsDisabledToggle() {
  const animationsDisabledKeyName = 'animations-disabled';
  const toggle = Creator.createElementWithId('input', `${animationsDisabledKeyName}-checkbox`);
  toggle.type = 'checkbox';
  toggle.checked = shouldAnimationsToggleBeChecked(animationsDisabledKeyName);
  setAnimationsDisabledState(!toggle.checked);
  toggle.addEventListener('change', (event) => {
    setAnimationsDisabledState(!event.currentTarget.checked);
  });

  const labelElement = Creator.createElementWithClassAndId('label', 'checkbox-label', animationsDisabledKeyName);
  labelElement.appendChild(toggle);
  labelElement.appendChild(createCheckboxIcons());
  labelElement.appendChild(Creator.createSpan('Animacje'));
  addRipple(labelElement);
  return labelElement;
}

function getFontScale() {
  const fontScaleKeyName = 'font-scale';
  return localStorage.getItem(fontScaleKeyName) || 1.0;
}

function setFontScale(value) {
  const fontScaleKeyName = 'font-scale';
  localStorage.setItem(fontScaleKeyName, value);
  document.documentElement.style.setProperty('--font-size-multiplier', value);
  updateAllSwipers();
}

function increaseFontScale() {
  const currentFontScale = getFontScale();
  const upperBound = fontScaleValues[fontScaleValues.length - 1];
  const valueLargerThanCurrent = fontScaleValues.filter(value => value > currentFontScale)[0] || upperBound;
  setFontScale(valueLargerThanCurrent);
}

function decreaseFontScale() {
  const currentScale = getFontScale();
  const lowerBound = fontScaleValues[0];
  const valueSmallerThanCurrent = Math.max(...fontScaleValues.filter(value => value < currentScale), lowerBound);
  setFontScale(valueSmallerThanCurrent);
}

function createIncreaseFontScaleButton() {
  const buttonId = 'button-font-scale-plus';
  const buttonText = 'Powiększ';
  const iconName = 'plus';
  const callback = () => {
    increaseFontScale();
  }
  return createCircularButton(buttonId, buttonText, iconName, callback);
}

function createDecreaseFontScaleButton() {
  const buttonId = 'button-font-scale-minus';
  const buttonText = 'Pomniejsz';
  const iconName = 'minus';
  const callback = () => {
    decreaseFontScale();
  }
  return createCircularButton(buttonId, buttonText, iconName, callback);
}

function createFontScaleControl() {
  setFontScale(getFontScale());

  const container = Creator.createElementWithId('div', 'scale-control-container');
  container.appendChild(Creator.createSpan('Skala'));
  container.appendChild(createDecreaseFontScaleButton());
  container.appendChild(createIncreaseFontScaleButton());

  return container;
}

function hideSlidingSheetsAndScrim() {
  const sheetsToHide = Array.from(document.querySelectorAll(`.sliding-sheet.${visibleClass}`));
  for (const sheet of sheetsToHide) {
    sheet.classList.remove(visibleClass);
    setTimeout(() => preventTabbingToElement(sheet), sheetClosingAnimationDuration);
  }
  getScrim()?.classList.remove(visibleClass);
  showAdvanceAllFab();
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