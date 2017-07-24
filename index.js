function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);

  Handlebars.registerPartial('recipeFormPartial',
  document.getElementById('recipe-form-partial').innerHTML);

  Handlebars.registerHelper('displayIngredient', function() {
    if (this.value) {
      return new Handlebars.SafeString("<li>" + this.value + "</li>")
    }
  });

  var template = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  // var result = template();
  var main = document.getElementById('main');
  main.innerHTML += template();
};

document.addEventListener("DOMContentLoaded", function(event) {
  init()
});

function createRecipe() {
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var result = template({
    'name': document.getElementById('name').value,
    'description': document.getElementsByName('description')[0].value,
    'ingredients': document.getElementsByName('ingredients')
  })
  document.getElementById('main').innerHTML = result;
}

function displayEditForm(name) {
  var recipe = {
    name: document.querySelectorAll(".recipeDetails h2")[0].innerHTML,
    description: document.querySelectorAll(".recipeDetails p")[0].innerHTML,
    ingredients: document.querySelectorAll(".recipeDetails ul")[0].querySelectorAll("li")
  };
  var template = Handlebars.compile(document.getElementById('recipe-form-partial').innerHTML);
  var results = template(recipe);
  document.querySelector(".recipeDetails").innerHTML = results;
}

function updateRecipe() {
  
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var result = template({
    'name': document.getElementById('name').value,
    'description': document.getElementsByName('description')[0].value,
    'ingredients': document.getElementsByName('ingredients')
  });
  document.querySelector("#main").innerHTML = result;
}
