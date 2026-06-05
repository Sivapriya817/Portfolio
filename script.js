document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme
    if (savedTheme === 'light') {
        body.classList.remove('dark-theme');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else if (savedTheme === 'dark' || (savedTheme === null && systemPrefersDark)) {
        body.classList.add('dark-theme');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }

    // Toggle theme on click
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'light');
        }
    });

    // Mobile Menu Logic
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navIcon = mobileMenuBtn.querySelector('i');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        if (navLinks.classList.contains('active')) {
            navIcon.classList.remove('fa-bars');
            navIcon.classList.add('fa-times');
        } else {
            navIcon.classList.remove('fa-times');
            navIcon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                navIcon.classList.remove('fa-times');
                navIcon.classList.add('fa-bars');
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.8rem 10%';
        } else {
            navbar.style.padding = '1.2rem 10%';
        }
    });
});
