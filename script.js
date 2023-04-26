const postalCodeData = [
    //ESPOO
    { name: 'Otaniemi', codes: ['02100', '02110', '02130', '02150'] },
    { name: 'Olari', codes: ['02170', '02210', '02250', ''] },
    { name: 'Lepuski', codes: ['02140', '02600', '02650', '02680']},
    //HELSINKI
    { name: 'Helsinki', codes: ['00100', '00120', '00130'] },
    { name: 'Kallio', codes: ['00500', '00520', '00530'] },

  ];
  const form = document.querySelector('form');
  const resultDiv = document.querySelector('#result');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const postalCode = document.querySelector('#postalCode').value;
    let placeName = '';
    for (let i = 0; i < postalCodeData.length; i++) {
      if (postalCodeData[i].codes.includes(postalCode)) {
        placeName = postalCodeData[i].name;
        break;
      }
    }
    if (placeName) {
      resultDiv.textContent = `${placeName}.`;
    } else {
      resultDiv.textContent = `Anna oikea postari tai opettele kirjoittamaan!`;
    }
  });