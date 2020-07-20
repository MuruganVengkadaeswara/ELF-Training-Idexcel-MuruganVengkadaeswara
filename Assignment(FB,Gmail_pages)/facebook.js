function validate() {
    var form = document.signin;
    var inputValue = form.in.value;
    var password = form.pass.value;
    console.log(inputValue);
    console.log(password);

    var get = localStorage.getItem(inputValue + "");
    var getobj = JSON.parse(get);
    if (get !== null) {
        if (getobj.mail == inputValue && getobj.pass == password) {

            form.submit();
            document.write("welcome " + getobj.firstname);

        }
        else if (getobj.pass != password) {
            alert("Invalid Password");
            form.pass.focus();
        }

    }
    else {
        alert("Invalid Credentials / Sign up first");
    }


    // var emailExp = new RegExp("^.+@.+\..+$");
    // var phoneExp = new RegExp('^[0-9]{10}$');
    // var passwordExp = new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$');
    // if (emailExp.test(inputValue) || phoneExp.test(inputValue)) {
    //     if (passwordExp.test(password)) {
    //         console.log("Test Passed");
    //         form.submit();
    //     }

    //     else if (!passwordExp.test(password)) {
    //         alert("Invalid Password");
    //         form.pass.focus();
    //     }
    // }
    // else if (!emailExp.test(inputValue)) {
    //     alert("The Email or Phone is Invalid, Please Enter a valid Email or Phone number");
    //     form.in.focus();

    // }



}


function validateSignUp() {
    var formSignUp = document.signup;
    var firstNameCheck = /[a-zA-Z]{0,30}/.test(formSignUp.firstName.value);
    var surNameCheck = /[a-zA-Z]{0,30}/.test(formSignUp.surName.value);
    var mailOrPhoneCheck = (/^[0-9]{10}$/.test(formSignUp.mailOrPhone.value)) || (/^.+@.+\..+$/.test(formSignUp.mailOrPhone.value));
    var passwordCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(formSignUp.password.value);
    var dateCheck = (formSignUp.birthday.value) !== "";
    var genderCheck = function () {
        var genders = document.getElementsByName('gender');
        for (var i = 0; i < genders.length; i++) {
            if (genders[i].checked == true) {
                return true;

            }
        }
        return false;
    };
    var user = {
        firstname: formSignUp.firstName.value,
        surname: formSignUp.surName.value,
        mail: formSignUp.mailOrPhone.value,
        pass: formSignUp.password.value
    }
    var id = formSignUp.mailOrPhone.value + "";
    var userjson = JSON.stringify(user);


    if (firstNameCheck && surNameCheck && mailOrPhoneCheck && passwordCheck && dateCheck && genderCheck()) {

        localStorage.setItem(id, userjson);
        formSignUp.submit();
        alert("sign up successful you can login now");
        location.reload();

    }
    else if (!firstNameCheck) {
        alert('Invalid FirstName');
        formSignUp.firstName.focus();
    }
    else if (!surNameCheck) {
        alert('Invalid surName');
        formSignUp.surName.focus();
    }
    else if (!mailOrPhoneCheck) {
        alert('Invalid mail or phone');
        formSignUp.mailOrPhone.focus();
    }
    else if (!passwordCheck) {
        alert('Invalid password');
        formSignUp.password.focus();
    }
    else if (!dateCheck) {
        alert('Date Cannot Be empty');
    }
    else if (!genderCheck()) {
        alert('Select a gender');
    }


    console.log(firstNameCheck);
    console.log(surNameCheck);
    console.log(mailOrPhoneCheck);
    console.log(passwordCheck);
    console.log(dateCheck);
    console.log(genderCheck());
}

