function createRecipe() {
  var ingredients = document.getElementsByName("ingredients").value;
  var description = document.getElementById("description").value;
  var name = document.getElementById("name").value;
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var html = template(ingredients);
  document.getElementsByTagName("main")[0].innerHTML += html;
}

function updateRecipe() {
  var ingredients = document.getElementsByName("ingredients").value;
  var description = document.getElementById("description").value;
  var name = document.getElementById("name").value;
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var html = template(ingredients);
  document.getElementsByTagName("main")[0].innerHTML += html;
}

function displayEditForm() {
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML += template;
}

function init() {
  //put any page initialization/handlebars initialization here

  var recipe = {
  description: 'yummy chicken noodle soup',
  ingredients: [
    {quantity: "1 cup", name: 'chicken'},
    {quantity: "3 nanoliters", name: 'stock'},
    {quantity: "12", name: 'noodles'}
  ]
}

  Handlebars.registerHelper('displayIngredient', function() {
    if(this.name === "ingredients") {
      return new Handlebars.SafeString(this.name)
    }
  });

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);

  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-template').innerHTML);

}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})