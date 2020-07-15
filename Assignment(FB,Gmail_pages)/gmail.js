function validate() {
    var form = document.signin;
    var inputValue = form['in'].value;
    console.log(inputValue);
    var emailExp = new RegExp("^.+@.+\..+$");
    var phoneExp = new RegExp('^[0-9]{10}$');
    if (emailExp.test(inputValue) || phoneExp.test(inputValue)) {
        console.log("Test Passed");
        form.submit();
    }
    else if (!emailExp.test(inputValue)) {
        alert("The Email or Phone is Invalid, Please Enter a valid Email or Phone number");
        form['in'].focus();

    }

    // form.submit();
}