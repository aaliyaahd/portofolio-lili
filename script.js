// Dark/Light Theme Toggle
const themeToggleBtn = document.getElementById('themeToggle');
const root = document.documentElement;

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    root.setAttribute('data-theme', newTheme);
    
    themeToggleBtn.innerHTML = newTheme === 'dark' 
      ? '<i class="fa-solid fa-sun"></i>' 
      : '<i class="fa-solid fa-moon"></i>';
  });
}

// Typing Effect Animation
document.addEventListener('DOMContentLoaded', () => {
  const typedTarget = document.getElementById('typed');
  if (typedTarget && typeof Typed !== 'undefined') {
    new Typed('#typed', {
      strings: ['Web Developer', 'Data Analyst'],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1500,
      loop: true
    });
  }
});

// Tab Navigation Switcher (Menggantikan Scroll Listener)
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.section-page');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // 1. Ambil ID target dari atribut href (misal: #experiences -> experiences)
      const targetId = link.getAttribute('href').replace('#', '');
      
      // 2. Lepas kelas active dari semua tombol navbar
      navLinks.forEach(l => l.classList.remove('active'));
      
      // 3. Tambahkan kelas active ke tombol navbar yang baru diklik
      link.classList.add('active');
      
      // 4. Sembunyikan semua section
      pages.forEach(page => page.classList.remove('active-page'));
      
      // 5. Tampilkan section yang dituju
      const targetPage = document.getElementById(targetId);
      if (targetPage) {
        targetPage.classList.add('active-page');
      }

      // Scroll halus ke atas saat pindah tab
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
});

// Technologies marquee: gandakan isi track supaya loop-nya tanpa putus
document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('marqueeTrack');
  if (!track) return;

  Array.from(track.children).forEach(item => {
    const clone = item.cloneNode(true);
    clone.classList.add('is-clone');
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  });
});

// Project preview: tampilkan situs langsung (iframe 1280x800) dan skalakan agar pas dengan lebar kartu
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.project-thumb').forEach(thumb => {
    const frame = thumb.querySelector('iframe');
    if (!frame) return;
    const fit = () => { frame.style.transform = `scale(${thumb.clientWidth / 1280})`; };
    fit();
    new ResizeObserver(fit).observe(thumb);
  });
});
