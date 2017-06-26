function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
     return new Handlebars.SafeString('<li name="ingredientItem">' + ingredient + '</li>')
  });
  Handlebars.registerPartial('recipeDetailsPartial', document.querySelector("#recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.querySelector("#recipe-form-partial").innerHTML);

  var template = Handlebars.compile(document.querySelector("#recipe-form-template").innerHTML);

  document.getElementsByTagName("main")[0].innerHTML = template({'onsubmit': 'createRecipe()'})
}

function createRecipe() {
  var ingredientsNodes = document.getElementsByName("ingredients")
  var ingredients = []
  for(var i = 0;i < ingredientsNodes.length; i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  }

  var name = document.querySelector("#name").value
  var description = document.querySelector("#description").value
  var recipe = {name, ingredients, description}
  var template = Handlebars.compile(document.querySelector("#recipe-template").innerHTML);
  document.querySelector("#main").innerHTML = template(recipe)

}

function displayEditForm() {
  var name = document.querySelector("#recipeName").innerText
  var description = document.querySelector("#recipeDescription").innerText
  var ingredientsNodes = document.getElementsByName("ingredientItem")
  var ingredients = []
  for(var i = 0; i < ingredientsNodes.length; i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  }

  var recipe = {name, description, ingredients, onsubmit: 'createRecipe()'}

  var template = Handlebars.compile(document.querySelector("#recipe-form-template").innerHTML)
  document.querySelector("#main").innerHTML = template(recipe)
}

function updateRecipe() {
  var ingredientsNodes = document.getElementsByName("ingredients")
  var ingredients = []
  for(var i = 0;i < ingredientsNodes.length; i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  }

  var name = document.querySelector("#name").value
  var description = document.querySelector("#description").value
  var recipe = {name, ingredients, description}
  var template = Handlebars.compile(document.querySelector("#recipe-template").innerHTML)
  document.querySelector("#main").innerHTML = template(recipe)
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
