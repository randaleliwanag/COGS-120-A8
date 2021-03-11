function check(form) {
    if(form.Email.value == "user@ucsd.edu" && form.Password.value == "password") {
        alert("You have successfully logged in.");
        window.location.href = ('/splash');
    }
    else {
        alert("Incorrect Username or Password");
    }
}