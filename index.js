//HANDLEBARS seems like it works this way: first set a variable with the innerHTML of a template:
// ( eg. var variable = document.getElementById("id-of-template").innerHTML. 
// Then set a variable equal to Handlebars.complile(varible from above) 
// ( eg. var template = Handlebars.compile(variable))
// Lastly, in most cases, search for the id or name where you want your template (if you are searching for a tag name like main or something when you search for innerHTML make sure you preceed it with [0]... if not it will retrun an array like answer) normally though it will look like this:
// document.getElementsByTagName("idOfSometing").innerHTML = template(you can pass in an argument of data if there is interpolated data in template)


// This function runs right out of the gate and it compiles the recipe form on the page to start.
function initForm() {
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}

// This function first sets a variable recipe that calls the function getRecipeIngredients which returns an object of recipe data. Then it goes and sets the template innerHTML to a variable. Which is then compiled. Lastly the compiled template variable is set to the innerHTML with the recipe object as an argument.
function createRecipe() {
  var recipe = getRecipeIngredients()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

// Same as the create recipe above but there will be some differences in the template
function updateRecipe() {
  var recipe = getRecipeIngredients()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

// 
function displayEditForm() {
  var name = document.getElementById("recipeTitle").innerText
  var description = document.getElementById("recipeDetailsDescription").innerText
  var ingredientsNodes = document.getElementsByName("ingredientsList")
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  }

  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'}

  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(recipeFormTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

// Function takes the ingredients that have the element name of "ingredients" and sets them to a variable, then assigns a blank array to a variable also, iterate through each ingredient while making sure only non-blank ones are pushed into the new array. We then retrieve the name value and description value. Create an object called recipe that holds all the items we need for our functions when creating or editing a recipe.
function getRecipeIngredients() {
  var ingredientsNodes = document.getElementsByName("ingredients")
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  }
  var name = document.getElementById("name").value
  var description = document.getElementById("recipeDescription").value
  var recipe = {name, ingredients, description}
  return(recipe)
}

// displayIngredient helper method that just takes each ingredient and puts them in a list
// registers both partials
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