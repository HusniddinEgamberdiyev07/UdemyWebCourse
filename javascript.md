# JavaScript

## Basics

### Primitive Types.

1. Number -> Positive numbers, negative numbers, whole numbers, decimal numbers

    We can do math operations such as addition ( + ), subtraction ( - ), multiplication ( * ), devision ( / ), modulo ( % ), power ( ** )
    We have order of operations PEMDAS (Parentheses, Exponents)

    NaN -> Not a Number. Represents something is not a number. 0/0 === NaN. typeof NaN === Number.

2. String -> Represent texts. Wrapped in quotes.

3. Boolean -> true or false

4. NUll

5. Undefined

6. Symbol

7. BigInt

### Variables & let

Giving a name to a value and storing it to access it later and use it.

Variable value type can be changed.

**Naming rules:**

1. Names can contain letters, numbers, underscore, digits

2. No spaces.

3. We cannot start with number

4. Case-sensitive

**Common practise to name variables:**

1. snake_case

2. camelCase ( best one )

3. isLoggedIn -> something like this for booleans.

4. Avoid one letter variable names.

**Syntax:**

```js 
let someName = value;
```

**Updating**

```js
someName = value;
```

```js 
someName = someName + 5;
someNAme += 5;
```

**Decrement**

```js
let num = 10;
num-- // 10
num // 9
--num // 8
```

**Increment**

```js
let num = 10;
num++ // 10
num // 11
++num // 12
```

### Const

const variable cannot be changed.

**Syntax:**

```js 
const someName = value;
```

### Var

Var is old shit and don't use it

**Syntax:**

```js 
var someName = value;
```

### String Basics

We can use ", ' to create Strings.

### String indices & length

Strings are indexed. Every character has its own number and we can access it using that number.
It starts from 0.

chicken<br>
0123456

```js
let something = "There is something";
something[4]; // e
something.length; // 18. how many characters in the string. Length is a property of string.

let hello = " hello";

something + hello; // + will combine two strings. There is something hello

1 + "string"; // "1string"
```


### String methods

Every string comes with built in methods.
We can chain methods. 

**Syntax:**

something.method();

something.method().method();

```js 
helloWorld.toUpperCase().trim();
```

**1. toUpperCase()** -> Non-destructive method (It does not change original)

**2. toLowerCase()** -> Non-destructive method

**3. trim()** -> Removes white spaces from start and end. Non-destructive method


Many methods requires arguments. Arguments are inputs which accept a value.

something.method(arg);

**4. indexOf(match)** -> gives us first index of first matched element. -1 not found.

```js
let a = "this is my text and this is yours";
a.indexOf("is"); // 2
```

**5. slice(indexStart, indexEnd)** -> Extracts section of string. Non-destructive method. We can omit ending index and if we do that our ending point will be till the end of string. indexEnd + 1.

```js
a.slice(5, 10); // 'is my'
a.slice(11); // from 11 till the end. 'text and this is yours'
```

**6. replace(search, replace)** -> Replace only first match. Non-destructive method. replaceAll can replace all of them but some browsers do not suppport it.

```js
a.replace("my", "die"); // 'this is die text and this is yours'
```

**7. repeat(count)** -> Repeats text as many times as count.

```js
a.repeat(2) // 'this is my text and this is yoursthis is my text and this is yours'
```

### String template literals

```js
let price = 10;
let product = "something";

let msg = `You bought ${product} for ${price}$`;
```

### Random numbers & math object

**Math** is an built in object which has methods and properties.

**Math methods:**

**1. floor()** -> rounds down. 21.90 = 21

**2. ceil()** -> rounds up. 21.3 = 22

**3. round()** -> rounds. 21.5 = 22

**Random**

Getting number from 1 to 9

```js
let rNum = Math.floor(Math.random()*10)+1;
```

Getting random number from 20 to 24

```js
let rNum = Math.floor(Math.random()*5)+20;
```

### Undefined & null

**Undefined** -> Variable that do not have an assigned value are undefined. Intentional lack of value which we assign.

**Null** -> Must be assigned. Means nothing there.

### Comparison operators

**1. >** -> greater than

**2. <** -> less than

**3. >=** -> greater than or equal to

**4. >=** -> less than or equal to

**5. ==** -> equal to, not strict (checks values and does not care about types)

**6. ===** -> equal to, strict (checks both values and types)

**7. !=** -> not equal to, not strict

**8. !==** -> not e qual to, strict

### Conditionals

```js
if(condition1){
    code // code will be executed if condition1 is true
}else if(condition2){
    code // code will be executed if condition2 is true and condition1 is false
}else if(condition3){
    code // code will be executed if condition2 is true and condition1, condition2 are false
}else{
    code // code will be executed if all conditions are false
}
```

```js
if(condition1){
    if(condition2){ // if will be executed if condition1 is true
        code // code will be executed if condition2 is true
    }
}
```


