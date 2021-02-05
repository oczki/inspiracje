let wordsContainer = [];

function sectionId(type) {
  return `section-${type}`;
}

function nextButtonId(type) {
  return `button-next-${type}`;
}

function prevButtonId(type) {
  return `button-prev-${type}`;
}

function sectionWordId(type) {
  return `word-${type}`;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function setWord(type, word) {
  let wordBox = document.getElementById(sectionWordId(type));
  wordBox.innerHTML = word;
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

function getWords(type, firstInit) {
  ajax('ajax/' + type + '.php', function (output) {
    wordsContainer[type].words = eval(output);
    shuffle(wordsContainer[type].words);
    if (firstInit) {
      getSwiper(type).removeSlide(0);
      //wordsContainer[type].nextWord();
      //setForwardAllWordsButtonState();
    }
    getSwiper(type).appendSlide(textArrayToSlides(wordsContainer[type].words));
  });
}

class Container {
  constructor(type, color, label) {
    this.type = type;
    this.color = color;
    this.label = label;
    this.wordsHistory = [];
    this.wordsHistoryIndex = 0;
    this.init(true);
    addSection(type, color, label);
  }

  init(firstInit = false) {
    this.words = [];
    this.index = 0;
    getWords(this.type, firstInit);
  }

  nextIndex() {
    let index = this.index++;
    if (index >= this.words.length - 10)
      this.init();
    return index;
  }

  newWord() {
    let word = this.words[this.nextIndex()];
    setWord(this.type, word);
  }

  nextWord() {
    if (this.wordsHistoryIndex >= this.wordsHistory.length - 1)
      this.newWord()
    else
      setWord(this.type, this.wordsHistory[++this.wordsHistoryIndex]);
  }
}


function addSectionHeader(parentElement, color, label) {
  let header = document.createElement('div');
  header.classList.add('section-header');
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

function createSwiper(type) {
  const swiper = new Swiper(`#${sectionId(type)}`, {
    speed: 180, // zero this if prefers-reduced-motion is on
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  swiper.on('reachEnd', () => {
    console.log('reached end of type', type);
  })
  const swiperInitialized = getSwiper(type);
  swiperInitialized.appendSlide(textToSlide('Ładuję...'));
  return swiper;
}

function createElementWithClass(tagName, className = undefined) {
  const element = document.createElement(tagName);
  if (className) {
    element.classList.add(className);
  }
  return element;  
}

function createElementWithId(tagName, id = undefined) {
  const element = document.createElement(tagName);
  if (id) {
    element.id = id;
  }
  return element;  
}

function createElementWithClassAndId(tagName, className = undefined, id = undefined) {
  const element = createElementWithClass(tagName, className);
  if (id) {
    element.id = id;
  }
  return element;
}

function addSwiperPrevNextButtons(parentElement) {
  parentElement.appendChild(createElementWithClass('div', 'swiper-button-prev'));
  parentElement.appendChild(createElementWithClass('div', 'swiper-button-next'));
}

function addSwiperWrapper(parentElement) {
  parentElement.appendChild(createElementWithClass('div', 'swiper-overlay'));
  parentElement.appendChild(createElementWithClass('div', 'swiper-wrapper'));
}

function appendElementToMainDocument(newElement) {
  document.getElementsByTagName('main')[0].appendChild(newElement);
}

function addSection(type, color, label) {
  const section = createElementWithClassAndId('section', 'word-section', sectionId(type));

  addSwiperWrapper(section);

  addSwiperPrevNextButtons(section);

  appendElementToMainDocument(section);

  const swiperInitialized = createSwiper(type);
  swiperInitialized.slideNext();
}

function addForwardAllWordsButton() {
  const forwardButton = createElementWithId('button', nextButtonId('all'));
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
      //wordsContainer[c.type].nextWord();
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
  for (let c of containers) {
     wordsContainer[c.type] = new Container(c.type, c.color, c.label);
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