const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e)=>{
    setTimeout(()=>{
        splash.classList.add("display-none");
    }, 3000);
})

// Get today's date
var date = new Date();

// Change HTML to today's date
$("#currentDate").html(date.toDateString());
