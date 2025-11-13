const toggleBtn = document.getElementById('toggle-btn');
const body = document.body;
const icon = document.getElementById('icon');

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    icon.textContent = "🌙"; // moon in dark mode
  } else {
    icon.textContent = "🌞"; // sun in light mode
  }
});



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
