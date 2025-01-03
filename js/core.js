const version = '2.4';

let containerColors = [
  { // Green
    hue: 70,
    lightMode: {
      saturation: {
        card: 74,
        header: 100,
        word: 84,
      },
      lightness: {
        card: 90,
        header: 23,
        word: 23,
      },
    },
    darkMode: {
      saturation: {
        card: 35,
        header: 85,
        word: 60,
      },
      lightness: {
        card: 10,
        header: 29,
        word: 60,
      },
    },
  },
  { // Yellow
    hue: 53,
    lightMode: {
      saturation: {
        card: 68,
        header: 100,
        word: 100,
      },
      lightness: {
        card: 90,
        header: 24,
        word: 23,
      },
    },
    darkMode: {
      saturation: {
        card: 31,
        header: 100,
        word: 64,
      },
      lightness: {
        card: 10,
        header: 30,
        word: 61,
      },
    },
  },
  { // Orange
    hue: 32,
    lightMode: {
      saturation: {
        card: 80,
        header: 100,
        word: 100,
      },
      lightness: {
        card: 92,
        header: 31,
        word: 30,
      },
    },
    darkMode: {
      saturation: {
        card: 32,
        header: 55,
        word: 92,
      },
      lightness: {
        card: 11,
        header: 45,
        word: 69,
      },
    },
  },
  { // Red
    hue: 5,
    lightMode: {
      saturation: {
        card: 82,
        header: 83,
        word: 60,
      },
      lightness: {
        card: 94,
        header: 37,
        word: 43,
      },
    },
    darkMode: {
      saturation: {
        card: 24,
        header: 40,
        word: 100,
      },
      lightness: {
        card: 12.5,
        header: 56,
        word: 77.5,
      },
    },
  },
  { // Pink
    hue: 330,
    lightMode: {
      saturation: {
        card: 76,
        header: 96,
        word: 67,
      },
      lightness: {
        card: 93.5,
        header: 34,
        word: 39,
      },
    },
    darkMode: {
      saturation: {
        card: 26,
        header: 45,
        word: 89,
      },
      lightness: {
        card: 12,
        header: 55,
        word: 78,
      },
    },
  },
  { // Purple
    hue: 300,
    lightMode: {
      saturation: {
        card: 61,
        header: 88,
        word: 60,
      },
      lightness: {
        card: 93,
        header: 36,
        word: 38,
      },
    },
    darkMode: {
      saturation: {
        card: 28,
        header: 37,
        word: 72,
      },
      lightness: {
        card: 12,
        header: 54,
        word: 77,
      },
    },
  },
  { // Violet
    hue: 270,
    lightMode: {
      saturation: {
        card: 61,
        header: 65,
        word: 57,
      },
      lightness: {
        card: 93,
        header: 48,
        word: 47,
      },
    },
    darkMode: {
      saturation: {
        card: 29,
        header: 37,
        word: 75,
      },
      lightness: {
        card: 12,
        header: 58,
        word: 78,
      },
    },
  },
  { // Blue
    hue: 240,
    lightMode: {
      saturation: {
        card: 58,
        header: 70,
        word: 46,
      },
      lightness: {
        card: 94,
        header: 57,
        word: 52,
      },
    },
    darkMode: {
      saturation: {
        card: 23,
        header: 39,
        word: 76,
      },
      lightness: {
        card: 13,
        header: 62,
        word: 81,
      },
    },
  },
  { // Cyan
    hue: 218,
    lightMode: {
      saturation: {
        card: 56,
        header: 80,
        word: 60,
      },
      lightness: {
        card: 92.5,
        header: 45,
        word: 42,
      },
    },
    darkMode: {
      saturation: {
        card: 28,
        header: 37,
        word: 75,
      },
      lightness: {
        card: 12,
        header: 55,
        word: 76,
      },
    },
  },
]

let containers = [
  {
    type: "location",
    label: "Miejsce",
    isVisible: true,
    prevButtonPrefix: "Poprzednie",
    nextButtonPrefix: "Następne",
  },
  {
    type: "character",
    label: "Postać",
    isVisible: true,
  },
  {
    type: "character-modifier",
    label: "Cecha postaci",
    isVisible: true,
  },
  {
    type: "emotion",
    label: "Emocja",
    isVisible: true,
  },
  {
    type: "relation",
    label: "Relacja",
    isVisible: true,
  },
  {
    type: "action",
    label: "Czynność",
    isVisible: true,
  },
  {
    type: "object",
    label: "Przedmiot",
    isVisible: true,
    prevButtonPrefix: "Poprzedni",
    nextButtonPrefix: "Następny",
  },
  {
    type: "time",
    label: "Czas",
    isVisible: true,
    prevButtonPrefix: "Poprzedni",
    nextButtonPrefix: "Następny",
  },
  {
    type: "genre",
    label: "Gatunek",
    isVisible: true,
    prevButtonPrefix: "Poprzedni",
    nextButtonPrefix: "Następny",
  },
];

let wordsContainer = [];

const fontScaleValues = [0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.35, 1.5];
const visibleClass = 'visible';
const defaulSwiperAnimationDuration = 180;
const defaultSheetClosingAnimationDuration = 200;
const defaultDelayBetweenLoadedWordsDuration = 20;
const defaultFabTransitionDuration = 280;
const defaultIconRotationDuration = 500;
const defaultSpinnerOverlayFadeDuration = 120;
const defaultCategorySwapDuration = 280;

let swiperAnimationDuration = defaulSwiperAnimationDuration;
let sheetClosingAnimationDuration = defaultSheetClosingAnimationDuration;
let delayBetweenLoadedWordsDuration = defaultDelayBetweenLoadedWordsDuration;
let fabTransitionDuration = defaultFabTransitionDuration;
let iconRotationDuration = defaultIconRotationDuration;
let spinnerOverlayFadeDuration = defaultSpinnerOverlayFadeDuration;

let isDarkModeEnabled = false;

let Selector = new function() {
  this.sectionId = (type) => {
    return `section-${type}`;
  }

  this.swiperSelector = (type) => {
    return `#${this.sectionId(type)} .swiper-container`;
  }

  this.getSwiper = (type) => {
    return document.querySelector(this.swiperSelector(type))?.swiper;
  }

  this.getScrim = () => {
    return document.getElementById('scrim');
  }
}

let Util = new function() {
  this.shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  this.ajax = (url, callback) => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        callback(xhr.responseText);
      }
    }
    xhr.open('GET', url, true);
    xhr.send();
  }

  this.getWords = (type, callback) => {
    this.ajax('ajax/' + type + '.php', (output) => callback(output));
  }

  this.debounce = (callback, timeout, immediate = false) => {
    let timer;
    return function() {
      let context = this, args = arguments;
      let later = function() {
        timer = null;
        if (!immediate) callback.apply(context, args);
      };
      var callNow = immediate && !timer;
      clearTimeout(timer);
      timer = setTimeout(later, timeout);
      if (callNow) callback.apply(context, args);
    };
  }

  this.throttle = (callback, timeout) => {
    let timer;
    let blocked = false;
    return function() {
      if (blocked) return;
      blocked = true;
      callback.apply(this, arguments)
      clearTimeout(timer);
      timer = setTimeout(() => blocked = false, timeout);
    }
  }

  this.deepFreeze = (obj) => {
    Object.freeze(obj);

    Object.getOwnPropertyNames(obj).forEach(function (prop) {
      if (obj.hasOwnProperty(prop)
      && obj[prop] !== null
      && (typeof obj[prop] === "object" || typeof obj[prop] === "function")
      && !Object.isFrozen(obj[prop])) {
        Util.deepFreeze(obj[prop]);
      }
    });

    return obj;
  };

  // From https://github.com/vicsstar/deep-unfreeze/blob/master/src/index.js
  this.deepUnfreeze = (obj) => {
    const unfreezeProp = (prop) => {
      return Object.isFrozen(prop) ? Util.deepUnfreeze(prop) : prop;
    };

    if (obj !== null) {
      if(obj.constructor.name !== 'Date' &&
        !Array.isArray(obj) &&
        typeof obj !== 'function' &&
        typeof obj === 'object') {
  
        return Object.getOwnPropertyNames(obj).map((prop) => {
          const clonedObj = {};
          clonedObj[prop] = unfreezeProp(obj[prop]);
          return clonedObj;
        }).reduce(
          (leftObj, rightObj) => Object.assign({}, leftObj, rightObj)
        );
      } else if (Array.isArray(obj)) {
        return obj.map((item) => unfreezeProp(item));
      } else if (typeof obj === 'function') {
        const target = function() {
          obj.call(this, ...arguments);
        };
        target.prototype = Object.create(obj.prototype);
        return target;
      }
    }
    return obj;
  };

  this.areGlobalAndLocalMinorVersionsMatching = (localVersion) => {
    if (!localVersion) return false;
    const majorAndMinorRegex = /^(\d+\.\d+).*$/;
    const globalVersionMajorAndMinor = version?.match(majorAndMinorRegex)[1] || 'global invalid';
    const localVersionMajorAndMinor = localVersion?.match(majorAndMinorRegex)[1] || 'local invalid';
    return globalVersionMajorAndMinor === localVersionMajorAndMinor;
  }
}

let Store = new function() {
  this.isLocalStorageSupported = () => {
    try {
      return !!window.localStorage
        && typeof localStorage.getItem === 'function'
        && typeof localStorage.setItem === 'function'
        && typeof localStorage.removeItem === 'function';
    } catch (e) {
      return false;
    }
  }

  this.get = (key) => {
    return this.isLocalStorageSupported() ? localStorage?.getItem(key) : null;
  }

  this.set = (key, value) => {
    if (!this.isLocalStorageSupported()) return;
    localStorage?.setItem(key, value);
  }
}

