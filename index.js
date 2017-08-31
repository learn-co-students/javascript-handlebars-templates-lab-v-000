function init() {
  //put any page initialization/handlebars initialization here
  function createRecipe() {
      var recipe = {
          name: document.getElementById("recipeName").value,
          description: document.getElementById("recipeDescription").value,
          ingredients: document.getElementsByName("recipeIngredient").value
      }
      var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
      var result = template(recipe);
      document.getElementsByTagName("main")[0].innerHTML += result;
  }


  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-partial-template").innerHTML)
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
