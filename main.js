// DOM Elements
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');

// Project data (sirf content ke liye, links HTML se aayenge)
const projectsData = {
  1: {
    title: 'Indivya Designs Jewellery Website',
    description: 'Designed and developed a fully responsive jewellery eCommerce website.',
    image: 'pro1.png',
    tech: ['HTML/CSS', 'Shopify']
  },
  2: {
    title: 'Motoblox Toy Website',
    description: 'Designed and developed a fully responsive toy website for Motoblox.',
    image: 'pro3.png',
    tech: ['HTML/CSS', 'Shopify']
  },
  3: {
    title: 'Diabetes Prediction System',
    description: 'Built a predictive model that analyzes patient health data.',
    image: 'https://res.cloudinary.com/dmczrwazw/image/upload/v1753638019/diabetes_m5qyuj.webp',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Numpy']
  },
  4: {
    title: 'Little Peepers Website',
    description: 'Responsive toy website for Little Peepers.',
    image: 'pro4.png',
    tech: ['HTML/CSS', 'Shopify']
  },
  5: {
    title: 'Inkling Art Website',
    description: 'Responsive art website.',
    image: 'pro6.png',
    tech: ['HTML/CSS', 'Shopify']
  },
  6: {
    title: 'Plants Website',
    description: 'Responsive plant eCommerce website.',
    image: 'pro7.png',
    tech: ['HTML/CSS', 'Shopify']
  },
  7: {
    title: 'Snacks Website',
    description: 'Responsive snacks eCommerce website.',
    image: 'pro8.png',
    tech: ['HTML/CSS', 'Shopify']
  },
  8: {
    title: 'Hotwheels Website',
    description: 'Responsive Hotwheels store website.',
    image: 'pro10.png',
    tech: ['HTML/CSS', 'Shopify']
  },
  9: {
    title: 'Crayons to Curiosity',
    description: 'Responsive eCommerce website.',
    image: 'pro5.png',
    tech: ['HTML/CSS', 'Shopify']
  }
};

// Click events
projectCards.forEach(card => {
  card.addEventListener('click', function () {
    const projectId = this.getAttribute('data-project');
    openProjectModal(projectId, this);
  });
});

// Open modal
function openProjectModal(projectId, card) {
  const project = projectsData[projectId];
  if (!project) return;

  // HTML se links uthao
  const demoLink = card.getAttribute('data-demo');
  const githubLink = card.getAttribute('data-github');

  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-image').src = project.image;
  document.getElementById('modal-description').textContent = project.description;

  document.getElementById('modal-demo').href = demoLink;
  document.getElementById('modal-github').href = githubLink || "#";

  // Hide github if empty
  if (!githubLink) {
    document.getElementById('modal-github').style.display = 'none';
  } else {
    document.getElementById('modal-github').style.display = 'inline-block';
  }

  // Tech tags
  const techContainer = document.getElementById('modal-tech');
  techContainer.innerHTML = '';
  project.tech.forEach(tech => {
    const span = document.createElement('span');
    span.className = 'tech-tag';
    span.textContent = tech;
    techContainer.appendChild(span);
  });

  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

// Close modal
modalClose.addEventListener('click', () => {
  modal.classList.remove('show');
  document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
  }
});