class Color {
  constructor(hue = 0, saturation = 0, lightness = 0) {
    // If the passed lone argument was a string, parse it as hexadecimal color
    if (typeof(hue) === 'string' && arguments.length === 1) {
      const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hue);
      const r = parseInt(rgb[1], 16);
      const g = parseInt(rgb[2], 16);
      const b = parseInt(rgb[3], 16);
      [this.h, this.s, this.l] = this.rgb2hsl(r, g, b);
    } else { // Otherwise treat the arguments as hue, saturation, lightness
      this.h = hue;
      this.s = saturation;
      this.l = lightness;
    }
  }

  // RGB <-> HSL code based on https://stackoverflow.com/a/9493060/5024905
  rgb2hsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return [h * 360, s * 100, l * 100];
  }

  get hsl() {
    return [this.h, this.s, this.l];
  }

  get hslString() {
    return `hsl(${this.h}deg, ${this.s}%, ${this.l}%)`;
  }

  hslaString(alpha = 1.0) {
    return `hsla(${this.h}deg, ${this.s}%, ${this.l}%, ${alpha})`;
  }

  get rgb() {
    let h = this.h / 360;
    let s = this.s * 0.01;
    let l = this.l * 0.01;
    let r, g, b;
    if (s == 0) {
      r = g = b = l;
    } else {
      let hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      }

      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }

  get hex() {
    const [r, g, b] = this.rgb;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  applyDelta(value, percentDelta, min = 0, max = 100) {
    if (percentDelta > 0)
      return this.clamp(value + ((max - value) * 0.01 * percentDelta), min, max);
    return this.clamp(value * (1 + 0.01 * percentDelta), min, max);
  }

  saturate(percentDelta = 50) { 
    this.s = this.applyDelta(this.s, percentDelta);
    return this;
  }

  lighten(percentDelta = 50) { 
    this.l = this.applyDelta(this.l, percentDelta);
    return this;
  }
}

class ColorSetter {
  constructor(containerData, index) {
    this.colorData = isDarkModeEnabled ? containerColors[index]?.darkMode : containerColors[index]?.lightMode;
    this.hue = containerColors[index]?.hue || 0;
    this.sectionElement = document.getElementById(Selector.sectionId(containerData.type));
  }

  setColors() {
    if (!this.sectionElement) return;
    this.setSectionBackground();
    this.setSectionShadow();
    this.setHeaderTextColor();
    this.setWordTextColor();
    this.setNavigationButtonsColor();
    this.setOverlayDotColor();
  }

  setSectionBackground() {
    const s = this.colorData?.saturation?.card || 0;
    const l = this.colorData?.lightness?.card || 0;
    let color = new Color(this.hue, s, l);

    if (!isDarkModeEnabled) {
      color = color.lighten(15);
    }

    this.sectionElement.style.backgroundColor = color?.hslString;
  }

  setSectionShadow() {
    const shadowPropertyName = '--card-shadow-override';
    if (isDarkModeEnabled) {
      this.sectionElement.style.removeProperty(shadowPropertyName);
      return;
    }
    const s = this.colorData?.saturation?.word || 0;
    const l = this.colorData?.lightness?.word || 0;
    const color = new Color(this.hue, s, l);
    const shadowDefinition = `0px 2px 1px -1px ${color?.hslaString(0.2)},
      0px 1px 2px 0px ${color?.hslaString(0.14)},
      0px 1px 3px 0px ${color?.hslaString(0.12)}`;
    this.sectionElement.style.setProperty(shadowPropertyName, shadowDefinition);
  }

  setHeaderTextColor() {
    const header = this.sectionElement.querySelector('.header-container');
    if (!header) return;

    const s = this.colorData?.saturation?.header;
    const l = this.colorData?.lightness?.header;
    const color = new Color(this.hue, s, l);
    header.style.color = color?.hslString;
  }

  setWordTextColor() {
    const wordWrapper = this.sectionElement.querySelector('.swiper-wrapper');
    if (!wordWrapper) return;

    const s = this.colorData?.saturation?.word;
    const l = this.colorData?.lightness?.word;
    let color = new Color(this.hue, s, l);

    if (isDarkModeEnabled) {
      color = color.saturate(-30).lighten(2);
    } else {
      color = color.lighten(-5);
    }

    wordWrapper.style.color = color?.hslString;
  }

  setNavigationButtonsColor() {
    const navigationButtons = this.sectionElement.querySelectorAll('button');
    if (!navigationButtons) return;

    const s = this.colorData?.saturation?.word;
    const l = this.colorData?.lightness?.word;
    const color = new Color(this.hue, s, l);
    Array.from(navigationButtons).forEach(button => button.style.color = color?.hslString);
  }

  setOverlayDotColor() {
    const dotColorPropertyName = '--dot-color';
    const overlay = this.sectionElement.querySelector('.section-overlay');
    if (!overlay) return;

    const s = this.colorData?.saturation?.word;
    const l = this.colorData?.lightness?.word;
    const color = new Color(this.hue, s, l);
    overlay.style.setProperty(dotColorPropertyName, color.hslString);
  }
}

let Categories = new function() {
  this.categoriesData = [];
  this.categoriesKeyName = 'categories-data';
  this.versionKeyName = 'app-version'; // Used to force update on user's side if new categories appear

  this.initialize = () => {
    const localVersion = JSON.parse(Store.get(this.versionKeyName)) || 0.0;
    if (Util.areGlobalAndLocalMinorVersionsMatching(localVersion)) {
      this.categoriesData = JSON.parse(Store.get(this.categoriesKeyName)) || this.getOriginalData();
    } else {
      this.categoriesData = this.getOriginalData();
      Store.set(this.versionKeyName, JSON.stringify(version));
    }
    this.saveData();
  }

  this.forceReset = () => {
    const newOrder = this.getOriginalData();

    for (let index = newOrder.length - 2; index >= 0; index--) {
      const thisItem = document.getElementById(Selector.sectionId(newOrder[index].type));
      const nextItem = document.getElementById(Selector.sectionId(newOrder[index + 1].type));
      if (!thisItem || !nextItem) continue;
      const parentElement = nextItem.parentElement;
      parentElement.insertBefore(thisItem, nextItem);
    }

    this.categoriesData = this.getOriginalData();
    this.resetVisibilities();
    this.saveData();
    Settings.updateColors();
    Settings.CategoriesManagementList.showHintForHiddenCategories();
    Settings.CategoriesManagementList.adjustMarginUnderLastCategory();
  }

  this.getOriginalData = () => {
    let data = containers.slice();
    return Util.deepUnfreeze(data);
  }

  this.getData = () => {
    return this.categoriesData;
  }

  this.saveData = () => {
    Store.set(this.categoriesKeyName, JSON.stringify(this.categoriesData));
  }

  this.getDataOfVisible = () => {
    return this.categoriesData.filter(category => category.isVisible);
  }

  this.insertFirstBeforeSecond = (index1, index2) => {
    const firstElement = this.getSectionElementByIndex(index1);
    const secondElement = this.getSectionElementByIndex(index2);
    const parentElement = firstElement.parentElement;
    parentElement.insertBefore(secondElement, firstElement);
  }

  this.swap = (index1, index2) => {
    [this.categoriesData[index1], this.categoriesData[index2]] = [this.categoriesData[index2], this.categoriesData[index1]];
    this.saveData();

    this.insertFirstBeforeSecond(index1, index2);
  }

  this.getDataByIndex = (index) => {
    return this.categoriesData[index];
  }

  this.getIndexByType = (categoryType) => {
    const item = this.categoriesData.find(category => category.type === categoryType);
    return this.categoriesData.indexOf(item);
  }

  this.getDataByType = (categoryType) => {
    return this.getDataByIndex(this.getIndexByType(categoryType));
  }

  this.getSectionElementByIndex = (index) => {
    const id = Selector.sectionId(this.getDataByIndex(index).type);
    return document.getElementById(id);
  }

  this.setVisibilityByType = (categoryType, isVisible) => {
    let category = wordsContainer[categoryType];
    if (isVisible) {
      if (category) {
        category.reinitializeSwiper();
      } else {
        category = new CategoryContainer(this.getDataByType(categoryType));
        wordsContainer[categoryType] = category;
      }
    } else {
      category?.destroy();
    }
    const categoryData = this.categoriesData[this.getIndexByType(categoryType)];
    if (categoryData !== undefined) {
      categoryData.isVisible = isVisible;
      this.saveData();
    }
    Settings.CategoriesManagementList.showHintForHiddenCategories();
    Settings.CategoriesManagementList.adjustMarginUnderLastCategory();
    Settings.CategoriesManagementList.updateCounter();
    Settings.updateColors();
  }

  this.isVisible = (categoryType) => {
    return this.categoriesData[this.getIndexByType(categoryType)]?.isVisible || false;
  }

  this.resetVisibilities = () => {
    for (const category of this.getData()) {
      const type = category.type;
      this.setVisibilityByType(type, true); // Force all categories to be visible upon reset
      // this.setVisibilityByType(type, this.getOriginalData().slice().find(c => c.type === type)?.isVisible); // Uncomment to use default visibilites instead
    }
  }
}

class CategoryContainer {
  constructor(categoryData) {
    this.data = categoryData;
    this.numberOfSlidesToGenerateFromWordsCache = 12;
    this.wordsCache = [];
    this.wordsCacheIndex = 0;
    this.slideCount = 0;
    this.slideIndex = 0;
    this.hasSpokenSinceTransitionEnd = true;

    WordSectionCreator.addSection(categoryData);
    this.toggleSectionVisibility(this.isVisible());
    if (this.isVisible()) {
      this.swiper = this.initializeSwiper();
      this.initializeWords();
    }

    setInterval(() => this.speakCurrentSlideIfAllowed(), Math.max(150, swiperAnimationDuration + 11));
  }

  isVisible() {
    return this.data.isVisible || false;
  }

  initializeWords() {
    Util.getWords(this.data.type, (output) => {
      this.wordsCache = eval(output);
      Util.shuffle(this.wordsCache);
      this.wordsCacheIndex = Math.floor(this.wordsCache.length * 0.5);
      this.hideSpinner();
      this.appendSlidesToTheLeft(this.numberOfSlidesToGenerateFromWordsCache + 1);
      this.appendSlidesToTheRight(this.numberOfSlidesToGenerateFromWordsCache);
    });
  }

  initializeSwiper() {
    this.toggleSectionVisibility(true);
    const prevSlideCallbackStart = () => { this.wordsCacheIndex--; }
    const nextSlideCallbackStart = () => { this.wordsCacheIndex++; }
    const prevSlideCallbackEnd = () => { this.appendSlidesToTheLeftIfNeeded(); this.hasSpokenSinceTransitionEnd = false; }
    const nextSlideCallbackEnd = () => { this.appendSlidesToTheRightIfNeeded(); this.hasSpokenSinceTransitionEnd = false; }
    return Creator.createSwiper(this.data,
      prevSlideCallbackStart, nextSlideCallbackStart, prevSlideCallbackEnd, nextSlideCallbackEnd);
  }

