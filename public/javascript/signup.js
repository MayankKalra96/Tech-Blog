async function signupFormHandler(event) {
    event.preventDefault();
  
    const user_name = document.querySelector('#name-signup').value.trim();
    const user_email = document.querySelector('#email-signup').value.trim();
    const user_password = document.querySelector('#password-signup').value.trim();
    const user_twitter = document.querySelector('#twitter-signup').value.trim();
    const user_github = document.querySelector('#github-signup').value.trim();
  
    if (user_name && user_email && user_password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          user_name,
          user_email,
          user_twitter,
          user_github,
          user_password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        console.log('success');
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
}
  
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);