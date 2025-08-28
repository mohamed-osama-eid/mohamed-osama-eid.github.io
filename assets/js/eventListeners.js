const menu = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const typingAnimation = document.getElementById('typing-animation');
const sections = document.querySelectorAll("section");  // all your sections with ids
const navLinks = document.querySelectorAll("#navbar a");
const header = document.getElementById('header');

let lastScrollTop = 0;

// change the anchor active state based on the section viewed
window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // adjust offset for sticky header
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// toggle menu by clicking
menu.addEventListener('click' , ()=>{
    navbar.classList.toggle('show');
})

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menu.contains(e.target)) {
        navbar.classList.remove('show');
    }
});

// Close mobile menu when clicking on navigation links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('show');
    });
});

// Observe elements for animation on page load
window.addEventListener('load', () => {
    document.querySelectorAll('.project, .card, .experience, .education').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

