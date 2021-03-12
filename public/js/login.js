const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e)=>{
    setTimeout(()=>{
        splash.classList.add("display-none");
        window.location = "/login";
    }, 3000);
})

function check(form) {
    if(form.Email.value == "user@ucsd.edu" && form.Password.value == "password") {
        window.location.href = ('/index');
    }
    else {
        alert("Incorrect Email Address or Password");
    }
}