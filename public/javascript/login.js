async function loginFormHandler(event) {
    event.preventDefault();
  
    const login_email = document.querySelector('#email-login').value.trim();
    const login_password = document.querySelector('#password-login').value.trim();
  
    if (login_email && login_password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          login_email,
          login_password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }

  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);