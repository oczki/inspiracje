<?php
function timestampUrl($path) {
  return $path . '?' . filemtime($path);
}

function addCss($name) {
  echo '<link rel="stylesheet" href="'
     . timestampUrl('./css/' . $name . '.css') . '" type="text/css">'
     . "\n";
}

function addJs($name) {
  echo '<script src="' . timestampUrl('./js/' . $name . '.js') . '"></script>'
     . "\n";
}

?><!DOCTYPE html>
<html lang="pl-PL">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="initial-scale=1.0, width=device-width">
    <meta name="theme-color" content="#7F7F7F">
    <meta name="description" content="Podręczny generator postaci, relacji, miejsc i innych słów do scenek teatru improwizowanego.">
    <title>Magazyn inspiracji</title>
    <link rel="shortcut icon" type="image/png" href="favicon.png"/>
    <?php addCss('style'); ?>
    <?php addCss('swiper-bundle.min'); ?>
    <?php addJs('swiper-bundle.min'); ?>
    <?php addJs('core'); ?>
    <?php addJs('ripple.min'); ?>
  </head>
  <body class="compact">
    <main>
      <noscript>
        <p>Twoja przeglądarka nie&nbsp;wspiera JavaScript, który jest wymagany do&nbsp;działania Magazynu Inspiracji.</p>
        <p>Bez&nbsp;obaw &ndash; strona nie&nbsp;używa plików cookie, nie&nbsp;śledzi Cię przez Google Analytics ani&nbsp;Facebookowe wtyczki.</p>
        <p>Jeśli chcesz sprawdzić kod źródłowy aplikacji, zapraszam na <a href="https://github.com/oczki/inspiracje">repozytorium na&nbsp;GitHub</a>.</p>
        <p>Aby uruchomić JavaScript, poszperaj w&nbsp;opcjach dla tej strony albo&nbsp;zmień przeglądarkę na&nbsp;nowszy model.</p>
      </noscript>
    </main>
    <div id="scrim"></div>
    <div id="sliding-sheets-container"></div>
    <footer></footer>
  </body>
</html>