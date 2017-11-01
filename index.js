function init() {
  //addRecipeForm();
  renderForm();

}

const main = document.getElementById("main");

// function addRecipeForm() {
//   var recipe = getRecipeValues();
//   var recipeTemplate = document.getElementById("recipe-form-template").innerHTML;
//   var template = Handlebars.compile(recipeTemplate);
//   document.getElementById("main").innerHTML = template(recipe);

// }

function getRecipeValues() {
  var name = document.getElementById("recipe-name").value;
  var description = document.getElementById("description").value;
  var allIngredients = document.getElementsByName("ingredient");
  var ingredients = [];
  for (var i=0; i < allIngredients.length; i++) {
    if (allIngredients[i].value !== "") ingredients.push(allIngredients[i].value);  
  }
  var recipe = {name, description, ingredients};
  return recipe;
}

// var source   = document.getElementById("recipe-form-template").value;

// var template = Handlebars.compile(source);
// var context = {name: "My New Post", description: "This is my first post!"};
// var html    = template(context);

function renderForm() {
  var source = document.getElementById("recipe-form-template").innerHTML;
  var template = Handlebars.compile(source);
  var html    = template(context); 
  main.innerHTML += html;
}

function createRecipe() {
  var source = document.getElementById("recipe-template").innerHTML;
  var recipe = getRecipeValues();
  var context = {name: recipe.name }
  var template = Handlebars.compile(source);
  var html = template(context);
  var partial
  main.innerHTML += html;
}

var partial = Handlebars.registerPartial('recipe-details-partial', '{{description}}')



// Handlebars.registerPartial('userMessage',
//     '<{{tagName}}>By {{author.firstName}} {{author.lastName}}</{{tagName}}>'
//     + '<div class="body">{{body}}</div>');
// var context = {
//   author: {firstName: "Alan", lastName: "Johnson"},
//   body: "I Love Handlebars",
//   comments: [{
//     author: {firstName: "Yehuda", lastName: "Katz"},
//     body: "Me too!"
//   }]
// };






document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
