document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

var typed = new Typed('.text', {
    strings: ["Frontend Developer", "Web Developer"],
    typeSpeed: 50,
    backSpeed: 70,
    loop: true
});