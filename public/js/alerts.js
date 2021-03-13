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
    window.alert("Day logged successfully! See you again tomorrow!");
    window.location.href='/index';
});

$("#signOut").click(function() {
    var yes = confirm("Would you like to sign out?");
    
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