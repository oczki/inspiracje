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
    <title>Magazyn inspiracji</title>
    <link rel="shortcut icon" type="image/png" href="favicon.png"/>
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <?php addCss('style'); ?>
    <?php addCss('media'); ?>
    <?php //addCss('swiper-bundle.min'); ?>
    <?php //addJs('swiper-bundle.min'); ?>
    <?php addJs('containers'); ?>
    <?php addJs('core'); ?>
    <?php addJs('outline'); ?>
  </head>
  <body>
    <main></main>
    <footer>
      <span id="author">&copy; <a href="http://oczki.pl" title="Damian Oczki - strona główna">Damian Oczki</a></span>
    </footer>
  </body>
</html>