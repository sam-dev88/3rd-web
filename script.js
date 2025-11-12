const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks'); // your sidebar menu

burger.addEventListener('click', () => {
  burger.classList.toggle('active'); // animate burger
  navLinks.classList.toggle('active'); // show/hide sidebar
});

// Optional: close sidebar when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});
