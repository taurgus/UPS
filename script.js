const postalCodeData = [
    //ESPOO
    { name: 'Otaniemi', codes: ['02100', '02110', '02130', '02150'] },
    { name: 'Lepuski', codes: ['02140', '02600', '02650', '02660', '02680']},
    { name: 'Olari', codes: ['02120', '02170', '02210', '02250', ''] },
    { name: 'Kauniainen', codes: ['02610', '02630', '02700', '02750'] },
    { name: 'Tammisto', codes: ['', '', '', ''] },
    { name: 'Tikkurila', codes: ['', '', '', ''] },
    { name: 'ESPOO', codes: ['', '', '', ''] },
    { name: 'ESPOO', codes: ['', '', '', ''] },

    //HELSINKI
    { name: 'Ruoholahti', codes: ['00', '00180', '00220'] },
    { name: 'Punavuori', codes: ['00100', '00120', '00150'] },
    { name: 'Lauttasaari', codes: ['00200', '00210', '02160'] },
    { name: 'Esplanadi', codes: ['00100', '00120', '00130'], streets: ['Mannerheimintie', 'Aleksanterinkatu', 'Pohjoisesplanadi'] },
    { name: 'Helsinki', codes: ['', '', ''] },
    { name: 'Helsinki', codes: ['', '', ''] },
    { name: 'Helsinki', codes: ['', '', ''] },

    //NETLUX
    { name: 'Netlux Espoon keskus', codes: ['', '', ''] },
    { name: 'Netlux Matinkylä', codes: ['02230', '02240', '02270'] },
    { name: 'Netlux Juvanmalmi', codes: ['', '', ''] },
    { name: 'Netlux Kivenlahti', codes: ['02260', '02300', '02320'] },
    { name: 'Netlux Espoon keskus', codes: ['', '', ''] },

  ];
  //KATUMUUTTUJAT
  const streetOverrides = [
    { street: 'Mannerheimintie', location: 'Töölö' },
    { street: 'Helsinginkatu', location: 'Kallio' },
    


  ];
  const form = document.querySelector('form');
  const resultDiv = document.querySelector('#result');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const postalCode = document.querySelector('#postalCode').value;
    let placeName = '';
    for (let i = 0; i < postalCodeData.length; i++) {
      for (let j = 0; j < postalCodeData[i].codes.length; j++) {
        if (postalCodeData[i].codes[j].includes('-')) {
          const [start, end] = postalCodeData[i].codes[j].split('-');
          if (postalCode >= start && postalCode <= end) {
            placeName = postalCodeData[i].name;
            break;
          }
        } else if (postalCodeData[i].codes.includes(postalCode)) {
          placeName = postalCodeData[i].name;
          break;
        }
      }
      if (placeName) {
        break;
      }
    }
    if (placeName) {
      resultDiv.textContent = `${placeName}`;
    } else {
      resultDiv.textContent = 'Anna oikea postari';
    }
  });