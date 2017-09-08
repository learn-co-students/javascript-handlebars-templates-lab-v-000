function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)


  Handlebars.registerHelper('displayIngredient', function(ingredient){
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })

  var submitAction = {'submitAction': 'createRecipe()'}

  var mainTemplate =  Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)

  document.getElementsByTagName("main")[0].innerHTML = mainTemplate(submitAction)
}



function createRecipe(){
  var recipe = recipeVariables()

  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML)

  var html = template(recipe)

  document.getElementsByTagName("main")[0].innerHTML = html
}

function recipeVariables(){
  var ingredientEntries = document.getElementsByName("ingredients")
  var ingredientsArray = []
  for (var i = 0; i < ingredientEntries.length; i++) {
    if (ingredientEntries[i].value !== ""){
      ingredientsArray.push(ingredientEntries[i].value)
    }
  }

  var recipe = {
    name: document.getElementsByName("name").value,
    description: document.getElementsByName("description").value,
    ingredients: ingredientsArray
  }
  return recipe
}

function displayEditForm(){
  var ingredientEntries = document.getElementsByName("ingredients")
  var ingredientsArray = []
  for (var i = 0; i < ingredientEntries.length; i++) {
    if (ingredientEntries[i].value !== ""){
      ingredientsArray.push(ingredientEntries[i].value)
    }
  }


  var recipe = {
    name: document.getElementsByName("name").value,
    description: document.getElementsByName("description").value,
    ingredients: ingredientsArray,
    submitAction: 'updateRecipe()'
  }

  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)

  var html = template(recipe)

  document.getElementsByTagName("main")[0].innerHTML = html
}

function updateRecipe(){
  var recipe = recipeVariables()

  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML)

  var html = template(recipe)

  document.getElementsByTagName("main")[0].innerHTML = html

}






document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
