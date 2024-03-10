const main = document.querySelector("main");
const mainOffset = main.offsetTop;

const arrow = document.getElementById("goTo");

windows.onscroll = function() {
    if (window.scrollY < mainOffset) {
        arrow.classList.add("")
    }
}

$('#top').click(function() {            // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                   // Scroll to top of body
    }, 500);
});

