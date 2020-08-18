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

// use may select drink choices
var drinkChoices = ["beer 12 oz", "wine 5oz", "Spirits 1.5oz"];
var drinkCaloriesPerServing = ["132", "123", "100"]

// user enters number of drinks consumed per week according to choices
var drinksPerWeek = prompt("how many drinks to you consume in a week")

// number of drinks entered is multiplied by the appropiate calorie value

var exerciseChoices = ["running", "swimmimg", "walking", "HIIT" ,"yoga" ,"stength training", "zumba"]


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

