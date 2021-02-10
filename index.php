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
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" /> <!-- TODO move to local -->
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script> <!-- TODO move to local -->
    <?php addCss('style'); ?>
    <?php addCss('media'); ?>
    <?php //addCss('swiper-bundle.min'); ?>
    <?php //addJs('swiper-bundle.min'); ?>
    <?php addJs('containers'); ?>
    <?php addJs('core'); ?>
    <?php addJs('ripple.min'); ?>
  </head>
  <body class="compact">
    <main></main>
    <footer>
    </footer>
  </body>
</html>