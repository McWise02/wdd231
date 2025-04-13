

const hamButton = document.querySelector('.ham-button');
const nav = document.querySelector('nav');

hamButton.addEventListener('click', () => {
  nav.classList.toggle('open');

  // Toggle the icon
  if (nav.classList.contains('open')) {
    hamButton.innerHTML = '&times;'; // × character (close)
  } else {
    hamButton.innerHTML = '&#9776;'; // ☰ character (hamburger)
  }
});


document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent form from actually submitting
    const messageDiv = document.getElementById('thank-you-message');
    messageDiv.textContent = "🎉 Thank you! We've received your message and will get back to you soon.";
    messageDiv.style.display = 'block';

    // Optionally clear the form
    this.reset();

  });

