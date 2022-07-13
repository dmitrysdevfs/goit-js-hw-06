const categoriesListRef = Array.from(document.querySelectorAll('.item'));
console.log('Number of categories:', categoriesListRef.length);

categoriesListRef.forEach((el, i) => {
  const categoryTitleRef = el.querySelector('h2');
  const numberElementsRef = el.querySelectorAll('li');
  console.log('Category:', categoryTitleRef.textContent);
  console.log('Elements:', numberElementsRef.length);
});