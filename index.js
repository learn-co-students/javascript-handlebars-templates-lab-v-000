function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);

  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML);

  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString(this)
  });
  //put any page initialization/handlebars initialization here
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
    var recipeTemplate = Handlebars.compile(document.getElementById('recipe-template').innerHTML);

    var recipe = {};
    recipe['name'] = document.getElementById('name').value;
    recipe['description'] = document.getElementById('description').value;
    recipe['ingredients'] = [];
    var ingredients = document.getElementsByName('ingredients');
    debugger
    for (var i = 0; i < ingredients.length; i++) {
      if (ingredients[i].value) {
        recipe['ingredients'].push(ingredients[i].value);
      }
    }

    var result = recipeTemplate(recipe);
    document.getElementsByTagName("main")[0].innerHTML += result;
}

function displayEditForm() {
  var result = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML += result;
}

function updateRecipe() {
  var result = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML += result;
}
