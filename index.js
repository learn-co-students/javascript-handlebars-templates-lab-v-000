function initForm() {
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}

function createRecipe() {
  var recipe = recipeVals()
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById("main").innerHTML += recipeTemplate(recipe);
}

function recipeVals() {
  var ingredientsNodes = document.getElementsByName("ingredients")
  var ingredients = []
  for(let i=0; i<ingredientsNodes.length; i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  }
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  return {name, ingredients, description}
}

function updateRecipe() {
  var recipe = recipeVals()
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById("main").innerHTML += recipeTemplate(recipe);
}

function displayEditForm() {
  var name = document.getElementById("recipeTitle").innerText
  var description = document.getElementById("recipeDescription").innerText
  var ingredientsNodes = document.getElementsByName("ingredientsList")
  var ingredients = []
  for (let i=0; i<ingredientsNodes.length; i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  }

  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'}

  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  document.getElementById("main").innerHTML += Handlebars.compile(formTemplate)
}

function handlebarsSetup() {
  //put any handlebars registrations here.
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
}


function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup()
  initForm()
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