  reinitializeSwiper() {
    if (this.swiper) {
      this.swiper.destroy();
      const swiperContainer = document.querySelector(Selector.swiperSelector(this.data.type));
      while (swiperContainer.firstChild)
        swiperContainer.removeChild(swiperContainer.firstChild);
      WordSectionCreator.addSwiperWrapper(swiperContainer);
      this.showSpinner();
    }
    setTimeout(() => {
      this.swiper = this.initializeSwiper();
      if (this.wordsCache.length > 0) {
        this.appendSlidesToTheLeft(this.numberOfSlidesToGenerateFromWordsCache + 1);
        this.appendSlidesToTheRight(this.numberOfSlidesToGenerateFromWordsCache);
        this.hideSpinner();
      } else {
        this.initializeWords();
      }
    }, 100);
  }

  destroy() {
    if (this.swiper) {
      this.swiper.destroy();
      this.toggleSectionVisibility(false);
    }
  }

  toggleSectionVisibility(isVisible) {
    const section = document.getElementById(Selector.sectionId(this.data.type));
    isVisible ? VisibilityController.showElement(section) : VisibilityController.hideElement(section);
  }

  appendSlidesToTheLeft(numberOfSlidesToAppend, offset = 0) {
    if (this.wordsCache.length === 0) return;
    this.recalculateSlideCountAndIndex();
    const marginFromBeginning = this.slideIndex;
    const startingIndex = this.wordsCacheIndex - marginFromBeginning + offset;
    const newSlides = [];
    for (let index = 0; index < numberOfSlidesToAppend; index++) {
      newSlides.push(this.getWordByIndex(startingIndex - index));
    }
    this.swiper.prependSlide(Creator.createSlides(newSlides));
    this.recalculateSlideCountAndIndex();
  }

  appendSlidesToTheRight(numberOfSlidesToAppend, offset = 0) {
    if (this.wordsCache.length === 0) return;
    this.recalculateSlideCountAndIndex();
    const marginFromEnd = this.slideCount - this.slideIndex;
    const startingIndex = this.wordsCacheIndex + marginFromEnd + offset;
    const newSlides = [];
    for (let index = 0; index < numberOfSlidesToAppend; index++) {
      newSlides.push(this.getWordByIndex(startingIndex + index));
    }
    this.swiper.appendSlide(Creator.createSlides(newSlides));
    this.recalculateSlideCountAndIndex();
  }

  appendSlidesToTheLeftIfNeeded() {
    const marginFromEdge = 6;
    const deltaNumberOfSlides = 11;
    this.recalculateSlideCountAndIndex();
    if (this.isActiveSlideCloseToLeftEdge(marginFromEdge)) {
      this.appendSlidesToTheLeft(deltaNumberOfSlides, -1);
      this.removeSlidesFromRightEdge(deltaNumberOfSlides);
    }
  }

  appendSlidesToTheRightIfNeeded() {
    const marginFromEdge = 6;
    const deltaNumberOfSlides = 11;
    this.recalculateSlideCountAndIndex();
    if (this.isActiveSlideCloseToRightEdge(marginFromEdge)) {
      this.appendSlidesToTheRight(deltaNumberOfSlides);
      this.removeSlidesFromLeftEdge(deltaNumberOfSlides);
    }
  }

  isActiveSlideCloseToLeftEdge(marginFromEnd) {
    return this.slideIndex <= marginFromEnd;
  }

  isActiveSlideCloseToRightEdge(marginFromEnd) {
    return this.slideIndex >= this.slideCount - marginFromEnd;
  }

  removeSlidesFromLeftEdge(numberOfSlidesToRemove) {
    if (numberOfSlidesToRemove > this.slideCount) numberOfSlidesToRemove = this.slideCount;
    // To prevent an unwanted index change (Swiper issue?), remove first N-1 slides, THEN remove the first slide individually.
    // Removing all N slides makes Swiper jump to the next slide for some reason.
    if (numberOfSlidesToRemove > 1) {
      const range = (x, y) => Array.from((function* () { while (x < y) yield x++; })());
      const slidesToRemove = range(0, numberOfSlidesToRemove - 1);
      this.swiper.removeSlide(slidesToRemove);
    }
    this.swiper.removeSlide(0);
    this.recalculateSlideCountAndIndex();
  }

  removeSlidesFromRightEdge(numberOfSlidesToRemove) {
    if (numberOfSlidesToRemove > this.slideCount) numberOfSlidesToRemove = this.slideCount;
    const startingIndex = this.slideCount - numberOfSlidesToRemove;
    if (numberOfSlidesToRemove > 1) {
      const range = (x, y) => Array.from((function* () { while (x < y) yield x++; })());
      this.swiper.removeSlide(range(startingIndex, startingIndex + numberOfSlidesToRemove));
    } else {
      this.swiper.removeSlide(startingIndex);
    }
    this.recalculateSlideCountAndIndex();
  }

  recalculateSlideCountAndIndex() {
    this.slideCount = this.swiper?.slides?.length || 0;
    this.slideIndex = this.swiper?.activeIndex || 0;
  }

  getWordByIndex(index) {
    if (this.wordsCache.length === 0) return '?';
    if (index < 0)
      return this.getWordByIndex(this.wordsCache.length + index);
    if (index >= this.wordsCache.length)
      return this.getWordByIndex(index - this.wordsCache.length);
    return this.wordsCache[index] || '?';
  }

  createTextToSpeak() {
    const textStrippedOfFormatting = this.getWordByIndex(this.wordsCacheIndex).replace('_(', '(');
    let textSentenceCase = textStrippedOfFormatting;
    try {
      textSentenceCase = textStrippedOfFormatting.slice(0, 1).toUpperCase() + textStrippedOfFormatting.slice(1);
    } catch (e) {
    }
    return this.data.label + ': ' + textSentenceCase;
  }

  speakCurrentSlideIfAllowed() {
    if (Aria.isAdvanceAllSpeaking()) {
      this.hasSpokenSinceTransitionEnd = true;
      return;
    };
    if (this.hasSpokenSinceTransitionEnd) return;
    this.hasSpokenSinceTransitionEnd = true;
    Aria.speak(this.createTextToSpeak());
  }

  showSpinner() {
    const overlay = document.getElementById(Selector.sectionId(this.data.type)).getElementsByClassName('section-overlay')[0];
    VisibilityController.showElement(overlay);
    overlay.style.display = 'flex';
  }

  hideSpinner() {
    const overlay = document.getElementById(Selector.sectionId(this.data.type)).getElementsByClassName('section-overlay')[0];
    VisibilityController.hideElement(overlay);
    setTimeout(() => {
      overlay.style.display = 'none';
    }, spinnerOverlayFadeDuration);
  }
}

let Icon = new function() {
  this._svg = (content) => `<svg viewBox="0 0 24 24">${content}</svg>`;
  this._svgPath = (path) => this._svg(`<path fill="currentColor" d="${path}" />`);

  this.general = new function() {
    this.x = () => Icon._svgPath('M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z');
    this.externalLink = () => Icon._svgPath('M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z');
    this.email = () => Icon._svgPath('M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z');
  }

  this.arrow = new function() {
    this.right = () => Icon._svgPath('M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z');
    this.circleBack = () => Icon._svgPath('M13,3A9,9 0 0,0 4,12H1L4.89,15.89L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3Z');
    this.doubleForward = () => Icon._svgPath('M12,6V9L16,5L12,1V4A8,8 0 0,0 4,12C4,13.57 4.46,15.03 5.24,16.26L6.7,14.8C6.25,13.97 6,13 6,12A6,6 0 0,1 12,6M18.76,7.74L17.3,9.2C17.74,10.04 18,11 18,12A6,6 0 0,1 12,18V15L8,19L12,23V20A8,8 0 0,0 20,12C20,10.43 19.54,8.97 18.76,7.74Z');
  }

  this.footer = new function() {
    this.settings = () => Icon._svgPath('M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z');
    this.categories = () => Icon._svgPath('M2,6V8H14V6H2M2,10V12H14V10H2M20.04,10.13C19.9,10.13 19.76,10.19 19.65,10.3L18.65,11.3L20.7,13.35L21.7,12.35C21.92,12.14 21.92,11.79 21.7,11.58L20.42,10.3C20.31,10.19 20.18,10.13 20.04,10.13M18.07,11.88L12,17.94V20H14.06L20.12,13.93L18.07,11.88M2,14V16H10V14H2Z');
    this.clipboard = () => Icon._svgPath('M17,9H7V7H17M17,13H7V11H17M14,17H7V15H14M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z');
    this.info = () => Icon._svgPath('M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z');
  }

  this.checkbox = new function() {
    this.unchecked = () => Icon._svgPath('M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z');
    this.checked = () => Icon._svgPath('M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z');
  }

  this.textScale = new function() {
    this.size = () => Icon._svgPath('M2 4V7H7V19H10V7H15V4H2M21 9H12V12H15V19H18V12H21V9Z');
    this.plus = () => Icon._svgPath('M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z');
    this.minus = () => Icon._svgPath('M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z');
  }

  this.brand = new function() {
    this.github = () => Icon._svgPath('M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z');
  }
}

