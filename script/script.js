function showContent(section) {
  const contentArea = document.getElementById('contentArea');
  const homeContent = document.getElementById('homeContent');
  let filePath = '';

  switch (section) {
    case 'home': filePath = 'menu/home.html'; break;
    case 'about': filePath = 'menu/about.html'; break;
    case 'skills': filePath = 'menu/skills.html'; break;
    case 'experience': filePath = 'menu/experience.html'; break;
    case 'projects': filePath = 'menu/projects.html'; break;
    case 'education': filePath = 'menu/education.html'; break;
    case 'contact': filePath = 'menu/contact.html'; break;
    default:
      contentArea.innerHTML = '<p>Content not found.</p>';
      contentArea.style.display = 'block';
      homeContent.style.display = 'none';
      return;
  }

  fetch(filePath)
    .then(response => {
      if (!response.ok) throw new Error('Content could not be loaded');
      return response.text();
    })
    .then(htmlContent => {
      contentArea.innerHTML = htmlContent;
      contentArea.style.display = 'block';
      homeContent.style.display = 'none';
    })
    .catch(() => {
      contentArea.innerHTML = '<p>Sorry, content could not be loaded.</p>';
      contentArea.style.display = 'block';
      homeContent.style.display = 'none';
    });
}

// Typing animation
const element = document.getElementById('role');
const texts = ["DevOps Engineer", "Cloud and DevOps Engineer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    charIndex--;
    element.textContent = currentText.substring(0, charIndex);
  } else {
    charIndex++;
    element.textContent = currentText.substring(0, charIndex);
  }

  if (!isDeleting && charIndex === currentText.length) {
    if (textIndex < texts.length - 1) {
      setTimeout(() => {
        isDeleting = true;
        typeEffect();
      }, 1000);
      return;
    } else {
      return;
    }
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();
