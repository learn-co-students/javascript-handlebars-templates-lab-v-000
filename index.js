function init() {
    renderForm();
    Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial'));
    Handlebars.registerHelper('displayIngredient', displayIngredient());
}
document.addEventListener("DOMContentLoaded", function(event) {
    init()
})

function renderForm() { 
    const form_template = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML)
    document.getElementById('main').innerHTML += form_template();
}

function displayIngredient() {
    alert(this)
}

function createRecipe(){
    
    const name = document.getElementsByName('name')[0].value
    const description = document.getElementsByName('description')[0].value
    let ingredient_list = document.getElementsByName('ingredients')
    ingredient_list = Array.prototype.slice.call(ingredient_list)
    
    const ingredients = []
          ingredient_list.forEach(function(ingredient){
        ingredients.push({name:ingredient.value})
    })
    debugger
    const recipe_template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
    document.getElementById('main').innerHTML += recipe_template({name:name, description:description, ingredients:ingredients});

}