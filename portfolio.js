document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Parallax effect
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const speed = section.getAttribute('data-speed');
            section.style.backgroundPositionY = `${window.scrollY * speed}px`;
        });
    });

    // Reveal sections on scroll
    const sections = document.querySelectorAll('.section');
    const options = {
        threshold: 0.1
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        revealOnScroll.observe(section);
    });
});
