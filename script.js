// Initialize EmailJS with your public key
(function () {
    emailjs.init("EnEN8uZFWzmmnkv4o"); // Replace with your public key
})();

// Smooth scroll to section
document.getElementById('explore-work-btn').addEventListener('click', () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

// Contact form submission using EmailJS
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Send the form data using EmailJS
    emailjs.sendForm('service_3zdqg1d', 'template_iy1hwim', contactForm)
        .then((response) => {
            alert('Thank you for reaching out! Your message has been sent.');
            contactForm.reset(); // Clear the form fields
        })
        .catch((error) => {
            alert('Oops! Something went wrong. Please try again later.');
            console.error('EmailJS Error:', error);
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
