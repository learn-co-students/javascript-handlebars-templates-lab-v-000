function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML);
  Handlebars.registerHelper('displayIngredient', function(){
    return new Handlebars.SafeString(this)
  });
  displayRecipeForm();
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

var recipe = {
  name: "",
  description: "",
  ingredients: ["", "", "", "", ""]
};

function createRecipe(){
    updateRecipeObject();
    updateRecipe();
    document.getElementById('recipe-form').remove();
}

function displayEditForm(){
  // displayRecipeForm();
  displayRecipeFormWithRecipeObjectContent();
  updateRecipeObject();
  updateRecipe();
  // var templateMain = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  // var html = templateMain(recipe);
  // document.getElementsByTagName("main")[0].innerHTML += html
  // document.getElementById('recipe').remove();

  document.getElementById('recipe-form').remove();
}

function displayRecipeForm(){
  var recipeFormTemplate = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  var recipeFormHtml = recipeFormTemplate(recipe);
  document.getElementsByTagName('main')[0].innerHTML += recipeFormHtml;
}

function updateRecipeObject(){
  recipe.name = document.getElementsByName('name')[0].value;
  recipe.description = document.getElementsByName('description')[0].value;
  var ingredients = document.getElementsByName("ingredients")
  for (let i = 0, l = ingredients.length; i < l; i++){
    recipe.ingredients[i] = ingredients[i].value
  }
}

function updateRecipe(){
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var recipeTemplateHtml = recipeTemplate(recipe);
  document.getElementsByTagName("main")[0].innerHTML += recipeTemplateHtml
}

function displayRecipeFormWithRecipeObjectContent(){
  displayRecipeForm()

  document.getElementsByName('name')[0].value = recipe.name
  document.getElementsByName('description')[0].value = recipe.description
  var ingredients = document.getElementsByName("ingredients")
  for (let i = 0, l = ingredients.length; i < l; i++){
    ingredients[i].value = recipe.ingredients[i]
  }
}

// function initializeRecipeObject(){
//   recipe.name = document.getElementsByName('name')[0].value;
//   recipe.description = document.getElementsByName('description')[0].value;
//   recipe.ingredients = [];
//   document.getElementsByName("ingredients").forEach(ingredient => {
//     recipe.ingredients.push(ingredient.value)
//   });
// }
