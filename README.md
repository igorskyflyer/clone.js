![clone.js](https://github.com/igorskyflyer/clone.js/raw/master/assets/clone.js.png)

# clone.js
A lightweight JavaScript utility allowing deep copy-by-value of nested objects, arrays and arrays of objects.

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/igorskyflyer)

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/igorskyflyer/clone.js/blob/master/LICENSE)

[![GitHub issues](https://img.shields.io/github/issues/Naereen/StrapDown.js.svg)](https://github.com/igorskyflyer/clone.js/issues/) [![Documentation Status](https://readthedocs.org/projects/ansicolortags/badge/?version=latest)](https://github.com/igorskyflyer/clone.js/tree/master/docs)

[![JavaScript](https://img.shields.io/badge/javascript-♡-red.svg)](https://developer.mozilla.org/bm/docs/Web/JavaScript)

*Development size*: **2.35 KB**

*Minified size*: **421 bytes**

## USAGE
 
 ### Simple array copy
 ```javascript
  let firstArray = [1, 2, 3];
  let secondArray = clone(firstArray);

  secondArray[0] = 5;

  console.log('firstArray => ', firstArray); // [1, 2, 3]
  console.log('secondArray => ', secondArray); // [5, 2, 3]
 ```
 
 ### Complex array (array of objects)
 ```javascript
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
 ```
 
 ### Simple object copy
 ```javascript
  let firstStudent = {
   id : 103,
   name : 'Ben',
   classes : ['Maths', 'Science', 'English language']
  }

  let secondStudent = clone(firstStudent);

  secondStudent.classes[0] = 'Psychology';

  console.log('firstStudent => ', firstStudent);
  console.log('secondStudent => ', secondStudent);
 ```
 
 ### Nested object copy
 ```javascript
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
  ```
  
  ## Limitations: you tell me! •ᴗ•
