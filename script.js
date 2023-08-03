const hamb = document.querySelector('.hamb');
const navLinks = document.querySelector('.nav');

hamb.addEventListener('click', () => {
  hamb.classList.toggle('active');
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav').forEach((n) => n
  .addEventListener('click', () => {
    hamb.classList.remove('active');
    navLinks.classList.remove('active');
  }));

// -------------------------Document object----------------------//