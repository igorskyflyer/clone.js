 /*
  * A lightweight JavaScript utility allowing deep copy-by-value of nested objects, arrays and arrays of objects.
  * Author: Igor Dimitrijević
  * License: MIT License
 */

/*
 *
 * Usage
 *
 * Simple array copy
 *
  let firstArray = [1, 2, 3];
  let secondArray = clone(firstArray);

  secondArray[0] = 5;

  console.log('firstArray => ', firstArray); // [1, 2, 3]
  console.log('secondArray => ', secondArray); // [5, 2, 3]
 *
 * Complex array (array of objects)
 *
  let firstArray = [{
   id : '103',
   name : 'Peter'
  },
  {
   id : '214',
   name : 'Eve'
  }];
  let secondArray = clone(firstArray);

  secondArray[0].name = 'John';

  console.log('firstArray => ', firstArray);
  console.log('secondArray => ', secondArray);
 *
 * Simple object copy
 *
  let firstStudent = {
   id : 103,
   name : 'Ben',
   classes : ['Maths', 'Science', 'English language']
  }

  let secondStudent = clone(firstStudent);

  secondStudent.classes[0] = 'Psychology';

  console.log('firstStudent => ', firstStudent);
  console.log('secondStudent => ', secondStudent);
 *
 * Nested object copy
 *
  let firstStudent = {
   id : 103,
   name : 'Ben',
   subjects : {
    group_dke : {
     science : 'B',
     maths : 'C'
    },
    group_ope : {
     foo : 'bar'
    }
   }
  }

  let secondStudent = clone(firstStudent);

  secondStudent.subjects.group_dke.maths = 'B';

  console.log('firstStudent => ', firstStudent);
  console.log('secondStudent => ', secondStudent);
*/

'use strict';

(function() {
 console.log('\u2022\u1D17\u2022 clone.js - no more reference copying.');

 function isArray(object) {
  return object instanceof Array;
 }

 function isObject(object) {
  return typeof object === 'object';
 }

 function isNull(object) {
  return typeof object === null;
 }

 function clone(object) {
  let copy;

  if(isNull(object) || !isObject(object))
   return object;

  if(isArray(object)) {
   copy = [];

   for(let i = 0, count = object.length; i < count; i++)
    copy[i] = clone(object[i]);

   return copy;
  }
  else {
   copy = {};

   for(let key in object) {
    if(object.hasOwnProperty(key)) {
     if(!isObject(object[key]))
      copy[key] = object[key];
     else
      copy[key] = clone(object[key]);
    }
   }
  }

  return copy;
 }

 window.clone = clone;
}());