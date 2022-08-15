const refs = {
  input: document.querySelector('#name-input'),
  inputLabel: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.inputLabel.textContent = event.currentTarget.value;
}