const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientsRef = ingredients.map((ingredient) => {
  const ingredientLi = document.createElement('li');
  ingredientLi.textContent = ingredient;
  ingredientLi.classList.add('item');
  return ingredientLi;
});

ingredientsList.append(...ingredientsRef);