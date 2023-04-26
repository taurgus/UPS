const postalCodeData = [
    //ESPOO
    { name: 'Otaniemi', codes: ['02100', '02110', '02130', '02150'] },
    { name: 'Lepuski', codes: ['02140', '02600', '02650', '02680']},
    { name: 'Olari', codes: ['02170', '02210', '02250', ''] },
    { name: 'ESPOO', codes: ['', '', '', ''] },
    { name: 'ESPOO', codes: ['', '', '', ''] },
    { name: 'ESPOO', codes: ['', '', '', ''] },
    { name: 'ESPOO', codes: ['', '', '', ''] },
    { name: 'ESPOO', codes: ['', '', '', ''] },
    
    //HELSINKI
    { name: 'Ruoholahti', codes: ['', '', ''] },
    { name: 'Punavuori', codes: ['', '', ''] },
    { name: 'Helsinki', codes: ['', '', ''] },
    { name: 'Helsinki', codes: ['', '', ''] },
    { name: 'Helsinki', codes: ['', '', ''] },
    { name: 'Helsinki', codes: ['', '', ''] },
    { name: 'Helsinki', codes: ['', '', ''] },

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