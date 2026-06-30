


/*=============================
        Mobile Menu
==============================*/

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("show-menu");
    });
}


/*=============================
        Sticky Header
==============================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 15px 35px rgba(0,0,0,.10)";
    } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.05)";
    }

});


/*=============================
        Smooth Scroll
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/*=============================
        Call Popup
==============================*/

const popup = document.getElementById("callPopup");
const closePopup = document.getElementById("closePopup");
const laterBtn = document.getElementById("laterBtn");

if (popup) {

    setTimeout(() => {

        popup.style.display = "flex";

    }, 500);

}

function hidePopup() {

    popup.style.display = "none";

}

if (closePopup) {

    closePopup.onclick = hidePopup;

}

if (laterBtn) {

    laterBtn.onclick = hidePopup;

}


/*=============================
        FAQ
==============================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const answer = item.querySelector("p");

    if(answer){
        answer.style.display = "none";
    }

    item.addEventListener("click", () => {

        const para = item.querySelector("p");

        const open = para.style.display === "block";

        faqItems.forEach(i => {

            const p = i.querySelector("p");

            if(p){
                p.style.display = "none";
            }

        });

        para.style.display = open ? "none" : "block";

    });

});


/*=============================
        Scroll Reveal
==============================*/

const revealElements = document.querySelectorAll(

".offer-card,.destination-card,.service-card,.testimonial-card"

);

function reveal() {

    const trigger = window.innerHeight - 120;

    revealElements.forEach(el => {

        if (el.getBoundingClientRect().top < trigger) {

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


/*=============================
        Scroll Top
==============================*/

const topBtn = document.createElement("button");

topBtn.className = "scroll-top";

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


/*=============================
        Active Menu
==============================*/

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});


/*=============================
        Counter
==============================*/

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const update = () => {

        const target = +counter.dataset.target;

        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {

            counter.innerText = Math.ceil(current + increment);

            setTimeout(update, 20);

        } else {

            counter.innerText = target;

        }

    }

    update();

});










