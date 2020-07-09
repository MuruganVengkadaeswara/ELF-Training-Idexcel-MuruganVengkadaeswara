// 1. No Conditionals ?

// Try completing this challenge without using any:
// Conditionals
// Ternary operators
// Negations
// Bit operators

// Thus the Math.abs()
function flip(y) {
    return Math.abs(1 - y);
}


//2.Filter out Strings from an Array

function filterArray(arr) {
    arr = arr.filter(function (val) {
        if (typeof val == "number")
            return true;
        else
            return false;
    });
    return arr;
}


//3.Count Instances of a Character in a String

function charCount(myChar, str) {
    var count = 0;
    for (const char of str) {
        if (char === myChar)
            count++;
    }
    return count;
}

//4.Largest Swap

function largestSwap(num) {
    return num.toString().charAt(0) >= num.toString().charAt(1)
}

//5.Return the Factorial

function factorial(int) {
    if (int < 1)  //use < 1 bc there may be 0
        return 1;
    else
        return int * factorial(int - 1);
}

//6.Recursion: Factorials

function factorial(n) {
    if (n < 1)
        return 1;
    else
        return n * factorial(n - 1);
}

//7.Recursion to Repeat a String n Number of Times

function repetition(txt, n) {
    if (n === 1)
        return txt;
    else
        return txt + repetition(txt, n - 1)
}

//8.Correct the Mistakes

function squared(b) {
    return b * b;
}

// 9.Algorithms I: Introduction to Recursion

function factorial(num) {
    if (num < 1)
        return 1;
    else
        return num * factorial(num - 1);
}

// 10.Absolute Sum

function getAbsSum(arr) {
    let sum = 0;
    for (const val of arr) {
        sum += Math.abs(val);
    }
    return sum;
}