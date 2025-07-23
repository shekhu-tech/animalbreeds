// Inject Header
function injectHeader() {
  const headerContainer = document.getElementById('header-container');
  headerContainer.innerHTML = `
    <header id="main-header">
      <div class="logo">
        <a href="index.html">
          <img src="sti.png" alt="LivFit Logo">
        </a>
      </div>
      <nav>
        <div class="nav-item"><a href="training.html">Training Guides</a></div>
        <div class="nav-item"><a href="nutrition.html">Nutrition & Diet</a></div>
        <div class="nav-item"><a href="health.html">Health & Wellness</a></div>
        <div class="nav-item"><a href="adoption.html">Adoption Stories</a></div>
        <div class="nav-item"><a href="blog.html">Blog</a></div>
        <div class="nav-item"><a href="contact.html">Contact Us</a></div>
      </nav>
      <div class="menu-toggle" onclick="toggleSidebar()">
        <i class="fas fa-bars"></i>
      </div>
      <div class="sidebar" id="sidebar">
        <div class="close-btn" onclick="toggleSidebar()">
          <i class="fas fa-times"></i>
        </div>
        <div class="sidebar-logo">
          <a href="index.html">
            <img src="sti.png" alt="LivFit Logo">
          </a>
        </div>
        <ul>
          <li><a class="sidebar-button" href="index.html"><span><i class="fas fa-home"></i> Home</span></a></li>
          <li><a class="sidebar-button" href="pet-care.html"><span><i class="fas fa-paw"></i> Pet Care Tips</span></a></li>
          <li><a class="sidebar-button" href="training.html"><span><i class="fas fa-chalkboard-teacher"></i> Training Guides</span></a></li>
          <li><a class="sidebar-button" href="nutrition.html"><span><i class="fas fa-bone"></i> Nutrition & Diet</span></a></li>
          <li><a class="sidebar-button" href="health.html"><span><i class="fas fa-heartbeat"></i> Health & Wellness</span></a></li>
          <li><a class="sidebar-button" href="adoption.html"><span><i class="fas fa-hand-holding-heart"></i> Adoption Stories</span></a></li>
          <li><a class="sidebar-button" href="blog.html"><span><i class="fas fa-blog"></i> Blog</span></a></li>
          <li><a class="sidebar-button" href="contact.html"><span><i class="fas fa-envelope"></i> Contact Us</span></a></li>
        </ul>
      </div>
    </header>
  `;
}

// Inject Footer
function injectFooter() {
  const footerContainer = document.getElementById('footer-container');
  footerContainer.innerHTML = `
    <footer id="site-footer">
      <div class="footer-container">
        <div class="sidebar-logo">
          <a href="index.html">
            <img src="sti.png" alt="LivFit Logo">
          </a>
        </div>
<p class="footer-description">
  Discover trusted insights on your favorite pet breeds. From loyal dogs to graceful cats, AnimalBreed.com is your go-to guide for expert pet care, training tips, nutrition advice, and heartfelt adoption stories.
</p>
        <div class="footer-buttons">
<a href="pet-care.html" class="footer-btn">Pet Care Tips</a>
<a href="training.html" class="footer-btn">Training Guides</a>
<a href="nutrition.html" class="footer-btn">Nutrition & Diet</a>
<a href="health.html" class="footer-btn">Health & Wellness</a>
<a href="adoption.html" class="footer-btn">Adoption Stories</a>
<a href="blog.html" class="footer-btn">Blog</a>
<a href="contact.html" class="footer-btn">Contact Us</a>
          
        </div>
        <div class="social-links">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
        </div>
        <div class="copyright">
          &copy; ${new Date().getFullYear()} AnimalBreed.com. All rights reserved.
        </div>
      </div>
      <div class="scroll-to-top" id="scrollToTop">
        <i class="fas fa-arrow-up"></i>
      </div>
    </footer>
  `;
}

// Sidebar toggle function
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.classList.toggle('active');
  }
}

// Initialize site
function initializeSite() {
  const header = document.getElementById('main-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    });
  }

  window.toggleSidebar = toggleSidebar;

  const scrollToTopBtn = document.getElementById('scrollToTop');
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({ top: targetElement.offsetTop - 80, behavior: 'smooth' });
        const sidebar = document.getElementById('sidebar');
        if (sidebar && sidebar.classList.contains('active')) {
          toggleSidebar();
        }
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  injectHeader();
  injectFooter();
  initializeSite();
});