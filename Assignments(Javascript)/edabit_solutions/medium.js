//  1.How Much is True?

function countTrue(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            count++;
        }
    }
    return count;
}

//2.redundant function

function redundant(str) {
    return function () {
        return str;
    };
    //simple with es6 arrow  function
    //	return () => str;



}

//3.Number of Dots in triangle

function triangle(n) {
    let dots = 1;
    for (let i = 2; i <= n; i++) {
        dots += i;

    }
    return dots;
}

//4.SquareOfEveryDigit

function squareDigits(n) {
    let arr = n.toString().split('');
    let out = '';
    let digit;
    for (digit of arr) {
        out = out + Math.pow(digit, 2);
    }
    return parseInt(out);
}


//5. ChangeEnough

function changeEnough(change, amountDue) {
    let tot = change[0] * 0.25 + change[1] * 0.10 + change[2] * 0.05 + change[3] * 0.01;
    return tot >= amountDue;
}

//6.ArrayOfMultiples

function arrayOfMultiples(num, length) {
    let arr = [];
    for (let i = 1; i <= length; i++) {
        arr.push(num * i);
    }
    return arr;
}

//7.Even or Odd Number of Factors

function factorGroup(num) {
    if (Number.isInteger(Math.sqrt(num)))
        return 'odd';
    else
        return 'even';
}

//8. Regular Expression

const REGEXP = new RegExp("");

//use this also
//const REGEXP = /^$/

//9.Get Sum of People's Budget

function getBudgets(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].budget;
    }
    return sum;
}

//see reduce function

//10.Integer in Range?

function intWithinBounds(n, lower, upper) {
    return ((n < upper) && (n >= lower) && Number.isInteger(n));
    //return true;

}

//11.Converting Objects to Arrays
function toArray(obj) {
    return Object.entries(obj);
}
//this is Es6 method
//see other methods also

//12.Convert Key, Values in an Object to Array

function objectToArray(obj) {
    return Object.entries(obj);
}

//13.Return the Objects Keys and Values

function keysAndValues(obj) {
    let arr = [];
    arr.push(Object.keys(obj));
    arr.push(Object.values(obj));
    return arr;
}

//see this later
// function keysAndValues(obj) {
//     return [Object.keys(obj), Object.keys(obj).map(x => obj[x])];
// }

//14.Basic Calculator

function calculator(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 > 0)
                return num1 / num2;
            else
                return 'Can\'t divide by 0!';
            break;
    }
}

//15.Factor Chain

function factorChain(arr) {
    let res = true;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] % arr[i] === 0)
            continue
        else {
            res = false;
            break;
        }
    }
    return res;
}

//16.All About Anonymous Functions: Adding Suffixes

function add_suffix(suffix) {
    if (suffix === 'ly') {
        return function (str) {
            return str + 'ly';
        };
    } else if (suffix === 'less') {
        return function (str) {
            return str + 'less';
        };
    } else if (suffix === 'ing') {
        return function (str) {
            return str + 'ing';
        };
    }
}
//const add_suffix = suffix => x => x + suffix
//understand the above

//17.Clone a List

function clone(arr) {
    arr.push(arr.slice(0));
    return arr;
}

//before it was arr.push(arr)


//18.Make a Circle with OOP

class Rectangle {
    constructor(sideA, sideB) {
        this.sideA = sideA;
        this.sideB = sideB;
    }
    getArea() {
        return this.sideA * this.sideB
    };
    getPerimeter() {
        return (this.sideA + this.sideB) * 2
    };
}


class Circle {
    //put code here
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

//unquote and use run to test these cases
/*let q = new Circle(4.44);
console.log(q.getArea());
console.log(q.getPerimeter());
*/

// 19.Fix the Error: Value vs. Reference Types
// Fix this broken code!
function checkEquals(arr1, arr2) {
    //arr1===arr2 before
    if (arr1.toString() === arr2.toString()) {
        return true
    } else {
        return false
    }
}
//learn this properly 


//20.Concatenate Variable Number of Input Arrays

function concat(...args) {
    let arr = [...args];
    return arr.flat();
    // can also use return [].concat(...args);
}

//the flat() method will recursively concat the sub array elements