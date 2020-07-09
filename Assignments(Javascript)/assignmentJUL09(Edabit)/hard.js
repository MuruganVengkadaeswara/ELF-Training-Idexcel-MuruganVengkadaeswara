
// 1.Seven Boom!

function sevenBoom(arr) {
    let exp = new RegExp('7');
    if (exp.test(arr))
        return "Boom!";
    else
        return "there is no 7 in the array";
}


// 2.Tower of Hanoi

// the formula for number of steps is
// 2 ^ n - 1
// n is the number of discs

function towerHanoi(discs) {
    return Math.pow(2, discs) - 1;
}

//3.Number of Boomerangs

function countBoomerangs(arr) {
    let count = 0;
    for (let i = 0; i < arr.length - 2; i++) {
        if ((arr[i] === arr[i + 2]) && (arr[i + 1] != arr[i]))
            count++;
    }
    return count;
}

//4.Oddish vs. Evenish

function oddishOrEvenish(num) {
    let arr = num.toString().split('');
    let tot = 0;
    for (const val of arr) {
        tot += parseInt(val);
    }
    if (tot % 2 == 0)
        return 'Evenish';
    else
        return 'Oddish';
}

// 5.How Many Days Between Two Dates

function getDays(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; //forMilliSeconds
    return Math.abs(date1 - date2) / oneDay;
}

//6.Length of a Nested Array

function getLength(arr) {
    return arr.flat(Infinity).length;
}

//this flat(depth) method has depth as argument
//if depth is unknown pass Infinity


//7.Book Shelf

function Book(title, author) {
    // Write your properties and methods here
    this.title = title
    this.author = author;

    this.getTitle = function () {
        return "Title: " + this.title;
    };
    this.getAuthor = function () {
        return "Author: " + this.author;
    };
}
// Instantiate your Book constructor here

var PP = new Book("Pride and Prejudice", "Jane Austen");
var H = new Book("Hamlet", "William Shakespeare");
var WP = new Book("War and Peace", "Leo Tolstoy");