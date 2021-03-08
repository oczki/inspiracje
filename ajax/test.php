<?php
header("Content-type: text/plain; charset=utf-8");

function format($words) {
  return '[ "' . implode('", "', $words) . '" ]';
}

$words = [
  "Word 1",
  "Word 2",
  "Word 3",
  "Word 4",
  "Word 5",
  "Word 6",
  "Word 7",
  "Word 8",
  "Word 9",
  "Word 10",
  "Word 11",
  "Word 12",
  "Word 13",
  "Word 14",
  "Word 15",
  "Word 16",
  "Word 17",
  "Word 18",
  "Word 19",
  "Word 20",
  "Word 21",
  "Word 22",
  "Word 23",
  "Word 24",
  "Word 25",
  "Word 26",
  "Word 27",
  "Word 28",
  "Word 29",
  "Word 30",
  "Word 31",
  "Word 32",
  "Word 33",
  "Word 34",
  "Word 35",
  "Word 36",
  "Word 37",
  "Word 38",
  "Word 39",
  "Word 40",
  "Word 41",
  "Word 42"
];

echo format($words);
?>