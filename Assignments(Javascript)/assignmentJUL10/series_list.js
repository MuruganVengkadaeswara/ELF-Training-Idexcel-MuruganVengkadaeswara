
var btn_add_1 = document.getElementById('add_1');
var btn_add_2 = document.getElementById('add_2');
var btn_rm_1 = document.getElementById('rm_1');
var btn_rm_2 = document.getElementById('rm_2');


btn_add_1.addEventListener("click", function () {
    add('add_1');
});
btn_add_2.addEventListener("click", function () {
    add('add_2');
});
btn_rm_1.addEventListener("click", function () {
    remove('rm_1');
});
btn_rm_2.addEventListener("click", function () {
    remove('rm_2');
});


//getting all the li elements
var li_list = document.getElementsByTagName('li');


//adding the event listener to all the li elements
for (var i = 0; i < li_list.length; i++) {
    li_list[i].addEventListener("click", function () {
        removeClick(this);
    });
}







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