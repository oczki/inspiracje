<?php
header("Content-type: text/plain; charset=utf-8");

require "core.php";

$reader = getGenericReader([ "../data/nouns.txt", 629386, 40 ]);
$printer = new Printer($reader);
$printer->print();
?>