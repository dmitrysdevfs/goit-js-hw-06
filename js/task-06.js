const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', onInputChange);

function onInputChange(event) {
  if (inputRef.value.length === Number(event.currentTarget.dataset.length)) {
    inputRef.setAttribute('class', 'valid');
  } else inputRef.setAttribute('class', 'invalid');
}