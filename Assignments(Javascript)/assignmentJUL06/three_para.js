var div_one = document.getElementById('div_one');
var div_two = document.getElementById('div_two');
var div_three = document.getElementById('div_three');


function colorChange(div_id) {
    switch (div_id) {
        case 'div_one':
            div_one.style.background = "#5F4B8BFF";
            div_one.style.color = "#E69A8DFF";
            break;

        case 'div_two':
            div_two.style.background = "#D6ED17FF";
            div_two.style.color = "#606060FF";
            break;

        case 'div_three':
            div_three.style.background = "#0063B2FF";
            div_three.style.color = "#9CC3D5FF";
            break;


    }
}


function revert(div_id) {
    window[div_id].style.background = "white";
    window[div_id].style.color = "black";

}