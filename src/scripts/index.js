import '../styles/styles.css';

import Spelling from './Spelling';

window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const txtInput = document.querySelector('#txtInput');
  const divResult = document.querySelector('#divResult');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (txtInput.value == '') {
      alert('Silakan isi data dengan benar!');
      return;
    }

    divResult.textContent = Spelling.spell(txtInput.value);
  });
});
