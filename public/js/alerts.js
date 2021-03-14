const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e)=>{
    setTimeout(()=>{
        splash.classList.add("display-none");
    }, 2500);
})

$(".back").click(function() {
    var yes = confirm("Are you sure? Any unsaved data will be lost.");
    
    if (yes) {
        window.location = "/index";
    }
    else {
    }
});

$("#endDayBack").click(function() {
    var yes = confirm("Are you sure? Day will not be logged.");
    
    if (yes) {
        window.location = "/end";
    }
    else {
    }
});

$("#endDay").click(function() {
    window.alert("Day logged successfully! Hope to see you again tomorrow!");
    window.location.href='/index';
});

$(".signOut").click(function() {
    var yes = confirm("Are you sure you want to sign out?");
    
    if (yes) {
        window.location = "/login";
    }
    else {
    }
});

$("#routine").click(function() {
    var yes = confirm("Are you sure? Any unsaved data will be lost.");
    
    if (yes) {
        window.location = "/routine";
    }
    else {
    }
});