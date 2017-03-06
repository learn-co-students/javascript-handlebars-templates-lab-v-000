function init() {
  //put any page initialization/handlebars initialization here

  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString("<li>" + this.value + "</li>")
  });

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);

  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);

  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

  var recipe = {
    name: "",
    description: "",
    ingredients: ["", "", "", "", ""]
  };

  var result = formTemplate(recipe);
  document.getElementsByTagName("main")[0].innerHTML += result;
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe(){
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var ingredients = document.getElementsByName("ingredients");
  var recipe = {
    "name": name,
    "description": description,
    "ingredients": ingredients
  };

  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);

  var html = template(recipe);

  document.getElementsByTagName("main")[0].innerHTML = html;
}

function displayEditForm() {
  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

  var name = document.getElementById("recipeName").innerHTML;
  var description = document.getElementById("recipeDescription").innerHTML;
  var ingredientTags = document.getElementsByTagName("li");

  var ingredients = [];
  for(var i = 0; i < ingredientTags.length; i++) {
    ingredients.push(ingredientTags[i].innerHTML);
  }

  var recipe = {
    'name': name,
    'description': description,
    'ingredients': ingredients
  };

  var result = formTemplate(recipe);

  document.getElementsByTagName("main")[0].innerHTML = result;
}

function updateRecipe() {
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var ingredients = document.getElementsByName("ingredients");
  var recipe = {
    "name": name,
    "description": description,
    "ingredients": ingredients
  };

  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);

  var html = template(recipe);

  document.getElementsByTagName("main")[0].innerHTML = html;
}
