

function showForm() {
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})

}
function displayEditForm() {
  var name = document.getElementById("nameHeader").innerText
  var description = document.getElementById("recipeDescription").innerText
  var ingredientsNodes = document.getElementsByName("ingredientsList")
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  }

 var recipe = {name, description, ingredients, submitAction: 'createRecipe()'}

  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(recipeFormTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}
function updateRecipe() {
  var recipeForm = document.getElementById("recipe-template").innerHTML;
  var template = Handlebars.compile(recipeForm);
  var recipe = getIngredients();
  document.getElementById('main').innerHTML = template(recipe)
}

function createRecipe() {
  var recipeForm = document.getElementById("recipe-template").innerHTML;
  var template = Handlebars.compile(recipeForm);
  var recipe = getIngredients();
  document.getElementById('main').innerHTML = template(recipe)
}

function getIngredients() {
  var ingredient = document.getElementsByName("ingredients")
  var ingredients = [];
  for(var i = 0; i < ingredient.length; i++) {
    if(ingredient[i].value !== "") {
      ingredients.push(ingredient[i].value);
    }
  }
  var name = document.getElementById("name")
  var description = document.getElementById("description")
  var recipe = {name, ingredients, description};
  return(recipe);
}
function handlebarFunctions() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>');
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);


}
function init() {
    //put any page initialization/handlebars initialization here
    handlebarFunctions();
    showForm();
}


document.addEventListener("DOMContentLoaded", function(event) {
    init()
})
