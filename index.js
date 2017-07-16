function init() {
  //put any page initialization/handlebars initialization here
  //Register partials and helpers
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="allIngredients">' + ingredient + '</li>')
  })

  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementsByTagName("main")[0].innerHTML = template({ "submitFunction": "createRecipe()" });
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var allIngredients = document.getElementsByName("ingredients");

  var ingredients = []

  for (let i = 0, l = allIngredients.length; i < l; i++) {
    ingredients.push(allIngredients[i]).innerText
  }

  var recipe = { "name": name, "description": description, "ingredients": ingredients }

  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById("main").innerHTML = template(recipe);
}

function displayEditForm() {
  var name = document.getElementById("recipeName").value;
  var description = document.getElementById("recipeDescription").value;
  var currentIngredients = document.getElementsByName("allIngredients");

  var ingredients = []

  for(let i = 0, l = currentIngredients.length; i < l; i++) {
     ingredients.push(currentIngredients[i].innerText)
  }

  var recipe = {
    "name": name,
    "description": description,
    "ingredients": ingredients,
    submitFunction: 'updateRecipe()'
  }

  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementById("main").innerHTML = template(recipe);
}

function updateRecipe() {
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var allIngredients = document.getElementsByName("ingredients");

  var ingredients = []

  for (let i = 0, l = allIngredients.length; i < l; i++) {
    ingredients.push(allIngredients[i]).innerText
  }

  var recipe = { "name": name, "description": description, "ingredients": ingredients }

  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById("main").innerHTML = template(recipe);
}
