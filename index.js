function init() {
  //register partials
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);

  //put any page initialization/handlebars initialization here
  //setup recipe form
  var template =Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'});
  //registerHelper
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>')
  })


}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


function createRecipe() {

  // get template for recipe
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var recipe = getRecipe();
  document.getElementById("main").innerHTML =template(recipe);
}

function updateRecipe() {
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var recipe = getRecipe();
  document.getElementById("main").innerHTML =template(recipe);
}

function displayEditForm() {
  var ingredientsVals = document.getElementsByName("ingredients");
  var ingredients = [];
  for(var i=0;i<ingredientsVals.length;i++) {
      ingredients.push(ingredientsVals[i].innerText);
  }
  var name = document.getElementById("name").innerText;
  var description = document.getElementById("description").innerText;

  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'};
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML
);
  document.getElementById("main").innerHTML = template(recipe)

}

function getRecipe(){
  //get inputs for receipes
  var ingredientsVals = document.getElementsByName("ingredients");
  var ingredients = [];
  for(var i=0;i<ingredientsVals.length;i++) {
    if(ingredientsVals[i].value !== "") {
      ingredients.push(ingredientsVals[i].value);
    }
  }
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  return {name, ingredients, description};

}
