const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e)=>{
    setTimeout(()=>{
        splash.classList.add("display-none");
        window.location = "/login";
    }, 2500);
})

function check(form) {
    if(form.Email.value == "user@ucsd.edu" && form.Password.value == "password") {
        alert("You have successfully logged in.");
        window.location.href = ('/index');
    }
    else {
        alert("Incorrect Username or Password");
    }
}