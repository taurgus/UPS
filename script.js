const postalCodeData = {
    '02210': 'Olari',
    '02250': 'Olari',
    '00500': 'Kallio',
  };

  const form = document.querySelector('form');
  const resultDiv = document.querySelector('#result');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const postalCode = document.querySelector('#postalCode').value;
    const placeName = postalCodeData[postalCode];
    resultDiv.textContent = `${placeName}`;
  });