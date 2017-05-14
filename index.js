

function getRecipeVals() {
  var ingredientsNode = document.getElementsByName("ingredients");
  var ingredients = []
  for (let i = 0, l = ingredientsNode.length; i < l; i++) {
    if (ingredientsNode[i].value !== "") {
      ingredients.push(ingredientsNode[i].value)
    }
  }
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var recipeValues = {name, ingredients, description};
  return recipeValues;
}

function createRecipe() {
  console.log("confirmed")
  recipe = getRecipeVals();
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  var result = template(recipe);
  document.getElementById("main").innerHTML += result;
}


function displayEditForm() {
  var name = document.getElementById("name-header").innerText;
  var description = document.getElementById("recipe-description").innerText;
  var ingredientsNodes = document.getElementsByName("ingredients-list");
  var ingredients = [];
  for(var i=0; i<ingredientsNodes.length ;i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  };

  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'};

  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
  var template = Handlebars.compile(recipeFormTemplate);
  document.getElementById("main").innerHTML = template(recipe);
}

function updateRecipe() {
  var recipe = getRecipeVals()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}



function register() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML);
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredients-list">' + ingredient + '</li>');
  })
}


function initForm() {
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}


function init() {
  register()
  initForm()
  //put any page initialization/handlebars initialization here
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
