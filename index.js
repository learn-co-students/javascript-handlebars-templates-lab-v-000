function init() {
  //put any page initialization/handlebars initialization here

  Handlebars.registerHelper('displayIngredient', function() {
      return new
          Handlebars.SafeString(this)
  })


  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)


  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form").innerHTML)
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
    var source = document.getElementById("recipe-template").innerHTML;
    var template = Handlebars.compile(source);
    var nm = document.getElementById("name").value;
    var desc = document.getElementById("recipeDescription").value;
    var ingredients = document.getElementsByName("ingredients");
    var ingLen = ingredients.length;
    var ingredientsValues = [];
    for (var i = 0; i < ingLen; i++) {
        ingredientsValues.push(ingredients[i].value)
        };

    var html = template({name:nm, description:desc, ingredients:ingredientsValues});
    document.getElementById("submitted_recipes").innerHTML += html

}


function displayEditForm() {
    var currentValues = document.getElementById("filledRecipe");
    var form = document.getElementById("recipe-form-template").innerHTML;
    var template = Handlebars.compile(form);
    var nm = currentValues.querySelector("#recipeName").innerHTML;
    var desc = currentValues.querySelector("#recipeDescription").innerHTML;
    var ingredients = currentValues.querySelectorAll("li[name='recipeIngredients']");
    var ingLen = ingredients.length;
    var ingredientsValues = [];
    for (var i = 0; i < ingLen; i++) {
        ingredientsValues.push(ingredients[i].innerHTML)
    };
    var html = template({name:nm, description:desc, ingredients:ingredientsValues});
    currentValues.innerHTML = html;
}

function updateRecipe() {
    var currentValues = document.getElementById("filledRecipe");
    var source = document.getElementById("recipe-template").innerHTML;
    var template = Handlebars.compile(source);
    var nm = currentValues.querySelector("#name").innerHTML;
    var desc = currentValues.querySelector("#recipeDescription").innerHTML;
    var ingredients = currentValues.querySelectorAll("li[name='ingredients']");
    var ingLen = ingredients.length;
    var ingredientsValues = [];
    for (var i = 0; i < ingLen; i++) {
        ingredientsValues.push(ingredients[i].innerHTML)
    };
    var html = template({name:nm, description:desc, ingredients:ingredientsValues});
    currentValues.innerHTML = html
};
