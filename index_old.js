//index.js from example
function init() {
	recipe = {
	  description: 'yummy chicken noodle soup',
	  ingredients: [
	    {quantity: "1 cup", name: 'chicken'},
	    {quantity: "3 nanoliters", name: 'stock'},
	    {quantity: "12", name: 'noodles'}
	  ]
	}

	template = Handlebars.compile(document.getElementById("my-template").innerHTML);
	var html = template(recipe);
	document.getElementsByTagName("main")[0].innerHTML += html;

	Handlebars.registerPartial('namePartial', document.getElementById("partial-template").innerHTML);

	renderMain();
}

function renderMain() {
  var template = Handlebars.compile(document.getElementById("main-template").innerHTML);
  var html = template({name: 'Gordon Ramsay'});
 	document.getElementsByTagName("main")[0].innerHTML += html;
}





document.addEventListener("DOMContentLoaded", function(event) {
  init()
})