
function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);

  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="recipeIngredients">' + ingredient + '</li>')
  });

  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementsByTagName("main")[0].innerHTML = formTemplate({'submitAction': 'createRecipe()'});

}

function recipeValues() {
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var ingredientsNodes = document.getElementsByName("ingredients");
  var ingredients = []
    for (let i = 0; i<ingredientsNodes.length; i++) {
      if (ingredientsNodes[i].value !== "") {
        ingredients.push(ingredientsNodes[i].value)
      };
    };
  var recipe = {name, description, ingredients};
  return recipe;
}

function createRecipe() {
  var recipe = recipeValues();

  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById("main").innerHTML += recipeTemplate(recipe);
}

function updateRecipe() {
  var recipe = recipeValues();

  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var result = recipeTemplate(recipe);
  document.getElementById("main").innerHTML += result;
}

function displayEditForm() {
  var name = document.getElementById("recipeName").innerText;
  var description = document.getElementById("recipeDescription").innerText;
  var ingredientsNodes = document.getElementsByName("recipeIngredients");
  var ingredients = [];
  for (let i = 0; i<ingredientsNodes.length; i++) {
    if (ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].innerText)
    };
  }

  var recipe = {name, description, ingredients, submitAction: 'updateRecipe()'};

  var editFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var result = editFormTemplate(recipe);
  document.getElementById("main").innerHTML += result;
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
