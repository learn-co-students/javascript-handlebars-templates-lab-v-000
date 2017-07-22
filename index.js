function initForm() {
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}

function displayEditForm() {
  var name = document.getElementById("name")
  var description = document.getElementById("description")
  //get collection of ingredients
  var ingredientNodes = document.getElementsByName("ingredients")
  var ingredients = []
  for(var i=0;i<ingredientNodes.length;i++) {
    if(ingredientNodes[i].value !== "") {
      ingredients.push(ingredientNodes[i].value)
    }
  }

  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'}

  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(recipeFormTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function createRecipe() {
  var recipe = recipeValues()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function updateRecipe() {
  var recipe = recipeValues()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function recipeValues(){
  var name = document.getElementById("name")
  var description = document.getElementById("description")
  //get collection of ingredients
  var ingredientNodes = document.getElementsByName("ingredients")
  var ingredients = []
  for(var i=0;i<ingredientNodes.length;i++) {
    if(ingredientNodes[i].value !== "") {
      ingredients.push(ingredientNodes[i].value)
    }
  }

  var recipe = {name, ingredients, description}
  return(recipe)
}


function handlebarsSetup() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredient">' + ingredient + '</li>')
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
