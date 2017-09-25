# key-sort

## Introduction


Sorts an array by key, maintaining key to data correlations. This is useful mainly for associative arrays.
This is a implementation of [PHP ksort()](http://php.net/manual/en/function.ksort.php) without any **sort_flags**.

## Installation

```npm install key-sort```

#### Requirements
NODE v0.8.0 or higher

## I/O

#### Input
- Input should always be an associative array.
- Provided array should contain objects and each object should have only one property.
- Property value can be either primitive data types or another associative array.
#### Output
- Returns array sorted by property name.
- Also modifies input array.
- Nested sorting is default.
- Pass **false** for not nesting sort.

## Examples

#### Simple
```javascript
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
```javascript
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
```javascript
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

* [Sajjad Hossain](https://github.com/Halum)
