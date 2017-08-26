function init() {
  //put any page initialization/handlebars initialization here
  
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-template").innerHTML)
  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  Handlebars.registerHelper("displayIngredient", function(ingredient){
     return new Handlebars.SafeString(ingredient);
  })
  var result = formTemplate();
  document.getElementsByTagName("main")[0].innerHTML += result;
}
document.addEventListener("DOMContentLoaded", function(event) {
  init();
})


function createRecipe(){
   var name = document.getElementById("name").value;
   var description = document.getElementById('recipeDescription').value;;
   var ingredientsArray = document.getElementsByName("ingredients");
   var recipeTemplate = document.getElementById("recipe-template").innerHTML;
   var ingredients = []
    for(var i=0;i<ingredientsArray.length;i++) {
    ingredients.push(ingredientsArray[i].value)
   }
   var recipeDets = {name, description, ingredients}
   var template = Handlebars.compile(recipeTemplate)
   var recipeHTML = template(recipeDets);
   document.getElementById('main').innerHTML = recipeHTML;
}

function updateRecipe(){
  var name = document.getElementById("name").value;
   var description = document.getElementById('recipeDescription').value;;
   var ingredientsArray = document.getElementsByName("ingredients");
   var recipeTemplate = document.getElementById("recipe-template").innerHTML;
   var ingredients = []
    for(var i=0;i<ingredientsArray.length;i++) {
    ingredients.push(ingredientsArray[i].value)
   }
   var recipeDets = {name, description, ingredients}
   var template = Handlebars.compile(recipeTemplate)
   var recipeHTML = template(recipeDets);
   document.getElementById('main').innerHTML = recipeHTML;
}

function displayEditForm(){
  var form = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var result = form();
  document.getElementsByTagName("main").innerHTML += result;
}