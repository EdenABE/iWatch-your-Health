const signupFormHandler = async (event) => {
<<<<<<< HEAD
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };

=======
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  const age = document.querySelector('#age').value.trim();
  const sex = document.querySelector('#sex').value.trim();

  if (name && email && password && age && sex) {
    const response = await fetch('/api/users/signup/', {
      method: 'POST',
      body: JSON.stringify({ name, email, password, age, sex }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  }
};

>>>>>>> main
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
