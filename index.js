function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial("recipeDetailsPartial", document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial("recipeFormPartial", document.getElementById("recipe-form-partial").innerHTML);
  Handlebars.registerHelper("displayIngredient", function(ingredient){
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>');
  });
  // set up the form
  var formTemplate = document.getElementById("recipe-form-template").innerHTML;
  var template = Handlebars.compile(formTemplate);
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'});
}

document.addEventListener("DOMContentLoaded", function(event) {
  init();
})

function displayEditForm(){
  // get just the text inside of the name and description
  var name = document.getElementById("nameHeader").innerText
  var description = document.getElementById("recipeDescription").innerText
  // Get all the ingredients nodes from the list with the class defined in the helper
  var ingredientsNodes = document.getElementsByName("ingredientsList")
  var ingredients = []
  // and shove their text into an array
  for(var i=0;i<ingredientsNodes.length;i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  }
  // create the recipe object for the template.
  // since ingredients is set they will be set as values in the partial
  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'}
  // get the template, render it, and set it to main
  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(recipeFormTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function createRecipe(){
  updateRecipe();
}

function updateRecipe(){
  var recipe = getRecipeValsFromForm();
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById("main").innerHTML = recipeTemplate(recipe);
}

function getRecipeValsFromForm() {
  var ingredientsNodes = document.getElementsByName("ingredients");
  var ingredients = [];
  for(var i=0;i<ingredientsNodes.length;i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value);
    }
  }
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var recipe = {name, ingredients, description};
  return(recipe);
}
