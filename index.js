function loadForm() {
  var formTmplate = document.getElementById("recipe-form-template").innerHTML;
  var formTmplateFn = Handlebars.compile(formTmplate);
  var formHTML = formTmplateFn({function: "createRecipe()",ingredients: ["","","","",""]});

  document.getElementById("main").innerHTML = formHTML;
}

function createRecipe() {
  var recipeValues = getRecipeVals();
  var recipeTemplate = document.getElementById("recipe-template").innerHTML;
  var recipeTemplateFn = Handlebars.compile(recipeTemplate);
  var recipeHTML = recipeTemplateFn(recipeValues);

  document.getElementById("main").innerHTML = recipeHTML;
}

function getRecipeVals() {
  var result = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    ingredients: []
  }
  var ingNodes = document.getElementsByName("ingredients")
  for (var i = 0; i < ingNodes.length; i++) {
    if (ingNodes[i].value !== "") {
      result.ingredients.push(ingNodes[i].value);
    }
  }
  return result;
}

function displayEditForm() {
  var formTmplate = document.getElementById("recipe-form-template").innerHTML;
  var formTmplateFn = Handlebars.compile(formTmplate);
  var formHTML = formTmplateFn(getShowedRecipe());

  document.getElementById("main").innerHTML = formHTML;
}

function getShowedRecipe() {
  var result = {
    function: "updateRecipe()",
    name: document.getElementById("name-showed").innerHTML,
    description: document.getElementById("des-showed").innerHTML,
    ingredients: []
  }
  var ingNodes = document.getElementsByName("ing-showed")
  for (var i = 0; i < ingNodes.length; i++) {
    result.ingredients.push(ingNodes[i].innerHTML);
  }
  while (result.ingredients.length < 5) {
    result.ingredients.push("");
  }
  return result;
}

function updateRecipe() {
  var recipeValues = getRecipeVals();
  var recipeTemplate = document.getElementById("recipe-template").innerHTML;
  var recipeTemplateFn = Handlebars.compile(recipeTemplate);
  var recipeHTML = recipeTemplateFn(recipeValues);

  document.getElementById("main").innerHTML = recipeHTML;
}

function handlebarsSetup() {
  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString(this)
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-details-partial").innerHTML)
}

function init() {
  handlebarsSetup();
  loadForm();
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
