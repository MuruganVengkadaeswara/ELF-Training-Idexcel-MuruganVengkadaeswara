// Named function (Area of circle)

function area_of_circle(radius) {
    const PI = 3.14;
    return PI * radius * radius;
}

console.log("The area of circle is " + area_of_circle(2));

//Function Expression (Fibonacci series)

var fibonacci = function (units) {
    let a1 = 0;
    let a2 = 1;
    let a3;
    console.log("the fibonacci series");
    console.log(a1);
    console.log(a2);
    for (let i = 2; i < units; i++) {
        //begin iteration with 2
        a3 = a1 + a2;
        console.log(a3);
        a1 = a2;
        a2 = a3;
    }
};

fibonacci(8);

//IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION (   Number)

(function () {
    console.log("Hello world");
})();

// ES6 arrow function (Reverse of string)

var revStr = (str) => {
    var mystr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        mystr = mystr + str[i];
    }
    return mystr;
};

console.log("The reverse of string " + revStr("hello"));

//ES6 Arrow Function (Armstrong Number)

var Armstrong = (number) => {
    var temp = number;
    var res = 0;
    let digit = 0;
    while (temp > 0) {
        digit = temp % 10;
        temp = parseInt(temp / 10);
        res = res + Math.pow(digit, 3);

        // console.log("i1");
    }
    if (number === res) {
        return true;
    } else return false;
};

console.log("371 is armstrong number? " + Armstrong(371));