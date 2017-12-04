function init() {
  //put any page initialization/handlebars initialization here
  loadRecipeTemplate()
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-template").innerHTML)
  Handlebars.registerHelper('displayIngredient', function () {
    return new Handlebars.SafeString("<li class='newIngredient'>" + this + "</li>")
  })
}

document.addEventListener("DOMContentLoaded", function (event) {
  init()
})

function createRecipe() {
  const name = document.getElementById("name").value
  const description = document.getElementById("recipeDescription").value
  const nodeIngredients = document.getElementsByClassName("recipeIngredient")
  let ingredients = []
  for (const node of nodeIngredients) {
    ingredients.push(node.value)
  }

  let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  let results = template({ "name": name, "description": description, "ingredients": ingredients })
  document.getElementsByTagName("main")[0].innerHTML += results
}

function loadRecipeTemplate() {

  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementsByTagName("main")[0].innerHTML += template()

}

function displayEditForm() {

  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementsByTagName("main")[0].innerHTML += template()

}

function updateRecipe() {
  createRecipe()
}