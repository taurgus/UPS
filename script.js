const postalCodeData = [
    //ESPOO
    { name: 'Otaniemi', codes: ['02100', '02110', '02130', '02150'] },
    { name: 'Lepuski', codes: ['02140', '02600', '02650', '02680']},
    { name: 'Olari', codes: ['02170', '02210', '02250', ''] },
    { name: 'Kauniainen', codes: ['', '', '', ''] },
    { name: 'Tammisto', codes: ['', '', '', ''] },
    { name: 'Tikkurila', codes: ['', '', '', ''] },
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

    //NETLUX
    { name: 'Netlux Espoon keskus', codes: ['', '', ''] },
    { name: 'Netlux Matinkylä', codes: ['02230', '02240', '02270'] },
    { name: 'Netlux Juvanmalmi', codes: ['', '', ''] },
    { name: 'Netlux Kivenlahti', codes: ['02260', '02300', '02320'] },

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
      resultDiv.textContent = `${placeName}`;
    } else {
      resultDiv.textContent = `Anna oikea postari tai opettele kirjoittamaan!`;
    }
  });