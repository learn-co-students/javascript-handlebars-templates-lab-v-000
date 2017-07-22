function init() {
    
    Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);
    Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML);
    Handlebars.registerHelper('displayIngredient', function(ingredient){
        return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>')
    });
    renderForm();
}
document.addEventListener("DOMContentLoaded", function(event) {
    init();
    
})

function renderForm() { 
    const form_template = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML)
    const name = '';
    const description = '';
    const ingredients = ['','','','','']
    var recipe = {name, ingredients, description, submitAction: 'createRecipe()'}
    document.getElementById('main').innerHTML = form_template({name,description,ingredients});
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
    var recipe = {name, ingredients, description, submitAction: 'createRecipe()'}    
    const recipe_template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);

    document.getElementById('main').innerHTML = recipe_template(recipe);

}

function updateRecipe(){
    const name = document.getElementsByName('name')[0].value;
    const description = document.getElementsByName('description')[0].value
    let ingredient_list = document.getElementsByName('ingredients')
    ingredient_list = Array.prototype.slice.call(ingredient_list)
    
    const ingredients = []
    ingredient_list.forEach(function(ingredient){
        ingredients.push(ingredient.value)
    })
    var recipe = {name, ingredients, description, submitAction: 'createRecipe()'}    
    const recipe_template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);

    document.getElementById('main').innerHTML = recipe_template(recipe);

}

function displayEditForm(recipe){
    const name = document.getElementsByName('name')[0].innerHTML;
    const description = document.getElementsByName('description')[0].innerHTML;
    let ingredient_list = document.getElementsByName('ingredients')
    ingredient_list = Array.prototype.slice.call(ingredient_list)
    
    const ingredients = []
    ingredient_list.forEach(function(ingredient){
        ingredients.push(ingredient.innerText)
    })
    var recipe = {name, ingredients, description, submitAction: 'updateRecipe()'}    
    const form_template = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML)

    document.getElementById('main').innerHTML = form_template(recipe);

}

