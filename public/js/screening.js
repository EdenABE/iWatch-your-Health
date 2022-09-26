const screeningFormHandler = async (event) => {
  event.preventDefault();

  const id = document.querySelector('#id').value.trim();
  const min_age = document.querySelector('#min_age').value.trim();
  const max_age = document.querySelector('#max_age').value.trim();
  const isMale = document.querySelector('#isMale').value.trim();
  const isFemale = document.querySelector('#isFemale').value.trim();
  const needed_screening = document
    .querySelector('needed_screening')
    .value.trim();
  const needed_vaccination = document
    .querySelector('needed_vaccination')
    .value.trim();
  const description = document.querySelector('description').value.trim();

  if (
    id &&
    min_age &&
    max_age &&
    isMale &&
    isFemale &&
    needed_screening &&
    needed_vaccination &&
    description
  ) {
    const response = await fetch('/api/screenings/', {
      method: 'POST',
      body: JSON.stringify({
        id,
        min_age,
        max_age,
        isMale,
        isFemale,
        needed_screening,
        needed_vaccination,
        description,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert('Screening data successfully updated!');
    }
  }
};

document
  .querySelector('.screening-form')
  .addEventListener('submit', screeningFormHandler);
