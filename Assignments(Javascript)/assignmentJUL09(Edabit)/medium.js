// 1.Orthogonal Vector


function isOrthogonal(arr1, arr2) {
    var res = 0;
    for (let i = 0; i < arr1.length; i++) {
        res += (arr1[i] * arr2[i]);
    }
    return (res === 0);
}


//2. Return the Time Saved by Speeding

function timeSaved(lim, avg, d) {
    return parseFloat(Math.abs(((d / avg) - (d / lim)) * 60).toFixed(1));
}

//3.Hitting the Jackpot

function testJackpot(result) {
    let res = true;
    for (let i = 0; i < result.length; i++) {
        if (result[i] !== result[0]) {
            res = false;
            break;
        }
    }
    return res;
}

//learn this
// function testJackpot(result) {
//     return new Set(result).size === 1
// }


// 4.Fix the Error: Flattening an Array

// Fix this incorrect code so that all tests pass!
function flatten(arr) {
    arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        //before it was unassigned
        //arr2.concat(arr[i])
        arr2 = arr2.concat(arr[i]);
    }
    return arr2;
}

// 5.Algebra Sequence — Boxes

function boxSeq(step) {
    let boxes = 0;
    for (let i = 1; i <= step; i++) {
        if (i % 2 === 0)
            boxes -= 1;
        else
            boxes += 3;
    }
    return boxes;
}

//6. Replace Vowel with Another Character

function replaceVowel(word) {
    let arr = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < word.length; i++) {
        if (arr.indexOf(word.charAt(i)) !== -1)
            word = word.replace(word.charAt(i), arr.indexOf(word.charAt(i)) + 1);
    }
    return word;
}

//7.Volume of a Cone
//to 2 decimal digits
function coneVolume(h, r) {
    let vol = Math.PI * r * r * (h / 3);
    //try using Number() also
    return parseFloat(vol.toFixed(2));

}

//8.Multiplying Numbers in a String
//the reduce method will convert all the values in array to single value
//a call back function is used
function multiplyNums(nums) {
    return Number(nums.split(',').reduce((acc, val) => acc * val));
}

// 9.Index Multiplier


function indexMultiplier(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * i;
    }
    return sum;
}

//With reduce()
//you made the mistake @ 105 .. dint give i 
// function indexMultiplier(arr) {
//     return arr.reduce((acc, cv, i) => acc + cv * i, 0)
// }

//10.Remove Duplicates from an Array

function removeDups(arr) {
    let set = new Set(arr); // see set DS
    return Array.from(set); // Converting from set to Array
}