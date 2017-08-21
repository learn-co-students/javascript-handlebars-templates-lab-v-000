function init() {
  //put any page initialization/handlebars initialization here
  handlebarsRegistrations()
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML = recipeTemplate({'submitAction': 'createRecipe()'})
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
    var recipe = getRecipe()
    var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
    document.getElementById("main").innerHTML += recipeTemplate(recipe)
}

function getRecipe() {
    var ingredientsNodes = document.getElementsByName("ingredients");
    var ingredients = []
    for(var i=0; i<ingredientsNodes.length;i++) {
        if(ingredientsNodes[i].value !== "") {
            ingredients.push(ingredientsNodes[i].value)
        }
    }
    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    var recipe = {name, ingredients, description};

    return recipe;
}

function displayEditForm() {
    var name = document.getElementById("nameHeader").innerText;
    var description = document.getElementById("recipeDescription").innerText;
    var ingredientsNodes = document.getElementsByName("ingredientsList");
    var ingredients = [];
    for(var i=0; i<ingredientsNodes.length; i++) {
        ingredients.push(ingredientsNodes[i].innerText)
    }

    var recipe = {name, description, ingredients, submitAction: 'createRecipe()'}
    var recipeFormTemplate = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
    document.getElementById("main").innerHTML = recipeFormTemplate(recipe)
}

function updateRecipe() {
    var recipe = getRecipe()
    var recipeTemplate = document.getElementById("recipe-template").innerHTML
    var template = Handlebars.compile(recipeTemplate)
    document.getElementById("main").innerHTML = template(recipe)
}


function handlebarsRegistrations() {
    Handlebars.registerHelper('displayIngredient', function(ingredient) {
        return new Handlebars.SafeString('<li name="ingredientsList>' + ingredient + '</li')
    })
    Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)
    Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML)
}
