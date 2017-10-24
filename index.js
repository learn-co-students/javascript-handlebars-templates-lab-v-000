// SET UP partials & helpers
function handlebarsSetup() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  });
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
}

// Render createRecipe form
function createRecipeForm() {
  let formTemplate = document.getElementById("recipe-form-template").innerHTML;
  let templateFn = Handlebars.compile(formTemplate);
  let result = templateFn({'submitAction': 'createRecipe()'});
  document.getElementsByTagName("main")[0].innerHTML = result;
};

// Get user input values 
function getRecipeVals() {
  // Get list of ingredients 
  let ingredientsNodes = document.getElementsByName("ingredients");
  let ingredients = [];

  for(var i=0;i<ingredientsNodes.length;i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value);
    }
  };
  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;
  let recipe = {name, ingredients, description};
  return(recipe);
};

function createRecipe() {
  let recipe = getRecipeVals();
  let recipeTemplate = document.getElementById("recipe-template").innerHTML
  let template = Handlebars.compile(recipeTemplate)
  let result = template(recipe)
  document.getElementById("main").innerHTML = result
};

function updateRecipe() {
  var recipe = getRecipeVals()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML;
  var templateFn = Handlebars.compile(recipeTemplate);
  var result = templateFn(recipe);
  // Render recipe information 
  document.getElementById("main").innerHTML = result;
};

function displayEditForm() {
  let name = document.getElementById("recipeName").innerText;
  let description = document.getElementById("recipeDescription").innerText;
  let ingredientsNodes = document.getElementsByName("ingredientsList");
  let ingredients = [];

  for(var i=0;i<ingredientsNodes.length;i++) {
    ingredients.push(ingredientsNodes[i].innerText);
  };

  let recipe = {name, description, ingredients, submitAction: 'createRecipe()'};

  let recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
  let templateFn = Handlebars.compile(recipeFormTemplate);
  document.getElementById("main").innerHTML = templateFn(recipe);
};

function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup();
  createRecipeForm();
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})