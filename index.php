<!DOCTYPE html>
<html lang="pl-PL">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Magazyn inspiracji</title>
        <link rel="shortcut icon" type="image/png" href="favicon.png"/>
        <link rel="stylesheet" href="./css/style.css" type="text/css">
        <script src="./js/core.js"></script>
    </head>
    <body>
        <main>
            <div id="word">
                <svg viewBox="0 0 800 500">
                    <text id="slowo" x="50%" y="50%" font-size="2.5em" fill="#333" text-anchor="middle" alignment-baseline="middle">
                        <tspan x="50%" dy="-0.3em">wybierz opcję</tspan><tspan x="50%" dy="1em">poniżej...</tspan>
                    </text>
                </svg>
            </div>
            <div id="buttons">
                <button id="noun">rzeczownik</button>
                <button id="location">miejsce</button>
                <button id="character" class="disabled">postać</button>
                <button id="relation" class="disabled">relacja</button>
                <button id="emotion" class="disabled">emocja</button>
                <button id="dictionary">słowo</button>
            </div>
        </main>
    </body>
</html>