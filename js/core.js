let wordsContainer = [ ];

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function splitIfNeeded(word) {
    if (word.indexOf("|") === -1) { return word; }
    let splitWords = word.split("|");
    let output = '<tspan x="50%" dy="-' + 0.3 * (splitWords.length - 1) + 'em">' + splitWords[0] + '</tspan>';
    for (let index = 1; index < splitWords.length; index++) {
        output += '<tspan x="50%" dy="1em">' + splitWords[index] + '</tspan>';
    }
    return output;
}

function setWord(word, color) {
    let width = 800, height = 500;
    let textNode = document.getElementById("slowo");
    textNode.setAttribute("font-size", "1em");
    textNode.setAttribute("fill", color);
    textNode.innerHTML = splitIfNeeded(word);
    let bb = textNode.getBBox();
    let transformW = width / bb.width;
    let transformH = height / bb.height;
    let scale = transformW < transformH ? transformW : transformH;
    scale = scale > 10 ? 10 : scale;
    textNode.setAttribute("font-size", scale + "em");
}

function ajax(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            callback(xhr.responseText);
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
}

function getNouns() {
    ajax("ajax/noun.php", function(output) {
        wordsContainer["noun"].words = eval(output);
    });
}

function getLocations() {
    ajax("ajax/location.php", function(output) {
        wordsContainer["location"].words = eval(output);
        shuffle(wordsContainer["location"].words);
    });
}

function getCharacters() {
    ajax("ajax/character.php", function(output) {
        wordsContainer["character"].words = eval(output);
        shuffle(wordsContainer["character"].words);
    });
}

function getEmotions() {
    ajax("ajax/emotion.php", function(output) {
        wordsContainer["emotion"].words = eval(output);
        shuffle(wordsContainer["emotion"].words);
    });
}

function getDictionary() {
    ajax("ajax/dict.php", function(output) {
        wordsContainer["dictionary"].words = eval(output);
    });
}

class Container {
    constructor(dataGetterFunction, color) {
        this.color = color;
        this.fun = dataGetterFunction;
        this.init();
    }

    init() {
        this.words = [ ];
        this.fun();
        this.index = 0;
    }

    nextIndex() {
        let index = this.index++;
        if (index >= this.words.length - 10)
            this.init();
        return index;
    }

    nextWord() {
        setWord(this.words[this.nextIndex()], this.color);
    }
}

function initializeWordsContainer() {
    wordsContainer["noun"] = new Container(getNouns, "#1c74c1");
    wordsContainer["location"] = new Container(getLocations, "#14a020");
    wordsContainer["character"] = new Container(getCharacters, "#ce9900");
    //wordsContainer["relation"] = new Container(getRelations, "#d40b0b");
    wordsContainer["emotion"] = new Container(getEmotions, "#bb2392");
    wordsContainer["dictionary"] = new Container(getDictionary, "#808080");
}

function initializeEventListeners() {
    document.getElementById("noun").addEventListener("click", function(e) { e.preventDefault(); wordsContainer["noun"].nextWord(); });
    document.getElementById("location").addEventListener("click", function(e) { e.preventDefault(); wordsContainer["location"].nextWord(); });
    document.getElementById("character").addEventListener("click", function(e) { e.preventDefault(); wordsContainer["character"].nextWord(); });
    //document.getElementById("relation").addEventListener("click", function(e) { e.preventDefault(); wordsContainer["relation"].nextWord(); });
    document.getElementById("emotion").addEventListener("click", function(e) { e.preventDefault(); wordsContainer["emotion"].nextWord(); });
    document.getElementById("dictionary").addEventListener("click", function(e) { e.preventDefault(); wordsContainer["dictionary"].nextWord(); });
}

function init() {
    initializeWordsContainer();
    initializeEventListeners();    
}

if (document.readyState != "loading")
    init();
else if (document.addEventListener)
    document.addEventListener("DOMContentLoaded", init);
else
    document.attachEvent("onreadystatechange", function() {
        if (document.readyState == "complete")
            init();
    });