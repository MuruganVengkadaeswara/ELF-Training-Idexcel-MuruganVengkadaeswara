//Greatest of 3 numbers

var go3 = (a, b, c) => {

    if (a > b) {
        if (a > c) {
            console.log("a is greater");

        } else {
            console.log("c is greater");

        }
    } else if (b > a) {
        if (b > c) {
            console.log("b is greater");

        } else {
            console.log("c is greater");
        }
    }
};

go3(300, 124, 1282);