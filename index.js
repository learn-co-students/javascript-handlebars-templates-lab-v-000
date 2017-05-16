function init() {
  //put any page initialization/handlebars initialization here
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  
  var name = document.getElementsByName('name')[0].value
  var description = document.getElementsByName('description')[0].value
  var ingredient1 = document.getElementsByName('ingredient1')[0].value
  var ingredient2 = document.getElementsByName('ingredient2')[0].value
  var ingredient3 = document.getElementsByName('ingredient3')[0].value
  var ingredient4 = document.getElementsByName('ingredient4')[0].value
  var ingredient5 = document.getElementsByName('ingredient5')[0].value

  var recipe = {
    name,
    description,
    ingredients: [
      {name: ingredient1},
      {name: ingredient2},
      {name: ingredient3},
      {name: ingredient4},
      {name: ingredient5}
    ]
  }


  var div = document.getElementById("stuff");
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)
  Handlebars.registerHelper('displayIngredient', function (ingredient){
    if (ingredient != "")
    {
      return `<li>${ingredient}</li>`
    }
  });
  var template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  var html = template(recipe)

  div.innerHTML = html;
}

function displayEditForm() {
  var div = document.getElementById("form");
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var html = template()

  div.innerHTML = html;
}

function updateRecipe() {

  var name = document.getElementsByName('name')[0].value
  var description = document.getElementsByName('description')[0].value
  var ingredient1 = document.getElementsByName('ingredient1')[0].value
  var ingredient2 = document.getElementsByName('ingredient2')[0].value
  var ingredient3 = document.getElementsByName('ingredient3')[0].value
  var ingredient4 = document.getElementsByName('ingredient4')[0].value
  var ingredient5 = document.getElementsByName('ingredient5')[0].value

  var recipe = {
    name,
    description,
    ingredients: [
      {name: ingredient1},
      {name: ingredient2},
      {name: ingredient3},
      {name: ingredient4},
      {name: ingredient5}
    ]
  }


  var div = document.getElementById("stuff");
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)
  Handlebars.registerHelper('displayIngredient', function (ingredient){
    if (ingredient != "")
    {
      return `<li>${ingredient}</li>`
    }
  });
  var template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  var html = template(recipe)

  div.innerHTML = html;
}