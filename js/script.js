document.addEventListener('DOMContentLoaded', function() {
  document.body.classList.add('loaded');
});

document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');
  const navLinksItems = document.querySelectorAll('.navigation-links a');

  menuIcon.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });

  navLinksItems.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        navLinks.classList.remove('active'); 
      }
    });
  });
});
