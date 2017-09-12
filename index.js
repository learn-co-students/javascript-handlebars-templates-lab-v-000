function createRecipe() {
  var recipe = {
    name: document.getElementById("name").value,
  }
  recipe["ingredients"] = []
  for (var i=0; i<10; i+=2) {
    var nameField = document.getElementsByName("ingredients")[i].value
    var quantityField = document.getElementsByName("ingredients")[i+1].value
    recipe.ingredients[i] = {'description': nameField, 'quantity': quantityField}
  }
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var html = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML = html;
}

function updateRecipe() {
  var recipe = {
    name: document.getElementById("name").value,
  }
  recipe["ingredients"] = []
  for (var i=0; i<10; i+=2) {
    var nameField = document.getElementsByName("ingredients")[i].value
    var quantityField = document.getElementsByName("ingredients")[i+1].value
    recipe.ingredients[i] = {'description': nameField, 'quantity': quantityField}
  }
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var html = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML = html;
}

function displayEditForm(recipe) {
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var onSubmitValue = "updateRecipe();return true;"
  var html = template(recipe, onSubmitValue);
  document.getElementsByTagName("main")[0].innerHTML = html;
}

function init() {
  Handlebars.registerHelper('for', function(from, to, incr, block) {
      var accum = '';
      for(var i = from; i < to; i += incr)
          accum += block.fn(i);
      return accum;
  });

  Handlebars.registerHelper('displayIngredient', function() {
      return new Handlebars.SafeString(this.quantity + " " + this.description)
  })

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  function renderMain() {
    var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
    var recipeFormPartial = template(recipe);
  }

  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-template").innerHTML);


  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var onSubmitValue = "createRecipe();return false;"
  var html = template(onSubmitValue);
  document.getElementsByTagName("main")[0].innerHTML = html;
  //put any page initialization/handlebars initialization here
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
