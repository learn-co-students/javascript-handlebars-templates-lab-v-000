function init() {
  
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerHelper('displayIngredient', function() {return new Handlebars.SafeString(this)})
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
  
  var recipe = {
   name: "",
   description: "",
   submit: "createRecipe();",
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
  document.getElementById("main").innerHTML = result;
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
  
  
})

function createRecipe() {
  var recipe = {
   name: document.getElementById("name").value,
   description: document.getElementById("description").value,
   ingredients: {
     ingredient1: document.getElementsByName("ingredients")[0].value,
     ingredient2: document.getElementsByName("ingredients")[1].value,
     ingredient3: document.getElementsByName("ingredients")[2].value,
     ingredient4: document.getElementsByName("ingredients")[3].value,
     ingredient5: document.getElementsByName("ingredients")[4].value
     }  
   }
   var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById("main").innerHTML = template(recipe)
}


function recipes() {
 //var ingredients = {'ingredients1': "", 'ingredients2': "", 'ingredients3': "", 'ingredients4': "", 'ingredients5': "", 'ingredients6': "",}
   var recipe = {
   ingredients:  {ingredient1: document.getElementsByName("ingredients")[0].value,
                  ingredient2: document.getElementsByName("ingredients")[1].value,
                  ingredient3: document.getElementsByName("ingredients")[2].value,
                  ingredient4: document.getElementsByName("ingredients")[3].value,
                  ingredient5: document.getElementsByName("ingredients")[4].value,
                  ingredient6: document.getElementsByName("ingredients")[5].value},
  
   name: document.getElementById('recipeName').value,
   description: document.getElementById('recipeDescription').value}
   //recipe = {name, description, ingredients}
  //return recipe
}

function displayEditForm() {
   var recipe = {
   name: document.getElementById("name").innerHTML,
   description: document.getElementById("description").innerHTML,
   submit: "updateRecipe();",
   ingredients: {
     ingredient1: document.getElementsByName("ingredients")[0].innerHTML,
     ingredient2: document.getElementsByName("ingredients")[1].innerHTML,
     ingredient3: document.getElementsByName("ingredients")[2].innerHTML,
     ingredient4: document.getElementsByName("ingredients")[3].innerHTML,
    ingredient5: document.getElementsByName("ingredients")[4].innerHTML
    }  
   }
     var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
     var result = template(recipe);
     document.getElementById("main").innerHTML = result;
 
 }


 function updateRecipe(){
    var recipe = {
   name: document.getElementById("name").value,
   description: document.getElementById("description").value,
   ingredients: {
     ingredient1: document.getElementsByName("ingredients")[0].value,
     ingredient2: document.getElementsByName("ingredients")[1].value,
     ingredient3: document.getElementsByName("ingredients")[2].value,
     ingredient4: document.getElementsByName("ingredients")[3].value,
     ingredient5: document.getElementsByName("ingredients")[4].value
     }  
   }
     var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
   var result = template(recipe);
   document.getElementById("main").innerHTML = result;
}

