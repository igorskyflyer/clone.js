![clone.js](https://github.com/igorskyflyer/clone.js/raw/master/assets/clone.js.png)

# clone.js

A lightweight JavaScript utility allowing deep copy-by-value of nested objects, arrays and arrays of objects.

_Development size_: **1.06 KB**

_Minified size_: **347 bytes**

## USAGE

### Simple array copy

```javascript
let firstArray = [1, 2, 3]
let secondArray = clone(firstArray)

secondArray[0] = 5

console.log('firstArray => ', firstArray) // [1, 2, 3]
console.log('secondArray => ', secondArray) // [5, 2, 3]
```

### Complex array (array of objects)

```javascript
let firstArray = [
  {
    id: '103',
    name: 'Peter'
  },
  {
    id: '214',
    name: 'Eve'
  }
]
let secondArray = clone(firstArray)

secondArray[0].name = 'John'

console.log('firstArray => ', firstArray)
console.log('secondArray => ', secondArray)
```

### Simple object copy

```javascript
let firstStudent = {
  id: 103,
  name: 'Ben',
  classes: ['Maths', 'Science', 'English language']
}

let secondStudent = clone(firstStudent)

secondStudent.classes[0] = 'Psychology'

console.log('firstStudent => ', firstStudent)
console.log('secondStudent => ', secondStudent)
```

### Nested object copy

```javascript
let firstStudent = {
  id: 103,
  name: 'Ben',
  subjects: {
    groupDke: {
      science: 'B',
      maths: 'C'
    },
    groupOpe: {
      foo: 'bar'
    }
  }
}

let secondStudent = clone(firstStudent)

secondStudent.subjects.groupDke.maths = 'B'

console.log('firstStudent => ', firstStudent)
console.log('secondStudent => ', secondStudent)
```