let Creator = new function() {
  this.createSwiper = (data,
    prevTransitionStartCallback, nextTransitionStartCallback,
    prevTransitionEndCallback, nextTransitionEndCallback) => {
    const prevButtonPrefix = data.prevButtonPrefix || 'Poprzednia';
    const nextButtonPrefix = data.nextButtonPrefix || 'Następna';
    const swiper = new Swiper(Selector.swiperSelector(data.type), {
      speed: swiperAnimationDuration,
      spaceBetween: 0,
      navigation: {
        prevEl: `#${Selector.sectionId(data.type)} .navigation-button-prev`,
        nextEl: `#${Selector.sectionId(data.type)} .navigation-button-next`,
      },
      a11y: {
        prevSlideMessage: `${prevButtonPrefix} ${data.label}`,
        nextSlideMessage: `${nextButtonPrefix} ${data.label}`,
      }
    });
    swiper.on('slidePrevTransitionStart', prevTransitionStartCallback);
    swiper.on('slideNextTransitionStart', nextTransitionStartCallback);
    swiper.on('slidePrevTransitionEnd', prevTransitionEndCallback);
    swiper.on('slideNextTransitionEnd', nextTransitionEndCallback);
    return swiper;
  }

  this.createElementWithClass = (tagName, className = undefined) => {
    const element = document.createElement(tagName);
    if (className) {
      element.classList.add(className);
    }
    return element;
  }

  this.createElementWithId = (tagName, id = undefined) => {
    const element = document.createElement(tagName);
    if (id) {
      element.id = id;
    }
    return element;
  }

  this.createElementWithClassAndId = (tagName, className = undefined, id = undefined) => {
    const element = this.createElementWithClass(tagName, className);
    if (id) {
      element.id = id;
    }
    return element;
  }

  this.createIcon = (svgCode, additionalClass = undefined) => {
    const iconContainer = this.createElementWithClass('div', 'icon');
    if (additionalClass) {
      iconContainer.classList.add(additionalClass);
    }
    iconContainer.innerHTML = svgCode;
    return iconContainer;
  }

  this.createSpan = (text, additionalClass = undefined) => {
    const spanElement = document.createElement('span');
    if (additionalClass) {
      spanElement.classList.add(additionalClass);
    }
    spanElement.innerHTML = text;
    return spanElement;
  }

  this.createHidingSpan = (text) => {
    const spanElement = this.createElementWithClass('span', 'hidden-when-narrow');
    spanElement.innerHTML = text;
    return spanElement;
  }

  this.createParagraph = (text, additionalClass = undefined) => {
    const paragraphElement = document.createElement('p');
    if (additionalClass) {
      paragraphElement.classList.add(additionalClass);
    }
    paragraphElement.innerHTML = text;
    return paragraphElement;
  }

  this.createLink = (text, url, additionalClass = undefined) => {
    const linkElement = document.createElement('a');
    if (additionalClass) {
      linkElement.classList.add(additionalClass);
    }
    linkElement.innerHTML = text;
    linkElement.setAttribute('href', url);
    linkElement.setAttribute('target', '_blank');
    linkElement.setAttribute('rel', 'noopener');
    return linkElement;
  }

  this.createLinkWithIcon = (text, url, svgCode, additionalClass = undefined) => {
    const iconElement = Creator.createIcon(svgCode);
    const textElement = Creator.createSpan(text);
    const link = this.createLink(iconElement.outerHTML + textElement.outerHTML, url, additionalClass);
    link.classList.add('link-with-icon');
    Creator.addRipple(link);
    return link;
  }

  this.createSlidingSheet = (id) => {
    const sheet = this.createElementWithClassAndId('div', 'sliding-sheet', id);
    const content = this.createElementWithClass('div', 'sliding-sheet-content');
    sheet.appendChild(content);
    return sheet;
  }

  this.createSlidingSheetHeader = (text, rightSideContent = undefined) => {
    const headerContainer = this.createElementWithClass('div', 'sliding-sheet-header-container');
    const firstLineWrapper = this.createElementWithClass('div', 'sliding-sheet-header-first-line');

    firstLineWrapper.appendChild(Creator.createParagraph(text, 'sliding-sheet-header-text'));

    if (rightSideContent) {
      const rightSide = this.createElementWithClass('div', 'sliding-sheet-header-right-side');
      rightSide.appendChild(rightSideContent);
      firstLineWrapper.appendChild(rightSide);
    }

    headerContainer.appendChild(firstLineWrapper);

    headerContainer.appendChild(Creator.createSeparator());

    return headerContainer;
  }

  this.createCircularButton = (buttonId, buttonText, iconElement, callback, preventDoubleClick = false) => {
    const button = this.createElementWithClassAndId('button', 'circular-button', buttonId);
    const callbackOnSingleClick = (e) => {
      e.preventDefault();
      callback();
    }
    if (preventDoubleClick) {
      button.addEventListener('click', Util.debounce(callbackOnSingleClick, defaultFabTransitionDuration, true));
    } else {
      button.addEventListener('click', callbackOnSingleClick);
    }

    Aria.setLabel(button, buttonText);
    button.appendChild(iconElement);
    this.addRipple(button);
    return button;
  }

  this.addRipple = (parentElement) => {
    parentElement.appendChild(this.createElementWithClass('div', 'rippleJS'));
  }

  this.capitalizeFirstLetter = (text) => {
    try {
      return text?.charAt(0)?.toUpperCase() + text?.slice(1);
    } catch (e) {
      return text;
    }
  }

  this.addNonBreakingSpaces = (text) => {
    try {
      // Add nbsp after a conjunction or digits, but not before _(subtitle)
      return text.replace(/\b(a|i|o|u|w|z|\d+)\s(?!_)/gi, '$1&nbsp;');
    } catch (e) {
      return text;
    }
  }

  this.splitIntoTitleAndSubtitle = (text) => {
    try {
      const slideWithSubtitleRegex = /^(.+) _\((.+)\)$/; // e.g. 'Hello _(World)' ---> 'Hello', 'World'
      const matches = text?.match(slideWithSubtitleRegex);
      let result = '';
      if (matches?.length > 2) { // Slide uses the subtitle format
        for (let i = 1; i < matches.length; i++) {
          result += `<p>${matches[i]}</p>`;
        }
      } else { // Slide uses plain text
        result = text;
      }
      return result;
    } catch (e) {
      return text;
    }
  }

  this.parseSlideText = (text) => {
    const capitalizedText = this.capitalizeFirstLetter(text);
    const textWithNonBreakingSpaces = this.addNonBreakingSpaces(capitalizedText);
    return this.splitIntoTitleAndSubtitle(textWithNonBreakingSpaces);
  }

  this.createSlide = (text) => {
    return `<div class="swiper-slide">${this.parseSlideText(text)}</div>`;
  }

  this.createSlides = (texts = []) => {
    let slides = [];
    for (let text of texts) {
      slides.push(this.createSlide(text));
    }
    return slides;
  }

  this.createSeparator = () => {
    const separator = document.createElement('hr');
    separator.classList.add('separator');
    return separator;
  }

  this.createToggleLabels = (primaryText, secondaryText = '') => {
    const labelsContainer = this.createElementWithClass('div', 'label-text');
    const primaryLabelElement = this.createSpan(primaryText, 'label-text-primary');
    labelsContainer.appendChild(primaryLabelElement);

    if (secondaryText.length > 0) {
      const secondaryLabelElement = this.createSpan(secondaryText, 'label-text-secondary');
      labelsContainer.appendChild(secondaryLabelElement);
    }

    return labelsContainer;
  }
}

let SpecializedCreator = new function() {
  this.createAppearanceSettingsButton = () => {
    const buttonId = 'button-appearance-settings';
    const buttonText = 'Ustawienia wyglądu';
    const icon = Creator.createIcon(Icon.footer.settings());
    const callback = () => {
      VisibilityController.toggleSheetVisibility('appearance-settings');
      this.closeSettingsPrompt();
    }
    const preventDoubleClick = true;
    return Creator.createCircularButton(buttonId, buttonText, icon, callback, preventDoubleClick);
  }

  this.createCategoryManagementButton = () => {
    const buttonId = 'button-category-management';
    const buttonText = 'Kategorie słów';
    const icon = Creator.createIcon(Icon.footer.categories());
    const callback = () => {
      VisibilityController.toggleSheetVisibility('category-management');
      this.closeSettingsPrompt();
    }
    const preventDoubleClick = true;
    return Creator.createCircularButton(buttonId, buttonText, icon, callback, preventDoubleClick);
  }

  this.createCopyToClipboardButton = () => {
    const buttonId = 'button-copy-to-clipboard';
    const buttonText = 'Kopiuj inspiracje do schowka';
    const icon = Creator.createIcon(Icon.footer.clipboard());
    const callback = () => {
      const setTextOverride = (newLabel) => {
        const buttonElement = document.getElementById(buttonId);
        if (buttonElement) {
          buttonElement.style.setProperty('--text-override', newLabel);
        }
      }
      const setTemporaryLabel = (newLabel) => {
        setTextOverride(newLabel);
        setTimeout(() => {
          setTextOverride('unset');
        }, 1500);
      }
      const getTextToCopy = () => {
        let textToCopy = [];
        for (let categoryData of Categories.getDataOfVisible()) {
          textToCopy.push(wordsContainer[categoryData.type]?.createTextToSpeak());
        }
        return textToCopy.join('\n');
      }
      navigator.clipboard.writeText(getTextToCopy()).then(
        () => {
          setTemporaryLabel('\'Skopiowano!\'');
        },
        () => {
          setTemporaryLabel('\'Błąd!\'');
        }
      );
    }
    const preventDoubleClick = true;
    return Creator.createCircularButton(buttonId, buttonText, icon, callback, preventDoubleClick);
  }

  this.createAboutButton = () => {
    const buttonId = 'button-about';
    const buttonText = 'Informacje';
    const icon = Creator.createIcon(Icon.footer.info());
    const callback = () => {
      VisibilityController.toggleSheetVisibility('about');
    }
    const preventDoubleClick = true;
    return Creator.createCircularButton(buttonId, buttonText, icon, callback, preventDoubleClick);
  }

  this.createFooterLeftSideButtons = () => {
    const buttonsContainer = Creator.createElementWithClass('div', 'footer-buttons-container');
    buttonsContainer.appendChild(this.createAppearanceSettingsButton());
    buttonsContainer.appendChild(this.createCategoryManagementButton());
    return buttonsContainer;
  }

  this.createFooterRightSideButtons = () => {
    const buttonsContainer = Creator.createElementWithClass('div', 'footer-buttons-container');
    buttonsContainer.appendChild(this.createCopyToClipboardButton());
    buttonsContainer.appendChild(this.createAboutButton());
    return buttonsContainer;
  }

  this.createCheckboxIcons = () => {
    const container = Creator.createElementWithClass('div', 'checkbox-icon');
    container.appendChild(Creator.createIcon(Icon.checkbox.checked(), 'checked'));
    container.appendChild(Creator.createIcon(Icon.checkbox.unchecked(), 'unchecked'));
    return container;
  }

  this.createAdvanceAllWordsFloatingActionButton = () => {
    const advanceAllButton = Creator.createElementWithClassAndId('button', 'floating-action-button', 'button-advance-all');
    Creator.addRipple(advanceAllButton);
    VisibilityController.showAndAllowTabbingToElement(advanceAllButton);
    Aria.setLabel(advanceAllButton, 'Kolejny zestaw słów');

    advanceAllButton.addEventListener('click', function (e) {
      e.preventDefault();

      // Block reading of individual sections, to give way to combined advance-all reading
      Aria.setIsAdvanceAllSpeaking(true);

      // Advance sections in randomized order
      const categories = Categories.getDataOfVisible();
      const types = Object.keys(categories).map(key => categories[key].type);
      Util.shuffle(types);
      for (const [index, type] of types.entries()) {
        const swiper = Selector.getSwiper(type);
        setTimeout(() => {
          requestAnimationFrame(() => swiper?.slideNext(swiperAnimationDuration));
        }, delayBetweenLoadedWordsDuration * index);
      }

      // Prepare a combined text to speak
      setTimeout(() => {
        let textToSpeak = [];
        for (let categoryData of Categories.getDataOfVisible()) {
          textToSpeak.push(wordsContainer[categoryData.type]?.createTextToSpeak());
        }
        Aria.speak(textToSpeak.join(', '));
      }, delayBetweenLoadedWordsDuration * types.length);

      // Unblock reading individual sections after a while
      setTimeout(() => {
        Aria.setIsAdvanceAllSpeaking(false);
      }, 500 + swiperAnimationDuration + delayBetweenLoadedWordsDuration * types.length)
    });

    advanceAllButton.appendChild(Creator.createIcon(Icon.arrow.doubleForward()));
    advanceAllButton.appendChild(Creator.createSpan('Kolejny zestaw'));
    return advanceAllButton;
  }

  this.createCloseSheetFloatingActionButton = () => {
    const closeSheetButton = Creator.createElementWithClassAndId('button', 'floating-action-button', 'button-close-sheet');
    Creator.addRipple(closeSheetButton);
    VisibilityController.hideAndPreventTabbingToElement(closeSheetButton);
    Aria.setLabel(closeSheetButton, 'Zamknij panel');

    closeSheetButton.addEventListener('click', function (e) {
      e.preventDefault();
      VisibilityController.hideSlidingSheetsAndScrim();
    });

    closeSheetButton.appendChild(Creator.createIcon(Icon.general.x()));
    closeSheetButton.appendChild(Creator.createSpan('Zamknij'));
    return closeSheetButton;
  }

  this.closeSettingsPrompt = () => {
    const keyName = 'settings-prompt-dismissed';
    if (Store.get(keyName) === 'true') return; // Prompt was already dismissed before, exit.

    const promptCardId = 'prompt-settings';
    Store.set(keyName, 'true');
    document.getElementById(promptCardId)?.remove();
    Settings.CategoriesManagementList.adjustMarginUnderLastCategory();
  }

  this.createSettingsPromptCard = () => {
    const promptSectionId = 'prompt-settings';
    const promptSection = Creator.createElementWithClassAndId('section', 'prompt', promptSectionId);

    const cardElement = Creator.createElementWithClass('div', 'prompt-card');

    const textWrapper = Creator.createElementWithClass('div', 'prompt-text-wrapper');
    const textElement = Creator.createSpan('Dostosuj wygląd aplikacji i&nbsp;kategorie pomysłów.');
    textWrapper.appendChild(textElement);
    
    const closePromptCallback = () => {
      this.closeSettingsPrompt();
    }
    const closeButton = Creator.createCircularButton('close-prompt-settings', 'Zamknij', Creator.createIcon(Icon.general.x()), closePromptCallback);
    Creator.addRipple(closeButton);
    
    cardElement.appendChild(textWrapper);
    cardElement.appendChild(closeButton);

    promptSection.appendChild(Creator.createSpan('Sprawdź też ustawienia!', 'header-container'));
    promptSection.appendChild(cardElement);

    return promptSection;
  }

  this.createSettingsPromptCardIfItWasNotDismissedAlready = () => {
    const keyName = 'settings-prompt-dismissed';
    const shouldShowPrompt = Store.get(keyName) !== 'true';
    if (shouldShowPrompt) {
      const prompt = this.createSettingsPromptCard();
      document.getElementsByTagName('main')[0].appendChild(prompt);
    }
  }
}

