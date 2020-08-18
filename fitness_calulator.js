console.log("can u c me")

$(document).on("click", "#submitButton", function(){
   var height =  $("#enterHeight").val();
   
});

// created variables for user to enter data to calculate daily calorie requirements
var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var height = document.querySelector('.height')
var age = document.querySelector('.age')
var gender = document.querySelector('.gender')
var weigth = document.querySelector('.weight')
// Brad adding variables for Healthy Recipes API:

// use may select drink choices
var drinkChoices = ["beer 12 oz", "wine 5oz", "Spirits 1.5oz"];
var drinkCaloriesPerServing = ["132", "123", "100"]

// user enters number of drinks consumed per week according to choices
var drinksPerWeek = prompt("how many drinks to you consume in a week")

// number of drinks entered is multiplied by the appropiate calorie value

var exerciseChoices = ["running", "swimmimg", "walking", "HIIT" ,"yoga" ,"stength training", "zumba"]

// JS code for Fitness Calculator API
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://fitness-calculator.p.rapidapi.com/dailycalory?heigth=180&age=25&gender=male&weigth=70",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
		"x-rapidapi-key": "0fd6027417msh0e87a8b18391847p1ad365jsn08a6f4226710"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});


// Brad adding JS for Healthy Recipes API:
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?targetCalories=2000&timeFrame=day",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "72625e52a9msha06ed784ebb8fe6p1c3b8ejsnd07a4dfa968e"
	}
}
$.ajax(settings).done(function (response) {
	console.log(response);
});

