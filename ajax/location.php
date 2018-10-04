<?php
header("Content-type: text/plain; charset=utf-8");

require "core.php";

$reader = getGenericReader([ "../data/locations.txt", 2107, 40 ]);
$printer = new Printer($reader);
$printer->print();
?>