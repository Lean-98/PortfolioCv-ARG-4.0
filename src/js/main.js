/*--==================== Menu Hamburger ==================== */
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let nabvar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow" , window.scrollY > 0);
});
menu.onclick = () => {
    nabvar.classList.toggle("active");  
};
window.onscroll = () => {
    nabvar.classList.remove("active");  
} 

/*--==================== Dark Mode and Light Mode ==================== */
let darkmode = document.querySelector("#darkmode");
load();
darkmode.onclick = () => {
    if(darkmode.classList.contains("bx-moon")) {
        darkmode.classList.replace("bx-moon", "bx-sun");
        store(document.body.classList.add("darkmode"));
    }
        else {
            darkmode.classList.replace("bx-sun", "bx-moon");
            document.body.classList.remove("darkmode");
        }
}

function load() {
    const darkmode = localStorage.getItem('darkmode');

    if(!darkmode) {
        store('false');
    } else if(darkmode === 'true') {
        body.classList.add('darkmode');
    }
}

function store(value) {
    localStorage.setItem('darkmode', value);
}



/*--==================== Qualification ==================== */
const tabs = document.querySelectorAll('[data-target]');
       tabContents = document.querySelectorAll('[data-content]');

 tabs.forEach( tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active');
        })
        target.classList.add('qualification__active');

        tabs.forEach( tab => {
            tab.classList.remove('qualification__active');
        })
        tab.classList.add('qualification__active');
    })
 })      


/*--==================== Scroll Top ==================== */

window.addEventListener("scroll", () => {
    const scroll = document.querySelector(".scrollTop");
    scroll.classList.toggle("active", window.scrollY > 700)
})

function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}