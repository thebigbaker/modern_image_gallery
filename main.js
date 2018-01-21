const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;
// query selector all returns node list which is similar to array

// Set first image opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
  // Reset opacity of all images
  imgs.forEach(img => (img.style.opacity = 1));

  // Select image
  current.src = e.target.src;

  // Add fade-in class
  current.classList.add('fade-in');

  // Remove fade-in class after .5 secs
  setTimeout(() => current.classList.remove('fade-in'), 500);

  // Change opacity of selected image
  e.target.style.opacity = opacity;
}