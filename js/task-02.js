const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const newIngredients = ingredients.map(el => {
  
  const ingredient = document.createElement('li');
  ingredient.textContent = el;
  ingredient.classList.add('item');
  
  return ingredient;
  
})


const ingredientsList = document.querySelector('#ingredients')

ingredientsList.append(...newIngredients)