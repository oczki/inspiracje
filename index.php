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
    <meta property="og:locale" content="pl">
    <meta property="og:title" content="Podręczny generator postaci, relacji, miejsc i innych słów do scenek teatru improwizowanego.">
    <meta property="og:image" content="/media/og-image.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2671d9">
    <meta name="msapplication-TileColor" content="#f0f0f0">
    <meta name="theme-color" content="#ffffff">
    <title>Magazyn Inspiracji</title>
    <?php addCss('style'); ?>
    <?php addCss('swiper-bundle.min'); ?>
    <?php addJs('swiper-bundle.min'); ?>
    <?php addJs('core'); ?>
    <?php addJs('ripple.min'); ?>
    <script async defer data-domain="inspirac.je" src="https://plausible.io/js/plausible.js"></script>
    <style type="text/css">
      p.noscript {
        line-height: 1.5;
      }

      p.noscript + p {
        margin-top: 16px;
      }

      p.noscript a::before,
      p.noscript a::after {
        display: none;
      }
    </style>
  </head>
  <body class="compact">
    <main>
      <noscript>
        <p class="noscript">Twoja przeglądarka nie&nbsp;wspiera JavaScript, który jest wymagany do&nbsp;działania Magazynu Inspiracji.</p>
        <p class="noscript">Bez&nbsp;obaw &ndash; strona nie&nbsp;używa plików cookie, nie&nbsp;śledzi Cię przez Google Analytics ani&nbsp;Facebookowe wtyczki.</p>
        <p class="noscript">Jeśli chcesz sprawdzić kod źródłowy aplikacji, zapraszam na <a href="https://github.com/oczki/inspiracje">repozytorium na&nbsp;GitHub</a>.</p>
        <p class="noscript">Aby uruchomić JavaScript, poszperaj w&nbsp;opcjach dla tej strony albo&nbsp;zmień przeglądarkę na&nbsp;nowszy model.</p>
      </noscript>
    </main>
    <div id="scrim"></div>
    <div id="sliding-sheets-container"></div>
    <footer></footer>
  </body>
</html>