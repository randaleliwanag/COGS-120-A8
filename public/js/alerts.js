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
    window.alert("Day logged successfully! See you again tomorrow!");
    window.location.href='/index';
});

$(".signOut").click(function() {
    var yes = confirm("Do you want to sign out?");
    
    if (yes) {
        window.location = "/login";
    }
    else {
    }
});

$("#signUp").click(function() {
    window.alert("Account creation successful!");
    window.location.href='/index';
});

$("#signUpBack").click(function() {
    var yes = confirm("Are you sure? Acount information will not be saved.");
    
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