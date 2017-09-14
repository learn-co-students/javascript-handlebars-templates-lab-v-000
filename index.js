function init() {
  var recipe = {
  name: "",
  description: "",
  ingredients: {
    ingredient1: "",
    ingredient2: "",
    ingredient3: "",
    ingredient4: "",
    ingredient5: ""
    }  
  }
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var result = template(recipe);
  document.getElementById("main").innerHTML+= result;
}

function createRecipe(){
  var recipe = {
  name: document.getElementById("name").value,
  description: document.getElementById("description").value,
  ingredients: {
    ingredient1: document.getElementsByName("ingredient")[0].value,
    ingredient2: document.getElementsByName("ingredient")[1].value,
    ingredient3: document.getElementsByName("ingredient")[2].value,
    ingredient4: document.getElementsByName("ingredient")[3].value,
    ingredient5: document.getElementsByName("ingredient")[4].value
    }  
  }
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var result = template(recipe);
  document.getElementById("main").innerHTML = result;
}
        
function displayEditForm() {
  var recipe = {
  name: document.getElementById("name").innerHTML,
  description: document.getElementById("description").innerHTML,
  ingredients: {
    ingredient1: document.getElementsByName("ingredient")[0].innerHTML,
    ingredient2: document.getElementsByName("ingredient")[1].innerHTML,
    ingredient3: document.getElementsByName("ingredient")[2].innerHTML,
    ingredient4: document.getElementsByName("ingredient")[3].innerHTML,
    ingredient5: document.getElementsByName("ingredient")[4].innerHTML
    }  
  }
  debugger
    var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var result = template(recipe);
  document.getElementById("main").innerHTML = result;

}

Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

Handlebars.registerHelper('displayIngredient', function() {return new Handlebars.SafeString(this)})

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
