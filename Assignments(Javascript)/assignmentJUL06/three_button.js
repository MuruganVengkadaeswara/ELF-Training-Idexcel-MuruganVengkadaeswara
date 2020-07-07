
var element = document.createElement('p');
function create() {
    element.innerHTML = "Hello world";
    console.log('element created');
}

function show() {
    document.body.appendChild(element);
    console.log("showing element");
}

function remove() {
    // element.style.display = "none";
    element.remove();
    element.innerHTML = "";
    console.log("element removed");

}