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
function showMenu(){
    var menuI = document.getElementById("menu-bar");
    menuI.classList.toggle("active");
}
window.addEventListener("scroll", reveal);
reveal();
window.addEventListener("scroll", reveal2);
reveal2();