let WordSectionCreator = new function() {
  this.addSwiperPrevNextButtons = (parentElement) => {
    const prevButton = Creator.createElementWithClass('button', 'navigation-button-prev');
    prevButton.appendChild(Creator.createIcon(Icon.arrow.right(), 'rotate-180'));
    prevButton.style.position = 'relative';
    Creator.addRipple(prevButton);

    const nextButton = Creator.createElementWithClass('button', 'navigation-button-next');
    nextButton.appendChild(Creator.createIcon(Icon.arrow.right()));
    nextButton.style.position = 'relative';
    Creator.addRipple(nextButton);

    parentElement.appendChild(prevButton);
    parentElement.appendChild(nextButton);
  }

  this.addSwiperWrapper = (parentElement) => {
    const swiperWrapper = Creator.createElementWithClass('div', 'swiper-wrapper');
    parentElement.appendChild(swiperWrapper);
  }

  this.addSectionHeader = (parentElement, headerText) => {
    const header = Creator.createElementWithClass('div', 'header-container');
    header.innerHTML = headerText;
    parentElement.appendChild(header);
  }

  this.addSectionOverlay = (parentElement) => {
    const overlay = Creator.createElementWithClass('div', 'section-overlay');
    VisibilityController.showElement(overlay);

    const numberOfDots = 3;
    for (let i = 0; i < numberOfDots; i++) {
      const dot = Creator.createElementWithClass('div', 'dot');
      overlay.appendChild(dot);
    }

    parentElement.appendChild(overlay);
  }

  this.addSection = (categoryData) => {
    const section = Creator.createElementWithClassAndId('section', 'word-section', Selector.sectionId(categoryData.type));
    this.addSectionHeader(section, categoryData.label);
    this.addSectionOverlay(section);
    this.addSwiperPrevNextButtons(section);

    const swiperOuterContainer = Creator.createElementWithClass('div', 'swiper-outer-container');
    const swiperInnerContainer = Creator.createElementWithClass('div', 'swiper-container');
    this.addSwiperWrapper(swiperInnerContainer);
    swiperOuterContainer.appendChild(swiperInnerContainer);
    section.appendChild(swiperOuterContainer);
    section.style.display = 'none'; // This will be overridden once CSS is loaded. Before then, a skeleton is shown.

    document.getElementsByTagName('main')[0].appendChild(section);
  }
}

let SheetCreator = new function() {
  this.createAppearanceSettingsSheet = () => {
    const sheetName = 'appearance-settings';
    const sheet = Creator.createSlidingSheet(sheetName);
    VisibilityController.preventTabbingToElement(sheet);

    const sheetContent = sheet.children[0];
    sheetContent.appendChild(Creator.createSlidingSheetHeader('Ustawienia'));

    sheetContent.appendChild(Settings.createAnimationsToggle());
    sheetContent.appendChild(Settings.createCompactModeToggle());
    sheetContent.appendChild(Settings.createDarkModeToggle());

    sheetContent.appendChild(Creator.createSeparator());

    sheetContent.appendChild(Settings.createFontScaleControl());

    return sheet;
  }

  this.createCategoryManagementSheet = () => {
    const sheetName = 'category-management';
    const sheet = Creator.createSlidingSheet(sheetName);
    VisibilityController.preventTabbingToElement(sheet);

    const rightSideContent = Creator.createElementWithClass('div', 'with-icon');

    const buttonId = 'restore-default-categories';
    const buttonText = 'Przywróć domyślne kategorie';
    const icon = Creator.createIcon(Icon.arrow.circleBack());
    const callback = () => {
      Settings.setDefaultCategories();
    }
    rightSideContent.appendChild(Creator.createCircularButton(buttonId, buttonText, icon, callback));

    const sheetContent = sheet.children[0];
    sheetContent.appendChild(Creator.createSlidingSheetHeader('Kategorie', rightSideContent));

    sheetContent.appendChild(Settings.createCategoriesList());

    return sheet;
  }

  this.createAboutSheet = () => {
    const sheetName = 'about';
    const sheet = Creator.createSlidingSheet(sheetName);
    VisibilityController.preventTabbingToElement(sheet);

    const rightSideContent = Creator.createElementWithClass('div', 'with-text');
    rightSideContent.appendChild(Creator.createParagraph(`v${version}`, 'version-number'));

    const sheetContent = sheet.children[0];

    sheetContent.appendChild(Creator.createSlidingSheetHeader('Magazyn Inspiracji', rightSideContent));

    sheetContent.appendChild(Creator.createParagraph('<b>Zbiór pomysłów do scen teatru impro&shy;wizo&shy;wanego.</b>', 'sliding-sheet-text'));
    sheetContent.appendChild(Creator.createParagraph('Na&nbsp;występach źródłem inspi&shy;racji jest publicz&shy;ność, ' +
      'lecz&nbsp;jej pomoc nie&nbsp;jest dostępna podczas prób i&nbsp;ćwiczeń. Magazyn Inspi&shy;racji wypełnia tę&nbsp;lukę ' +
      '<b>ponad trzema tysią&shy;cami pomy&shy;słów</b>, podzie&shy;lo&shy;nymi na&nbsp;wygodne kategorie.', 'sliding-sheet-text'
    ));

    sheetContent.appendChild(Creator.createSeparator());

    sheetContent.appendChild(Creator.createParagraph('Kontakt:', 'sliding-sheet-text'));
    sheetContent.appendChild(Creator.createLinkWithIcon('<u>Repozytorium na&nbsp;GitHub</u>', 'https://github.com/oczki/inspiracje', Icon.brand.github(), 'accented'));
    sheetContent.appendChild(Creator.createLinkWithIcon('<u>E-mail</u>', 'mailto:damian.oczki@gmail.com', Icon.general.email(), 'accented'));

    sheetContent.appendChild(Creator.createSeparator());

    const currentYear = Math.max(2022, new Date().getFullYear());
    sheetContent.appendChild(Creator.createLinkWithIcon(
      `&copy; 2018–${currentYear} <u>Damian&nbsp;Oczki</u>`,
      'https://oczki.pl', Icon.general.externalLink(), 'accented'));

    return sheet;
  }
}

