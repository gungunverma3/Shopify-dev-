// DOM Elements
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.nav-link');
const skillBars = document.querySelectorAll('.skill-progress');
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
const downloadResumeBtn = document.getElementById('download-resume');
const codeLines = document.querySelectorAll('.code-line');
const floatingIcons = document.querySelectorAll('.floating-icon');

// Project data
const projectsData = {
  1: {
    title: 'Parigyan Yogalaya Website',
    description: 'Designed and developed a fully responsive yoga website for Parigyan Yogalaya, showcasing yoga programs, schedules, and contact details.',
    image: 'https://res.cloudinary.com/dmczrwazw/image/upload/v1753638244/cropped-cropped-final123-1_kuu7xs.webp',
    tech: ['HTML', 'CSS', 'WordPress', 'Elementor'],
    demo: 'https://parigyanyogalaya.com/',
    github: 'https://parigyanyogalaya.com/'
  },
  2: {
    title: 'Hair Fall Prediction System',
    description: ' A machine learning model that predicts hair fall risks based on genetic, medical, and environmental factors.',
    image: 'https://res.cloudinary.com/dmczrwazw/image/upload/v1753638021/hairfall_gvf6bq.png',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Numpy'],
    demo: 'https://github.com/ShadowJod/HairFallPrediction',
    github: 'https://github.com/ShadowJod/HairFallPrediction'
  },
  3: {
    title: 'Diabetes Prediction System',
    description: 'Built a predictive model that analyzes patient health data to assess the likelihood of diabetes.',
    image: 'https://res.cloudinary.com/dmczrwazw/image/upload/v1753638019/diabetes_m5qyuj.webp',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Numpy'],
    demo: 'https://github.com/ShadowJod/diabetes_prediction_system',
    github: 'https://github.com/ShadowJod/diabetes_prediction_system'
  },
  4: {
    title: 'Mini Dictionary',
    description: 'Developed a dynamic dictionary web app that stores, manages, and fetches words with meanings.',
    image: 'https://res.cloudinary.com/dmczrwazw/image/upload/v1753638019/minidictonary_me0hqy.png',
    tech: ['HTML/CSS', 'JavaScript', 'Node.js', 'MySQL'],
    demo: 'https://github.com/ShadowJod/minorProject',
    github: 'https://github.com/ShadowJod/minorProject'
  },
  5: {
    title: 'CSS Gradient Generator',
    description: ' Created a web tool that generates beautiful, randomized CSS gradients for developers and designers. ',
    image: 'https://res.cloudinary.com/dmczrwazw/image/upload/v1753638020/cssGradient_ysfrw3.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://github.com/ShadowJod/CSS-GradientGenerator',
    github: 'https://github.com/ShadowJod/CSS-GradientGenerator'
  }
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeScrollEffects();
  initializeAnimations();
  initializeInteractiveElements();
  initializeProjects();
  initializeSkills();
  initializeResumeDownload();
  initializeCodeAnimation();
  initializeFloatingIcons();
});

// Navigation functionality
function initializeNavigation() {
  // Mobile menu toggle
  mobileMenu.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
      mobileMenu.classList.remove('active');
    });
  });

  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Scroll effects
function initializeScrollEffects() {
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    // Navbar background change
    if (scrollPosition > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // Active navigation link
    updateActiveNavLink();
    
    // Parallax effect for hero shapes
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
      const speed = 0.1 + (index * 0.05);
      const yPos = scrollPosition * speed;
      shape.style.transform = `translateY(${yPos}px)`;
    });
  });
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Animation observer
function initializeAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll('.project-card, .skill-item, .contact-item, .about-stats');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Interactive elements
function initializeInteractiveElements() {
  // Add hover effects to skill tags
  const skillTags = document.querySelectorAll('.skill-tag');
  skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
  
  // Add interactive effects to connect cards
  const connectCards = document.querySelectorAll('.connect-card');
  connectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const icon = this.querySelector('.connect-icon');
      icon.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    card.addEventListener('mouseleave', function() {
      const icon = this.querySelector('.connect-icon');
      icon.style.transform = 'scale(1) rotate(0deg)';
    });
  });
}

// Project functionality
function initializeProjects() {
  projectCards.forEach(card => {
    card.addEventListener('click', function() {
      const projectId = this.getAttribute('data-project');
      openProjectModal(projectId);
    });
  });
  
  // Modal close functionality
  modalClose.addEventListener('click', closeProjectModal);
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeProjectModal();
    }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      closeProjectModal();
    }
  });
}

// Open project modal
function openProjectModal(projectId) {
  const project = projectsData[projectId];
  if (!project) return;
  
  // Update modal content
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-image').src = project.image;
  document.getElementById('modal-description').textContent = project.description;
  document.getElementById('modal-demo').href = project.demo;
  document.getElementById('modal-github').href = project.github;
  
  // Update tech tags
  const techContainer = document.getElementById('modal-tech');
  techContainer.innerHTML = project.tech.map(tech => 
    `<span class="tech-tag">${tech}</span>`
  ).join('');
  
  // Show modal
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

// Close project modal
function closeProjectModal() {
  modal.classList.remove('show');
  document.body.style.overflow = 'auto';
}

// Skills animation
function initializeSkills() {
  const skillsSection = document.getElementById('skills');
  const skillsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkillBars();
        skillsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  skillsObserver.observe(skillsSection);
}

// Animate skill bars
function animateSkillBars() {
  skillBars.forEach(bar => {
    const width = bar.getAttribute('data-width');
    setTimeout(() => {
      bar.style.width = width;
    }, 200);
  });
}

// // Resume download
// function initializeResumeDownload() {
//   downloadResumeBtn.addEventListener('click', function(e) {
//     e.preventDefault();
    
//     // Create a temporary download message
//     const downloadMessage = document.createElement('div');
//     downloadMessage.innerHTML = `
//       <div style="
//         position: fixed;
//         top: 100px;
//         right: 20px;
//         background: var(--primary-color);
//         color: white;
//         padding: 1rem 1.5rem;
//         border-radius: var(--border-radius);
//         box-shadow: 0 10px 25px rgba(0,0,0,0.2);
//         z-index: 1000;
//         animation: slideInRight 0.5s ease;
//       ">
//         <i class="fas fa-download" style="margin-right: 0.5rem;"></i>
//         Resume download would start here!
//       </div>
//     `;
    
//     document.body.appendChild(downloadMessage);
    
//     setTimeout(() => {
//       downloadMessage.remove();
//     }, 3000);
    
//     // In a real application, you would trigger the actual download here
//     // window.open('/path/to/resume.pdf', '_blank');
//   });
// }

// // Code animation
// function initializeCodeAnimation() {
//   codeLines.forEach((line, index) => {
//     const delay = parseInt(line.getAttribute('data-delay')) * 500;
//     setTimeout(() => {
//       line.style.animationDelay = '0s';
//       line.style.opacity = '1';
//       line.style.transform = 'translateX(0)';
//     }, delay);
//   });
// }

// Floating icons animation
function initializeFloatingIcons() {
  floatingIcons.forEach((icon, index) => {
    icon.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.5)';
      this.style.opacity = '0.8';
      this.style.color = 'var(--accent-color)';
    });
    
    icon.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.opacity = '0.3';
      this.style.color = 'var(--primary-color)';
    });
  });
}

// Utility function for smooth scrolling
function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    const offsetTop = element.offsetTop - 70;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}

// Add CSS animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes fadeInUp {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(function() {
  // Scroll-based animations can be added here
}, 16)); // ~60fps
