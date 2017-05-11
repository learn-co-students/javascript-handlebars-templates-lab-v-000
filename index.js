function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)
  Handlebars.registerHelper('displayIngredient', function () {
    return new Handlebars.safeString("test")
  })
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function recipeFormTemplate() {
  var main = document.getElementsByTagName('main')[0]
  main.innerHTML += document.getElementById('recipe-form-template').innerHTML
}

function createRecipe() {
 var ingredients = document.getElementsByName("ingredients")
 var name = document.getElementById('name')
 var description = document.getElementById('description')

 var template = Handlebars.compile(document.getElementById('recipe-template').innerHTML)
 var html = template({'ingredients': ingredients, 'description': description, 'name': name})
}
