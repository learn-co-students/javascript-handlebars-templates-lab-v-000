function init() {
  registerPartialsAndHelpers();

	document.getElementById("recipes").innerHTML = Handlebars.compile(document.getElementById("recipe-template").innerHTML)({recipes: recipes})

  document.getElementById("recipe-form-container").innerHTML = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)();
}

function registerPartialsAndHelpers() {
  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString("<li>" + this +"</li>")
  });

  Handlebars.registerPartial("recipeDetailsPartial", document.getElementById("recipe-details-partial").innerHTML);

  Handlebars.registerPartial("recipeFormPartial", document.getElementById("recipe-form-template").innerHTML);
}
// function renderMain() {
//   var template = Handlebars.compile(document.getElementById("main-template").innerHTML);
//   var html = template({name: 'Gordon Ramsay'});
//  	document.getElementsByTagName("main")[0].innerHTML += html;
// }


function createRecipe() {
	var ingredientsNode = document.getElementsByName('ingredients');
	var newRecipe = {
		name: document.getElementById('name').value,
	  description: document.getElementById('recipeDescription').value,
	  ingredients: []
	};

  for (var i=0; i < ingredientsNode.length; i++) {
    newRecipe["ingredients"].push(ingredientsNode[i].value);
  }

	recipes.push(newRecipe);

	document.getElementById("recipes").innerHTML += Handlebars.compile(document.getElementById("recipe-template").innerHTML)({recipes: recipes.slice(-1)});
}

function updateRecipe(recipe_number) {
  console.log("hello");
  var ingredientsNode = document.getElementsByName(`ingredients-${recipe_number}`);

  var editedRecipe = {
    name: document.getElementById(`name-${recipe_number}`).value,
    description: document.getElementById(`recipeDescription-${recipe_number}`).value,
    ingredients: []
  };

  for (var i=0; i < ingredientsNode.length; i++) {
    editedRecipe["ingredients"].push(ingredientsNode[i].value);
  }

  recipes[recipe_number] = editedRecipe;

  document.getElementById("recipes").innerHTML = Handlebars.compile(document.getElementById("recipe-template").innerHTML)({recipes: recipes });

}

function displayEditForm(recipe_number){
  document.getElementById(`edit-container-${recipe_number}`).innerHTML = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)({recipe_count: recipe_number, recipe: recipes[recipe_number]});
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


var recipes = [{
	name: "chicken soup",
  description: 'yummy chicken noodle soup',
  ingredients: ['chicken','stock', 'noodles', '', '']
},{
	name: "cookie",
  description: 'chocolate flavor cookies',
  ingredients: ['flour','sugar','choco chips', '', '']
},{
	name: "fish",
  description: 'poached fish',
  ingredients: ['lemon', 'stock','cod', '', '']
}];

var recipes = [];

