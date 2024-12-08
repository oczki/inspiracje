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
  echo '<script src="' . timestampUrl('./js/' . $name . '.js') . '" defer></script>'
     . "\n";
}
?><!DOCTYPE html>
<html lang="pl-PL">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="initial-scale=1.0, width=device-width">
    <meta name="description" content="Tysiące pomysłów do scen teatru improwizowanego.">
    <meta property="og:locale" content="pl">
    <meta property="og:title" content="Magazyn Inspiracji">
    <meta property="og:description" content="Tysiące pomysłów do scen teatru improwizowanego.">
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
      #categories-placeholder {
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
      <div id="categories-placeholder">
        <div id="app-logo">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="700pt" height="700pt" viewBox="0 0 700.000000 700.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0,700) scale(0.1,-0.1)" fill="currentColor" stroke="none">
              <path d="M3539 6816 c-2 -2 -40 -6 -84 -10 -82 -6 -92 -7 -230 -32 -355 -65 -702 -213 -1005 -430 -52 -37 -97 -70 -100 -73 -3 -3 -27 -24 -55 -46 -92 -73 -283 -275 -372 -393 -181 -238 -286 -434 -379 -707 -26 -77 -78 -283 -89 -355 -4 -25 -9 -53 -11 -63 -2 -11 -6 -46 -10 -78 l-7 -59 854 0 c1616 -1 1882 0 1885 3 2 2 -197 205 -443 450 l-447 447 185 185 185 185 767 -767 767 -768 -766 -766 -766 -766 -184 185 c-102 102 -183 186 -182 188 2 2 202 203 446 446 243 244 442 446 442 449 0 3 -617 5 -1370 5 l-1371 0 6 -51 c10 -77 17 -116 61 -314 27 -125 127 -367 211 -514 l45 -77 -48 -83 c-26 -45 -59 -102 -74 -127 -106 -176 -267 -463 -282 -503 -60 -158 3 -338 150 -431 20 -12 127 -75 237 -138 202 -116 715 -413 1140 -658 224 -130 277 -157 319 -166 123 -27 261 16 345 106 20 22 111 170 181 295 19 34 88 153 125 217 6 9 23 41 39 70 15 29 34 60 40 68 7 8 18 27 26 43 13 27 15 27 109 28 439 5 864 141 1266 405 496 327 832 771 1010 1334 23 72 40 137 50 190 3 14 8 36 11 50 3 14 8 36 10 50 3 14 9 50 15 80 29 162 31 587 3 723 -2 12 -6 36 -8 52 -21 147 -97 420 -152 543 -13 29 -24 55 -24 58 0 16 -126 255 -177 336 -253 402 -593 710 -1022 923 -260 130 -490 198 -841 250 -47 7 -425 16 -431 11z"/>
              <path d="M1066 1361 c-119 -209 -130 -239 -123 -341 10 -157 74 -238 272 -345 39 -20 75 -41 80 -45 6 -4 87 -52 180 -105 94 -54 235 -136 315 -182 190 -109 254 -126 370 -96 112 28 176 83 255 218 167 284 156 261 131 274 -12 6 -42 23 -68 39 -61 35 -577 334 -603 348 -11 6 -90 52 -175 101 -427 249 -523 303 -530 303 -4 0 -51 -76 -104 -169z"/>
            </g>
          </svg>
        </div>
        <p>Ukryto wszystkie kategorie</p>
        <p>Na szczęście da&nbsp;się to jeszcze odkręcić!</p>
        <button id="category-restore-defaults">Przywróć wszystko</button>
        <button id="category-open-panel">Pokaż listę kategorii</button>
      </div>
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
      createSkeletons(7, 3);
    </script>
    <?php addJs('swiper-bundle.min'); ?>
    <?php addJs('core'); ?>
    <?php addJs('ripple.min'); ?>
  </body>
</html>
