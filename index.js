var recipes = {};
var idCounter = 0;
function init() {
  //put any page initialization/handlebars initialization here
  var recipe = {
    name: 'Gordon Ramsey',
    description: 'yummy chicken noodle soup',
    ingredients: [
      {quantity: "1 cup", ingredientName: 'chicken'},
      {quantity: "3 nanoliters", ingredientName: 'stock'},
      {quantity: "12", ingredientName: 'noodles'},
      {quantity: "12", ingredientName: 'noodles'},
      {quantity: "12", ingredientName: 'noodles'}
    ],
    id: idCounter
  }
  idCounter += 1;

  Handlebars.registerPartial(
    'recipeDetailsPartial',
    document.getElementById("recipe-details-partial").innerHTML
  );

  Handlebars.registerPartial(
    'recipeFormPartial',
    document.getElementById("recipe-form-partial").innerHTML
  );

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return ingredient.quantity + " " + ingredient.ingredientName;
  });

  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var html = formTemplate(recipe);
  document.getElementsByTagName("main")[0].innerHTML += html;
}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function displayEditForm(id) {
  console.log(recipes[id]);
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var html = template(recipes[id]);
  document.getElementById("recipe-form").innerHTML = html;
}

function createRecipe() {
  var recipe = {
    name: document.getElementById("name").value,
    description: document.getElementsByName("description")[0].value,
    ingredients: [
      {quantity: "1", ingredientName: document.getElementsByName("ingredients")[0].value},
      {quantity: "1", ingredientName: document.getElementsByName("ingredients")[1].value},
      {quantity: "1", ingredientName: document.getElementsByName("ingredients")[2].value},
      {quantity: "1", ingredientName: document.getElementsByName("ingredients")[3].value},
      {quantity: "1", ingredientName: document.getElementsByName("ingredients")[4].value}
    ],
    id: idCounter
  }
  recipes[idCounter] = recipe;
  idCounter += 1;
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var html = template(recipe);
  document.getElementById("main").innerHTML += html;
}


function updateRecipe(id) {
    var recipe = {
      name: document.getElementById("name").value,
      description: document.getElementsByName("description")[0].value,
      ingredients: [
        {quantity: "1", ingredientName: document.getElementsByName("ingredients")[0].value},
        {quantity: "1", ingredientName: document.getElementsByName("ingredients")[1].value},
        {quantity: "1", ingredientName: document.getElementsByName("ingredients")[2].value},
        {quantity: "1", ingredientName: document.getElementsByName("ingredients")[3].value},
        {quantity: "1", ingredientName: document.getElementsByName("ingredients")[4].value}
      ],
      id: id
    }
    recipes[id] = recipe;
    var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
    var html = template(recipe);
    if (id) {
      document.getElementById("recipe-" + id).innerHTML = html;
    }
}
