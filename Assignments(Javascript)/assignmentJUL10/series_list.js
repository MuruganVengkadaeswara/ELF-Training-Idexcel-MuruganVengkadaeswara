// var list = document.getElementById("list");
// var list1 = document.getElementById("list1");

function add(but_id) {
    var to_add = document.getElementById(but_id).previousElementSibling.value;
    var corr_ul = document.getElementById(but_id).parentElement.lastElementChild;
    // button's parent --> div--> parent's lastElement is ul
    console.log(to_add);
    if (to_add === "") {
        var para = document.createElement('p');
        para.innerHTML = 'Please Give a Valid Input';
        para.setAttribute("class", "text-danger");
        corr_ul.insertBefore(para, corr_ul.firstChild);
        setTimeout(() => {
            para.innerHTML = "";
        }, 1000);
    }
    else {
        var li = document.createElement('li');
        li.innerHTML = to_add;
        li.setAttribute("onclick", "removeClick(this)");
        corr_ul.appendChild(li);
    }
}

function remove(rm_id) {

    var corr_ul = document.getElementById(rm_id).parentElement.lastElementChild;
    var corr_in = document.getElementById(rm_id).previousElementSibling.previousElementSibling;
    console.log(corr_in);

    if (corr_in.value === "")
        corr_ul.removeChild(corr_ul.lastElementChild);
    //to remove the element given in input box
    else {
        var list_items = corr_ul.getElementsByTagName('li');
        console.log(list_items);

        for (var i = 0; i < list_items.length; i++) {
            if (list_items[i].innerHTML === corr_in.value)
                corr_ul.removeChild(list_items[i]);

        }

    }
}
function removeClick(ele) {
    ele.remove();
}