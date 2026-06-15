/* ── Mobile menu toggle ───────────────── */
function toggleMenu() {
  document.querySelector('.menu-links').classList.toggle('open');
}

/* ── About show more ──────────────────── */
function toggleAbout() {
  const extra  = document.getElementById('about-extra');
  const toggle = document.getElementById('about-toggle');
  const isOpen = extra.style.display === 'block';
  extra.style.display = isOpen ? 'none' : 'block';
  toggle.innerHTML = isOpen
    ? 'Show more <i class="fas fa-chevron-down" style="font-size:0.79rem;"></i>'
    : 'Show less <i class="fas fa-chevron-up" style="font-size:0.79rem;"></i>';
}

/* ── Active nav link on scroll ────────── */
const navLinks = document.querySelectorAll('#desktop-nav .nav-links a');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
      });
    }
  });
}, { threshold: 0.35 });

document.querySelectorAll('[id]').forEach(el => observer.observe(el));

/* ── Smooth-scroll ────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── Lottie scroll tracker ────────────── */
const lottieContainer = document.getElementById('scroll-lottie-container');
let lastScrollTop = 0;

window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop < 10) {
    lottieContainer.classList.remove('lottie-visible');
    lottieContainer.classList.add('lottie-hidden');
    lastScrollTop = 0;
    return;
  }

  if (scrollTop > lastScrollTop) {
    lottieContainer.classList.remove('lottie-hidden');
    lottieContainer.classList.add('lottie-visible');
  } else {
    lottieContainer.classList.remove('lottie-visible');
    lottieContainer.classList.add('lottie-hidden');
  }

  lastScrollTop = scrollTop;
}, { passive: true });

/* ── Music player toggle ──────────────── */
function toggleMusic() {
  const audio     = document.getElementById('bg-audio');
  const musicIcon = document.getElementById('music-icon');

  if (!audio) return;

  if (audio.paused) {
    audio.play();
    musicIcon.className = 'fas fa-pause';
  } else {
    audio.pause();
    musicIcon.className = 'fas fa-play';
  }
}