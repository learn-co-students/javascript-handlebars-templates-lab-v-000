function init() {
    renderForm();
    Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);
    Handlebars.registerHelper('displayIngredient', function(ingredient){
//        debugger
        return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
    });
}
document.addEventListener("DOMContentLoaded", function(event) {
    init()
})

function renderForm() { 
    const form_template = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML)
    document.getElementById('main').innerHTML += form_template();
}



function createRecipe(){
    
    const name = document.getElementsByName('name')[0].value;
    const description = document.getElementsByName('description')[0].value
    let ingredient_list = document.getElementsByName('ingredients')
    ingredient_list = Array.prototype.slice.call(ingredient_list)
    
    const ingredients = []
          ingredient_list.forEach(function(ingredient){
        ingredients.push(ingredient.value)
    })
    var recipe = {name, ingredients, description}
    
    const recipe_template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);

    document.getElementById('recipe-view').innerHTML = recipe_template(recipe);
    
}

function displayEditForm(){}