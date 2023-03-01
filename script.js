
var menu = 0;
function reveal() {
        var reveals = document.querySelectorAll(".main");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 20;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }
function reveal2() {
    var reveal2s = document.querySelectorAll(".main2");
    for (var i = 0; i < reveal2s.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveal2s[i].getBoundingClientRect().top;
        var elementVisible = 20;
        if (elementTop < windowHeight - elementVisible) {
            reveal2s[i].classList.add("active");
        }
    }
}
function doMenu(){
    menu = 1-menu;
    var showMenu = document.querySelectorAll(".menu-item");
    for (var i =0; i < showMenu.length; i++) {
        if (menu == 1) {
            showMenu[i].classList.add("active");
        } 
        else {
            showMenu[i].classList.remove("active");
        }
    }
    showMenu = document.getElementById("menu");
    if (menu == 1) {
        showMenu.classList.add("active");
        showMenu.innerHTML = "close";
    }
    else {
        showMenu.classList.remove("active");
        showMenu.innerHTML = "menu";
    }
}
window.addEventListener("scroll", reveal);
reveal();
window.addEventListener("scroll", reveal2);
reveal2();
