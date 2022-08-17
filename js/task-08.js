const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const formData = {
    email: formElements.email.value,
    password: formElements.password.value,
  };

  formData.email && formData.password ?
    (event.currentTarget.reset(), console.log(formData)) :
    alert('Fill in all fields!');
}

   // const formData = new FormData(event.currentTarget);

  // formData.forEach((value, name) => {
  //   console.log('name', name);
  //   console.log('value', value);

  // });