let VisibilityController = new function() {
  this.fabAdvanceAllId = 'button-advance-all';
  this.fabCloseSheetId = 'button-close-sheet';

  this.enableElement = (element) => {
    if (!element) return;
    element.disabled = false;
  }

  this.disableElement = (element) => {
    if (!element) return;
    element.disabled = true;
  }

  this.setElementEnabledState = (element, enabled) => {
    if (!element) return;
    element.disabled = !enabled;
  }

  this.showElement = (element) => {
    if (!element) return;
    element.classList.add(visibleClass);
  }
  
  this.hideElement = (element) => {
    if (!element) return;
    element.classList.remove(visibleClass);
  }

  this.preventTabbingToElement = (element) => {
    if (!element) return;
    element.style.visibility = 'hidden';
    element.setAttribute('inert', 'true');
    Aria.setAttr(element, 'hidden', 'true');
  }
  
  this.allowTabbingToElement = (element) => {
    if (!element) return;
    element.style.visibility = 'initial';
    element.removeAttribute('inert');
    Aria.setAttr(element, 'hidden', 'false');
  }

  this.delayedPreventTabbingToElement = (element, delay) => {
    setTimeout(() => this.preventTabbingToElement(element), delay);
  }

  this.showAndAllowTabbingToElement = (element) => {
    this.showElement(element);
    this.allowTabbingToElement(element);
  }

  this.hideAndPreventTabbingToElement = (element, delay = 0) => {
    this.hideElement(element);
    this.delayedPreventTabbingToElement(element, delay);
  }

  this.allowScrollingBody = (allowScrolling = true) => {
    document.body.style.overflow = allowScrolling ? 'initial' : 'hidden';
  }

  this.getFabs = () => {
    return [
      document.getElementById(this.fabAdvanceAllId),
      document.getElementById(this.fabCloseSheetId),
    ];
  }

  this.showCloseFab = () => {
    const [fabAdvanceAll, fabCloseSheet] = this.getFabs();
    this.hideAndPreventTabbingToElement(fabAdvanceAll, fabTransitionDuration);
    this.showAndAllowTabbingToElement(fabCloseSheet);
  }

  this.showAdvanceAllFab = () => {
    const [fabAdvanceAll, fabCloseSheet] = this.getFabs();
    this.hideAndPreventTabbingToElement(fabCloseSheet, fabTransitionDuration);
    this.showAndAllowTabbingToElement(fabAdvanceAll);
  }

  this.focusAdvanceAllFab = () => {
    const [fabAdvanceAll, fabCloseSheet] = this.getFabs();
    fabAdvanceAll.focus();
  }

  this.hideSlidingSheetsAndScrim = () => {
    const sheetsToHide = Array.from(document.querySelectorAll(`.sliding-sheet.${visibleClass}`));
    for (const sheet of sheetsToHide) {
      sheet.classList.remove(visibleClass);
      this.delayedPreventTabbingToElement(sheet, sheetClosingAnimationDuration);
      this.setSheetsButtonHighlight(sheet.id, false);
    }
    Selector.getScrim()?.classList.remove(visibleClass);
    this.showAdvanceAllFab();
    this.focusAdvanceAllFab();
    this.allowScrollingBody(true);
    this.makeMainContentTabbable(true);
  }

  this.setSheetsButtonHighlight = (sheetId, isHighlighted) => {
    const button = document.getElementById(`button-${sheetId}`);
    if (!button) return;
    Aria.setAttr(button, 'current', isHighlighted ? 'true' : 'false');
  }

  this.makeMainContentTabbable = (makeTabbable = false) => {
    const main = document.getElementsByTagName('main')[0];
    if (!main) return;
    if (makeTabbable) {
      main.removeAttribute('inert');
    } else {
      main.setAttribute('inert', 'true');
    }
  }

  this.toggleSheetVisibility = (sheetId) => {
    const sheet = document.getElementById(sheetId);
    this.hideOtherSheets(sheetId);
    if (sheet?.classList.contains(visibleClass)) {
      this.showAdvanceAllFab();
      this.focusAdvanceAllFab();
      this.hideAndPreventTabbingToElement(sheet, sheetClosingAnimationDuration);
      this.hideElement(Selector.getScrim());
      this.allowScrollingBody(true);
      this.makeMainContentTabbable(true);
      this.setSheetsButtonHighlight(sheetId, false);
    } else {
      this.showCloseFab();
      this.showAndAllowTabbingToElement(sheet);
      this.showElement(Selector.getScrim());
      this.allowScrollingBody(false);
      this.makeMainContentTabbable(false);
      this.setSheetsButtonHighlight(sheetId, true);
    }
  }

  this.hideOtherSheets = (idOfSheetNotToHide) => {
    const otherSheets = Array.from(document.querySelectorAll(`.sliding-sheet:not(#${idOfSheetNotToHide})`));
    for (let otherSheet of otherSheets) {
      this.setSheetsButtonHighlight(otherSheet.id, false);
      otherSheet.classList.remove(visibleClass);
      setTimeout(() => this.preventTabbingToElement(otherSheet), sheetClosingAnimationDuration);
    }
  }

  this.toggleNotificationDotForCircularButton = (buttonId, isDotVisible) => {
    document.getElementById(buttonId)?.classList.toggle('notify', isDotVisible);
  }

  this.toggleCategoriesNotificationDot = (isVisible) => {
    this.toggleNotificationDotForCircularButton('button-category-management', isVisible);
  }

  this.toggleCategoriesPlaceholder = (isVisible) => {
    document.getElementById('categories-placeholder')?.classList.toggle('visible', isVisible);
  }
}

