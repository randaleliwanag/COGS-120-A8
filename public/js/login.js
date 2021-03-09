function check(form) {
    if(form.Email.value == "user@ucsd.edu" && form.Password.value == "password") {
        window.location.href = ('/index')
    }
    else {
        alert("Incorrect Username or Password")
    }
}