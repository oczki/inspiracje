<?php
header("Content-type: text/plain; charset=utf-8");

require "core.php";

$reader = new GenericReader("../data/locations.txt");
$printer = new Printer($reader);
$printer->printAllWords();
?>