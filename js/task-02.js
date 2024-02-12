const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulHtml = document.querySelector("#ingredients")

 const ingredientsArr = ingredients.map(elem =>{
let li = document.createElement("li")
li.classList.add(".item")
li.textContent = elem
return li
})

ulHtml.append(...ingredientsArr)
