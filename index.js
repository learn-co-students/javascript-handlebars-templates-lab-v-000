// 1 Create a form template with an id of recipe-form-template that will be used to enter new recipes. Make the form submit with a createRecipe() function. Provide inputs for recipe name, description, and at least five ingredients. Hint: Get comfy collecting values with getElementsByName().
// 2 Create a template with an id of recipe-template. This template should contain the recipe name and an "Edit Recipe" link, and render the recipeDetailsPartial in step 3. Render this template with the recipe data when the user submits the form.
function init() {
  //put any page initialization/handlebars initialization here

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString("<li name='ingredientsList'>" + ingredient + "</li>")
  })

  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML)
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  let formTemplate = document.getElementById("recipe-form-template").innerHTML
  let template = Handlebars.compile(formTemplate)
  document.getElementsByTagName('main')[0].innerHTML = template({'submitAction':'createRecipe()'})

  // 3 Register a partial called recipeDetailsPartial for for the description and ingredients of the recipe. Create a template with an id of recipe-details-partial to hold the markup. Use the each helper to display the collection of ingredients.
  // 4 Use a custom helper called displayIngredient to display each ingredient within the each block.
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

// function displayEditForm(){
//   let name = document.getElementById("nameHeader").innerText
//   let description = document.getElementById("recipeDescription").innerText
//   let ingredientElements = document.getElementsByName("ingredientsList").innerText
//   let ingredients = []
//   for (let i = 0, l = ingredientElements.length; i < l; i++) {
//       ingredients.push(ingredientElements[i].innerText)
//   }
  function displayEditForm() {
  var name = document.getElementById("nameHeader").innerText
  var description = document.getElementById("recipeDescription").innerText
  var ingredientsNodes = document.getElementsByName("ingredientsList")
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  }

  let recipe = {name, description, ingredients, submitAction: 'createRecipe()'}

  let recipeFormTemplate = document.getElementById('recipe-form-template').innerHTML
  let template = Handlebars.compile(recipeFormTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function createRecipe(){
  const recipe = getRecipeValues()
  let recipeTemplate = document.getElementById('recipe-template').innerHTML
  let template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}
function updateRecipe(){
  const recipe = getRecipeValues()
  let recipeTemplate = document.getElementById('recipe-template').innerHTML
  let template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function getRecipeValues(){
  let name = document.getElementsByName("name").value
  let description = document.getElementsByName("description").value
  const ingredentElements = document.getElementsByName("ingredients")
  let ingredients = []
  for (let i = 0, l = ingredients.length; i < l; i++) {
    if (ingredientElements[i].value !== "") {
      ingredients.push(ingredientElements[i].value)
    }
  }
  let recipe = {name, ingredients, description}
  return recipe
}
// 5 On click of your "Edit Recipe" link, call a displayEditForm() function that renders a template called recipe-form-template. Allow your recipe to be edited using this form, and re-render the recipe template with the updated information using a updateRecipe() function on form submit.

// 6 Refactor your forms so that recipe-form and the edit form template are both constructed with the same recipe-form-template. The template should render with the recipe data for edit, and with empty values for a new recipe. Hint: Don't forget you can pass any object with any properties as the context for your templates, including, for instance, values for onsubmit.
