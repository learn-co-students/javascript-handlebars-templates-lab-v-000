document.addEventListener("DOMContentLoaded", function(event) {
    init() //calls the init function when the page loads
})

function init() {
    Handlebars.registerHelper('displayIngredient', function(ingredient){})//helper function for display ingredients
    Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)//registers parital
    Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)//registers parital

    recipe() //calls recipe function
}

function displayEditForm() {
    var name = document.getElementById("nameHeader").innerText
    var description = document.getElementById("recipeDescription").innerText
    var ingredients = document.getElementsByName("ingredientsList")
    
    var ingredientsArray = []
    
    Array.from(ingredients).forEach((ingredient) => {
        if(ingredient.value !== " ") {
            ingredientsArray.push(ingredient.value)
        }
    })

    var recipe = {name, description, ingredients, submitAction: 'createRecipe()'}
    var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
    var template = Handlebars.compile(recipeFormTemplate)
    document.getElementById("main").innerHTML += template(recipe)
}

function getRecipe() {
    var ingredients = document.getElementsByName("ingredients")
    var ingredientsArray = []
    Array.from(ingredients).forEach((ingredient) => {
        if(ingredient.value !== " ") {
            ingredientsArray.push(ingredient.value)
        }
    })

    var name = document.getElementById("name").value
    var description = document.getElementById("description").value
    var recipe = {name, ingredients, description}
    return(recipe)
}

function recipe() {
    var recipe = {'submitAction': 'createRecipe()'}
    var form = document.getElementById("recipe-form-template").innerHTML
    var template = Handlebars.compile(form)
    document.getElementsByTagName("main")[0].innerHTML += template(recipe)
}

function createRecipe() {
    var recipe = getRecipe()
    var recipeTemplate = document.getElementById("recipe-template").innerHTML
    var template = Handlebars.compile(recipeTemplate)
    document.getElementById("main").innerHTML += template(recipe)
}

function updateRecipe() {
    var recipe = getRecipe()
    var recipeTemplate = document.getElementById("recipe-template").innerHTML
    var template = Handlebars.compile(recipeTemplate)
    document.getElementById("main").innerHTML += template(recipe)
}
