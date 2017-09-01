function init() {
  //put any page initialization/handlebars initialization here

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
  startPage();

  Handlebars.registerHelper('displayIngredient', function() {
    return this;
  });
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function startPage() {
  var pageTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML = pageTemplate({'createRecipe':'createRecipe()'});
}

function createRecipe() {
    var recipe = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        ingredients: document.getElementsByName("ingredients")
    }
    // debugger;
    var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
    var result = template(recipe);
    document.getElementsByTagName("main")[0].innerHTML += result;
}

function displayEditForm() {
  var pageTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML = pageTemplate({'updateRecipe':'updateRecipe()'});
}

function updateRecipe() {
  createRecipe();
}
