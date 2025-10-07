document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section');
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
  
    const removeActiveClasses = () => {
      navLinks.forEach(link => link.classList.remove('active'));
    };
    const setActiveLink = () => {
      let currentSection = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 60 && window.scrollY < sectionTop + sectionHeight - 60) {
          currentSection = section.getAttribute('id');
        }
      });
      removeActiveClasses();
      navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', setActiveLink);
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        removeActiveClasses();
        link.classList.add('active');
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
          top: targetSection.offsetTop - 50,
          behavior: 'smooth'
        });
        navbar.classList.remove('active');
      });
    });
    menuIcon.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
  
    setActiveLink();
  });
  