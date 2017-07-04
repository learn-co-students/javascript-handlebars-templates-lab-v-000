function init() {
  //put any page initialization/handlebars initialization here
  var recipe = {
    name: 'Gordon Ramsey',
    description: 'yummy chicken noodle soup',
    ingredients: [
      {quantity: "1 cup", ingredient: 'chicken'},
      {quantity: "3 nanoliters", ingredient: 'stock'},
      {quantity: "12", ingredient: 'noodles'}
    ]
  }

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
  var html = formTemplate({});
  document.getElementsByTagName("main")[0].innerHTML += html;
}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function displayEditForm() {
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var html = template();
  document.getElementById("recipe-form").innerHTML = html;
}

function createRecipe() {
  var context = {
    name: document.getElementById("name").value,
    description: document.getElementsByName("description")[0].value,
    ingredients: [
      {quantity: "1", ingredientName: document.getElementsByName("ingredients")[0].value},
      {quantity: "1", ingredientName: document.getElementsByName("ingredients")[1].value},
      {quantity: "1", ingredientName: document.getElementsByName("ingredients")[2].value},
      {quantity: "1", ingredientName: document.getElementsByName("ingredients")[3].value},
      {quantity: "1", ingredientName: document.getElementsByName("ingredients")[4].value}
    ]
  }
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var html = template(context);
  document.getElementById("main").innerHTML += html;
}


function updateRecipe() {

    var context = {
      name: document.getElementById("name").value,
      description: document.getElementsByName("description")[0].value,
      ingredients: [
        {quantity: "1", ingredientName: document.getElementsByName("ingredients")[0].value},
        {quantity: "1", ingredientName: document.getElementsByName("ingredients")[1].value},
        {quantity: "1", ingredientName: document.getElementsByName("ingredients")[2].value},
        {quantity: "1", ingredientName: document.getElementsByName("ingredients")[3].value},
        {quantity: "1", ingredientName: document.getElementsByName("ingredients")[4].value}
      ]
    }
    var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
    var html = template(context);
    document.getElementById("main").innerHTML += html;
}