let Settings = new function() {
  this.FontScale = new function() {
    this.keyName = 'font-scale';
    this.scaleDisplayElementId = 'scale-control-value';
    this.scalePlusElementId = 'button-font-scale-plus';
    this.scaleMinusElementId = 'button-font-scale-minus';

    this.getFontScale = () => {
      return Store.get(this.keyName) || 1.0;
    }

    this.setFontScale = (value) => {
      Store.set(this.keyName, value);
      document.documentElement.style.setProperty('--font-size-multiplier', value);
      this.updateCurrentScaleDisplay();
      this.updateButtonsStates();
    }

    this.increaseFontScale = () => {
      const currentFontScale = this.getFontScale();
      const upperBound = fontScaleValues[fontScaleValues.length - 1];
      const valueLargerThanCurrent = fontScaleValues.filter(value => value > currentFontScale)[0] || upperBound;
      this.setFontScale(valueLargerThanCurrent);
    }

    this.decreaseFontScale = () => {
      const currentScale = this.getFontScale();
      const lowerBound = fontScaleValues[0];
      const valueSmallerThanCurrent = Math.max(...fontScaleValues.filter(value => value < currentScale), lowerBound);
      this.setFontScale(valueSmallerThanCurrent);
    }

    this.createIncreaseFontScaleButton = () => {
      const buttonText = 'Powiększ tekst';
      const icon = Creator.createIcon(Icon.textScale.plus());
      const callback = () => {
        this.increaseFontScale();
      }
      return Creator.createCircularButton(this.scalePlusElementId, buttonText, icon, callback);
    }

    this.createDecreaseFontScaleButton = () => {
      const buttonText = 'Pomniejsz tekst';
      const icon = Creator.createIcon(Icon.textScale.minus());
      const callback = () => {
        this.decreaseFontScale();
      }
      return Creator.createCircularButton(this.scaleMinusElementId, buttonText, icon, callback);
    }

    this.createCurrentScaleDisplay = () => {
      return Creator.createElementWithId('span', this.scaleDisplayElementId);
    }

    this.updateCurrentScaleDisplay = () => {
      const scaleDisplayElement = document.getElementById(this.scaleDisplayElementId);
      if (scaleDisplayElement) {
        const valueAsPercent = `${(this.getFontScale() * 100).toFixed(0)}%`;
        scaleDisplayElement.innerHTML = valueAsPercent;
      }
    }

    this.setButtonState = (buttonId, isDisabled) => {
      const button = document.getElementById(buttonId);
      if (!button) return;
      button.disabled = isDisabled;
    }

    this.updateButtonsStates = () => {
      const currentFontScale = this.getFontScale();
      const lowerBound = fontScaleValues[0];
      const upperBound = fontScaleValues[fontScaleValues.length - 1];
      this.setButtonState(this.scaleMinusElementId, currentFontScale <= lowerBound);
      this.setButtonState(this.scalePlusElementId, currentFontScale >= upperBound);
    }

    this.createControl = () => {
      const container = Creator.createElementWithId('div', 'scale-control-container');
      container.appendChild(Creator.createIcon(Icon.textScale.size(), 'decorative-icon'));
      container.appendChild(Creator.createSpan('Skala:'));
      container.appendChild(this.createDecreaseFontScaleButton());
      container.appendChild(this.createCurrentScaleDisplay());
      container.appendChild(this.createIncreaseFontScaleButton());

      this.setFontScale(this.getFontScale());

      return container;
    }
  };

  this.AnimationsToggle = new function() {
    this.keyName = 'animations-disabled';

    this.doesTheUserPreferReducedMotion = () => {
      return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    this.shouldAnimationsToggleBeChecked = () => {
      const currentAnimationsDisabledKeyValue = Store.get(this.keyName) || null;
      if (currentAnimationsDisabledKeyValue === null)
        return !this.doesTheUserPreferReducedMotion();
      else
        return currentAnimationsDisabledKeyValue === 'false';
    }

    this.setAnimationsDisabledBodyClass = (state) => {
      document.body.classList.toggle('reduced-animations', state);
    }

    this.setAnimationsDisabledState = (state) => {
      Store.set(this.keyName, state);
      this.setAnimationsDisabledBodyClass(state);
      if (state) {
        swiperAnimationDuration = 0;
        sheetClosingAnimationDuration = 0;
        delayBetweenLoadedWordsDuration = 0;
        // fabTransitionDuration = 0;
        // spinnerOverlayFadeDuration = 0;
      } else {
        swiperAnimationDuration = defaulSwiperAnimationDuration;
        sheetClosingAnimationDuration = defaultSheetClosingAnimationDuration;
        delayBetweenLoadedWordsDuration = defaultDelayBetweenLoadedWordsDuration;
        // fabTransitionDuration = defaultFabTransitionDuration;
        // spinnerOverlayFadeDuration = defaultSpinnerOverlayFadeDuration;
      }
    }

    this.createToggle = () => {
      const toggle = Creator.createElementWithId('input', `${this.keyName}-checkbox`);
      toggle.type = 'checkbox';
      toggle.checked = this.shouldAnimationsToggleBeChecked(this.keyName);
      this.setAnimationsDisabledState(!toggle.checked);
      toggle.addEventListener('change', (event) => {
        this.setAnimationsDisabledState(!event.currentTarget.checked);
        this.reinitializeAllSwipers();
      });
      const labelElement = Creator.createElementWithClass('label', 'checkbox-label');
      labelElement.appendChild(toggle);
      labelElement.appendChild(SpecializedCreator.createCheckboxIcons());
      labelElement.appendChild(Creator.createToggleLabels('Animacje', 'Płynne przejścia słów i&nbsp;paneli'));
      Creator.addRipple(labelElement);
      return labelElement;
    }

    this.reinitializeAllSwipers = () => {
      let colorIndex = 0;
      for (const categoryData of Categories.getData()) {
        if (!Categories.isVisible(categoryData.type)) continue;
        wordsContainer[categoryData.type].reinitializeSwiper();
        new ColorSetter(categoryData, colorIndex++).setColors();
      }
    }
  };

  this.CompactModeToggle = new function() {
    this.keyName = 'compact-mode';

    this.shouldToggleBeChecked = () => {
      return Store.get(this.keyName) === 'true' || false;
    }

    this.setCompactModeState = (state) => {
      Store.set(this.keyName, state);
      document.body.classList.toggle('compact', state);
    }

    this.createToggle = () => {
      const toggle = Creator.createElementWithId('input', `${this.keyName}-checkbox`);
      toggle.type = 'checkbox';
      toggle.checked = this.shouldToggleBeChecked();
      this.setCompactModeState(toggle.checked);
      toggle.addEventListener('change', (event) => {
        this.setCompactModeState(event.currentTarget.checked);
      });

      const labelElement = Creator.createElementWithClass('label', 'checkbox-label');
      labelElement.appendChild(toggle);
      labelElement.appendChild(SpecializedCreator.createCheckboxIcons());
      labelElement.appendChild(Creator.createToggleLabels('Tryb kompaktowy', 'Schowaj nagłówki kategorii'));
      Creator.addRipple(labelElement);
      return labelElement;
    }
  };

  this.DarkModeToggle = new function() {
    this.keyName = 'dark-mode';

    this.doesTheUserPreferDarkMode = () => {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    this.shouldToggleBeChecked = () => {
      const currentDarkModeKeyValue = Store.get(this.keyName) || null;
      if (currentDarkModeKeyValue === null)
        return this.doesTheUserPreferDarkMode();
      else
        return currentDarkModeKeyValue === 'true';
    }

    this.setDarkModeState = (state) => {
      Store.set(this.keyName, state);
      document.body.classList.toggle('dark', state);
      isDarkModeEnabled = state;
      Settings.updateColors();
      requestAnimationFrame(() => {
        const bgColor = window.getComputedStyle(document.body).backgroundColor;
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', bgColor);
      });
    }

    this.createToggle = () => {
      const toggle = Creator.createElementWithId('input', `${this.keyName}-checkbox`);
      toggle.type = 'checkbox';
      toggle.checked = this.shouldToggleBeChecked();
      this.setDarkModeState(toggle.checked);
      toggle.addEventListener('change', (event) => {
        this.setDarkModeState(event.currentTarget.checked);
      });

      const labelElement = Creator.createElementWithClass('label', 'checkbox-label');
      labelElement.appendChild(toggle);
      labelElement.appendChild(SpecializedCreator.createCheckboxIcons());
      labelElement.appendChild(Creator.createToggleLabels('Tryb ciemny', 'Do improwizacji po&nbsp;nocach'));
      Creator.addRipple(labelElement);
      return labelElement;
    }
  };

  this.CategoriesManagementList = new function() {
    this.keyName = 'categories';
    this.categories = [];
    this.wrapperElementId = 'categories-list-container';
    this.listContentElementId = 'categories-list-content';

    this.moveUpButtonId = (type) => {
      return `${type}-move-up`;
    }

    this.moveDownButtonId = (type) => {
      return `${type}-move-down`;
    }

    this.getListOfCategories = () => {
      return Categories.getData();
    }

    this.saveListOfCategories = () => {
      Categories.saveData();
    }

    this.getListItemElementByType = (categoryType) => {
      const elementId = `category-${categoryType}-item`;
      return document.getElementById(elementId);
    }

    this.getListItemElementByIndex = (index) => {
      return this.getListItemElementByType(this.categories[index].type);
    }

    this.getIndexOfContainerByType = (categoryType) => {
      const categoriesList = Categories.getData();
      const item = categoriesList.find(category => category.type === categoryType);
      return categoriesList.indexOf(item);
    }

    this.getIndexOfPreviousItemInList = (currentCategoryType) => {
      const index = this.getIndexOfContainerByType(currentCategoryType);
      return index > 0 ? index - 1 : undefined;
    }
    
    this.getIndexOfNextItemInList = (currentCategoryType) => {
      const index = this.getIndexOfContainerByType(currentCategoryType);
      if (index >= 0 && index < this.categories.length - 1) {
        return index + 1;
      }
      return undefined;
    }

    this.cloneListItem = (element) => {
      const clone = element.cloneNode(true);
      clone.removeAttribute('id');
      clone.classList.add('clone');
      clone.classList.add('scale');
      clone.classList.add('translate');
      Array.from(clone.getElementsByTagName('input')).forEach(input => input.removeAttribute('id'));
      Array.from(clone.getElementsByTagName('button')).forEach(input => input.removeAttribute('id'));
      return clone;
    }

    this.animateSwap = (element1, element2, parentElement, firstElementIsOnTop) => {
      const setOnTop = (element, isOnTop) => {
        const className = 'top';
        isOnTop ? element.classList.add(className) : element.classList.remove(className);
      };
      const setOnBottom = (element, isOnBottom) => {
        const className = 'bottom';
        isOnBottom ? element.classList.add(className) : element.classList.remove(className);
      };

      setOnTop(firstElementIsOnTop ? element1 : element2, true);
      setOnBottom(firstElementIsOnTop ? element2 : element1, true);
      const clone1 = this.cloneListItem(element1);
      const clone2 = this.cloneListItem(element2);

      element1.appendChild(clone1);
      element2.appendChild(clone2);

      VisibilityController.hideElement(element1);
      VisibilityController.hideElement(element2);

      const height = clone1.getBoundingClientRect().height;
      const posYpropertyName = '--posY';
      clone1.style.setProperty(posYpropertyName, `-${height}px`);
      clone2.style.setProperty(posYpropertyName, `${height}px`);

      setTimeout(() => {
        clone1.remove();
        clone2.remove();
        parentElement.insertBefore(element1, element2);
        VisibilityController.showElement(element1);
        VisibilityController.showElement(element2);
        setOnTop(element1, false);
        setOnTop(element2, false);
        setOnBottom(element1, false);
        setOnBottom(element2, false);
      }, defaultCategorySwapDuration);

      // TODO: slowly hide the clones, so that the up/down buttons fade instead of blinking immediately
    }

    this.announceSwappedItems = (firstIndex, secondIndex) => {
      let text = 'Zamieniono miejscami kategorie';
      try {
        text += ` ${Categories.getData()[firstIndex].label} i ${Categories.getData()[secondIndex].label}`;
      } catch (e) { }
      Aria.speak(text);
    }

    this.swapItems = (firstIndex, secondIndex, firstElementIsOnTop) => {
      const firstElement = this.getListItemElementByIndex(firstIndex);
      const secondElement = this.getListItemElementByIndex(secondIndex);
      const parentElement = firstElement.parentElement;

      // Swap the main containers with swipers.
      Categories.swap(firstIndex, secondIndex);
      Settings.updateColors();
      Settings.CategoriesManagementList.adjustMarginUnderLastCategory();

      // Swap the elements on this list.
      this.animateSwap(firstElement, secondElement, parentElement, firstElementIsOnTop);
      this.announceSwappedItems(firstIndex, secondIndex);

      // Up/down buttons need to be disabled on edges, and enabled elsewhere.
      this.updateMoveUpDownButtonsStates();
    }

    this.moveUp = (categoryData) => {
      const previousItemIndex = this.getIndexOfPreviousItemInList(categoryData.type);
      if (previousItemIndex === undefined) return;
      const currentItemIndex = this.getIndexOfContainerByType(categoryData.type);
      const firstElementIsOnTop = true;
      this.swapItems(currentItemIndex, previousItemIndex, firstElementIsOnTop);
    }

    this.moveDown = (categoryData) => {
      const nextItemIndex = this.getIndexOfNextItemInList(categoryData.type);
      if (nextItemIndex === undefined) return;
      const currentItemIndex = this.getIndexOfContainerByType(categoryData.type);
      const firstElementIsOnTop = false;
      this.swapItems(nextItemIndex, currentItemIndex, firstElementIsOnTop);
    }

    this.updateMoveUpDownButtonsStates = () => {
      for (let [index, categoryData] of this.categories.entries()) {
        let upEnabled = index > 0;
        let downEnabled = index < this.categories.length - 1;
        VisibilityController.setElementEnabledState(document.getElementById(this.moveUpButtonId(categoryData.type)), upEnabled);
        VisibilityController.setElementEnabledState(document.getElementById(this.moveDownButtonId(categoryData.type)), downEnabled);
      }
    }

    this.refocusAfterMoving = (buttonId) => {
      setTimeout(() => {
          const button = document.getElementById(buttonId);
          if (!button) return;
          button.focus();
        },
        defaultCategorySwapDuration
      );
    }

    this.createMoveUpButton = (categoryData) => {
      const buttonId = this.moveUpButtonId(categoryData.type);
      const buttonText = `Przesuń w górę kategorię ${categoryData.label}`;
      const icon = Creator.createIcon(Icon.arrow.right(), 'rotate-270');
      const callback = () => {
        this.moveUp(categoryData);
        this.refocusAfterMoving(buttonId);
      }
      const preventDoubleClick = true;
      return Creator.createCircularButton(buttonId, buttonText, icon, callback, preventDoubleClick);
    }

    this.createMoveDownButton = (categoryData) => {
      const buttonId = this.moveDownButtonId(categoryData.type);
      const buttonText = `Przesuń w dół kategorię ${categoryData.label}`;
      const icon = Creator.createIcon(Icon.arrow.right(), 'rotate-90');
      const callback = () => {
        this.moveDown(categoryData);
        this.refocusAfterMoving(buttonId);
      }
      const preventDoubleClick = true;
      return Creator.createCircularButton(buttonId, buttonText, icon, callback, preventDoubleClick);
    }

    this.createControl = () => {
      this.categories = this.getListOfCategories();
      const listWrapper = Creator.createElementWithId('div', this.wrapperElementId);
      listWrapper.appendChild(this.createListContent());
      return listWrapper;
    }

    this.createListContent = () => {
      const listContent = Creator.createElementWithId('div', this.listContentElementId);

      for (let categoryData of this.categories) {
        const itemId = `category-${categoryData.type}-item`;
        const checkboxId = `category-${categoryData.type}-checkbox`;

        const categoryContainer = Creator.createElementWithClassAndId('div', 'category-list-item', itemId);
        VisibilityController.showElement(categoryContainer);

        const labelElement = Creator.createElementWithClass('label', 'checkbox-label');
        const toggle = Creator.createElementWithId('input', checkboxId);
        toggle.type = 'checkbox';
        toggle.checked = Categories.isVisible(categoryData.type);
        toggle.addEventListener('change', (event) => {
          Categories.setVisibilityByType(categoryData.type, event.currentTarget.checked);
          this.showHintForHiddenCategories();
        });

        labelElement.appendChild(toggle);
        labelElement.appendChild(SpecializedCreator.createCheckboxIcons());
        labelElement.appendChild(Creator.createToggleLabels(categoryData.label));
        Creator.addRipple(labelElement);

        categoryContainer.appendChild(labelElement);
        categoryContainer.appendChild(this.createMoveUpButton(categoryData));
        categoryContainer.appendChild(this.createMoveDownButton(categoryData));

        listContent.appendChild(categoryContainer);
      }

      return listContent;
    }

    this.recreateListContent = () => {
      requestAnimationFrame(() => {
        this.categories = this.getListOfCategories();
        document.getElementById(this.listContentElementId).remove();
        const listWrapper = document.getElementById(this.wrapperElementId);
        listWrapper.appendChild(this.createListContent());
        this.updateMoveUpDownButtonsStates();
      });
    }

    this.showDotIfNeeded = () => {
      for (let categoryData of Categories.getData()) {
        if (!categoryData.isVisible) {
          VisibilityController.toggleCategoriesNotificationDot(true);
          return;
        }
      }
      VisibilityController.toggleCategoriesNotificationDot(false);
    }

    this.showPlaceholderIfNeeded = () => {
      let allCategoriesAreHidden = true;
      for (let categoryData of Categories.getData()) {
        if (categoryData.isVisible) {
          allCategoriesAreHidden = false;
          break;
        }
      }
      VisibilityController.toggleCategoriesPlaceholder(allCategoriesAreHidden);
    }

    this.showHintForHiddenCategories = () => {
      this.showDotIfNeeded();
      this.showPlaceholderIfNeeded();
    }

    this.adjustMarginUnderLastCategory = () => {
      const setLargeMargin = (categoryData, useLargeMargin) => {
        const sectionElement = document.getElementById(Selector.sectionId(categoryData.type));
        sectionElement.classList.toggle('last-visible', useLargeMargin);
      };
      const isSettingsPromptVisible = () => {
        const promptCardId = 'prompt-settings';
        return !!document.getElementById(promptCardId);
      };
      const resetAllMargins = (categoriesData) => {
        for (let categoryData of categoriesData) {
          setLargeMargin(categoryData, false);
        }
      };
      const setMarginUnderLastCategory = (categoriesData) => {
        for (let index = categoriesData.length - 1; index >= 0; index--) {
          const categoryData = categoriesData[index];
          if (categoryData.isVisible) {
            setLargeMargin(categoryData, true);
            return;
          }
        }
      };

      const categoriesData = Categories.getData();
      resetAllMargins(categoriesData);
      if (!isSettingsPromptVisible()) {
        setMarginUnderLastCategory(categoriesData);
      }
    }

    this.updateCounter = () => {
      const counterParent = document.querySelector('#category-management .sliding-sheet-header-first-line');
      if (!counterParent) return;

      let counterAll = 0;
      let counterVisible = 0;
      for (let categoryData of Categories.getData()) {
        counterAll++;
        counterVisible += categoryData.isVisible;
      }

      const newCounterText = `${counterVisible} z ${counterAll}`;
      counterParent.setAttribute('data-categories-count', newCounterText);
    }
  };

  this.updateFontScaleElements = () => {
    this.FontScale.updateCurrentScaleDisplay();
    this.FontScale.updateButtonsStates();
  }

  this.updateColors = () => {
    let colorIndex = 0;
    for (let categoryData of Categories.getData()) {
      if (!Categories.isVisible(categoryData.type)) continue;
      new ColorSetter(categoryData, colorIndex++).setColors();
    }
  }

  this.updateMoveUpDownButtonsStates = () => {
    this.CategoriesManagementList.updateMoveUpDownButtonsStates();
  }

  this.createFontScaleControl = () => {
    return this.FontScale.createControl();
  }

  this.createAnimationsToggle = () => {
    return this.AnimationsToggle.createToggle();
  }

  this.createCompactModeToggle = () => {
    return this.CompactModeToggle.createToggle();
  }

  this.createDarkModeToggle = () => {
    return this.DarkModeToggle.createToggle();
  }

  this.createCategoriesList = () => {
    return this.CategoriesManagementList.createControl();
  }

  this.setDefaultVisualPreferences = () => {
    // TODO
  }

  this.setDefaultCategories = () => {
    Categories.forceReset();
    this.CategoriesManagementList.recreateListContent();
  }
}

let ElementPopulator = new function() {
  this.populateSlidingSheetsContainer = () => {
    const container = document.getElementById('sliding-sheets-container');
    container.appendChild(SheetCreator.createAppearanceSettingsSheet());
    container.appendChild(SheetCreator.createCategoryManagementSheet());
    container.appendChild(SheetCreator.createAboutSheet());
  }

  this.populateFooter = () => {
    const footer = document.getElementsByTagName('footer')[0];

    const innerContainer = Creator.createElementWithId('div', 'footer-inner-container');
    innerContainer.appendChild(SpecializedCreator.createAdvanceAllWordsFloatingActionButton());
    innerContainer.appendChild(SpecializedCreator.createCloseSheetFloatingActionButton());
    innerContainer.appendChild(SpecializedCreator.createFooterLeftSideButtons());
    innerContainer.appendChild(SpecializedCreator.createFooterRightSideButtons());

    footer.appendChild(innerContainer);
    VisibilityController.showElement(footer);
  }

  this.populatePageWithCategoryContainers = () => {
    for (const categoryData of Categories.getData()) {
      this.removeFirstRemainingSkeletonElement();
      wordsContainer[categoryData.type] = new CategoryContainer(categoryData);
    }
  }

  this.removeFirstRemainingSkeletonElement = () => {
    document.getElementsByClassName('skeleton')[0]?.remove();
  }
}

let GlobalEventHandler = new function() {
  this.attachEventsToSheetsAndScrim = () => {
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

  this.attachClickEventToAdvanceAllFabToRotateIcon = () => {
    const advanceAllButton = document.getElementById('button-advance-all');
    const callbackFabClicked = (e) => {
      e.preventDefault();

      // Start animating the icon
      advanceAllButton.classList.add('rotate');

      // Stop animating the icon after a while
      setTimeout(() => {
        advanceAllButton.classList.remove('rotate');
      }, iconRotationDuration);
    }

    advanceAllButton.addEventListener('click', Util.throttle(callbackFabClicked, defaultIconRotationDuration));
  }

  this.attachClickEventsToCategoriesPlaceholderButtons = () => {
    const restoreAllButton = document.getElementById('category-restore-defaults');
    const showPanelButton = document.getElementById('category-open-panel');

    Creator.addRipple(restoreAllButton);
    Creator.addRipple(showPanelButton);

    restoreAllButton.addEventListener('click', (event) => {
      event.preventDefault();
      Settings.setDefaultCategories();
    });

    showPanelButton.addEventListener('click', (event) => {
      event.preventDefault();
      VisibilityController.toggleSheetVisibility('category-management');
    });
  }

  this.handleKeyboardInput = (event) => {
    if (event.keyCode === 9) {
      document.body.classList.add('show-outline');
      window.removeEventListener('keydown', GlobalEventHandler.handleKeyboardInput);
      window.addEventListener('mousedown', GlobalEventHandler.handleMouseInput);
    }
  }

  this.handleMouseInput = () => {
    document.body.classList.remove('show-outline');
    window.addEventListener('keydown', GlobalEventHandler.handleKeyboardInput);
    window.removeEventListener('mousedown', GlobalEventHandler.handleMouseInput);
  }

  this.handleFirstKeyboardInput = () => {
    window.addEventListener('keydown', GlobalEventHandler.handleKeyboardInput);
  }
}

let Aria = new function() {
  this.isAdvanceAllSpeakingFlag = false;

  this.setAttr = (element, ariaAttribute, value) => {
    element.setAttribute(`aria-${ariaAttribute}`, value);
  }

  this.setLabel = (element, value) => {
    this.setAttr(element, 'label', value);
  }

  this.speak = (text) => {
    const id = 'speak-' + Date.now();
    const ghostElement = Creator.createElementWithClassAndId('div', 'aria-only', id);
    this.setAttr(ghostElement, 'live', 'assertive');
    document.body.appendChild(ghostElement);

    setTimeout(() => {
      document.getElementById(id).innerHTML = text;
    }, 500);
    setTimeout(() => {
      document.body.removeChild(document.getElementById(id));
    }, 1000);
  }

  this.isAdvanceAllSpeaking = () => {
    return this.isAdvanceAllSpeakingFlag;
  }

  this.setIsAdvanceAllSpeaking = (newValue) => {
    this.isAdvanceAllSpeakingFlag = newValue;
  }
}

function freezeGlobals() {
  Util.deepFreeze(containers);
  Util.deepFreeze(containerColors);
}

function init() {
  freezeGlobals();
  Categories.initialize();
  ElementPopulator.populateSlidingSheetsContainer();
  GlobalEventHandler.attachEventsToSheetsAndScrim();
  GlobalEventHandler.handleFirstKeyboardInput();
  ElementPopulator.populateFooter();
  ElementPopulator.populatePageWithCategoryContainers();
  Settings.updateColors();
  Settings.updateFontScaleElements();
  Settings.updateMoveUpDownButtonsStates();
  Settings.CategoriesManagementList.showHintForHiddenCategories();
  GlobalEventHandler.attachClickEventToAdvanceAllFabToRotateIcon();
  GlobalEventHandler.attachClickEventsToCategoriesPlaceholderButtons();
  SpecializedCreator.createSettingsPromptCardIfItWasNotDismissedAlready();
  Settings.CategoriesManagementList.adjustMarginUnderLastCategory();
  Settings.CategoriesManagementList.updateCounter();
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
