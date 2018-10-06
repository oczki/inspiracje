let wordsContainer = [ ];
let containers = {
    "noun"       : "#1c74c1",
    "location"   : "#14a020",
    "character"  : "#ce9900",
    "relation"   : "#d40b0b",
    "emotion"    : "#bb2392",
    "dictionary" : "#777777",
};

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

function getWords(type) {
    ajax("ajax/" + type + ".php", function(output) {
        wordsContainer[type].words = eval(output);
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
        this.fun;
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

function init() {
    for (let type in containers) {
        let color = containers[type];
        wordsContainer[type] = new Container(getWords(type), color);
        document.getElementById(type).addEventListener("click", function(e) {
            e.preventDefault();
            wordsContainer[type].nextWord();
        });
    }
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