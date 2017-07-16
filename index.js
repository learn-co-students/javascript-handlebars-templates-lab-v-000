// display forms
function displayNewForm() {
  var form = document.getElementById("recipe-form-template").innerHTML;
  
  var template = Handlebars.compile(form);
  
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'});
}

function displayEditForm(){
  // get recipe name
  var name = document.getElementById("recipeName").innerText;
  
  // get recipe description
  var description = document.getElementById("recipeDescription").innerText;
  
  // get recipe ingredients
  var ingredients = [];
  var ingredientInputs = document.getElementsByName("ingredientsList");
  
  for (var i = 0; i<ingredientInputs.length; i++ ) {
    ingredients.push(ingredientInputs[i].innerText);
  }
  
  // display existing recipe values in form
  var recipe = {name, description, ingredients, submitAction: 'updateRecipe()'};
  
  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
  
  var template = Handlebars.compile(recipeFormTemplate);
  
  document.getElementsByTagName("main")[0].innerHTML = template(recipe);
}

//form actions
function createRecipe() {
  // get recipe name
  var name = document.getElementById("name").value;
  
  // get recipe description
  var description = document.getElementById("description").value;
  
  // get recipe ingredients
  var ingredients = [];
  var ingredientInputs = document.getElementsByName("ingredients");
  
  for (var i = 0; i<ingredientInputs.length; i++ ) {
    if(ingredientInputs[i].value !== "") {
      ingredients.push(ingredientInputs[i].value);
    }
  }
  
  // return new recipe values
  var recipe = {name, description, ingredients}
  
  // create recipe template
  var recipeTemplate = document.getElementById("recipe-template") .innerHTML;
  
  var template = Handlebars.compile(recipeTemplate);
  
  // display recipe template
  document.getElementsByTagName("main")[0].innerHTML = template(recipe);
}

function updateRecipe() {
  // get recipe name
  var name = document.getElementById("name").value;
  
  // get recipe description
  var description = document.getElementById("description").value;
  
  // get recipe ingredients
  var ingredients = [];
  var ingredientInputs = document.getElementsByName("ingredients");
  
  for (var i = 0; i<ingredientInputs.length; i++ ) {
    if(ingredientInputs[i].value !== "") {
      ingredients.push(ingredientInputs[i].value);
    }
  }
  
  var recipe = {name, description, ingredients}
  
  // create recipe template
  var recipeTemplate = document.getElementById("recipe-template") .innerHTML;
  
  var template = Handlebars.compile(recipeTemplate);
  
  // display recipe template
  document.getElementsByTagName("main")[0].innerHTML = template(recipe);
}


// registrations
function handlebarsRegistration () {
  // partials
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
    
  // helpers
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
}


//DOM load
function init() {
  handlebarsRegistration();
  displayNewForm();
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
