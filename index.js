function init() {
   // var formTemplate = document.getElementById("recipe-form-template").innerHTML
   // var template = Handlebars.compile(formTemplate)
   // document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
 }

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

// var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
// var html = template(recipe);
// document.getElementsByTagName("main")[0].innerHTML += html;
// }

function createRecipe() {
    var recipe = getRecipeVals()
    var recipeTemplate = document.getElementById("recipe-template").innerHTML
    var template = Handlebars.compile(recipeTemplate)
    document.getElementById("main").innerHTML = template(recipe)
}
