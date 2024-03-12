let navBar = document.getElementById("mobile-navBar");
let openBtn = document.getElementById("menu-btn");
let closeBtn = document.getElementById("close-btn");

function OpenAndCloseNav(){
    if(navBar.style.display==="flex"){
        navBar.style.display = "none"
    }
    else{
        navBar.style.display ="flex"
    };
}



openBtn.addEventListener("click", OpenAndCloseNav)
closeBtn.addEventListener("click", OpenAndCloseNav)


// To show the current web page

const path = window.location.pathname;
const navlinks = document.querySelectorAll('nav a')


navlinks.forEach(link => {
    if ( link.href.includes(`${path}`)){
        link.classList.add("current")
    };
});