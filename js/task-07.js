const refs = {
  inputRange: document.querySelector('#font-size-control'),
  textLabel: document.querySelector('#text'),
}

refs.inputRange.addEventListener('input', onInputChange);
refs.inputRange.value = 16;

function onInputChange(event) {
  refs.textLabel.style.fontSize = `${refs.inputRange.value}px`;
}