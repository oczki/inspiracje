<?php
header("Content-type: text/plain; charset=utf-8");

require "core.php";

$reader = getGenericReader([ "../data/characters.txt", 1677, 40 ]);
$printer = new Printer($reader);
$printer->print();
?>