const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
const year = document.getElementById('year');
const quoteForm = document.getElementById('quoteForm');
const formMessage = document.getElementById('formMessage');

year.textContent = new Date().getFullYear();

menuBtn.addEventListener('click', function () {
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav a').forEach(function (link) {
  link.addEventListener('click', function () {
    navMenu.classList.remove('active');
  });
});

quoteForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const company = document.getElementById('company').value;
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value;

  const subject = encodeURIComponent('Website Quote Request - AMS Cleaning and Maintenance');

  const body = encodeURIComponent(
    'Name: ' + name + '\\n' +
    'Phone: ' + phone + '\\n' +
    'Email: ' + email + '\\n' +
    'Company / Site: ' + company + '\\n' +
    'Service Type: ' + service + '\\n\\n' +
    'Message:\\n' + message
  );

  window.location.href = 'mailto:mick@amsaccent.com.au?subject=' + subject + '&body=' + body;
  formMessage.style.display = 'block';
  quoteForm.reset();
});



////////////
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = Math.ceil(target / 100);

    if (current < target) {
      counter.innerText = current + increment > target ? target : current + increment;
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target + '+';
    }
  };

  updateCounter();
});