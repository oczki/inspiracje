let wordsContainer = [ ];
let wordsHistory = [ ];
let wordsHistoryIndex = 0;
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

function pushHistory(word, color) {
    wordsHistory.push({ "word": word, "color": color });
    wordsHistoryIndex = wordsHistory.length - 1;
    document.getElementById("undo").removeAttribute("disabled");
}

function popHistory() {
    wordsHistoryIndex--;
    return wordsHistory[wordsHistoryIndex];
}

function undo() {
    let entry = popHistory();
    if (entry !== undefined) {
        setWord(entry.word, entry.color);
    } else {
        document.getElementById("undo").setAttribute("disabled", "");
        setWord("wybierz opcję|poniżej...", "black");
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
        shuffle(wordsContainer[type].words);
        document.getElementById(type).disabled = false;
    });
}

class Container {
    constructor(type, color) {
        this.type = type;
        this.color = color;
        this.init();
    }

    init() {
        this.words = [ ];
        this.index = 0;
        getWords(this.type);
    }

    nextIndex() {
        let index = this.index++;
        if (index >= this.words.length - 10)
            this.init();
        return index;
    }

    nextWord() {
        let word = this.words[this.nextIndex()];
        setWord(word, this.color);
        pushHistory(word, this.color);
    }
}

function initUndo() {
    document.getElementById("undo").addEventListener("click", function(e) {
        e.preventDefault();
        undo();
    });
}

function init() {
    for (let type in containers) {
        let color = containers[type];
        wordsContainer[type] = new Container(type, color);
        document.getElementById(type).addEventListener("click", function(e) {
            e.preventDefault();
            wordsContainer[type].nextWord();
        });
    }
    initUndo();
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