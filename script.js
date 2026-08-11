// 1. Dark/Light Theme Toggle
const themeToggleBtn = document.getElementById('themeToggle');
const root = document.documentElement;

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = root.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  root.setAttribute('data-theme', newTheme);
  
  // Update icon
  themeToggleBtn.innerHTML = newTheme === 'dark' 
    ? '<i class="fa-solid fa-moon"></i>' 
    : '<i class="fa-solid fa-sun"></i>';
});

// 2. Responsive Mobile Menu (Garis Tiga Toggle)
const menuToggleBtn = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});