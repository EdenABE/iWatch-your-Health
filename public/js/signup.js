const signupFormHandler = async (event) => {
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

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
