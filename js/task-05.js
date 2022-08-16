const refs = {
  input: document.querySelector('#name-input'),
  inputLabel: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value === '') {
    refs.inputLabel.textContent = 'Anonymous';
  } else
    refs.inputLabel.textContent = event.currentTarget.value;
}