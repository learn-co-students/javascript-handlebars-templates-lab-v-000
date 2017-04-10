function init() {
  // display the recipe-form-template on loading
  displayRecipeForm()
  // create the handlebars partial
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)

  //create a custom helper to display each ingredient within the partial
  Handlebars.registerHelper('displayIngredient', function(){
    return new Handlebars.SafeString(this)
  })
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


var recipe = {};

function createRecipe(){
  // var recipe = {};

  // recipe.name = recipeName
  //   recipe.description = recipeDescription
  //   recipe.ingredients = recipeIngredients
  // var recipe = {
  //   name: "ivan"
  // }

    updateRecipeObject()

    var templateMain = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
    var html = templateMain(recipe);

    //display html on the DOM
    document.getElementsByTagName("main")[0].innerHTML += html

    //hide the current formTemplate
    document.getElementById('recipe-form').remove()
}

function displayEditForm(){

  displayRecipeFormWithRecipeObjectContent()
  updateRecipeObject()
  var templateMain = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var html = templateMain(recipe);

  //display html on the DOM
  document.getElementsByTagName("main")[0].innerHTML += html

}

function displayRecipeForm(){
  var recipeFormTemplate = document.getElementById('recipe-form-template').innerHTML;
  document.getElementsByTagName('main')[0].innerHTML += recipeFormTemplate;
}

function updateRecipeObject(){
  recipe.name = document.getElementsByName('name')[0].value;
  recipe.description = document.getElementsByName('description')[0].value;
  recipe.ingredients = [];
  document.getElementsByName("ingredients").forEach(element => {
    recipe.ingredients.push(element.value)
  });
}

function displayRecipeFormWithRecipeObjectContent(){
  //show the recipe form template
  displayRecipeForm()

  //fills the form with current value held by the recipe object
  document.getElementsByName('name')[0].value = recipe.name
  document.getElementsByName('description')[0].value = recipe.description
  var ingredients = document.getElementsByName("ingredients")
  for (let i = 0, l = ingredients.length; i < l; i++){
    ingredients[i].value = recipe.ingredients[i]
  }
}
