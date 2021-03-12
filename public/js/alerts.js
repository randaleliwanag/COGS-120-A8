$("#back").click(function() {
    var yes = confirm("Are you sure? Any unsaved data will be lost.");
    
    if (yes) {
        window.location = "/index";
    }
    else {
    }
});

//$("#save").click(function() {
    //alert("Data saved successfully!");
//});

$("#endDayBack").click(function() {
    var yes = confirm("Are you sure? Day will not be logged.");
    
    if (yes) {
        window.location = "/end";
    }
    else {
    }
});

$("#endDay").click(function() {
    window.alert("Day logged successfully!");
    window.location.href='/index';
});

$("#signOut").click(function() {
    var yes = confirm("Sign out?");
    
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

document.addEventListener("DOMContentLoaded", (e)=>{
    setTimeout(()=>{
        splash.classList.add("display-none");
    }, 3000);
})