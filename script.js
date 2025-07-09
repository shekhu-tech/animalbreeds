// Inject Header and Footer, and handle mobile menu
document.addEventListener('DOMContentLoaded', function() {

    // Inject Header
    const header = document.getElementById('header');
    if (header) {
        header.innerHTML = `
            <header>
                <div class="container header-container">
                    <a href="index.html" class="logo">
                        <i class="fas fa-paw"></i>
                        <span>animalbreed.com</span>
                    </a>
                    <button class="mobile-menu-btn">
                        <i class="fas fa-bars"></i>
                    </button>
                    <nav>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="breeds.html">Breeds</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        `;
    }

    // Inject Footer
    const footer = document.getElementById('footer');
    if (footer) {
        footer.innerHTML = `
            <footer>
                <div class="container">
                    <div class="footer-container">
                        <div class="footer-col">
                            <h3>About animalbreed.com</h3>
                            <p>Your friendly guide to the world of animal breeds. We're dedicated to helping you find the perfect companion.</p>
                            <div class="social-links">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="footer-col">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="breeds.html">Breeds</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h3>Contact Us</h3>
                            <ul>
                                <li><i class="fas fa-envelope"></i> info@animalbreed.com</li>
                                <li><i class="fas fa-phone"></i> 8395913829</li>
                                <li><i class="fas fa-map-marker-alt"></i> Sonipat Haryana </li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; ${new Date().getFullYear()} animalbreed.com. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    }

    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav ul');

    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('show');
        });
    }

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(5px)';
        } else {
            header.style.backgroundColor = 'var(--white)';
            header.style.backdropFilter = 'none';
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
});