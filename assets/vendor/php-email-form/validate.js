/**
* PHP Email Form Validation - v3.11
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
(function () {
  "use strict";

  // Attach to all forms with .php-email-form
  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach(function(form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const input = form.querySelector('input[type="email"], input[type="text"], textarea');
      const loading = form.querySelector('.loading');
      const errorMsg = form.querySelector('.error-message');
      const sentMsg = form.querySelector('.sent-message');
      if (loading) loading.classList.remove('d-block');
      if (errorMsg) errorMsg.classList.remove('d-block');
      if (sentMsg) sentMsg.classList.remove('d-block');
      let value = input ? input.value.trim() : '';
      let isEmail = input && input.type === 'email';
      let valid = false;
      if (value.length > 0) {
        if (isEmail) {
          valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        } else {
          valid = true;
        }
      }
      if (valid) {
        if (loading) loading.classList.remove('d-block');
        if (errorMsg) errorMsg.classList.remove('d-block');
        if (sentMsg) {
          sentMsg.textContent = 'Thanks For Your Feedback';
          sentMsg.classList.add('d-block');
        }
        form.reset();
      } else {
        if (errorMsg) {
          errorMsg.textContent = isEmail ? 'Please enter a valid email address.' : 'Please enter a message.';
          errorMsg.classList.add('d-block');
        }
      }
    });
  });
})();
