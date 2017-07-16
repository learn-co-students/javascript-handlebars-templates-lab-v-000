var data = null;

function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-template').innerHTML);
  Handlebars.registerHelper('displayIngredient', (item)=>{
    console.log(item);
    return new Handlebars.SafeString('<li>'+item.name+'</li>');
  });
  document.getElementById('main').innerHTML = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML)({name: '', description: '', ingredients: ['','','','','']});
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe(){
  data = {
    name: document.getElementById('name').value,
    description: document.getElementById('description').value,
  };
  data.ingredients = [];
  var is = document.getElementsByName('ingredients');
  for(var i = 0; i < is.length; i++){
    data.ingredients.push({name:is[i].value});
  }
  document.getElementById('main').innerHTML = Handlebars.compile(document.getElementById('recipe-template').innerHTML)(data);
}

function displayEditForm(){
  document.getElementById('main').innerHTML = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML)(data);
}

function updateRecipe(){
  createRecipe();
}