we can nest conditionals.

### Truth-y and False-y values

**Falsy values:** -> false, 0, "", null, undefined, NaN. Everything else is **Truthy values**.

### And
**&&** -> True && True === True. Everything else is False.
If left is false js will not look at the right side. It called short circuit.

### Or 
**||** -> False && False === False. Everything else is True.

### Not

**!** -> True === False, False === True.

### Switch

```js
switch (key) {
    case value:
        code
        break;

    case value2:
    case value3:
        code
        break;

    default:
        code
        break;
}
```

### Array Basics

Array id data structure. Data structure is a collection of data. Arrays are ordered collection of values.

Syntax for creating arrays

```js

let arr1 = []; // empty array.
let arr2 = [1,2,3]; // array of numbers.
let arr3 = ["hello", 1, true, null]; // array of mixed types.
arr3.length; // shows how many elements which array has.
```

Arrays are indexed.You can access array elemnets using indexes. It starts with 0. If element does not exists we will get undefined.

```js
let arr1 = ["apple", "banana", "orange"];
arr1[2]; // "banana"
arr1[10]; // undefined
arr1[2][0] // "b"
```
We can update array element using index.

```js
let nums = [1,2,3];
nums[1] = 100; // nums === [1. 100, 3]
```

We can add new element using index.

```js
let nums = [1,2,3];
nums[3] = 100; // nums === [1. 2, 3, 100]
```

### Array methods

**1. Push(arg)** -> add to end, it changes original array.

```js 
let arr = [1,2,3];
arr.push(4); // [1,2,3,4]
arr.push(5,6); // [1,2,3,4,5,6]
```

**2. Pop()** -> remove from end

```js 
let arr = [1,2,3];
arr.pop(); // [1,2]
```

**3. Shift()** -> remove from start

```js
let arr = [1,2,3];
arr.shift(); // [2,3]
```

**4. Unshift(arg)** -> add to start

```js 
let arr = [1,2,3];
arr.unshift(0); // [0,1,2,3]
```

**5. Slice(start[, end])** -> Copies portion on an array.

```js
let arr = [1,2,3,4,5,6];
console.log(arr.slice(2, 5)); // [3, 4, 5]
console.log(arr.slice(2)); // [3, 4, 5, 6]
```

**6. Splice(start[, deleteCount[, item1[, item2]]])** -> Removes/replaces elements. Changes original.

Adding:

```js
let arr = [1,2,5,6,7,8];
arr.splice(2, 0, 3, 4);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8]
```
Replacing:

```js
arr.splice(4, 4, 50,60,70,80)
console.log(arr); // [1, 2, 3, 4, 50, 60, 70, 80]
```

**7. Concat(arg)** -> Merge arrays. Returns new array but does not change original one.

```js
let arr = [1,2,3];
let arr2 = [4,5];
let arr3 = [6,7];
let arr4 = arr.concat(arr2, arr3); // [1, 2, 3, 4, 5, 6, 7]
```

**8. Includes(arg)** -> Look for a value. Returns true or false.

```js 
let arr = [1,2,3];
console.log(arr.includes(2)); // true
```

**9. IndexOf(arg)** -> Find index of the first match. Not found -1.

```js 
let arr = [1,2,3,2];
console.log(arr.indexOf(2)); // 1
```

**10. Join()** -> Creates a string from an array.

**11. Reverse()** -> It reverses an array. It changes an original array.

```js
let arr = [1,2,3];
arr.reverse() // [3, 2, 1]
```

**12. Sort()** -> It sorts and changes original.

### Refrences types and equality tests

```js
[1] === [1] // false
[1] == [1] // false
```

Arrays store refrences and == or === checks refrences with arrays

```js
let nums = [1,2];
let numsCopy = nums; // copying refrence
nums === numsCopy; // true
nums == numsCopy; // true
```

If I do anything to nums, numsCopy will change too.

```js
nums.push(4);
console.log(numsCopy); // [1,2,4]
```

### Arrays & const

If anything stores refrence we can use const to declare them.

### Multi-dimensional Arrays

We can store arrays inside other array.

```js 
let arr = [
    [1,2],
    [3,4]
]
arr[1][0]; // 3
```

### Objects basics.

Objects are data structure. Objects stores data in key and value pairs which is property. We access values using keys.

**Creating object literals**

```js
{ key:"value", key2:"value2" }
```

**Accessing value**

```js
let key = "age"
const person = {userName:"Husniddin", [key]:19};
person["userName"]; // "Husniddin"
person.userName; // "Husniddin"
person[key];
```

**Adding new property**

```js
let person = {};
person.name = "Husniddin"
person["age"] = 19;
```

**Modifying property**

```js 
let person = {name:"Husniddin", age:19};
person.name = "Someone"
person["age"] = 20;
```

All keys are converted to strings.