<!DOCTYPE html>
<html lang="pl-PL">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Magazyn inspiracji</title>
        <link rel="shortcut icon" type="image/png" href="favicon.png"/>
        <link rel="stylesheet" href="./css/style.css" type="text/css">
    </head>
    <body>
        <main>
            <div id="word">
                <svg viewBox="0 0 800 500">
                    <text id="slowo" x="50%" y="50%" font-size="2.5em" fill="#333" text-anchor="middle" alignment-baseline="middle"><tspan x="50%" dy="-0.3em">wybierz opcję</tspan><tspan x="50%" dy="1em">poniżej...</tspan></text>
                </svg>
            </div>
            <div id="buttons">
                <button id="noun">rzeczownik</button>
                <button id="location">miejsce</button>
                <button id="character">postać</button>
                <button id="relation" class="disabled">relacja</button>
                <button id="emotion">emocja</button>
                <button id="dictionary">słowo</button>
            </div>
            <script type="text/javascript">
                let wordsJs = [ ];
                let wordsCount;
                
                function updateWordsJs(words) {
                    wordsJs = eval(words);
                    wordsCount = wordsJs.length;
                }
                
                function shuffle(arr) {
                    for (let i = arr.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [arr[i], arr[j]] = [arr[j], arr[i]];
                    }
                }
        
                let nextIndex = (function() { var index = 0; return function() { return index++; }; })();
        
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
        
                function nextWord(color) {
                    let index = nextIndex();
                    if (index < wordsCount)
                        setWord(wordsJs[index], color);
                    else
                        location.reload();
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
        
                function init() {
                    ajax("ajax/noun.php", updateWordsJs);
                    document.getElementById("noun").addEventListener("click", function(e) { e.preventDefault(); nextWord("#1c74c1"); });
                    document.getElementById("location").addEventListener("click", function(e) { e.preventDefault(); nextWord("#14a020"); });
                    document.getElementById("character").addEventListener("click", function(e) { e.preventDefault(); nextWord("#d6a414"); });
                    document.getElementById("relation").addEventListener("click", function(e) { e.preventDefault(); nextWord("#d40b0b"); });
                    document.getElementById("emotion").addEventListener("click", function(e) { e.preventDefault(); nextWord("#bb2392"); });
                    document.getElementById("dictionary").addEventListener("click", function(e) { e.preventDefault(); nextWord("#808080"); });
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
            </script>
        </main>
    </body>
</html>