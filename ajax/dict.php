<?php
header("Content-type: text/plain; charset=utf-8");

require "core.php";

$reader = new DictionaryReader();
$printer = new Printer($reader);
$printer->printRandomWords();
?>