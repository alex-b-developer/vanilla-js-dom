let numIngredients = prompt("How many ingredients do you want?");

let singleIngredient;
let ingredientList = [];

for (i=0; i<numIngredients; i++){

	singleIngredient = prompt("Add the ingredient #" + (i+1));
	ingredientList.push(singleIngredient);

	document.write(ingredientList[i] + '<br>');
}
