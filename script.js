document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const viewWorkBtn = document.getElementById('view-work-btn');
    const contactForm = document.getElementById('contact-form');

    // Smooth scrolling for navigation and "View My Work" button
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            scrollToSection(sectionId);
        });
    });

    viewWorkBtn.addEventListener('click', () => {
        scrollToSection('portfolio');
    });

    // Highlight active section in navigation
    function setActiveLink() {
        let currentSection = '';
    
        // Find the section in view
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                currentSection = section.id;
            }
        });
    
        // Remove active class from all nav links and add to the active one
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.section === currentSection) {
                link.classList.add('active');
            }
        });
    }
    
    // Listen to the scroll event and update active link
    window.addEventListener('scroll', setActiveLink);
    
    // Also set the active link on initial load
    setActiveLink();

    // Handle contact form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Here you would typically send the form data to a server
        console.log('Form submitted:', { name, email, message });

        // Clear the form
        contactForm.reset();

        // Show a success message (you can replace this with a more user-friendly notification)
        alert('Thank you for your message! I will get back to you soon.');
    });
});