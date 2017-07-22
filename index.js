function init() {
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerHelper('displayIngredient', function(ingredients) {
  return new Handlebars.SafeString(ingredients)
  });
  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName('main')[0].innerHTML = formTemplate({'submitAction': 'createRecipe()'});
};

document.addEventListener('DOMContentLoaded', function(event){
  init();
});

function recipeAttrs() {
  var name = document.getElementsByName("name").value;
	var description = document.getElementsByName("description").value;
  var ingredients = Array.prototype.map.call(document.getElementsByName('ingredients'), (ingredient) => {
    return ingredient.value
  })
	return {name, description, ingredients};
}

function createRecipe() {
  var recipe = recipeAttrs();
  var recipeTemplate = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  document.getElementsByTagName('main').innerHTML += recipeTemplate(recipe);
}

function displayEditForm () {
  var name = document.getElementsByName("name").value;
	var description = document.getElementsByName("description").value;
  var ingredients = Array.prototype.map.call(document.getElementsByName('ingredients'), (ingredient) => {
    return ingredient.value
  })
	var recipe = {name, description, ingredients, submitAction: 'updateRecipe()'}
	var recipeTemplateEdit = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
	document.getElementById("main").innerHTML = recipeTemplateEdit(recipe);
}

function updateRecipe() {
  var recipe = recipeAttrs()
  var editRecipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById("main").innerHTML += editRecipeTemplate(recipe)
}
