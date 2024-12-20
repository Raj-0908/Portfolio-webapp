// Initialize EmailJS with your public key
(function () {
    emailjs.init("EnEN8uZFWzmmnkv4o"); // Replace with your public key
})();

// Smooth scroll to sections
document.getElementById('explore-work-btn').addEventListener('click', () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

// Contact form submission using EmailJS
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Show a loading message while processing
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = "Sending...";
    submitButton.disabled = true;

    // Send the form data using EmailJS
    emailjs.sendForm('service_3zdqg1d', 'template_iy1hwim', contactForm)
        .then((response) => {
            alert('Thank you for reaching out! Your message has been sent.');
            contactForm.reset(); // Clear the form fields
        })
        .catch((error) => {
            alert('Oops! Something went wrong. Please try again later.');
            console.error('EmailJS Error:', error);
        })
        .finally(() => {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        });
});

// Responsive navbar highlight on scroll
const navLinks = document.querySelectorAll('header nav ul li a');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    navLinks.forEach((link) => {
        const section = document.querySelector(link.getAttribute('href'));

        // Check if section is in view
        if (
            section.offsetTop <= scrollPosition + 100 &&
            section.offsetTop + section.offsetHeight > scrollPosition + 100
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Add 'active' class to navbar links when clicked
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.forEach((navLink) => navLink.classList.remove('active')); // Remove active from all links
        link.classList.add('active'); // Add active to the clicked link
    });
});

// Back-to-top button functionality
const backToTopButton = document.createElement('button');
backToTopButton.id = 'back-to-top';
backToTopButton.textContent = '↑';
document.body.appendChild(backToTopButton);

// Show or hide the back-to-top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to the top when the back-to-top button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Accessibility improvements: Focus outline for interactive elements
document.querySelectorAll('a, button').forEach((element) => {
    element.addEventListener('focus', () => element.classList.add('focused'));
    element.addEventListener('blur', () => element.classList.remove('focused'));
});
