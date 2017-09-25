# key-sort

## Introduction


Sorts an array by key, maintaining key to data correlations. This is useful mainly for associative arrays.
This is a implementation of [PHP ksort()](http://php.net/manual/en/function.ksort.php) without any **sort_flags**.

## Installation

### Requirements

NODE v0.8.0 or higher

### Install Process
npm install key-sort

## Examples
#### Input
- Input should always be an associative array.
- Provided array should contain objects and each object should have only one property.
- Property value can be either primitive data types or another associative array.

#### Simple
```
const keySort = require('key-sort');

let arr = [
  {world: 'world'},
  {middle: 'hello'},
  {greeting: 'Welcome to'}
];

let sortedArr = keySort(arr);
// [{greeting: 'Welcome to'},{middle: 'hello'},{world: 'world'}]
```

#### Nested
```
const keySort = require('key-sort');

let arr = [
  {x: 1},
  {a: [
    {f: 365},
    {d: 25}
  ]}
];

let sortedArr = keySort(arr);
// [{"a" :[{"d" :25},{"f" :365}]},{"x" :1}]
```

#### Not Nested
```
const keySort = require('key-sort');

let arr = [
  {x: 1},
  {a: [
    {f: 365},
    {d: 25}
  ]}
];

let sortedArr = keySort(arr, false);
// [{"a" :[{"f" :365},{"d" :25}]},{"x" :1}]
```

## External Dependencies
N/A

## Credits

**Original Author**

* [Sjjad Hossain](https://github.com/Halum)
