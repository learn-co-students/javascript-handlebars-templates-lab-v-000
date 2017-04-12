function init() {
  var template = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  var result = template();
  var main = document.getElementById('main');
  main.innerHTML += result;
};

document.addEventListener("DOMContentLoaded", function(event) {
  init()
});

Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);

Handlebars.registerHelper('displayIngredient', function() {
    if (this.value) {
      return new Handlebars.SafeString("<li>" + this.value + "</li>")
    }
});

function createRecipe() {
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var result = template({
    'name': document.getElementById('name').value,
    'description': document.getElementsByName('description')[0].value,
    'ingredients': document.getElementsByName('ingredients')
  })
  document.getElementById('main').innerHTML += result;
}
