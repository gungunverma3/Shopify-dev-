// DOM Elements
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.nav-link');
const skillBars = document.querySelectorAll('.skill-progress');
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
const floatingIcons = document.querySelectorAll('.floating-icon');

// INIT
document.addEventListener('DOMContentLoaded', function () {
  initializeNavigation();
  initializeScrollEffects();
  initializeAnimations();
  initializeProjects();
  initializeSkills();
  initializeFloatingIcons();
});


// ---------------- NAVIGATION ----------------
function initializeNavigation() {
  mobileMenu.addEventListener('click', function () {
    navMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navMenu.classList.remove('active');
      mobileMenu.classList.remove('active');
    });

    // smooth scroll
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });
}


// ---------------- SCROLL EFFECT ----------------
function initializeScrollEffects() {
  window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}


// ---------------- ANIMATIONS ----------------
function initializeAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.project-card, .skill-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = '0.5s';
    observer.observe(el);
  });
}


// ---------------- PROJECTS (MAIN FIX) ----------------
function initializeProjects() {

  // CARD CLICK → MODAL
  projectCards.forEach(card => {
    card.addEventListener('click', function (e) {

      // agar link pe click hua hai → modal mat kholo
      if (e.target.closest('a')) return;

      openProjectModal(this);
    });
  });

  // LINK CLICK FIX
  const projectLinks = document.querySelectorAll('.project-link');
  projectLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.stopPropagation(); // important
    });
  });

  // MODAL CLOSE
  modalClose.addEventListener('click', closeProjectModal);

  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeProjectModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeProjectModal();
  });
}


// ---------------- OPEN MODAL ----------------
function openProjectModal(card) {

  const title = card.querySelector('h3').innerText;
  const description = card.querySelector('p').innerText;
  const image = card.querySelector('img').src;

  // HTML se link uthao
  const demoLink = card.querySelector('.project-link')?.href || "#";

  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-image').src = image;
  document.getElementById('modal-description').textContent = description;
  document.getElementById('modal-demo').href = demoLink;
  document.getElementById('modal-github').href = demoLink;

  // TECH TAGS
  const techTags = card.querySelectorAll('.tech-tag');
  const techContainer = document.getElementById('modal-tech');

  techContainer.innerHTML = "";
  techTags.forEach(tag => {
    techContainer.innerHTML += `<span class="tech-tag">${tag.innerText}</span>`;
  });

  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}


// ---------------- CLOSE MODAL ----------------
function closeProjectModal() {
  modal.classList.remove('show');
  document.body.style.overflow = 'auto';
}


// ---------------- SKILLS ----------------
function initializeSkills() {
  const skillsSection = document.getElementById('skills');

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      skillBars.forEach(bar => {
        bar.style.width = bar.getAttribute('data-width');
      });
    }
  }, { threshold: 0.5 });

  observer.observe(skillsSection);
}


// ---------------- FLOATING ICONS ----------------
function initializeFloatingIcons() {
  floatingIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.5)';
    });

    icon.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
    });
  });
}
