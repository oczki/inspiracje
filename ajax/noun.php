<?php
header("Content-type: text/plain; charset=utf-8");

require "core.php";

$reader = NounsReader::class;
$printer = new Printer($reader);
$printer->print();
?>