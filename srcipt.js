let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

var typed = new Typed("#element", {
    strings: [
        "C | C++ | Python",
        "HTML | CSS | JavaScript",
        "Frontend Web Development",
    ],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true

});



function opentab(event, tabname){

    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
