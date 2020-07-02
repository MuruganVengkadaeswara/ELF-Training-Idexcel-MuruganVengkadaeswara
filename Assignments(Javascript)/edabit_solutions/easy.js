//1.Bitwise Operations

function bitwiseAND(n1, n2) {
    return n1 & n2;
}

function bitwiseOR(n1, n2) {
    return n1 | n2;
}

function bitwiseXOR(n1, n2) {
    return n1 ^ n2;
}

//2. Match stick house

function matchHouses(step) {
    if (step !== 0)
        return 6 + ((step - 1) * 5);
    else
        return 0;
}


//3.Add up the Numbers from a Single Number

function addUp(num) {
    let res = 0;
    for (let i = 1; i <= num; i++) {
        res += i;
    }
    return res;
}

//4.Which Function Returns the Larger Number?

function whichIsLarger(f, g) {
    if (f() > g())
        return 'f';
    else if (g() > f())
        return 'g';
    else
        return 'neither';
}

//5.Find the Smallest and Biggest Numbers

function minMax(arr) {
    arr.sort(function (a, b) {
        // To sort in descending order return b-a;
        return a - b;
    })
    //use this for simplification
    //arr.sort((a,b)=>a-b);  
    return [arr[0], arr[arr.length - 1]];
}

//6.number of Squares n*n grid

function numberSquares(n) {
    let squares = 0;
    while (n >= 0) {
        squares += Math.pow(n, 2);
        n--;
    }
    return squares;
}
//7.CanNest

function canNest(arr1, arr2) {
    //this is ES6 spread operator
    if ((Math.min(...arr1) > Math.min(...arr2)) && (Math.max(...arr1) < Math.max(...arr2)))
        return true;
    else
        return false;
}

//9.Convert a Number to Base 2

function binary(decimal) {
    return decimal.toString(2);
}

//8.Highest Digit

function highestDigit(number) {
    let arr = number.toString().split('');
    arr.sort((a, b) => a - b);
    return parseInt(arr[arr.length - 1]);
    // can use
    //Math.max(...arr); also 
    //this is ES6 way
}

//10.Milk and Cookies

function timeForMilkAndCookies(date) {
    if (date.getMonth() === 11 && date.getDate() === 24)
        return true;
    else
        return false;
}