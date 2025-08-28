let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const jobsDescription = ['Ai Engineer' , 'Tech Instructor' , 'Web Developer'];

function typeEffect() {
    const currentWord = jobsDescription[wordIndex];
    if (isDeleting) {
        typingAnimation.textContent = currentWord.substring(0, charIndex--);
    } else {
        typingAnimation.textContent = currentWord.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentWord.length) {
        // pause before deleting
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
    } else if (isDeleting && charIndex === 0) {
        // move to next word
        isDeleting = false;
        wordIndex = (wordIndex + 1) % jobsDescription.length;
    }

    const speed = isDeleting ? 100 : 150; // typing vs deleting speed
    setTimeout(typeEffect, speed);
}

typeEffect();

// Add scroll-in animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);
