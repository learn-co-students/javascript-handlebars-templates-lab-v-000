function init() {
  //put any page initialization/handlebars initialization here

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    if(ingredient) {
      return new Handlebars.SafeString(`<li name="ingredientsList">${ingredient}</li>`)
    }
  })

  var recipe_template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var result = recipe_template({'submitAction': 'createRecipe()'});
  document.getElementsByTagName("main")[0].innerHTML += result;
}

function createRecipe() {

  // event.preventDefault();

  var name = document.getElementById("name").value
  var description = document.getElementById("description").value

  var ingredients = document.getElementsByName("ingredients")
  var ingr_vals = [].map.call(ingredients, ingr => ingr.value)
  showRecipe({ name: name, description: description, ingredients: ingr_vals })
}

function showRecipe(recipe) {
  var recipe_template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var result = recipe_template(recipe);

  document.getElementsByTagName("main")[0].innerHTML += result;
}

function displayEditForm() {
  var name = document.getElementById("recipe_name").innerText
  var description = document.getElementById("recipe_description").innerText
  var ingredientsNodes = document.getElementsByName("ingredientsList")
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  }

  console.log(ingredients)

  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'}

  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(recipeFormTemplate)
  console.log(template(recipe))
  document.getElementById("main").innerHTML += template(recipe)
}

function updateRecipe() {
  var recipe = getRecipeVals()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function getRecipeVals() {
  var ingredientsNodes = document.getElementsByName("ingredients")
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  }
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var recipe = {name, ingredients, description}
  return(recipe)
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
