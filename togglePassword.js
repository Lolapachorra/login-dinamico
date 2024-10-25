const togglePassword = document.querySelector('#togglePassword');
      togglePassword.addEventListener('click', function (e) {
        const password = document.querySelector('#password');
        // Toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        // Toggle the eye icon
        this.classList.toggle('fa-eye-slash');
      });