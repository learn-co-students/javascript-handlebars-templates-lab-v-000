function createRecipe() {
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;

  
}

function init() {
  //put any page initialization/handlebars initialization here
  var recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var rfTemplate = recipeFormTemplate();
  document.getElementById("main").innerHTML += rfTemplate;
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
