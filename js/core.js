let containers = [
  {
    type: "location",
    label: "Miejsce",
    icon: 'map-2',
  },
  {
    type: "character",
    label: "Postać",
    icon: 'user',
  },
  {
    type: "character-modifier",
    label: "Cecha postaci",
    icon: 'user-plus',
  },
  {
    type: "relation",
    label: "Relacja",
    icon: 'friends',
  },
  {
    type: "emotion",
    label: "Emocja",
    icon: 'heart',
  },
  {
    type: "action",
    label: "Czynność",
    icon: 'run',
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

  static createLinkWithIcon(text, url, icon, additionalClass = undefined) {
    const iconElement = Creator.createIcon(icon);
    const textElement = Creator.createSpan(text);
    const link = this.createLink(iconElement.outerHTML + textElement.outerHTML, url, additionalClass);
    link.classList.add('link-with-icon');
    return link;
  }

  static createSlidingSheet(id) {
    const sheet = this.createElementWithClassAndId('div', 'sliding-sheet', id);
    const content = this.createElementWithClass('div', 'sliding-sheet-content');
    sheet.appendChild(content);
    return sheet;
  }

  static createCircularButton(buttonId, buttonText, iconName, callback) {
    const button = this.createElementWithClassAndId('button', 'circular-button', buttonId);
    button.addEventListener('click', function (event) {
      event.preventDefault();
      if (event.detail >= 2) return;
      callback();
    });
    button.appendChild(this.createSpan(buttonText));
    button.appendChild(this.createIcon(iconName));
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
    const iconName = 'settings';
    const callback = () => {
      VisibilityController.toggleSheetVisibility('settings');
    }
    return Creator.createCircularButton(buttonId, buttonText, iconName, callback);
  }

  static createAboutButton() {
    const buttonId = 'button-about';
    const buttonText = 'Informacje';
    const iconName = 'info-circle';
    const callback = () => {
      VisibilityController.toggleSheetVisibility('about');
    }
    return Creator.createCircularButton(buttonId, buttonText, iconName, callback);
  }

  static createCheckboxIcons() {
    const container = Creator.createElementWithClass('div', 'checkbox-icon');
    container.appendChild(Creator.createIcon('square-check', 'checked'));
    container.appendChild(Creator.createIcon('square', 'unchecked'));
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

    forwardButton.appendChild(Creator.createIcon('chevrons-right'));
    return forwardButton;
  }

  static createCloseSheetFloatingActionButton() {
    const closeSheetButton = Creator.createElementWithClassAndId('button', 'floating-action-button', 'button-close-sheet');
    Creator.addRipple(closeSheetButton);

    closeSheetButton.addEventListener('click', function (e) {
      e.preventDefault();
      VisibilityController.hideSlidingSheetsAndScrim();
    });

    closeSheetButton.appendChild(Creator.createIcon('x'));
    return closeSheetButton;
  }
}

class WordSectionCreator {
  static addSwiperPrevNextButtons(parentElement) {
    const prevButton = Creator.createElementWithClass('button', 'navigation-button-prev');
    prevButton.appendChild(Creator.createIcon('chevron-left'));
    prevButton.appendChild(Creator.createHidingSpan('Wstecz'));
    prevButton.style.position = 'relative';
    Creator.addRipple(prevButton);

    const nextButton = Creator.createElementWithClass('button', 'navigation-button-next');
    nextButton.appendChild(Creator.createHidingSpan('Dalej'));
    nextButton.appendChild(Creator.createIcon('chevron-right'));
    nextButton.style.position = 'relative';
    Creator.addRipple(nextButton);

    parentElement.appendChild(prevButton);
    parentElement.appendChild(nextButton);
  }

  static addIcon(parentElement, iconName) {
    const icon = Creator.createIcon(iconName, 'section-icon');
    parentElement.appendChild(icon);
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
      'inspirację do scenek teatru improwizowanego.'));
    sheetContent.appendChild(Creator.createParagraph('Na występach źródłem inspiracji jest publiczność, ' +
      'lecz ich pomoc nie jest dostępna podczas prób i ćwiczeń. Magazyn Inspiracji wypełnia tę lukę ' +
      'zbiorem ponad 1500 pomysłów, podzielonych na wygodne kategorie.'
    ));

    sheetContent.appendChild(Creator.createSeparator());

    sheetContent.appendChild(Creator.createParagraph('Chcesz dodać nowe słówka, pomóc w rozwoju aplikacji lub zgłosić błąd?'));
    sheetContent.appendChild(Creator.createLinkWithIcon('Repozytorium na GitHub', 'https://github.com/oczki/inspiracje', 'brand-github'));
    sheetContent.appendChild(Creator.createLinkWithIcon('E-mail', 'mailto:damian.oczki@gmail.com', 'mail'));
    sheetContent.appendChild(Creator.createLinkWithIcon('Messenger', 'https://m.me/oczki', 'brand-messenger'));

    sheetContent.appendChild(Creator.createSeparator());

    const currentYear = Math.max(2021, new Date().getFullYear());
    sheetContent.appendChild(Creator.createLinkWithIcon(`2018–${currentYear} Damian Oczki`, 'https://oczki.pl', 'copyright'));

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
      const iconName = 'plus';
      const callback = () => {
        this.increaseFontScale();
      }
      return Creator.createCircularButton(buttonId, buttonText, iconName, callback);
    }

    static createDecreaseFontScaleButton() {
      const buttonId = 'button-font-scale-minus';
      const buttonText = 'Pomniejsz';
      const iconName = 'minus';
      const callback = () => {
        this.decreaseFontScale();
      }
      return Creator.createCircularButton(buttonId, buttonText, iconName, callback);
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
      container.appendChild(Creator.createIcon('typography', 'decorative-icon'));
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