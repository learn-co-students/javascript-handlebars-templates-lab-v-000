function init() {
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    var ingredientLine = '<li name="ingredientItem">' + ingredient + '</li>';
    return new Handlebars.SafeString(ingredientLine);
  });
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}

function createRecipe(){
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var recipe = {name, description, ingredients: []};
  var recipeTemplate = document.getElementById("recipe-template").innerHTML;
  var template = Handlebars.compile(recipeTemplate);
  document.getElementById("main").innerHTML = template(recipe);

}

function updateRecipe(){
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var ingredientElements = document.getElementsByName("ingredientItem")
  var ingredients = []
  for(var i=0; i<ingredientElements.length;i++){
    if(ingredientElements[i].value != ""){
      ingredients.push(ingredientElements[i].value)
    }
  }
  var recipe = {name, description, ingredients};
  var recipeTemplate = document.getElementById("recipe-template").innerHTML;
  var template = Handlebars.compile(recipeTemplate);
  document.getElementById("main").innerHTML = template(recipe);
}

function setIngredients(){
  var ingredientElements = document.getElementsByName("ingredientItem")
  var ingredients = []
  for(var i=0; i<ingredientElements.length;i++){
    ingredients.push(ingredientElements[i].innerText)
  }
  return ingredients
}

function displayEditForm(){
  var name = document.getElementById("nameHeader").value;
  var description = document.getElementById("recipeDescription").value;
  var ingredients = setIngredients()
  var recipe = {name, description, ingredients, submitAction: "createRecipe()"}
  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
  var template = Handlebars.compile(recipeFormTemplate);
  document.getElementById("main").innerHTML = template(recipe);
}




document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
