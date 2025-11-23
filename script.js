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

/*-----------------Contact-Form-----------------*/

const scriptURL = "https://script.google.com/macros/s/AKfycbxdA6bSYEXA_P6u8RPA4c2hZvuPPf07vWrYyQrSLqv3lzCOj6BRJJKeaV_Z_zMdIKlQYQ/exec";

const form = document.getElementById("contactform");
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  msg.innerHTML = "Sending message...";

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`); // ✅ fixed
      }

      msg.innerHTML = "✅ Message sent successfully!";
      form.reset();
      setTimeout(() => {
        msg.innerHTML = "";
      }, 3000);
    })
    .catch((error) => {
      console.error("Form submit error:", error);
      msg.innerHTML = "❌ Failed to send message. Try again later.";
    });
});
