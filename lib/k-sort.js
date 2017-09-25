'use strict';

const kSort = function kSort(objectArray) {
    objectArray.sort(function (objA, objB) {
      // it is assumed that each object has only one property
      // as it is an associative array
      let propertyA = Object.keys(objA)[0];
      let propertyB = Object.keys(objB)[0];

      if (Array.isArray(objA[propertyA])) {
        // recursive sorting
        kSort(objA[propertyA]);
      }

      if (Array.isArray(objB[propertyB])) {
        // recursive sorting
        kSort(objB[propertyB]);
      }

      return propertyA.localeCompare(propertyB);
    });

    return objectArray;
}

module.exports = kSort;
