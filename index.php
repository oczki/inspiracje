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
    <meta name="description" content="Podręczny generator postaci, relacji, miejsc i innych słów do scenek teatru improwizowanego.">
    <meta property="og:locale" content="pl">
    <meta property="og:title" content="Podręczny generator postaci, relacji, miejsc i innych słów do scenek teatru improwizowanego.">
    <meta property="og:image" content="/media/og-image.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3563dc">
    <meta name="apple-mobile-web-app-title" content="Magazyn Inspiracji">
    <meta name="application-name" content="Magazyn Inspiracji">
    <meta name="msapplication-TileColor" content="#2d89ef">
    <meta name="theme-color" content="#ffffff">
    <title>Magazyn Inspiracji</title>
    <?php addCss('style'); ?>
    <?php addCss('swiper-bundle.min'); ?>
    <script async defer data-domain="inspirac.je" src="https://plausible.io/js/plausible.js"></script>
    <style type="text/css">
      p.noscript { line-height: 1.5; }
      p.noscript + p { margin-top: 16px; }
      p.noscript a::before, p.noscript a::after { display: none; }
      .skeleton {
        position: relative;
        width: min(100%, 640px);
        height: 56px;
        margin: 24px 4px 8px 4px;
        background-color: white;
        box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 250ms;
      }
      .skeleton.visible { opacity: 1; }
      .skeleton::before {
        content: '\b7 \b7 \b7';
        position: absolute;
        bottom: 100%;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .skeleton + .skeleton { margin-top: 32px; }
      @keyframes dot-animation {
        0%, 60%, 100% { opacity: 0.24; transform: scale(1); }
        20% { opacity: 1; transform: scale(1.1); }
      }
      .skeleton .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #1b1b1b;
        animation: dot-animation 1s infinite;
        opacity: 0.24;
      }
      .skeleton .dot:nth-child(1) { animation-delay: 0.2s; }
      .skeleton .dot:nth-child(2) { animation-delay: 0.4s; }
      .skeleton .dot:nth-child(3) { animation-delay: 0.6s; }
      .skeleton .dot + .dot { margin-left: 8px; }
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
    <script>
      const createSkeletons = (skeletonsCount, dotsPerSkeleton) => {
        for (let skeletonIndex = 0; skeletonIndex < skeletonsCount; skeletonIndex++) {
          const skeleton = document.createElement('section');
          skeleton.classList.add('skeleton');
          for (let dotIndex = 0; dotIndex < dotsPerSkeleton; dotIndex++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            skeleton.appendChild(dot);
          }
          document.getElementsByTagName('main')[0].appendChild(skeleton);
          setTimeout(() => skeleton.classList.add('visible'), 250);
        }
      }
      createSkeletons(6, 3);
    </script>
    <?php addJs('swiper-bundle.min'); ?>
    <?php addJs('core'); ?>
    <?php addJs('ripple.min'); ?>
  </body>
</html>
